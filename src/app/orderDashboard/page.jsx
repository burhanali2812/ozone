"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Toaster, toast } from "react-hot-toast";

export default function OrderDashboard() {
  const router = useRouter();
  const [orders, setOrders] = useState([]);
  const [filterStatus, setFilterStatus] = useState("all");
  const [filterPayment, setFilterPayment] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [userName, setUserName] = useState("");
  const [isLoadingAll, setIsLoadingAll] = useState(false);
  const [isLoadingDeleted, setIsLoadingDeleted] = useState(false);
  const [modalData, setModalData] = useState({
    paymentStatus: "",
    remainingAmount: 0,
    paidAmount: 0,
    status: "",
    shopName: "",
    shopAddress: "",
    shopContact: "",
    orderItems: [],
    productionCosts: [],
    deliveryCharges: 0,
  });

  const getOrders = async (action) => {
    if (action === "all") {
      setIsLoadingAll(true);
    } else if (action === "deleted") {
      setIsLoadingDeleted(true);
    }

    try {
      const res = await axios.get(`/api/orders?action=${action}`);
      if (res.data.success) {
        setOrders(res.data.data);
        console.log("Fetched Orders:", res.data.data);
      } else {
        setOrders([]);
      }
    } catch (error) {
      console.error("Error fetching orders:", error);
      setOrders([]);
    } finally {
      if (action === "all") {
        setIsLoadingAll(false);
      } else if (action === "deleted") {
        setIsLoadingDeleted(false);
      }
    }
  };

  useEffect(() => {
    const user = localStorage.getItem("user2");
    if (!user) {
      router.push("/auth");
      return;
    }
    try {
      const userData = JSON.parse(user);
      setUserName(userData.name || "User");
    } catch (error) {
      console.error("Error parsing user data:", error);
      setUserName("User");
    }
    getOrders("top20");

    // Auto-refresh orders every 20 minutes
    const intervalId = setInterval(
      () => {
        getOrders("top20");
        console.log("Auto-refreshing orders...");
      },
      20 * 60 * 1000,
    ); // 20 minutes in milliseconds

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [showModal]);

  const filteredOrders = orders.filter((order) => {
    const statusMatch = filterStatus === "all" || order.status === filterStatus;
    const paymentMatch =
      filterPayment === "all" || order.paymentStatus === filterPayment;
    const searchMatch =
      searchQuery === "" ||
      order.shopName?.toLowerCase().includes(searchQuery.toLowerCase());
    return statusMatch && paymentMatch && searchMatch;
  });

  // Open modal
  const handleEditOrder = (order) => {
    setSelectedOrder(order);
    setModalData({
      paymentStatus: order.paymentStatus,
      remainingAmount: order.remainingAmount,
      status: order.status,
      shopName: order.shopName || "",
      shopAddress: order.shopAddress || "",
      shopContact: order.shopContact || "",
      orderItems: order.orderItems.map((item) => ({
        ...item,
        quantity: item.quantity,
        price: item.price,
      })),
      productionCosts: order.orderItems.map((item) => ({
        productId: item.product?._id,
        productName: `${item.product?.size} (${item.product?.packingType})`,
        quantity: item.quantity,
        // Automatically use product's production cost if not already set in order
        costPerUnit: order.productionCosts?.[item.product?._id] || item.product?.productionCost || 0,
      })),
      deliveryCharges: order.deliveryCharges || 0,
    });
    setShowModal(true);
  };

  // Update order
  const handleUpdateOrder = async () => {
    // Calculate new total price based on edited items
    const newTotalPrice = modalData.orderItems.reduce((sum, item) => {
      return sum + item.price * item.quantity;
    }, 0);

    // Calculate total production cost
    const totalProductionCost =
      modalData.status === "completed" && modalData.paymentStatus === "paid"
        ? modalData.productionCosts.reduce((sum, item) => {
            return sum + item.costPerUnit * item.quantity;
          }, 0)
        : 0;

    // Calculate net profit
    const netProfit =
      modalData.status === "completed" && modalData.paymentStatus === "paid"
        ? newTotalPrice - totalProductionCost - modalData.deliveryCharges
        : 0;

    const updatePayload = {
      action: "update",
      orderId: selectedOrder._id,
      updateData: {
        orderItems: modalData.orderItems,
        totalPrice: newTotalPrice,
        paymentStatus:
          modalData.remainingAmount === 0 ? "paid" : modalData.paymentStatus,

        paidAmount:
          modalData.paymentStatus === "paid"
            ? newTotalPrice
            : modalData.paymentStatus === "unpaid"
              ? 0
              : modalData.remainingAmount === 0
                ? newTotalPrice
                : selectedOrder.paidAmount !== 0
                  ? selectedOrder.paidAmount +
                    selectedOrder.remainingAmount -
                    modalData.remainingAmount
                  : newTotalPrice - modalData.remainingAmount,

        remainingAmount:
          modalData.paymentStatus === "paid"
            ? 0
            : modalData.paymentStatus === "unpaid"
              ? newTotalPrice
              : modalData.remainingAmount,

        status: modalData.status,
        shopName: modalData.shopName,
        shopAddress: modalData.shopAddress,
        shopContact: modalData.shopContact,
        productionCosts:
          modalData.status === "completed" && modalData.paymentStatus === "paid"
            ? modalData.productionCosts.reduce((acc, item) => {
                acc[item.productId] = item.costPerUnit;
                return acc;
              }, {})
            : undefined,
        deliveryCharges:
          modalData.status === "completed" && modalData.paymentStatus === "paid"
            ? modalData.deliveryCharges
            : undefined,
        totalcost:
          modalData.status === "completed" && modalData.paymentStatus === "paid"
            ? totalProductionCost
            : undefined,
        netProfit:
          modalData.status === "completed" && modalData.paymentStatus === "paid"
            ? netProfit
            : undefined,
      },
    };

    console.log("Update Payload:", updatePayload);

    try {
      //  Update Order
      const response = await axios.put("/api/orders", updatePayload);

      if (!response.data?.success) {
        toast.error("Order update failed");
        return;
      }

      const updatedOrder = response.data.order;

      // Update UI State
      setOrders((prevOrders) =>
        prevOrders?.map((order) =>
          order._id === updatedOrder._id
            ? {
                ...order,
                paymentStatus: updatedOrder.paymentStatus,
                paidAmount: updatedOrder.paidAmount,
                remainingAmount: updatedOrder.remainingAmount,
                status: updatedOrder.status,
                shopName: updatedOrder.shopName,
                shopAddress: updatedOrder.shopAddress,
                shopContact: updatedOrder.shopContact,
              }
            : order,
        ),
      );

      console.log("Order updated on server:", updatedOrder);

      //  Update Stock ONLY when order is completed
      if (
        modalData.status === "completed" &&
        modalData.paymentStatus === "paid"
      ) {
        try {
          // Fetch all products from database
          const productsResponse = await axios.get("/api/product");

          if (!productsResponse.data?.success) {
            toast.error("Failed to fetch products for stock update");
            return;
          }

          const allProducts = productsResponse.data.data;

          for (const item of updatedOrder?.orderItems) {
            // Get product ID from order item
            const productId =
              typeof item.product === "string"
                ? item.product
                : item.product?._id;

            if (!productId) {
              console.error("Product ID not found for item:", item);
              continue;
            }

            // Find product from all products
            const product = allProducts?.find(
              (p) => p._id.toString() === productId.toString(),
            );

            if (!product) {
              console.error("Product not found:", productId);
              continue;
            }

            // Update stock with fetched product details
            await axios.patch("/api/stock", {
              productSize: product.size,
              producyType: product.packingType.toLowerCase(),
              quantityToReduce: item.quantity,
              orderId: updatedOrder._id,
              reason: "Order delivered",
            });
          }
          console.log("Stock updated successfully");
          toast.success("Order completed and stock deducted successfully!");
        } catch (stockError) {
          console.error("Stock update error:", stockError);

          if (stockError.response?.data?.error === "INSUFFICIENT_STOCK") {
            toast.error(
              `Insufficient stock!
Available: ${stockError.response.data.available}
Requested: ${stockError.response.data.requested}`,
            );
            return;
          }

          toast.error(
            stockError.response?.data?.message ||
              "Order updated, but stock update failed",
          );
          return;
        }
      }

      // Receipt Status
      let finalStatus = "pending";
      if (updatedOrder.status === "in-transit") {
        finalStatus = "order-in-transit";
      } else if (updatedOrder.status === "completed") {
        finalStatus = "order-delivered";
      }

      localStorage.setItem("receiptType", finalStatus);
      localStorage.setItem("currentOrder", JSON.stringify(updatedOrder));

      toast.success("Order updated successfully!");
      setShowModal(false);
      router.push("/receipt");
    } catch (error) {
      console.error("Update order error:", error);

      // Backend error
      if (error.response) {
        const { data } = error.response;
        toast.error(data?.message || "Failed to update order");
        return;
      }

      // Network error
      if (error.request) {
        toast.error("Server not responding. Please try again later.");
        return;
      }

      toast.error("Unexpected error occurred");
    }
  };

  // Delete order
  const handleDeleteOrder = async () => {
    try {
      const response = await axios.put("/api/orders", {
        action: "delete",
        orderId: selectedOrder._id,
      });

      if (response.data.success) {
        // Remove from UI
        setOrders(orders.filter((order) => order._id !== selectedOrder._id));

        toast.success("Order marked as deleted!");
        setShowDeleteConfirm(false);
        setShowModal(false);
      }
    } catch (error) {
      toast.error("Failed to delete order.");
      console.error("Delete error:", error);
    }
  };

  // Get status badge color
  const getStatusColor = (status) => {
    switch (status) {
      case "pending":
        return "bg-yellow-100 text-yellow-700";
      case "in-transit":
        return "bg-blue-100 text-blue-700";
      case "completed":
        return "bg-green-100 text-green-700";
      case "cancelled":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const getPaymentColor = (status) => {
    switch (status) {
      case "paid":
        return "bg-green-100 text-green-700";
      case "partially-paid":
        return "bg-yellow-100 text-yellow-700";
      case "unpaid":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 py-12">
      <Toaster />
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="mb-8 flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Left - Menu Button & Heading */}
          <div className="flex items-center gap-4">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">
                Order Dashboard
              </h1>
              <p className="text-gray-600">Manage all your orders</p>
            </div>
          </div>
        </div>

        {/* Filter Section */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          {/* Search Bar */}
          <div className="mb-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search by shop name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 pl-12 rounded-lg border border-gray-300 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all"
              />
              <svg
                className="w-5 h-5 absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              )}
            </div>
          </div>

          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            {/* Filter Counts - Left side on desktop, center on mobile */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              <div className="px-4 py-2 bg-gray-100 rounded-full">
                <span className="text-sm font-medium text-gray-700">
                  Total: {orders.length}
                </span>
              </div>
              <div className="px-4 py-2 bg-blue-100 rounded-full">
                <span className="text-sm font-medium text-blue-700">
                  Filtered: {filteredOrders.length}
                </span>
              </div>
            </div>

            {/* Filter Dropdown - Center on mobile, right on desktop */}
            <div className="relative w-full lg:w-auto flex justify-center lg:justify-end">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium shadow-lg flex items-center gap-2 w-full lg:w-64 justify-center"
              >
                Filters
                <span
                  className={`transform transition-transform ${
                    showFilters ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </button>

              {/* Dropdown Menu */}
              {showFilters && (
                <div className="absolute top-full mt-2 right-0 lg:right-0 bg-white rounded-xl shadow-2xl p-6 z-50 w-full lg:w-96 max-h-80 overflow-y-auto">
                  {/* Order Status Filters */}
                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-gray-900 mb-3">
                      Order Status
                    </h3>
                    <div className="space-y-2">
                      <button
                        onClick={() => {
                          setFilterStatus("all");
                          setShowFilters(false);
                        }}
                        className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                          filterStatus === "all"
                            ? "bg-blue-600 text-white"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                      >
                        All Orders ({orders.length})
                      </button>
                      <button
                        onClick={() => {
                          setFilterStatus("pending");
                          setShowFilters(false);
                        }}
                        className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                          filterStatus === "pending"
                            ? "bg-yellow-600 text-white"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                      >
                        Pending (
                        {orders.filter((o) => o.status === "pending").length})
                      </button>
                      <button
                        onClick={() => {
                          setFilterStatus("in-transit");
                          setShowFilters(false);
                        }}
                        className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                          filterStatus === "in-transit"
                            ? "bg-blue-600 text-white"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                      >
                        In Transit (
                        {orders.filter((o) => o.status === "in-transit").length}
                        )
                      </button>
                      <button
                        onClick={() => {
                          setFilterStatus("completed");
                          setShowFilters(false);
                        }}
                        className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                          filterStatus === "completed"
                            ? "bg-green-600 text-white"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                      >
                        Completed (
                        {orders.filter((o) => o.status === "completed").length})
                      </button>
                      <button
                        onClick={() => {
                          setFilterStatus("cancelled");
                          setShowFilters(false);
                        }}
                        className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                          filterStatus === "cancelled"
                            ? "bg-red-600 text-white"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                      >
                        Cancelled (
                        {orders.filter((o) => o.status === "cancelled").length})
                      </button>
                    </div>
                  </div>

                  {/* Payment Status Filters */}
                  <div className="border-t pt-4">
                    <h3 className="text-sm font-semibold text-gray-900 mb-3">
                      Payment Status
                    </h3>
                    <div className="space-y-2">
                      <button
                        onClick={() => {
                          setFilterPayment("all");
                          setShowFilters(false);
                        }}
                        className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                          filterPayment === "all"
                            ? "bg-blue-600 text-white"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                      >
                        All Payments
                      </button>
                      <button
                        onClick={() => {
                          setFilterPayment("paid");
                          setShowFilters(false);
                        }}
                        className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                          filterPayment === "paid"
                            ? "bg-green-600 text-white"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                      >
                        Paid (
                        {
                          orders.filter((o) => o.paymentStatus === "paid")
                            .length
                        }
                        )
                      </button>
                      <button
                        onClick={() => {
                          setFilterPayment("partially-paid");
                          setShowFilters(false);
                        }}
                        className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                          filterPayment === "partially-paid"
                            ? "bg-yellow-600 text-white"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                      >
                        Partially Paid (
                        {
                          orders.filter(
                            (o) => o.paymentStatus === "partially-paid",
                          ).length
                        }
                        )
                      </button>
                      <button
                        onClick={() => {
                          setFilterPayment("unpaid");
                          setShowFilters(false);
                        }}
                        className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                          filterPayment === "unpaid"
                            ? "bg-red-600 text-white"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                      >
                        Unpaid (
                        {
                          orders.filter((o) => o.paymentStatus === "unpaid")
                            .length
                        }
                        )
                      </button>
                    </div>
                  </div>

                  {/* Reset Filters */}
                  <button
                    onClick={() => {
                      setFilterStatus("all");
                      setFilterPayment("all");
                      setShowFilters(false);
                    }}
                    className="w-full mt-4 bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors font-medium"
                  >
                    Reset All Filters
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Active Filters Display */}
          {(filterStatus !== "all" ||
            filterPayment !== "all" ||
            searchQuery !== "") && (
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="text-sm text-gray-600">Active Filters:</span>
              {filterStatus !== "all" && (
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium flex items-center gap-2">
                  Status: {filterStatus}
                  <button
                    onClick={() => setFilterStatus("all")}
                    className="hover:text-blue-900"
                  >
                    ×
                  </button>
                </span>
              )}
              {filterPayment !== "all" && (
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium flex items-center gap-2">
                  Payment: {filterPayment}
                  <button
                    onClick={() => setFilterPayment("all")}
                    className="hover:text-green-900"
                  >
                    ×
                  </button>
                </span>
              )}
              {searchQuery !== "" && (
                <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium flex items-center gap-2">
                  Search: "{searchQuery}"
                  <button
                    onClick={() => setSearchQuery("")}
                    className="hover:text-purple-900"
                  >
                    ×
                  </button>
                </span>
              )}
            </div>
          )}
        </div>

        {/* Load Order Buttons */}
        <div className="mb-6 flex flex-col sm:flex-row gap-3 sm:gap-4">
          <button
            onClick={() => getOrders("all")}
            disabled={isLoadingAll}
            className="bg-blue-600 text-white px-4 sm:px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium shadow-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed w-full sm:w-auto"
          >
            {isLoadingAll ? (
              <>
                <svg
                  className="animate-spin h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                <span className="hidden sm:inline">Loading...</span>
              </>
            ) : (
              <>
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 10h16M4 14h16M4 18h16"
                  />
                </svg>
                <span className="text-sm sm:text-base">Load All Orders</span>
              </>
            )}
          </button>
          <button
            onClick={() => getOrders("deleted")}
            disabled={isLoadingDeleted}
            className="bg-red-600 text-white px-4 sm:px-6 py-3 rounded-lg hover:bg-red-700 transition-colors font-medium shadow-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed w-full sm:w-auto"
          >
            {isLoadingDeleted ? (
              <>
                <svg
                  className="animate-spin h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                <span className="hidden sm:inline">Loading...</span>
              </>
            ) : (
              <>
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
                <span className="text-sm sm:text-base">
                  Load Deleted Orders
                </span>
              </>
            )}
          </button>
        </div>

        {/* Orders Table */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                    Order ID
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                    Shop Details
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                    Items(pet)
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                    Total Amount
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                    Profit
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                    Payment
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                    Status
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                    Date
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredOrders?.map((order, index) => (
                  <tr
                    key={index}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    <td className="px-6 py-4">
                      <span className="font-medium text-gray-900">
                        {"ORD" + String(index + 1).padStart(3, "0")}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div>
                        <p className="font-medium text-gray-900">
                          {order.shopName}
                        </p>
                        <p className="text-sm text-gray-500">
                          {order.shopAddress}
                        </p>
                        <p className="text-sm text-gray-500">{order.phone}</p>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm ">
                        {order?.orderItems.map((item, idx) => (
                          <div key={idx} className="text-gray-700 ">
                            {item.product?.size} ({item.product?.packingType}) ×{" "}
                            {item.quantity}
                          </div>
                        ))}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="font-semibold text-gray-900">
                        Rs. {order.totalPrice}/-
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      {order.status === "completed" && order.paymentStatus === "paid" && order.netProfit !== undefined ? (
                        <span className={`font-semibold ${order.netProfit >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                          Rs. {order.netProfit.toFixed(2)}
                        </span>
                      ) : (
                        <span className="text-gray-400 text-sm">-</span>
                      )}
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${getPaymentColor(
                          order.paymentStatus,
                        )}`}
                      >
                        {order.paymentStatus === "paid" && "Paid"}
                        {order.paymentStatus === "partially-paid" && "Partial"}
                        {order.paymentStatus === "unpaid" && "Unpaid"}
                      </span>
                      {order.paymentStatus === "partially-paid" && (
                        <>
                          <p className="text-xs text-gray-500 mt-1">
                            Paid: Rs. {order.paidAmount}/-
                          </p>
                          <p className="text-xs text-gray-500 mt-1">
                            Remaining: Rs. {order.remainingAmount}/-
                          </p>
                        </>
                      )}
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                          order.status,
                        )}`}
                      >
                        {order.status.charAt(0).toUpperCase() +
                          order.status.slice(1).replace("-", " ")}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {new Date(order.createdAt).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => handleEditOrder(order)}
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                      >
                        Manage
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredOrders.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No orders found</p>
            </div>
          )}
        </div>

        {/* Total Profit Summary */}
        {filteredOrders.length > 0 && (
          <div className="mt-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl shadow-lg p-6 border-2 border-green-200">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white rounded-xl p-4 shadow">
                <p className="text-sm text-gray-600 mb-1">Total Orders</p>
                <p className="text-2xl font-bold text-gray-900">
                  {filteredOrders.length}
                </p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow">
                <p className="text-sm text-gray-600 mb-1">Completed & Paid</p>
                <p className="text-2xl font-bold text-blue-600">
                  {filteredOrders.filter(o => o.status === 'completed' && o.paymentStatus === 'paid').length}
                </p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow">
                <p className="text-sm text-gray-600 mb-1">Total Profit</p>
                <p className="text-2xl font-bold text-green-600">
                  Rs. {filteredOrders
                    .filter(o => o.status === 'completed' && o.paymentStatus === 'paid' && o.netProfit !== undefined)
                    .reduce((sum, o) => sum + o.netProfit, 0)
                    .toFixed(2)}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Modal */}
      {showModal && selectedOrder && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={() => setShowModal(false)}
        >
          {/* Modal Box */}
          <div
            className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl overflow-hidden flex flex-col"
            style={{ maxHeight: "600px" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header (Fixed) */}
            <div className="p-6 border-b flex justify-between items-center flex-shrink-0">
              <h2 className="text-2xl font-bold text-gray-900">
                Manage Order - {selectedOrder.id}
              </h2>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                ×
              </button>
            </div>

            {/* Scrollable Content */}
            <div
              className="flex-1 overflow-y-auto p-6"
              style={{ minHeight: 0 }}
            >
              {/* Shop Details - Editable */}
              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 mb-3">
                  Shop Details
                </h3>
                <div className="space-y-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Shop Name
                    </label>
                    <input
                      type="text"
                      value={modalData.shopName}
                      onChange={(e) =>
                        setModalData({ ...modalData, shopName: e.target.value })
                      }
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-blue-600 focus:outline-none"
                      placeholder="Enter shop name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Shop Address
                    </label>
                    <input
                      type="text"
                      value={modalData.shopAddress}
                      onChange={(e) =>
                        setModalData({
                          ...modalData,
                          shopAddress: e.target.value,
                        })
                      }
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-blue-600 focus:outline-none"
                      placeholder="Enter shop address"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Shop Contact
                    </label>
                    <input
                      type="text"
                      value={modalData.shopContact}
                      onChange={(e) =>
                        setModalData({
                          ...modalData,
                          shopContact: e.target.value,
                        })
                      }
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-blue-600 focus:outline-none"
                      placeholder="Enter shop contact"
                    />
                  </div>
                </div>
              </div>

              {/* Order Details */}
              <div className="mb-6 p-4 bg-gray-50 rounded-xl">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Order Items (Editable)
                </h3>

                <div className="mt-3 space-y-3">
                  {modalData.orderItems.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3 bg-white rounded-lg border border-gray-200"
                    >
                      <p className="text-sm font-medium text-gray-700 mb-2">
                        {item.product?.size} ({item.product?.packingType},{" "}
                        {item.product?.waterQuality},{" "}
                        {item.product?.bottleQuality})
                      </p>
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block text-xs font-medium text-gray-600 mb-1">
                            Quantity
                          </label>
                          <input
                            type="number"
                            min="1"
                            value={item.quantity}
                            onChange={(e) => {
                              const newItems = [...modalData.orderItems];
                              newItems[idx].quantity =
                                parseInt(e.target.value) || 1;
                              setModalData({
                                ...modalData,
                                orderItems: newItems,
                              });
                            }}
                            className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:border-blue-600 focus:outline-none text-sm"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-medium text-gray-600 mb-1">
                            Price (per unit)
                          </label>
                          <input
                            type="number"
                            min="0"
                            value={item.discountedPrice}
                            onChange={(e) => {
                              const newItems = [...modalData.orderItems];
                              newItems[idx].discountedPrice =
                                parseFloat(e.target.value) || 0;
                              setModalData({
                                ...modalData,
                                orderItems: newItems,
                              });
                            }}
                            className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:border-blue-600 focus:outline-none text-sm"
                          />
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 mt-2">
                        Subtotal: Rs. {item.discountedPrice * item.quantity}/-
                      </p>
                    </div>
                  ))}
                  <div className="pt-2 border-t border-gray-300">
                    <p className="text-lg font-bold text-gray-900">
                      Total: Rs.{" "}
                      {modalData.orderItems.reduce(
                        (sum, item) => sum + item.discountedPrice * item.quantity,
                        0,
                      )}
                      /-
                    </p>
                  </div>
                </div>
              </div>

              {/* Payment Status */}
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">
                  Payment Status
                </label>
                <select
                  value={modalData.paymentStatus}
                  onChange={(e) => {
                    const newTotalPrice = modalData.orderItems.reduce(
                      (sum, item) => sum + item.discountedPrice * item.quantity,
                      0,
                    );
                    setModalData({
                      ...modalData,
                      paymentStatus: e.target.value,
                      remainingAmount:
                        e.target.value === "paid"
                          ? 0
                          : e.target.value === "unpaid"
                            ? newTotalPrice
                            : modalData.remainingAmount,
                    });
                  }}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-600 focus:outline-none"
                >
                  <option value="unpaid">Unpaid</option>
                  <option value="partially-paid">Partially Paid</option>
                  <option value="paid">Paid</option>
                </select>
              </div>

              {/* Partial Payment */}
              {modalData.paymentStatus === "partially-paid" && (
                <div className="mb-6">
                  <label className="block text-gray-700 font-medium mb-2">
                    Remaining Amount
                  </label>
                  <input
                    type="number"
                    min="0"
                    max={modalData.orderItems.reduce(
                      (sum, item) => sum + item.price * item.quantity,
                      0,
                    )}
                    value={modalData.remainingAmount}
                    onChange={(e) =>
                      setModalData({
                        ...modalData,
                        remainingAmount: parseFloat(e.target.value) || 0,
                      })
                    }
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-600 focus:outline-none"
                    placeholder="Enter remaining amount"
                  />
                  <p className="text-sm text-gray-600 mt-2">
                    Paid Amount: Rs.{" "}
                    {modalData.orderItems.reduce(
                      (sum, item) => sum + item.discountedPrice * item.quantity,
                      0,
                    ) - modalData.remainingAmount}
                    /-
                  </p>
                </div>
              )}

              {/* Order Status */}
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">
                  Order Status
                </label>
                <select
                  value={modalData.status}
                  onChange={(e) =>
                    setModalData({ ...modalData, status: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-600 focus:outline-none"
                >
                  <option value="pending">Pending</option>
                  <option value="in-transit">In Transit</option>
                  <option value="completed">Completed</option>
                  <option value="cancelled">Cancelled</option>
                </select>
              </div>

              {/* Production Cost & Profit Section */}
              {modalData.status === "completed" &&
                modalData.paymentStatus === "paid" && (
                  <div className="mb-6 p-4 bg-green-50 rounded-xl border-2 border-green-200">
                    <h3 className="font-semibold text-gray-900 mb-4 text-lg">
                      📊 Production Cost & Profit Analysis
                    </h3>

                    {/* Production Costs per Item */}
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        Production Cost (per item)
                      </label>
                      <div className="space-y-3">
                        {modalData.productionCosts.map((item, idx) => (
                          <div
                            key={idx}
                            className="p-3 bg-white rounded-lg border border-gray-200"
                          >
                            <p className="text-sm font-medium text-gray-700 mb-2">
                              {item.productName} × {item.quantity}
                            </p>
                            <div>
                              <label className="block text-xs font-medium text-gray-600 mb-1">
                                Cost per unit (Rs.)
                              </label>
                              <input
                                type="number"
                                min="0"
                                step="0.01"
                                value={item.costPerUnit}
                                onChange={(e) => {
                                  const newCosts = [
                                    ...modalData.productionCosts,
                                  ];
                                  newCosts[idx].costPerUnit =
                                    parseFloat(e.target.value) || 0;
                                  setModalData({
                                    ...modalData,
                                    productionCosts: newCosts,
                                  });
                                }}
                                className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:border-green-600 focus:outline-none text-sm"
                                placeholder="Enter production cost per unit"
                              />
                              <p className="text-xs text-gray-600 mt-1">
                                Total Cost: Rs.{" "}
                                {(item.costPerUnit * item.quantity).toFixed(2)}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Delivery Charges */}
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Delivery Charges
                      </label>
                      <input
                        type="number"
                        min="0"
                        step="0.01"
                        value={modalData.deliveryCharges}
                        onChange={(e) =>
                          setModalData({
                            ...modalData,
                            deliveryCharges: parseFloat(e.target.value) || 0,
                          })
                        }
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-green-600 focus:outline-none"
                        placeholder="Enter delivery charges"
                      />
                    </div>

                    {/* Profit Calculation */}
                    <div className="mt-4 p-4 bg-gradient-to-r from-green-100 to-emerald-100 rounded-lg border-2 border-green-300">
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-700">Total Revenue:</span>
                          <span className="font-semibold text-gray-900">
                            Rs.{" "}
                            {modalData.orderItems
                              .reduce(
                                (sum, item) => sum + item.discountedPrice * item.quantity,
                                0,
                              )
                              .toFixed(2)}
                          </span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-700">
                            Total Production Cost:
                          </span>
                          <span className="font-semibold text-red-600">
                            - Rs.{" "}
                            {modalData.productionCosts
                              .reduce(
                                (sum, item) =>
                                  sum + item.costPerUnit * item.quantity,
                                0,
                              )
                              .toFixed(2)}
                          </span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-700">
                            Delivery Charges:
                          </span>
                          <span className="font-semibold text-red-600">
                            - Rs. {modalData.deliveryCharges.toFixed(2)}
                          </span>
                        </div>
                        <div className="border-t-2 border-green-400 pt-2 mt-2">
                          <div className="flex justify-between">
                            <span className="text-lg font-bold text-gray-900">
                              Net Profit:
                            </span>
                            <span
                              className={`text-lg font-bold ${
                                modalData.orderItems.reduce(
                                  (sum, item) =>
                                    sum + item.discountedPrice * item.quantity,
                                  0,
                                ) -
                                  modalData.productionCosts.reduce(
                                    (sum, item) =>
                                      sum + item.costPerUnit * item.quantity,
                                    0,
                                  ) -
                                  modalData.deliveryCharges >=
                                0
                                  ? "text-green-700"
                                  : "text-red-700"
                              }`}
                            >
                              Rs.{" "}
                              {(
                                modalData.orderItems.reduce(
                                  (sum, item) =>
                                    sum + item.discountedPrice * item.quantity,
                                  0,
                                ) -
                                modalData.productionCosts.reduce(
                                  (sum, item) =>
                                    sum + item.costPerUnit * item.quantity,
                                  0,
                                ) -
                                modalData.deliveryCharges
                              ).toFixed(2)}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
            </div>

            {/* Footer (Fixed) */}
            <div className="p-6 border-t flex flex-col sm:flex-row gap-4 flex-shrink-0">
              <button
                onClick={handleUpdateOrder}
                className="flex-1 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 font-medium"
              >
                Update Order
              </button>

              <button
                onClick={() => {
                  setShowModal(false);
                  setShowDeleteConfirm(true);
                }}
                className="flex-1 bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 font-medium"
              >
                Delete Order
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {showDeleteConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-[60] p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8">
            <div className="text-center mb-6">
              <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-8 h-8 text-red-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Delete Order?
              </h3>
              <p className="text-gray-600">
                Are you sure you want to delete this order? This action cannot
                be undone.
              </p>
            </div>

            <div className="flex gap-4">
              <button
                onClick={() => setShowDeleteConfirm(false)}
                className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-lg hover:bg-gray-300 transition-colors font-medium"
              >
                Cancel
              </button>
              <button
                onClick={handleDeleteOrder}
                className="flex-1 bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition-colors font-medium"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

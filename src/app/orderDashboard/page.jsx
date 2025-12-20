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
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [userName, setUserName] = useState("");
  const [modalData, setModalData] = useState({
    paymentStatus: "",
    remainingAmount: 0,
    paidAmount: 0,
    status: "",
  });

  const getOrders = async () => {
    try {
      const res = await axios.get("/api/orders?action=active");
      if (res.data.success) {
        setOrders(res.data.data);
        console.log("Fetched Orders:", res.data.data);
      } else {
        setOrders([]);
      }
    } catch (error) {
      console.error("Error fetching orders:", error);
      setOrders([]);
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
    getOrders();

    // Auto-refresh orders every 20 minutes
    const intervalId = setInterval(() => {
      getOrders();
      console.log("Auto-refreshing orders...");
    }, 20 * 60 * 1000); // 20 minutes in milliseconds

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  const filteredOrders = orders.filter((order) => {
    const statusMatch = filterStatus === "all" || order.status === filterStatus;
    const paymentMatch =
      filterPayment === "all" || order.paymentStatus === filterPayment;
    return statusMatch && paymentMatch;
  });

  // Open modal
  const handleEditOrder = (order) => {
    setSelectedOrder(order);
    setModalData({
      paymentStatus: order.paymentStatus,
      remainingAmount: order.remainingAmount,
      status: order.status,
    });
    setShowModal(true);
  };

  // Update order
  const handleUpdateOrder = async () => {
    const updatePayload = {
      action: "update",
      orderId: selectedOrder._id,
      updateData: {
        paymentStatus:
          selectedOrder.remainingAmount - modalData.remainingAmount === 0
            ? "paid"
            : modalData.paymentStatus,
        paidAmount:
          modalData.paymentStatus === "paid"
            ? selectedOrder.totalPrice
            : selectedOrder.paidAmount + modalData.remainingAmount,
        remainingAmount:
          modalData.paymentStatus === "paid"
            ? 0
            : selectedOrder.remainingAmount - modalData.remainingAmount,
        status: modalData.status,
      },
    };
    console.log("Update Payload:", updatePayload);
    try {
      const response = await axios.put("/api/orders", updatePayload);
      if (response.data.success) {
        setOrders(
          orders?.map((order) =>
            order._id === selectedOrder._id
              ? {
                  ...order,
                  paymentStatus: updatePayload.updateData.paymentStatus,
                  paidAmount: updatePayload.updateData.paidAmount,
                  remainingAmount: updatePayload.updateData.remainingAmount,
                  status: updatePayload.updateData.status,
                }
              : order
          )
        );
        console.log("Order updated on server:", response.data.order);
        const getUpdatedOrder = response.data.order;
        let finalStatus;
        if (getUpdatedOrder.status === "in-transit") {
          finalStatus = "order-in-transit";
        } else if (getUpdatedOrder.status === "completed") {
          finalStatus = "order-delivered";
        } else {
          finalStatus = "pending";
        }
        localStorage.setItem("receiptType", finalStatus);
        localStorage.setItem("currentOrder", JSON.stringify(getUpdatedOrder));
        toast.success("Order updated successfully!");
        setShowModal(false);
        router.push("/receipt");
      }
    } catch (error) {
      toast.error("Failed to update order. Please try again.");
      console.error("Error updating order:", error);
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
                            (o) => o.paymentStatus === "partially-paid"
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
          {(filterStatus !== "all" || filterPayment !== "all") && (
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
            </div>
          )}
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
                            {item.size} × {item.quantity}
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
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${getPaymentColor(
                          order.paymentStatus
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
                          order.status
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
      </div>

      {/* Modal */}
      {showModal && selectedOrder && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          {/* Modal Box */}
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl h-[350px] flex flex-col">
            {/* Header (Fixed) */}
            <div className="p-6 border-b flex justify-between items-center">
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
            <div className="flex-1 overflow-y-auto p-6">
              {/* Order Details */}
              <div className="mb-6 p-4 bg-gray-50 rounded-xl">
                <h3 className="font-semibold text-gray-900 mb-2">
                  {selectedOrder.shopName}
                </h3>
                <p className="text-sm text-gray-600">
                  {selectedOrder.shopAddress}
                </p>
                <p className="text-sm text-gray-600">
                  {selectedOrder.shopContact}
                </p>

                <div className="mt-3">
                  <p className="text-sm font-medium text-gray-700">Items:</p>
                  {selectedOrder.orderItems.map((item, idx) => (
                    <p key={idx} className="text-sm text-gray-600">
                      {item.size} × {item.quantity} = Rs.{" "}
                      {item.price * item.quantity}/-
                    </p>
                  ))}
                  <p className="text-lg font-bold text-gray-900 mt-2">
                    Total: Rs. {selectedOrder.totalPrice}/-
                  </p>
                </div>
              </div>

              {/* Payment Status */}
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">
                  Payment Status
                </label>
                <select
                  value={modalData.paymentStatus}
                  onChange={(e) =>
                    setModalData({
                      ...modalData,
                      paymentStatus: e.target.value,
                      remainingAmount:
                        e.target.value === "paid"
                          ? 0
                          : e.target.value === "unpaid"
                          ? selectedOrder.totalPrice
                          : modalData.remainingAmount,
                    })
                  }
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
                    max={selectedOrder.totalPrice}
                    value={modalData.remainingAmount}
                    onChange={(e) =>
                      setModalData({
                        ...modalData,
                        remainingAmount: Math.min(
                          parseFloat(e.target.value) || 0,
                          selectedOrder.totalPrice
                        ),
                      })
                    }
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-600 focus:outline-none"
                  />
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
            </div>

            {/* Footer (Fixed) */}
            <div className="p-6 border-t flex flex-col sm:flex-row gap-4">
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

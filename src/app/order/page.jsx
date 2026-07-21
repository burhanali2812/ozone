"use client";
import axios from "axios";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { toast, Toaster } from "react-hot-toast";

export default function Order() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [products, setProducts] = useState([]);
  const [loadingProducts, setLoadingProducts] = useState(true);
  const [formData, setFormData] = useState({
    shopName: "",
    shopAddress: "",
    whatsappContact: "",
  });

  const [orders, setOrders] = useState([]);
  const [currentOrder, setCurrentOrder] = useState({
    productId: "",
    productDetails: null,
    quantity: "",
    discountedPrice: "",
  });
  const [deliveryStatus, setDeliveryStatus] = useState("pending");

  const [paymentStatus, setPaymentStatus] = useState("unpaid");
  const [paidAmount, setPaidAmount] = useState(0);

  // Fetch products from database
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/api/product");
        const data = await response.json();
        if (data.success && data.products) {
          setProducts(data.products);
          // Set first product as default
          if (data.products.length > 0) {
            setCurrentOrder({
              productId: data.products[0]._id,
              productDetails: data.products[0],
              quantity: "",
              discountedPrice: "",
            });
          }
        }
      } catch (error) {
        console.error("Error fetching products:", error);
        toast.error("Failed to load products");
      } finally {
        setLoadingProducts(false);
      }
    };

    fetchProducts();
  }, []);

  // Check for user in localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem("user2");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddOrder = () => {
    if (!currentOrder.productDetails) {
      toast.error("Please select a product");
      return;
    }

    const qty = parseInt(currentOrder.quantity);
    const actualPrice = currentOrder.productDetails.price;
    const discountedPrice =
      parseFloat(currentOrder.discountedPrice) || actualPrice;

    if (qty > 0 && discountedPrice > 0) {
      const existingOrderIndex = orders.findIndex(
        (order) =>
          order.productId === currentOrder.productId &&
          order.discountedPrice === discountedPrice,
      );

      if (existingOrderIndex !== -1) {
        const updatedOrders = [...orders];
        updatedOrders[existingOrderIndex].quantity += qty;
        setOrders(updatedOrders);
      } else {
        setOrders([
          ...orders,
          {
            productId: currentOrder.productId,
            productDetails: currentOrder.productDetails,
            quantity: qty,
            actualPrice: actualPrice,
            discountedPrice: discountedPrice,
          },
        ]);
      }

      // Reset to first product
      if (products.length > 0) {
        setCurrentOrder({
          productId: products[0]._id,
          productDetails: products[0],
          quantity: "",
          discountedPrice: "",
        });
      }
    } else {
      toast.error("Please enter a valid quantity and price");
    }
  };

  const handleRemoveOrder = (index) => {
    setOrders(orders.filter((_, i) => i !== index));
  };

  const handleUpdateQuantity = (index, newQuantity) => {
    const updatedOrders = [...orders];
    updatedOrders[index].quantity = newQuantity;
    setOrders(updatedOrders);
  };

  const handleUpdatePrice = (index, newPrice) => {
    const updatedOrders = [...orders];
    const parsedPrice = parseFloat(newPrice);
    updatedOrders[index].discountedPrice =
      parsedPrice >= 0 ? parsedPrice : updatedOrders[index].actualPrice;
    setOrders(updatedOrders);
  };

  const calculateTotal = () => {
    return orders.reduce((total, order) => {
      const qty = parseInt(order.quantity) || 0;
      const actualPrice = order.actualPrice || 0;
      return total + actualPrice * qty;
    }, 0);
  };

  const calculateDiscount = () => {
    return orders.reduce((totalDiscount, order) => {
      const qty = parseInt(order.quantity) || 0;
      const actualPrice = order.actualPrice || 0;
      const discountedPrice = order.discountedPrice || 0;
      const discount = (actualPrice - discountedPrice) * qty;
      return totalDiscount + discount;
    }, 0);
  };

  const calculateGrandTotal = () => {
    return orders.reduce((grandTotal, order) => {
      const qty = parseInt(order.quantity) || 0;
      const discountedPrice = order.discountedPrice || 0;
      return grandTotal + discountedPrice * qty;
    }, 0);
  };

  const calculateRemaining = () => {
    return calculateGrandTotal() - paidAmount;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const totalPrice = calculateTotal();
    const totalDiscount = calculateDiscount();
    const grandTotal = calculateGrandTotal();

    let finalPaymentStatus = paymentStatus;
    let finalPaidAmount = paidAmount;
    let finalRemainingAmount = grandTotal;

    // Calculate remaining amount based on payment status
    if (paymentStatus === "paid") {
      finalPaidAmount = grandTotal;
      finalRemainingAmount = 0;
    } else if (paymentStatus === "partially-paid") {
      finalRemainingAmount = grandTotal - paidAmount;
    } else {
      finalPaidAmount = 0;
      finalRemainingAmount = grandTotal;
    }

    const orderPayload = {
      shopName: formData.shopName,
      shopAddress: formData.shopAddress,
      shopContact: formData.whatsappContact,
      orderItems: orders.map((order) => ({
        product: order.productId,
        quantity: order.quantity,
        price: order.actualPrice,
        discountedPrice: order.discountedPrice,
      })),
      totalPrice: grandTotal,
      totalDiscount: totalDiscount,
      grandTotal: grandTotal,
      paymentStatus: finalPaymentStatus,
      paidAmount: finalPaidAmount,
      remainingAmount: finalRemainingAmount,
      status: deliveryStatus,
    };

    console.log("Order Submitted:", orderPayload);

    try {
      // Create Order
      const res = await axios.post("/api/orders", orderPayload);

      if (!res.data?.message) {
        toast.error("Order creation failed");
        return;
      }

      // Success Handling
      toast.success(res.data.message || "Order placed successfully!");

      localStorage.setItem("receiptType", deliveryStatus === "completed" ? "order-delivered" : "order-placed");
      localStorage.setItem("currentOrder", JSON.stringify(res.data.order));

      setFormData({
        shopName: "",
        shopAddress: "",
        whatsappContact: "",
      });
      setOrders([]);
      setPaymentStatus("unpaid");
      setPaidAmount(0);

      if (user) {
        router.push("/receipt");
      }
    } catch (error) {
      console.error("Order submission error:", error);

      // Backend responded with an error
      if (error.response) {
        toast.error(error.response.data?.message || "Order placement failed");
        return;
      }

      // Server not responding
      if (error.request) {
        toast.error("Server not responding. Please try again later.");
        return;
      }

      // Unknown error
      toast.error("Unexpected error occurred");
    }
  };

  const totalPrice = calculateTotal();
  const totalDiscount = calculateDiscount();
  const grandTotal = calculateGrandTotal();
  const remaining = calculateRemaining();

  // Check if form is valid for submission
  const isFormValid = () => {
    return (
      formData.shopName.trim() !== "" &&
      formData.shopAddress.trim() !== "" &&
      formData.whatsappContact.trim() !== "" &&
      orders.length > 0 &&
      orders.every((order) => {
        const qty = parseInt(order.quantity);
        return qty > 0;
      })
    );
  };

  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 py-6 sm:py-12">
      <Toaster />
      <div className="container mx-auto px-4 sm:px-6">
        {/* Back Button */}
        <div className="mb-4 sm:mb-6">
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors font-medium text-sm sm:text-base"
          >
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <span>Back</span>
          </button>
        </div>

        <div className="text-center mb-6 sm:mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-2">
            Place Your Order
          </h1>
          <p className="text-lg sm:text-xl text-gray-600">
            Ozone Mineral Water® Pvt Ltd
          </p>
          {user && (
            <p className="text-xs sm:text-sm text-gray-500 mt-2">
              Logged in as: {user.name} ({user.role})
            </p>
          )}
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {/* Order Form Section */}
            <div className="lg:col-span-2 space-y-4 sm:space-y-6">
              {/* Shop Details Card */}
              <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl p-4 sm:p-6 lg:p-8">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
                  Shop Details
                </h2>
                <div className="space-y-3 sm:space-y-4">
                  <div>
                    <label className="block text-gray-700 font-medium mb-1.5 sm:mb-2 text-sm sm:text-base">
                      Shop Name *
                    </label>
                    <input
                      type="text"
                      name="shopName"
                      required
                      value={formData.shopName}
                      onChange={handleFormChange}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-gray-300 focus:border-blue-600 focus:outline-none text-sm sm:text-base"
                      placeholder="Enter shop name"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-1.5 sm:mb-2 text-sm sm:text-base">
                      Shop Address *
                    </label>
                    <textarea
                      name="shopAddress"
                      required
                      value={formData.shopAddress}
                      onChange={handleFormChange}
                      rows="3"
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-gray-300 focus:border-blue-600 focus:outline-none resize-none text-sm sm:text-base"
                      placeholder="Enter complete address"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-1.5 sm:mb-2 text-sm sm:text-base">
                      WhatsApp Contact *
                    </label>
                    <input
                      type="tel"
                      name="whatsappContact"
                      required
                      value={formData.whatsappContact}
                      onChange={handleFormChange}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-gray-300 focus:border-blue-600 focus:outline-none text-sm sm:text-base"
                      placeholder="03XX-XXXXXXX"
                    />
                  </div>
                </div>
              </div>

              {/* Add Order Card */}
              <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl p-4 sm:p-6 lg:p-8">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
                  Add Products
                </h2>
                {loadingProducts ? (
                  <div className="flex items-center justify-center py-8">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                  </div>
                ) : (
                  <div className="space-y-3 sm:space-y-0 sm:flex sm:flex-row sm:gap-3 lg:gap-4 mb-4 sm:mb-6">
                    <div className="flex-1">
                      <label className="block text-gray-700 font-medium mb-1.5 sm:mb-2 text-sm sm:text-base">
                        Select Product
                      </label>
                      <select
                        value={currentOrder.productId}
                        onChange={(e) => {
                          const selected = products.find(
                            (p) => p._id === e.target.value,
                          );
                          setCurrentOrder({
                            ...currentOrder,
                            productId: e.target.value,
                            productDetails: selected,
                            discountedPrice: "",
                          });
                        }}
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-gray-300 focus:border-blue-600 focus:outline-none text-sm sm:text-base"
                      >
                        {products.map((product) => (
                          <option key={product._id} value={product._id}>
                            {product.size} - {product.packingType} (
                            {product.waterQuality}, {product.bottleQuality}) -
                            Rs. {product.price}/-
                          </option>
                        ))}
                      </select>
                    </div>

                    {user && (
                      <div className="w-full sm:w-32 md:w-36">
                        <label className="block text-gray-700 font-medium mb-1.5 sm:mb-2 text-sm sm:text-base">
                          Discounted Price
                        </label>
                        <input
                          type="number"
                          min="0"
                          value={currentOrder.discountedPrice}
                          onChange={(e) =>
                            setCurrentOrder({
                              ...currentOrder,
                              discountedPrice: e.target.value,
                            })
                          }
                          placeholder={
                            currentOrder.productDetails?.price || "0"
                          }
                          className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-gray-300 focus:border-blue-600 focus:outline-none text-sm sm:text-base"
                        />
                      </div>
                    )}

                    <div className="w-full sm:w-28 md:w-32">
                      <label className="block text-gray-700 font-medium mb-1.5 sm:mb-2 text-sm sm:text-base">
                        Quantity
                      </label>
                      <input
                        type="number"
                        min="1"
                        value={currentOrder.quantity}
                        onChange={(e) =>
                          setCurrentOrder({
                            ...currentOrder,
                            quantity: e.target.value,
                          })
                        }
                        placeholder="Enter quantity"
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-gray-300 focus:border-blue-600 focus:outline-none text-sm sm:text-base"
                      />
                    </div>
                    <div className="flex items-end">
                      <button
                        type="button"
                        onClick={handleAddOrder}
                        disabled={loadingProducts || products.length === 0}
                        className="w-full sm:w-auto bg-blue-600 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm sm:text-base disabled:bg-gray-400 disabled:cursor-not-allowed"
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                )}

                {/* Current Orders List */}
                {orders.length > 0 && (
                  <div className="space-y-2 sm:space-y-3">
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900">
                      Cart Items
                    </h3>
                    {orders.map((order, index) => (
                      <div
                        key={index}
                        className="flex flex-col sm:flex-row sm:items-center sm:justify-between bg-gray-50 p-3 sm:p-4 rounded-lg space-y-3 sm:space-y-0"
                      >
                        <div className="flex-1">
                          <p className="font-medium text-gray-900 text-sm sm:text-base">
                            {order.productDetails.size} -{" "}
                            {order.productDetails.packingType}
                          </p>
                          <p className="text-xs text-gray-500">
                            {order.productDetails.waterQuality} |{" "}
                            {order.productDetails.bottleQuality}
                          </p>
                          <p className="text-xs sm:text-sm text-gray-600 mt-1">
                            {order.actualPrice !== order.discountedPrice && (
                              <span className="line-through text-gray-400 mr-2">
                                Rs. {order.actualPrice}/-
                              </span>
                            )}
                            Rs. {order.discountedPrice}/- × {order.quantity} =
                            Rs.
                            {order.discountedPrice * order.quantity}/-
                            {order.actualPrice !== order.discountedPrice && (
                              <span className="text-green-600 ml-2 text-xs">
                                (Save Rs.{" "}
                                {(order.actualPrice - order.discountedPrice) *
                                  order.quantity}
                                )
                              </span>
                            )}
                          </p>
                        </div>
                        <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
                          {user && (
                            <div>
                              <label className="text-xs text-gray-600">
                                Disc. Price
                              </label>
                              <input
                                type="number"
                                min="0"
                                value={order.discountedPrice}
                                onChange={(e) =>
                                  handleUpdatePrice(index, e.target.value)
                                }
                                onBlur={(e) => {
                                  const price = parseFloat(e.target.value);
                                  if (isNaN(price) || price < 0) {
                                    handleUpdatePrice(index, order.actualPrice);
                                  }
                                }}
                                className="w-16 sm:w-20 px-2 sm:px-3 py-1.5 sm:py-2 rounded border border-gray-300 focus:border-blue-600 focus:outline-none text-sm"
                              />
                            </div>
                          )}
                          <div>
                            <label className="text-xs text-gray-600">Qty</label>
                            <input
                              type="number"
                              min="1"
                              value={order.quantity}
                              onChange={(e) =>
                                handleUpdateQuantity(index, e.target.value)
                              }
                              onBlur={(e) => {
                                const qty = parseInt(e.target.value);
                                if (!qty || qty < 1) {
                                  handleUpdateQuantity(index, 1);
                                }
                              }}
                              className="w-16 sm:w-20 px-2 sm:px-3 py-1.5 sm:py-2 rounded border border-gray-300 focus:border-blue-600 focus:outline-none text-sm"
                            />
                          </div>
                          <button
                            type="button"
                            onClick={() => handleRemoveOrder(index)}
                            className="text-red-600 hover:text-red-800 font-medium text-sm"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Payment Details Card - Only show if user is logged in */}
              {user && (
                <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl p-4 sm:p-6 lg:p-8">
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
                    Payment Details
                  </h2>
                  <div className="space-y-3 sm:space-y-4">
                    <div>
                      <label className="block text-gray-700 font-medium mb-1.5 sm:mb-2 text-sm sm:text-base">
                        Payment Status
                      </label>
                      <select
                        value={paymentStatus}
                        onChange={(e) => {
                          setPaymentStatus(e.target.value);
                          if (e.target.value === "paid") {
                            setPaidAmount(grandTotal);
                          } else if (e.target.value === "unpaid") {
                            setPaidAmount(0);
                          }
                        }}
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-gray-300 focus:border-blue-600 focus:outline-none text-sm sm:text-base"
                      >
                        <option value="unpaid">Unpaid</option>
                        <option value="partially-paid">Partially Paid</option>
                        <option value="paid">Paid</option>
                      </select>
                    </div>

                    {paymentStatus === "partially-paid" && (
                      <div>
                        <label className="block text-gray-700 font-medium mb-1.5 sm:mb-2 text-sm sm:text-base">
                          Paid Amount
                        </label>
                        <input
                          type="number"
                          min="0"
                          max={grandTotal}
                          value={paidAmount}
                          onChange={(e) =>
                            setPaidAmount(
                              Math.min(
                                parseFloat(e.target.value) || 0,
                                grandTotal,
                              ),
                            )
                          }
                          className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-gray-300 focus:border-blue-600 focus:outline-none text-sm sm:text-base"
                          placeholder="Enter paid amount"
                        />
                        <p className="text-sm text-red-600 mt-2 font-medium">
                          Remaining: Rs. {remaining}/-
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              )}

               {/* Delvery status Details Card - Only show if user is logged in */}
              {user && (
                <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl p-4 sm:p-6 lg:p-8">
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
                    Delivery Status
                  </h2>
                  <div className="space-y-3 sm:space-y-4">
                    <div>
                      <label className="block text-gray-700 font-medium mb-1.5 sm:mb-2 text-sm sm:text-base">
                        Delivery Status
                      </label>
                      <select
                        value={deliveryStatus}
                        onChange={(e) => {
                          setDeliveryStatus(e.target.value);
                        }}
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-gray-300 focus:border-blue-600 focus:outline-none text-sm sm:text-base"
                      >
                        <option value="pending">Pending</option>
                        <option value="completed">Completed</option>
                      
                      </select>
                    </div>

                  </div>
                </div>
              )}
            </div>

            {/* Order Summary Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl p-4 sm:p-6 lg:p-8 lg:sticky lg:top-24">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
                  Order Summary
                </h2>

                <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                  {orders.length === 0 ? (
                    <p className="text-gray-500 text-center py-6 sm:py-8 text-sm sm:text-base">
                      No items in cart
                    </p>
                  ) : (
                    orders.map((order, index) => (
                      <div
                        key={index}
                        className="flex justify-between text-gray-700 text-xs sm:text-sm"
                      >
                        <span className="flex-1 pr-2">
                          {order.productDetails.size} (
                          {order.productDetails.packingType}) × {order.quantity}
                        </span>
                        <span className="font-medium whitespace-nowrap">
                          Rs. {order.discountedPrice * order.quantity}/-
                        </span>
                      </div>
                    ))
                  )}
                </div>

                <div className="border-t border-gray-200 pt-3 sm:pt-4 space-y-2 sm:space-y-3">
                  <div className="flex justify-between text-sm sm:text-base text-gray-700">
                    <span>Total Price:</span>
                    <span>Rs. {totalPrice}/-</span>
                  </div>
                  {totalDiscount > 0 && (
                    <div className="flex justify-between text-sm sm:text-base text-green-600">
                      <span>Total Discount:</span>
                      <span>- Rs. {totalDiscount.toFixed(2)}/-</span>
                    </div>
                  )}
                  <div className="flex justify-between text-base sm:text-lg font-semibold border-t pt-2">
                    <span>Grand Total:</span>
                    <span className="text-blue-600">
                      Rs. {grandTotal.toFixed(2)}/-
                    </span>
                  </div>

                  {user && paymentStatus !== "unpaid" && (
                    <>
                      <div className="flex justify-between text-green-600 text-sm sm:text-base">
                        <span>Paid:</span>
                        <span>Rs. {paidAmount}/-</span>
                      </div>
                      <div className="flex justify-between text-red-600 font-semibold text-sm sm:text-base">
                        <span>Remaining:</span>
                        <span>Rs. {remaining}/-</span>
                      </div>
                    </>
                  )}

                  <div className="pt-3 sm:pt-4">
                    <div
                      className={`px-3 sm:px-4 py-2 rounded-lg text-center font-medium text-sm sm:text-base ${
                        user && paymentStatus === "paid"
                          ? "bg-green-100 text-green-700"
                          : user && paymentStatus === "partially-paid"
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-red-100 text-red-700"
                      }`}
                    >
                      {user && paymentStatus === "paid" && "Fully Paid"}
                      {user &&
                        paymentStatus === "partially-paid" &&
                        "Partially Paid"}
                      {(!user || paymentStatus === "unpaid") &&
                        "Payment: Unpaid"}
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={!isFormValid()}
                  className={`w-full mt-4 sm:mt-6 py-3 sm:py-4 rounded-lg font-medium transition-all text-sm sm:text-base ${
                    isFormValid()
                      ? "bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg cursor-pointer"
                      : "bg-gray-300 text-gray-500 cursor-not-allowed"
                  }`}
                  title={
                    !isFormValid()
                      ? "Please fill all required fields and add at least one item"
                      : "Click to place order"
                  }
                >
                  {isFormValid()
                    ? "Place Order 🚀"
                    : "Complete Form to Continue"}
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

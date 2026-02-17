"use client";
import React, { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import {
  FaSearch,
  FaBox,
  FaTruck,
  FaCheckCircle,
  FaPhone,
} from "react-icons/fa";
import { MdTrackChanges } from "react-icons/md";
import Image from "next/image";

export default function TrackingPage() {
  const [trackingId, setTrackingId] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [orderData, setOrderData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);

  const statusImages = {
    pending: "/images/order-placed.png", // Dummy - user will upload
    "in-transit": "/images/in-transit.png", // Dummy - user will upload
    completed: "/images/delivered.png", // Dummy - user will upload
  };

  const statusConfig = {
    pending: {
      title: "Order Placed",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      icon: FaBox,
      message: "Your order has been placed successfully and is being prepared.",
    },
    "in-transit": {
      title: "In Transit",
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
      icon: FaTruck,
      message: "Your order is on the way to your location.",
    },
    completed: {
      title: "Delivered",
      color: "text-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      icon: FaCheckCircle,
      message: "Your order has been delivered successfully.",
    },
  };

  const handleSearch = async (e) => {
    e.preventDefault();

    if (!trackingId.trim() || !contactNumber.trim()) {
      toast.error("Please enter both tracking ID and contact number");
      return;
    }

    // Regex for Pakistani phone number: 03xx-xxxxxxx or 923xxxxxxxxx
    const contactRegex = /^(03\d{2}-?\d{7}|92\d{10})$/;

    if (!contactRegex.test(contactNumber.replace(/\s/g, ""))) {
      toast.error(
        "Invalid contact number format. Use: 03xx-xxxxxxx or 923xxxxxxxxx"
      );
      return;
    }

    if (contactNumber.trim().length < 11) {
      toast.error("Contact number must be at least 11 digits");
      return;
    }
    if (trackingId.trim().length < 14) {
      toast.error("Tracking ID must be at least 14 characters");
      return;
    }

    setLoading(true);
    setSearched(true);

    try {
      // Search for order by tracking ID and contact number
      const response = await fetch(
        `/api/orders?trackingId=${trackingId}&contact=${contactNumber}`
      );
      const data = await response.json();

      if (data.success && data.order) {
        // Fetch product details for order items
        const productsResponse = await fetch("/api/product");
        const productsData = await productsResponse.json();

        if (productsData.success && productsData.products) {
          const enrichedOrderItems = data.order.orderItems.map((item) => {
            const productId =
              typeof item.product === "string"
                ? item.product
                : item.product?._id;
            const productDetails = productsData.products.find(
              (p) => p._id === productId
            );
            return {
              ...item,
              product: productDetails || item.product,
            };
          });

          setOrderData({
            ...data.order,
            orderItems: enrichedOrderItems,
          });
        } else {
          setOrderData(data.order);
        }

        toast.success("Order found!");
      } else {
        setOrderData(null);
        toast.error(
          data.message ||
            "Order not found. Please check your tracking ID and contact number."
        );
      }
    } catch (error) {
      console.error("Error fetching order:", error);
      toast.error("Failed to fetch order. Please try again.");
      setOrderData(null);
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setTrackingId("");
    setContactNumber("");
    setOrderData(null);
    setSearched(false);
  };

  const getStatusConfig = (status) => {
    return statusConfig[status] || statusConfig["pending"];
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-8 px-4">
      <Toaster position="top-center" />

      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <MdTrackChanges className="text-5xl text-blue-600" />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Track Your Order
            </h1>
          </div>
          <p className="text-gray-600 text-lg">
            Enter your tracking ID and contact number to track your order status
          </p>
        </div>

        {/* Search Form */}
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 mb-8 border-2 border-blue-100">
          <form onSubmit={handleSearch} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Tracking ID Input */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">
                  <MdTrackChanges className="inline mr-2 text-blue-600" />
                  Tracking ID
                </label>
                <input
                  type="text"
                  value={trackingId}
                  onChange={(e) => setTrackingId(e.target.value)}
                  placeholder="Enter your tracking ID (format: OZONE-XXXXXXXX)"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                  disabled={loading}
                />
              </div>

              {/* Contact Number Input */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">
                  <FaPhone className="inline mr-2 text-blue-600" />
                  Contact Number
                </label>
                <input
                  type="text"
                  value={contactNumber}
                  onChange={(e) => setContactNumber(e.target.value)}
                  placeholder="Enter contact number"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                  disabled={loading}
                />
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                type="submit"
                disabled={loading}
                className="flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 disabled:bg-gray-400 transition-colors shadow-lg font-semibold"
              >
                {loading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Searching...
                  </>
                ) : (
                  <>
                    <FaSearch />
                    Track Order
                  </>
                )}
              </button>

              {(trackingId || contactNumber || orderData) && (
                <button
                  type="button"
                  onClick={handleReset}
                  className="bg-gray-200 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-300 transition-colors font-semibold"
                >
                  Reset
                </button>
              )}
            </div>
          </form>
        </div>

        {/* Order Status Display */}
        {searched && !loading && (
          <div>
            {orderData ? (
              <div className="space-y-6">
                {/* Status Banner */}
                <div
                  className={`${getStatusConfig(orderData.status).bgColor} ${
                    getStatusConfig(orderData.status).borderColor
                  } border-2 rounded-2xl p-6 md:p-8 shadow-xl`}
                >
                  <div className="flex flex-col lg:flex-row items-center gap-8">
                    {/* Status Image */}
                    <div className="flex-shrink-0">
                      <div className="relative w-48 h-48 md:w-64 md:h-64">
                        {/* Placeholder for dummy image */}
                        <div className="w-full h-full bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full flex items-center justify-center">
                          {React.createElement(
                            getStatusConfig(orderData.status).icon,
                            { className: "text-8xl text-white" }
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Status Info */}
                    <div className="flex-1 text-center lg:text-left space-y-4">
                      <div className="flex items-center justify-center lg:justify-start gap-3">
                        {React.createElement(
                          getStatusConfig(orderData.status).icon,
                          {
                            className: `text-4xl ${
                              getStatusConfig(orderData.status).color
                            }`,
                          }
                        )}
                        <h2
                          className={`text-3xl md:text-4xl font-bold ${
                            getStatusConfig(orderData.status).color
                          }`}
                        >
                          {getStatusConfig(orderData.status).title}
                        </h2>
                      </div>
                      <p className="text-gray-700 text-lg">
                        {getStatusConfig(orderData.status).message}
                      </p>
                      <div className="inline-block bg-white px-6 py-3 rounded-lg shadow-md">
                        <p className="text-sm text-gray-600">Tracking ID</p>
                        <p className="text-xl font-bold text-gray-900">
                          {orderData.trackingID}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Progress Steps */}
                <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border-2 border-gray-100">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Order Progress
                  </h3>
                  <div className="relative">
                    {/* Progress Line */}
                    <div className="absolute left-6 top-0 bottom-0 w-1 bg-gray-200 hidden md:block"></div>

                    {/* Steps */}
                    <div className="space-y-6">
                      {[
                        { key: "pending", label: "Order Placed" },
                        { key: "in-transit", label: "In Transit" },
                        { key: "completed", label: "Delivered" },
                      ].map((step, index) => {
                        const isActive =
                          orderData.status === step.key ||
                          (orderData.status === "completed" && index <= 2) ||
                          (orderData.status === "in-transit" && index <= 1);

                        return (
                          <div
                            key={step.key}
                            className="flex items-center gap-4 relative"
                          >
                            {/* Icon */}
                            <div
                              className={`w-12 h-12 rounded-full flex items-center justify-center z-10 transition-all ${
                                isActive
                                  ? "bg-blue-600 text-white shadow-lg scale-110"
                                  : "bg-gray-200 text-gray-400"
                              }`}
                            >
                              {React.createElement(
                                statusConfig[step.key].icon,
                                { className: "text-2xl" }
                              )}
                            </div>

                            {/* Label */}
                            <div className="flex-1">
                              <p
                                className={`font-semibold text-lg ${
                                  isActive ? "text-gray-900" : "text-gray-400"
                                }`}
                              >
                                {step.label}
                              </p>
                            </div>

                            {/* Active Indicator */}
                            {orderData.status === step.key && (
                              <div className="px-4 py-1 bg-blue-600 text-white text-sm font-semibold rounded-full">
                                Current
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Order Details */}
                <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border-2 border-gray-100">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Order Details
                  </h3>

                  {/* Shop Info */}
                  <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-3">
                      Delivery Information
                    </h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Shop Name:</span>
                        <span className="font-medium text-gray-900">
                          {orderData.shopName}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Address:</span>
                        <span className="font-medium text-gray-900 text-right max-w-[60%]">
                          {orderData.shopAddress}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Contact:</span>
                        <span className="font-medium text-gray-900">
                          {orderData.shopContact}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Order Items */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Items</h4>
                    <div className="space-y-3">
                      {orderData.orderItems.map((item, index) => (
                        <div
                          key={index}
                          className="flex justify-between items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">
                              {index + 1}
                            </div>
                            <div>
                              <p className="font-semibold text-gray-900">
                                {item.product?.size || "N/A"}
                              </p>
                              {item.product?.packingType && (
                                <p className="text-xs text-gray-500">
                                  {item.product.packingType}
                                </p>
                              )}
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-gray-600 text-sm">
                              {item.quantity} × Rs. {item.price}
                            </p>
                            <p className="font-bold text-gray-900">
                              Rs. {item.price * item.quantity}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Payment Info */}
                  <div className="border-t pt-6">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-lg font-semibold text-gray-900">
                        Total Amount:
                      </span>
                      <span className="text-2xl font-bold text-blue-600">
                        Rs. {orderData.totalPrice}/-
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Payment Status:</span>
                      <span
                        className={`px-4 py-2 rounded-full font-semibold ${
                          orderData.paymentStatus === "paid"
                            ? "bg-green-100 text-green-700"
                            : orderData.paymentStatus === "partially-paid"
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {orderData.paymentStatus === "paid"
                          ? "Paid"
                          : orderData.paymentStatus === "partially-paid"
                          ? "Partially Paid"
                          : "Unpaid"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-2xl shadow-xl p-8 text-center border-2 border-red-100">
                <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-12 h-12 text-red-600"
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
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Order Not Found
                </h3>
                <p className="text-gray-600 mb-6">
                  We couldn't find an order with the provided tracking ID and
                  contact number. Please check your information and try again.
                </p>
                <button
                  onClick={handleReset}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all"
                >
                  Try Again
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

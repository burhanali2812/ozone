"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";

export default function StockTransactionPage() {
  const router = useRouter();
  const [orders, setOrders] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState("all");

  // Calculate totals
  const totalSales = orders
    .filter(
      (order) =>
        order.paymentStatus === "paid" ||
        order.paymentStatus === "partially paid"
    )
    .reduce((sum, order) => sum + (order.totalPrice || 0), 0);

  const totalPurchase = transactions.reduce(
    (sum, transaction) => sum + (transaction.amount || 0),
    0
  );

  const totalProfit = totalSales - totalPurchase;

  // Fetch orders and transactions
  const fetchData = async () => {
    try {
      setLoading(true);
      const [ordersRes, transactionsRes] = await Promise.all([
        axios.get("/api/orders"),
        axios.get("/api/transaction"),
      ]);

      if (ordersRes.data.success) {
        // Filter only paid and partially paid orders
        const paidOrders = ordersRes.data.data.filter(
          (order) =>
            order.paymentStatus === "paid" ||
            order.paymentStatus === "partially-paid"
        );
        setOrders(paidOrders);
      } else {
        setOrders([]);
      }

      if (transactionsRes.data.success) {
        setTransactions(transactionsRes.data.data);
      } else {
        setTransactions([]);
      }

      // Default to all data
      setFilteredData([...ordersRes.data.data, ...transactionsRes.data.data]);
    } catch (error) {
      console.error("Error fetching data:", error);
      toast.error("Failed to fetch data");
      setOrders([]);
      setTransactions([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const user = localStorage.getItem("user2");
    if (!user) {
      router.push("/auth");
      return;
    }
    fetchData();
  }, []);

  // Filter data based on card selection
  const handleFilter = (filterType) => {
    setActiveFilter(filterType);
    if (filterType === "sales") {
      setFilteredData(orders);
    } else if (filterType === "purchase") {
      setFilteredData(transactions);
    } else {
      setFilteredData([...orders, ...transactions]);
    }
  };

  // Format date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  // Format payment status
  const getPaymentStatusBadge = (status) => {
    const statusColors = {
      paid: "bg-green-100 text-green-700 border-green-200",
      "partially paid": "bg-yellow-100 text-yellow-700 border-yellow-200",
      pending: "bg-red-100 text-red-700 border-red-200",
    };

    return (
      <span
        className={`px-3 py-1 rounded-full text-xs font-semibold border ${
          statusColors[status] || "bg-gray-100 text-gray-700 border-gray-200"
        }`}
      >
        {status || "N/A"}
      </span>
    );
  };

  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 py-12">
      <Toaster />
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Stock Transactions
          </h1>
          <p className="text-gray-600">
            Monitor your sales, purchases, and profit overview
          </p>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Sales Card */}
          <div
            onClick={() => handleFilter("sales")}
            className={`bg-white rounded-2xl shadow-lg p-6 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl ${
              activeFilter === "sales" ? "ring-4 ring-green-500" : ""
            }`}
          >
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-700 rounded-xl flex items-center justify-center text-white">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-900 mb-1">
                  Total Sales
                </h3>
                <p className="text-sm text-gray-600 mb-2">
                  From Orders (Paid/Partial)
                </p>
                <p className="text-2xl font-bold text-green-600">
                  Rs. {totalSales.toLocaleString()}/-
                </p>
              </div>
            </div>

            {/* Badge */}
            <div className="mt-4 bg-green-50 border border-green-200 rounded-lg p-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-green-700">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <div>
                    <p className="text-sm font-semibold">Revenue</p>
                    <p className="text-xs text-green-600">
                      {orders.length} Orders
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {activeFilter === "sales" && (
              <div className="mt-3 text-sm text-green-600 font-semibold flex items-center gap-2">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                Filtered
              </div>
            )}
          </div>

          {/* Purchase Card */}
          <div
            onClick={() => handleFilter("purchase")}
            className={`bg-white rounded-2xl shadow-lg p-6 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl ${
              activeFilter === "purchase" ? "ring-4 ring-red-500" : ""
            }`}
          >
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-700 rounded-xl flex items-center justify-center text-white">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 17h8m0 0v-8m0 8l-8-8-4 4-6-6"
                  />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-900 mb-1">
                  Total Purchase
                </h3>
                <p className="text-sm text-gray-600 mb-2">From Transactions</p>
                <p className="text-2xl font-bold text-red-600">
                  Rs. {totalPurchase.toLocaleString()}/-
                </p>
              </div>
            </div>

            {/* Badge */}
            <div className="mt-4 bg-red-50 border border-red-200 rounded-lg p-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-red-700">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <div>
                    <p className="text-sm font-semibold">Expenses</p>
                    <p className="text-xs text-red-600">
                      {transactions.length} Transactions
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {activeFilter === "purchase" && (
              <div className="mt-3 text-sm text-red-600 font-semibold flex items-center gap-2">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                Filtered
              </div>
            )}
          </div>

          {/* Profit Card */}
          <div
            onClick={() => handleFilter("all")}
            className={`bg-white rounded-2xl shadow-lg p-6 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl ${
              activeFilter === "all" ? "ring-4 ring-blue-500" : ""
            }`}
          >
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center text-white">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-900 mb-1">
                  Total Profit
                </h3>
                <p className="text-sm text-gray-600 mb-2">Sales - Purchase</p>
                <p
                  className={`text-2xl font-bold ${
                    totalProfit >= 0 ? "text-blue-600" : "text-red-600"
                  }`}
                >
                  Rs. {totalProfit.toLocaleString()}/-
                </p>
              </div>
            </div>

            {/* Summary Badge */}
            <div className="mt-4 bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-lg p-3">
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div>
                  <p className="text-gray-600">Sales</p>
                  <p className="font-bold text-green-600">
                    Rs. {totalSales.toLocaleString()}/-
                  </p>
                </div>
                <div>
                  <p className="text-gray-600">Purchase</p>
                  <p className="font-bold text-red-600">
                    Rs. {totalPurchase.toLocaleString()}/-
                  </p>
                </div>
              </div>
            </div>

            {activeFilter === "all" && (
              <div className="mt-3 text-sm text-blue-600 font-semibold flex items-center gap-2">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                Showing All
              </div>
            )}
          </div>
        </div>

        {/* Data Table */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="p-6 bg-gradient-to-r from-purple-50 to-pink-50">
            <h2 className="text-xl font-bold text-gray-900">
              {activeFilter === "sales"
                ? "Sales Details"
                : activeFilter === "purchase"
                ? "Purchase Details"
                : "All Transactions"}
            </h2>
            <p className="text-sm text-gray-600 mt-1">
              Showing {filteredData.length} record
              {filteredData.length !== 1 ? "s" : ""}
            </p>
          </div>

          {loading ? (
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-purple-600"></div>
            </div>
          ) : filteredData.length > 0 ? (
            <div className="overflow-x-auto">
              {activeFilter === "sales" ? (
                // Sales Table
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                        Date & Time
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                        Shop Name
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                        Contact
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                        Items
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                        Status
                      </th>
                      <th className="px-6 py-4 text-right text-sm font-semibold text-gray-700">
                        Total Price
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {orders.map((order) => (
                      <tr
                        key={order._id}
                        className="hover:bg-gray-50 transition-colors"
                      >
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                              />
                            </svg>
                            {formatDate(order.createdAt)}
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div>
                            <p className="font-medium text-gray-900">
                              {order.shopName}
                            </p>
                            <p className="text-sm text-gray-500">
                              {order.shopAddress}
                            </p>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-gray-700">
                          {order.shopContact}
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-sm">
                            {order.orderItems && order.orderItems.length > 0 ? (
                              <div className="space-y-1">
                                {order.orderItems.map((item, idx) => (
                                  <div
                                    key={idx}
                                    className="flex items-center gap-2"
                                  >
                                    <span className="text-gray-900 font-medium">
                                      {item.size}
                                    </span>
                                    <span className="text-gray-500">×</span>
                                    <span className="text-gray-600">
                                      {item.quantity}
                                    </span>
                                    <span className="text-gray-400">@</span>
                                    <span className="text-gray-600">
                                      Rs. {item.price}
                                    </span>
                                  </div>
                                ))}
                              </div>
                            ) : (
                              <span className="text-gray-400">No items</span>
                            )}
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          {getPaymentStatusBadge(order.paymentStatus)}
                        </td>
                        <td className="px-6 py-4 text-right">
                          <span className="text-lg font-bold text-green-600">
                            Rs. {order.totalPrice?.toLocaleString() || 0}/-
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot className="bg-gray-50">
                    <tr>
                      <td
                        colSpan="5"
                        className="px-6 py-4 text-right font-bold text-gray-900"
                      >
                        Total Sales:
                      </td>
                      <td className="px-6 py-4 text-right">
                        <span className="text-xl font-bold text-green-600">
                          Rs. {totalSales.toLocaleString()}/-
                        </span>
                      </td>
                    </tr>
                  </tfoot>
                </table>
              ) : activeFilter === "purchase" ? (
                // Purchase Table
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                        Date & Time
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                        Done By
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                        Purpose
                      </th>
                      <th className="px-6 py-4 text-right text-sm font-semibold text-gray-700">
                        Amount
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {transactions.map((transaction) => (
                      <tr
                        key={transaction._id}
                        className="hover:bg-gray-50 transition-colors"
                      >
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                              />
                            </svg>
                            {formatDate(transaction.createdAt)}
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className="font-medium text-gray-900">
                            {transaction.doBy}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <span className="text-gray-700">
                            {transaction.purpose}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <span className="text-lg font-bold text-red-600">
                            Rs. {transaction.amount?.toLocaleString() || 0}/-
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot className="bg-gray-50">
                    <tr>
                      <td
                        colSpan="3"
                        className="px-6 py-4 text-right font-bold text-gray-900"
                      >
                        Total Purchase:
                      </td>
                      <td className="px-6 py-4 text-right">
                        <span className="text-xl font-bold text-red-600">
                          Rs. {totalPurchase.toLocaleString()}/-
                        </span>
                      </td>
                    </tr>
                  </tfoot>
                </table>
              ) : (
                // All Data Table
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                        Type
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                        Date & Time
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                        Details
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                        Description
                      </th>
                      <th className="px-6 py-4 text-right text-sm font-semibold text-gray-700">
                        Amount
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {/* Show orders */}
                    {orders.map((order) => (
                      <tr
                        key={`order-${order._id}`}
                        className="hover:bg-gray-50 transition-colors"
                      >
                        <td className="px-6 py-4">
                          <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold border border-green-200">
                            SALE
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                              />
                            </svg>
                            {formatDate(order.createdAt)}
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div>
                            <p className="font-medium text-gray-900">
                              {order.shopName}
                            </p>
                            <p className="text-sm text-gray-500">
                              {order.shopContact}
                            </p>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-sm">
                            {order.orderItems && order.orderItems.length > 0 ? (
                              <div className="space-y-1">
                                {order.orderItems
                                  .slice(0, 2)
                                  .map((item, idx) => (
                                    <div key={idx} className="text-gray-600">
                                      {item.size} × {item.quantity}
                                    </div>
                                  ))}
                                {order.orderItems.length > 2 && (
                                  <div className="text-gray-400 text-xs">
                                    +{order.orderItems.length - 2} more
                                  </div>
                                )}
                              </div>
                            ) : (
                              <span className="text-gray-400">No items</span>
                            )}
                          </div>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <span className="text-lg font-bold text-green-600">
                            + Rs. {order.totalPrice?.toLocaleString() || 0}/-
                          </span>
                        </td>
                      </tr>
                    ))}
                    {/* Show transactions */}
                    {transactions.map((transaction) => (
                      <tr
                        key={`transaction-${transaction._id}`}
                        className="hover:bg-gray-50 transition-colors"
                      >
                        <td className="px-6 py-4">
                          <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs font-semibold border border-red-200">
                            PURCHASE
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                              />
                            </svg>
                            {formatDate(transaction.createdAt)}
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className="font-medium text-gray-900">
                            {transaction.doBy}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <span className="text-gray-700">
                            {transaction.purpose}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <span className="text-lg font-bold text-red-600">
                            - Rs. {transaction.amount?.toLocaleString() || 0}/-
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot className="bg-gray-50">
                    <tr className="border-t-2 border-gray-300">
                      <td
                        colSpan="4"
                        className="px-6 py-4 text-right font-bold text-gray-900"
                      >
                        Net Profit (Sales - Purchase):
                      </td>
                      <td className="px-6 py-4 text-right">
                        <span
                          className={`text-xl font-bold ${
                            totalProfit >= 0 ? "text-blue-600" : "text-red-600"
                          }`}
                        >
                          Rs. {totalProfit.toLocaleString()}/-
                        </span>
                      </td>
                    </tr>
                  </tfoot>
                </table>
              )}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-10 h-10 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                No Records Found
              </h3>
              <p className="text-gray-600">
                {activeFilter === "sales"
                  ? "No sales orders found"
                  : activeFilter === "purchase"
                  ? "No purchase transactions found"
                  : "No data available"}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

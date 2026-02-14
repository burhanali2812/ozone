"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Toaster, toast } from "react-hot-toast";

export default function ProfitLogsPage() {
  const router = useRouter();
  const [profitOrders, setProfitOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filterPeriod, setFilterPeriod] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const user = localStorage.getItem("user2");
    if (!user) {
      router.push("/auth");
      return;
    }
    fetchProfitLogs();
  }, []);

  const fetchProfitLogs = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get("/api/orders?action=all");
      if (res.data.success) {
        // Filter only completed and paid orders with profit data
        const ordersWithProfit = res.data.data.filter(
          (order) =>
            order.status === "completed" &&
            order.paymentStatus === "paid" &&
            order.netProfit !== undefined,
        );
        setProfitOrders(ordersWithProfit);
      } else {
        setProfitOrders([]);
      }
    } catch (error) {
      console.error("Error fetching profit logs:", error);
      toast.error("Failed to fetch profit logs");
      setProfitOrders([]);
    } finally {
      setIsLoading(false);
    }
  };

  // Filter orders by time period
  const getFilteredOrders = () => {
    let filtered = profitOrders;

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter((order) =>
        order.shopName?.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    }

    // Filter by time period
    if (filterPeriod !== "all") {
      const now = new Date();
      filtered = filtered.filter((order) => {
        const orderDate = new Date(order.createdAt);
        switch (filterPeriod) {
          case "today":
            return orderDate.toDateString() === now.toDateString();
          case "week":
            const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
            return orderDate >= weekAgo;
          case "month":
            return (
              orderDate.getMonth() === now.getMonth() &&
              orderDate.getFullYear() === now.getFullYear()
            );
          case "year":
            return orderDate.getFullYear() === now.getFullYear();
          default:
            return true;
        }
      });
    }

    return filtered;
  };

  const filteredOrders = getFilteredOrders();

  // Calculate total profit, revenue, and costs
  const totalRevenue = filteredOrders.reduce(
    (sum, order) => sum + (order.totalPrice || 0),
    0,
  );
  const totalCost = filteredOrders.reduce(
    (sum, order) => sum + (order.totalcost || 0),
    0,
  );
  const totalDelivery = filteredOrders.reduce(
    (sum, order) => sum + (order.deliveryCharges || 0),
    0,
  );
  const totalProfit = filteredOrders.reduce(
    (sum, order) => sum + (order.netProfit || 0),
    0,
  );

  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50 py-12">
      <Toaster />
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
             Profit Dashboard
          </h1>
          <p className="text-gray-600">
            Track your earnings and profit margins
          </p>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Total Profit Card */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-gray-600">Total Profit</h3>
              <svg
                className="w-8 h-8 text-green-500"
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
            <p className="text-3xl font-bold text-green-600">Rs. {totalProfit.toFixed(2)}</p>
            <p className="text-sm text-gray-500 mt-1">
              From {filteredOrders.length} orders
            </p>
          </div>

          {/* Total Revenue Card */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-gray-600">Total Revenue</h3>
              <svg
                className="w-8 h-8 text-blue-500"
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
            <p className="text-3xl font-bold text-blue-600">Rs. {totalRevenue.toFixed(2)}</p>
            <p className="text-sm text-gray-500 mt-1">Total sales amount</p>
          </div>

          {/* Total Costs Card */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-gray-600">
                Production Costs
              </h3>
              <svg
                className="w-8 h-8 text-orange-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </div>
            <p className="text-3xl font-bold text-orange-600">Rs. {totalCost.toFixed(2)}</p>
            <p className="text-sm text-gray-500 mt-1">
              + Rs. {totalDelivery.toFixed(2)} delivery
            </p>
          </div>

          {/* Profit Margin Card */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-gray-600">Profit Margin</h3>
              <svg
                className="w-8 h-8 text-purple-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
            </div>
            <p className="text-3xl font-bold text-purple-600">
              {totalRevenue > 0
                ? ((totalProfit / totalRevenue) * 100).toFixed(1)
                : 0}
              %
            </p>
            <p className="text-sm text-gray-500 mt-1">Average margin</p>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search by shop name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-green-600 focus:outline-none focus:ring-2 focus:ring-green-200 transition-all"
              />
            </div>

            {/* Time Period Filter */}
            <div className="lg:w-64">
              <select
                value={filterPeriod}
                onChange={(e) => setFilterPeriod(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-green-600 focus:outline-none focus:ring-2 focus:ring-green-200 transition-all"
              >
                <option value="all">All Time</option>
                <option value="today">Today</option>
                <option value="week">Last 7 Days</option>
                <option value="month">This Month</option>
                <option value="year">This Year</option>
              </select>
            </div>

            {/* Refresh Button */}
            <button
              onClick={fetchProfitLogs}
              disabled={isLoading}
              className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-medium shadow-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
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
                  Loading...
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
                      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                    />
                  </svg>
                  Refresh
                </>
              )}
            </button>
          </div>
        </div>

        {/* Profit Logs Table */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {isLoading ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
              <p className="text-gray-500 mt-4">Loading profit logs...</p>
            </div>
          ) : filteredOrders.length === 0 ? (
            <div className="text-center py-12">
              <svg
                className="w-16 h-16 mx-auto text-gray-400 mb-4"
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
              <p className="text-gray-500 text-lg">No profit data available</p>
              <p className="text-gray-400 text-sm mt-2">
                Complete and paid orders with production costs will appear here
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                      Order ID
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                      Shop Name
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                      Date
                    </th>
                    <th className="px-6 py-4 text-right text-sm font-semibold text-gray-700">
                      Revenue
                    </th>
                    <th className="px-6 py-4 text-right text-sm font-semibold text-gray-700">
                      Production Cost
                    </th>
                    <th className="px-6 py-4 text-right text-sm font-semibold text-gray-700">
                      Delivery
                    </th>
                    <th className="px-6 py-4 text-right text-sm font-semibold text-gray-700">
                      Net Profit
                    </th>
                    <th className="px-6 py-4 text-right text-sm font-semibold text-gray-700">
                      Margin %
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {filteredOrders.map((order, index) => {
                    const margin = order.totalPrice
                      ? ((order.netProfit / order.totalPrice) * 100).toFixed(1)
                      : 0;
                    return (
                      <tr
                        key={order._id}
                        className="hover:bg-gray-50 transition-colors"
                      >
                        <td className="px-6 py-4">
                          <span className="font-medium text-gray-900">
                            {order.trackingID ||
                              `ORD${String(index + 1).padStart(3, "0")}`}
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
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-600">
                          {new Date(order.createdAt).toLocaleDateString(
                            "en-GB",
                            {
                              day: "2-digit",
                              month: "short",
                              year: "numeric",
                            },
                          )}
                        </td>
                        <td className="px-6 py-4 text-right">
                          <span className="font-semibold text-blue-600">
                            Rs. {order.totalPrice?.toFixed(2) || "0.00"}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <span className="font-semibold text-orange-600">
                            Rs. {order.totalcost?.toFixed(2) || "0.00"}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <span className="text-sm text-gray-600">
                            Rs. {order.deliveryCharges?.toFixed(2) || "0.00"}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <span
                            className={`font-bold text-lg ${
                              order.netProfit >= 0
                                ? "text-green-600"
                                : "text-red-600"
                            }`}
                          >
                            Rs. {order.netProfit?.toFixed(2) || "0.00"}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <span
                            className={`px-3 py-1 rounded-full text-sm font-medium ${
                              margin >= 30
                                ? "bg-green-100 text-green-700"
                                : margin >= 15
                                  ? "bg-yellow-100 text-yellow-700"
                                  : "bg-red-100 text-red-700"
                            }`}
                          >
                            {margin}%
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Export Button */}
        {filteredOrders.length > 0 && (
          <div className="mt-6 flex justify-end">
            <button
              onClick={() => {
                const csvContent = [
                  [
                    "Order ID",
                    "Shop Name",
                    "Date",
                    "Revenue",
                    "Production Cost",
                    "Delivery",
                    "Net Profit",
                    "Margin %",
                  ],
                  ...filteredOrders.map((order) => [
                    order.trackingID || order._id,
                    order.shopName,
                    new Date(order.createdAt).toLocaleDateString(),
                    order.totalPrice?.toFixed(2),
                    order.totalcost?.toFixed(2),
                    order.deliveryCharges?.toFixed(2),
                    order.netProfit?.toFixed(2),
                    order.totalPrice
                      ? ((order.netProfit / order.totalPrice) * 100).toFixed(1)
                      : 0,
                  ]),
                ]
                  .map((row) => row.join(","))
                  .join("\n");

                const blob = new Blob([csvContent], { type: "text/csv" });
                const url = URL.createObjectURL(blob);
                const link = document.createElement("a");
                link.href = url;
                link.download = `profit-logs-${new Date().toISOString().split("T")[0]}.csv`;
                link.click();
                toast.success("Profit logs exported successfully!");
              }}
              className="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition-colors font-medium shadow-lg flex items-center gap-2"
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
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Export to CSV
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

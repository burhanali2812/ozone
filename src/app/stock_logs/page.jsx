"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { toast, Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";

function StockLogs() {
  const [logs, setLogs] = useState([]);
  const [filteredLogs, setFilteredLogs] = useState([]);
  const [filterType, setFilterType] = useState("all");
  const [filterSize, setFilterSize] = useState("all");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const user = localStorage.getItem("user2");
    if (!user) {
      router.push("/auth");
      return;
    }
    fetchLogs();
  }, []);

  useEffect(() => {
    let filtered = logs;

    if (filterType !== "all") {
      filtered = filtered.filter((log) => log.actionType === filterType);
    }

    if (filterSize !== "all") {
      filtered = filtered.filter((log) => log.productSize === filterSize);
    }

    setFilteredLogs(filtered);
  }, [filterType, filterSize, logs]);

  const fetchLogs = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get("/api/stock/logs");
      if (response.data.success) {
        setLogs(response.data.logs);
        setFilteredLogs(response.data.logs);
      }
    } catch (error) {
      console.error("Error fetching logs:", error);
      toast.error("Failed to fetch stock logs");
    } finally {
      setIsLoading(false);
    }
  };

  const getActionBadge = (actionType) => {
    switch (actionType) {
      case "add":
        return "bg-green-100 text-green-800";
      case "reduce":
        return "bg-yellow-100 text-yellow-800";
      case "order_delivered":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getActionIcon = (actionType) => {
    switch (actionType) {
      case "add":
        return (
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
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
        );
      case "reduce":
        return (
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
              d="M20 12H4"
            />
          </svg>
        );
      case "order_delivered":
        return (
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
              d="M5 13l4 4L19 7"
            />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-3 sm:p-4 md:p-6">
      <Toaster />
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 sm:mb-8 pt-3 sm:pt-0">
          <div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
              Stock Activity Logs
            </h1>
            <p className="text-gray-600 mt-2">
              Complete history of all stock movements
            </p>
          </div>
          <button
            onClick={fetchLogs}
            disabled={isLoading}
            className="w-full sm:w-auto bg-blue-600 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium shadow-lg text-sm sm:text-base flex items-center justify-center gap-2 disabled:opacity-50"
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

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Total Logs</p>
                <p className="text-2xl font-bold text-gray-900">
                  {logs.length}
                </p>
              </div>
              <div className="bg-blue-100 p-3 rounded-full">
                <svg
                  className="w-6 h-6 text-blue-600"
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
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Stock Added</p>
                <p className="text-2xl font-bold text-green-600">
                  {logs.filter((l) => l.actionType === "add").length}
                </p>
              </div>
              <div className="bg-green-100 p-3 rounded-full">
                <svg
                  className="w-6 h-6 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Stock Reduced</p>
                <p className="text-2xl font-bold text-yellow-600">
                  {logs.filter((l) => l.actionType === "reduce").length}
                </p>
              </div>
              <div className="bg-yellow-100 p-3 rounded-full">
                <svg
                  className="w-6 h-6 text-yellow-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20 12H4"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Orders Delivered</p>
                <p className="text-2xl font-bold text-blue-600">
                  {
                    logs.filter((l) => l.actionType === "order_delivered")
                      .length
                  }
                </p>
              </div>
              <div className="bg-blue-100 p-3 rounded-full">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Filters</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 font-medium mb-2 text-sm">
                Action Type
              </label>
              <select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-blue-600 focus:outline-none"
              >
                <option value="all">All Actions</option>
                <option value="add">Stock Added</option>
                <option value="reduce">Stock Reduced</option>
                <option value="order_delivered">Order Delivered</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2 text-sm">
                Product Size
              </label>
              <select
                value={filterSize}
                onChange={(e) => setFilterSize(e.target.value)}
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-blue-600 focus:outline-none"
              >
                <option value="all">All Sizes</option>
                <option value="500ml">500ml</option>
                <option value="1500ml">1500ml</option>
                <option value="6liter">6 Liter</option>
              </select>
            </div>
          </div>
        </div>

        {/* Logs Timeline */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-4 sm:p-6">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
              Activity Timeline
            </h2>

            {/* Mobile View */}
            <div className="block lg:hidden space-y-4">
              {filteredLogs.length > 0 ? (
                filteredLogs.map((log) => (
                  <div
                    key={log._id}
                    className="bg-gray-50 rounded-lg p-4 border-l-4 border-blue-600"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1 ${getActionBadge(log.actionType)}`}
                      >
                        {getActionIcon(log.actionType)}
                        {log.actionType.replace("_", " ").toUpperCase()}
                      </span>
                      <span className="text-xs text-gray-600">
                        {new Date(log.createdAt).toLocaleString()}
                      </span>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Product:</span>
                        <span className="font-medium">
                          {log.productSize} ({log.producyType})
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Previous:</span>
                        <span className="font-medium">
                          {log.previousQuantity}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Changed:</span>
                        <span
                          className={`font-bold ${log.actionType === "add" ? "text-green-600" : "text-red-600"}`}
                        >
                          {log.actionType === "add" ? "+" : "-"}
                          {log.quantityChanged}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">New Quantity:</span>
                        <span className="font-bold text-blue-600">
                          {log.newQuantity}
                        </span>
                      </div>
                      {log.reason && (
                        <div className="pt-2 border-t">
                          <span className="text-gray-600">Reason:</span>
                          <p className="text-gray-900 font-medium mt-1">
                            {log.reason}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-12 text-gray-500">
                  No logs found
                </div>
              )}
            </div>

            {/* Desktop Table View */}
            <div className="hidden lg:block overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50 border-b-2 border-gray-200">
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                      Date & Time
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                      Action
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                      Product
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                      Previous Qty
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                      Changed
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                      New Qty
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                      Reason
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filteredLogs.length > 0 ? (
                    filteredLogs.map((log) => (
                      <tr
                        key={log._id}
                        className="border-b border-gray-200 hover:bg-gray-50 transition-colors"
                      >
                        <td className="px-6 py-4 text-sm text-gray-700">
                          {new Date(log.createdAt).toLocaleString()}
                        </td>
                        <td className="px-6 py-4">
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-medium inline-flex items-center gap-1 ${getActionBadge(log.actionType)}`}
                          >
                            {getActionIcon(log.actionType)}
                            {log.actionType.replace("_", " ").toUpperCase()}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">
                          {log.productSize} ({log.producyType})
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-700">
                          {log.previousQuantity}
                        </td>
                        <td className="px-6 py-4">
                          <span
                            className={`text-sm font-bold ${log.actionType === "add" ? "text-green-600" : "text-red-600"}`}
                          >
                            {log.actionType === "add" ? "+" : "-"}
                            {log.quantityChanged}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm font-bold text-blue-600">
                          {log.newQuantity}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-700">
                          {log.reason}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td
                        colSpan="7"
                        className="px-6 py-12 text-center text-gray-500"
                      >
                        No logs found
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StockLogs;

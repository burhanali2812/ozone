"use client";
import { useState, useEffect, useMemo } from "react";
import axios from "axios";
import { toast, Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";

// Products have no "name" field — build a readable label from size + quality.
const getProductLabel = (product) => {
  if (!product) return "—";
  const parts = [product.size, product.bottleQuality].filter(Boolean);
  return parts.length ? parts.join(" ") : "Unnamed Product";
};

function StockManage() {
  const [stocks, setStocks] = useState([]);
  const [products, setProducts] = useState([]);
  const [logs, setLogs] = useState([]);
  const [logsLoading, setLogsLoading] = useState(true);
  const [selectedProductId, setSelectedProductId] = useState("all");
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({ productId: "", quantity: "" });
  const router = useRouter();

  useEffect(() => {
    const user = localStorage.getItem("user2");
    if (!user) {
      router.push("/auth");
      return;
    }
    fetchStocks();
    fetchProducts();
    fetchLogs();
  }, []);

  const fetchStocks = async () => {
    try {
      const response = await axios.get("/api/stock");
      setStocks(response.data.stocks);
    } catch (error) {
      console.error("Error fetching stocks:", error);
      toast.error("Failed to fetch stocks");
    }
  };

  const fetchProducts = async () => {
    try {
      const response = await fetch("/api/product");
      const data = await response.json();
      if (data.success && data.products) {
        setProducts(data.products);
      } else {
        toast.error("Failed to fetch products");
      }
    } catch (error) {
      console.error("Error fetching products:", error);
      toast.error("Failed to fetch products");
    }
  };

  const fetchLogs = async () => {
    setLogsLoading(true);
    try {
      const response = await axios.get("/api/stock/logs", {
        params: { limit: 200 },
      });
      setLogs(response.data.logs || []);
    } catch (error) {
      console.error("Error fetching stock logs:", error);
      toast.error("Failed to fetch stock logs");
    } finally {
      setLogsLoading(false);
    }
  };

  const getStockQty = (productId) => {
    const s = stocks.find((s) => s.product?._id === productId);
    return s ? s.quantity : 0;
  };

  const selectedProduct = useMemo(
    () => products.find((p) => p._id === selectedProductId),
    [products, selectedProductId]
  );

  const filteredLogs = useMemo(() => {
    if (selectedProductId === "all") return logs;
    return logs.filter((log) => {
      const logProductId =
        typeof log.product === "object" ? log.product?._id : log.product;
      return logProductId === selectedProductId;
    });
  }, [logs, selectedProductId]);
  console.log("Filtered Logs:", filteredLogs);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.productId || !formData.quantity) {
      toast.error("Select a product and enter quantity");
      return;
    }
    try {
      const user = JSON.parse(localStorage.getItem("user2") || "{}");
      await axios.post("/api/stock", {
        productId: formData.productId,
        quantity: Number(formData.quantity),
        performedBy: user?.name || "Worker",
      });
      toast.success("Stock added successfully");
      setShowModal(false);
      setFormData({ productId: "", quantity: "" });
      fetchStocks();
      fetchLogs();
    } catch (error) {
      console.error("Error adding stock:", error);
      toast.error(error.response?.data?.message || "Failed to add stock");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-3 sm:p-4 md:p-6">
      <Toaster />
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6 sm:mb-8 pt-3 sm:pt-0">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
            Stock Management
          </h1>
          <button
            onClick={() => setShowModal(true)}
            className="w-full sm:w-auto bg-blue-600 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium shadow-lg text-sm sm:text-base"
          >
            + Add Stock
          </button>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
          {/* "All" card */}
          <div
            onClick={() => setSelectedProductId("all")}
            className={`bg-white rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6 cursor-pointer transition-all transform hover:scale-105 flex flex-col justify-center items-center ${
              selectedProductId === "all" ? "ring-4 ring-blue-500" : ""
            }`}
          >
            <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-2">
              All Products
            </h3>
            <span className="text-xs sm:text-sm text-gray-600">
              Show combined stock logs
            </span>
          </div>

          {products.map((product) => {
            const qty = getStockQty(product._id);
            const isSelected = selectedProductId === product._id;
            return (
              <div
                key={product._id}
                onClick={() => setSelectedProductId(product._id)}
                className={`bg-white rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6 cursor-pointer transition-all transform hover:scale-105 ${
                  isSelected ? "ring-4 ring-blue-500" : ""
                }`}
              >
                <div className="flex justify-between items-start mb-3 sm:mb-4">
                  <div>
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900">
                      {getProductLabel(product)}
                    </h3>
                    {product.packingType && (
                      <span className="text-xs text-gray-500">
                        {product.packingType}
                      </span>
                    )}
                  </div>
                  {qty <= 5 && (
                    <span className="bg-red-100 text-red-800 px-2 sm:px-3 py-1 rounded-full text-xs font-semibold">
                      Low
                    </span>
                  )}
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs sm:text-sm text-gray-600">
                    Available Stock:
                  </span>
                  <span
                    className={`text-2xl sm:text-3xl font-bold ${
                      qty <= 5 ? "text-red-600" : "text-blue-600"
                    }`}
                  >
                    {qty}
                  </span>
                </div>
              </div>
            );
          })}

          {products.length === 0 && (
            <div className="col-span-full text-center py-8 text-gray-500 bg-white rounded-xl shadow-xl">
              No products found
            </div>
          )}
        </div>

        {/* Stock Logs Table */}
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl overflow-hidden">
          <div className="p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                Stock Logs
                {selectedProductId !== "all" && selectedProduct && (
                  <span className="text-blue-600"> — {getProductLabel(selectedProduct)}</span>
                )}
              </h2>
              {selectedProductId !== "all" && (
                <button
                  onClick={() => setSelectedProductId("all")}
                  className="text-sm text-blue-600 hover:text-blue-800 font-medium self-start sm:self-auto"
                >
                  Clear filter
                </button>
              )}
            </div>

            {logsLoading ? (
              <div className="text-center py-8 text-gray-500">Loading logs...</div>
            ) : (
              <>
                {/* Mobile Card View */}
                <div className="block lg:hidden space-y-3">
                  {filteredLogs.length > 0 ? (
                    filteredLogs.map((log) => (
                      <div
                        key={log._id}
                        className="bg-gray-50 rounded-lg p-4 space-y-2"
                      >
                        <div className="flex justify-between items-start mb-2">
                          <span className="text-sm font-semibold text-gray-900">
                            {getProductLabel(log.product)}
                          </span>
                          <span className="text-xs text-gray-600">
                            {new Date(log.createdAt).toLocaleString("en-US", {
                              dateStyle: "short",
                              timeStyle: "short",
                            })}
                          </span>
                        </div>
                        <div className="grid grid-cols-2 gap-2 text-sm">
                          <div>
                            <span className="text-gray-600">Action:</span>
                            <span
                              className={`ml-2 font-medium capitalize ${
                                log.actionType === "add"
                                  ? "text-green-600"
                                  : "text-orange-600"
                              }`}
                            >
                              {log.actionType}
                            </span>
                          </div>
                          <div>
                            <span className="text-gray-600">Changed:</span>
                            <span className="ml-2 font-semibold">
                              {log.actionType === "add" ? "+" : "-"}
                              {log.quantityChanged}
                            </span>
                          </div>
                          <div>
                            <span className="text-gray-600">Previous:</span>
                            <span className="ml-2 font-semibold">
                              {log.previousQuantity}
                            </span>
                          </div>
                          <div>
                            <span className="text-gray-600">New:</span>
                            <span className="ml-2 font-semibold text-blue-600">
                              {log.newQuantity}
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between pt-1 border-t text-xs">
                          <span className="text-gray-600 truncate">
                            {log.reason || "-"}
                            {log.orderId?.shopName && (
                              <span> · {log.orderId.shopName}</span>
                            )}
                          </span>
                          <span
                            className={`ml-2 shrink-0 px-2 py-0.5 rounded-full font-medium ${
                              !log.performedBy || log.performedBy === "System"
                                ? "bg-gray-100 text-gray-600"
                                : "bg-blue-100 text-blue-700"
                            }`}
                          >
                            {log.performedBy || "System"}
                          </span>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-8 text-gray-500">
                      No stock logs found
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
                          Product
                        </th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                          Action
                        </th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                          Changed
                        </th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                          Previous
                        </th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                          New
                        </th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                          Reason
                        </th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                          By
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
                              {new Date(log.createdAt).toLocaleString("en-US", {
                                dateStyle: "short",
                                timeStyle: "short",
                              })}
                            </td>
                            <td className="px-6 py-4 text-sm font-medium text-gray-900">
                              {getProductLabel(log.product)}
                            </td>
                            <td className="px-6 py-4">
                              <span
                                className={`px-3 py-1 rounded-full text-sm font-medium capitalize ${
                                  log.actionType === "add"
                                    ? "bg-green-100 text-green-800"
                                    : "bg-orange-100 text-orange-800"
                                }`}
                              >
                                {log.actionType}
                              </span>
                            </td>
                            <td
                              className={`px-6 py-4 text-sm font-semibold ${
                                log.actionType === "add"
                                  ? "text-green-600"
                                  : "text-orange-600"
                              }`}
                            >
                              {log.actionType === "add" ? "+" : "-"}
                              {log.quantityChanged}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-700">
                              {log.previousQuantity}
                            </td>
                            <td className="px-6 py-4 text-sm font-semibold text-blue-600">
                              {log.newQuantity}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-700">
                              {log.reason || "-"}
                              {log.orderId?.shopName && (
                                <span className="text-gray-500">
                                  {" "}
                                  ({log.orderId.shopName})
                                </span>
                              )}
                            </td>
                            <td className="px-6 py-4 text-sm">
                              <span
                                className={`px-3 py-1 rounded-full text-xs font-medium ${
                                  !log.performedBy || log.performedBy === "System"
                                    ? "bg-gray-100 text-gray-600"
                                    : "bg-blue-100 text-blue-700"
                                }`}
                              >
                                {log.performedBy || "System"}
                              </span>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td
                            colSpan="8"
                            className="px-6 py-8 text-center text-gray-500"
                          >
                            No stock logs found
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Add Stock Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-2xl max-w-md w-full p-6 sm:p-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                Add Stock
              </h2>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-500 hover:text-gray-700 text-2xl leading-none"
              >
                ×
              </button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700 font-medium mb-1.5 text-sm sm:text-base">
                  Product *
                </label>
                <select
                  name="productId"
                  value={formData.productId}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-gray-300 focus:border-blue-600 focus:outline-none text-sm sm:text-base"
                >
                  <option value="">Select a product</option>
                  {products.map((p) => (
                    <option key={p._id} value={p._id}>
                      {getProductLabel(p)}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1.5 text-sm sm:text-base">
                  Quantity *
                </label>
                <input
                  type="number"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                  required
                  min="1"
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-gray-300 focus:border-blue-600 focus:outline-none text-sm sm:text-base"
                  placeholder="Enter quantity"
                />
              </div>
              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="flex-1 bg-gray-200 text-gray-700 px-4 py-2.5 sm:py-3 rounded-lg hover:bg-gray-300 transition-colors font-medium text-sm sm:text-base"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-blue-600 text-white px-4 py-2.5 sm:py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm sm:text-base"
                >
                  Add Stock
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default StockManage;
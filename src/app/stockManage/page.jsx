"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { Toaster, toast } from "react-hot-toast";

function StockManage() {
  const [stocks, setStocks] = useState([]);
  const [filteredStocks, setFilteredStocks] = useState([]);
  const [selectedSize, setSelectedSize] = useState("all");
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    productSize: "500ml",
    producyType: "pet",
    quantity: "",
    costPerType: "",
  });

  // Bottle quantities mapping
  const bottleQuantities = {
    "500ml": 12,
    "1500ml": 6,
    "6liter": 1,
  };
    const router = useRouter();
    useEffect(() => {
    const user = localStorage.getItem("user2");
    if (!user) {
      router.push("/auth");
      return;
    }
     fetchStocks();
  }, []);

  useEffect(() => {
    if (selectedSize === "all") {
      setFilteredStocks(stocks);
    } else {
      setFilteredStocks(
        stocks.filter((stock) => stock.productSize === selectedSize)
      );
    }
  }, [selectedSize, stocks]);

  const fetchStocks = async () => {
    try {
      const response = await axios.get("/api/stock");
      setStocks(response.data.stocks);
      setFilteredStocks(response.data.stocks);
    } catch (error) {
      console.error("Error fetching stocks:", error);
      toast.error("Failed to fetch stocks");
    }
  };

  const getStockBySize = (size) => {
    return stocks
      .filter((stock) => stock.productSize === size)
      .reduce((total, stock) => total + stock.quantity, 0);
  };

  const getTotalBottles = (size, quantity) => {
    return quantity * bottleQuantities[size];
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/stock", formData);
      toast.success("Stock added successfully");
      setShowModal(false);
      setFormData({
        productSize: "500ml",
        producyType: "pet",
        quantity: "",
        costPerType: "",
      });
      fetchStocks();
    } catch (error) {
      console.error("Error adding stock:", error);
      toast.error("Failed to add stock");
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-3 sm:p-4 md:p-6">
        <Toaster />
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start items-center sm:items-center gap-4 mb-6 sm:mb-8 pt-3 sm:pt-0">
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

        {/* Stock Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
          {["500ml", "1500ml", "6liter"].map((size) => {
            const totalQuantity = getStockBySize(size);
            const totalBottles = getTotalBottles(size, totalQuantity);
            return (
              <div
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`bg-white rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6 cursor-pointer transition-all transform hover:scale-105 ${
                  selectedSize === size ? "ring-4 ring-blue-500" : ""
                }`}
              >
                <div className="flex justify-between items-start mb-3 sm:mb-4">
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900">
                    {size === "500ml" && "500ml Bottle"}
                    {size === "1500ml" && "1500ml Bottle"}
                    {size === "6liter" && "6 Liter Bottle"}
                  </h3>
                  <span className="bg-blue-100 text-blue-800 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
                    {size}
                  </span>
                </div>
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-xs sm:text-sm text-gray-600">
                      Total Quantity:
                    </span>
                    <span className="text-xl sm:text-2xl font-bold text-blue-600">
                      {totalQuantity}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs sm:text-sm text-gray-600">
                      Bottles per Pet:
                    </span>
                    <span className="text-base sm:text-lg font-semibold text-gray-800">
                      {bottleQuantities[size]}
                    </span>
                  </div>
                  <div className="border-t pt-2 sm:pt-3">
                    <div className="flex justify-between items-center">
                      <span className="text-xs sm:text-sm text-gray-600">
                        Total Bottles:
                      </span>
                      <span className="text-xl sm:text-2xl font-bold text-green-600">
                        {totalBottles}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-2 sm:gap-3 mb-4 sm:mb-6">
          <button
            onClick={() => setSelectedSize("all")}
            className={`px-3 sm:px-4 py-2 rounded-lg font-medium transition-colors text-sm sm:text-base ${
              selectedSize === "all"
                ? "bg-blue-600 text-white"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            All Stocks
          </button>
          {["500ml", "1500ml", "6liter"].map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`px-3 sm:px-4 py-2 rounded-lg font-medium transition-colors text-sm sm:text-base ${
                selectedSize === size
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              {size}
            </button>
          ))}
        </div>

        {/* Stock Logs Table */}
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl overflow-hidden">
          <div className="p-4 sm:p-6">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
              Stock Logs
            </h2>
            {/* Mobile Card View */}
            <div className="block lg:hidden space-y-3">
              {filteredStocks.length > 0 ? (
                filteredStocks.map((stock) => (
                  <div
                    key={stock._id}
                    className="bg-gray-50 rounded-lg p-4 space-y-2"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                        {stock.productSize}
                      </span>
                      <span className="text-xs text-gray-600">
                        {new Date(stock.createdAt).toLocaleString("en-US", {
                          dateStyle: "short",
                          timeStyle: "short",
                        })}
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>
                        <span className="text-gray-600">Type:</span>
                        <span className="ml-2 font-medium capitalize">
                          {stock.producyType}
                        </span>
                      </div>
                      <div>
                        <span className="text-gray-600">Quantity:</span>
                        <span className="ml-2 font-semibold">
                          {stock.quantity}
                        </span>
                      </div>
                      <div>
                        <span className="text-gray-600">Bottles:</span>
                        <span className="ml-2 font-semibold text-green-600">
                          {stock.quantity * bottleQuantities[stock.productSize]}
                        </span>
                      </div>
                      <div>
                        <span className="text-gray-600">Cost/Type:</span>
                        <span className="ml-2 font-medium">
                          Rs. {stock.costPerType}
                        </span>
                      </div>
                    </div>
                    <div className="pt-2 border-t">
                      <span className="text-gray-600 text-sm">Total Cost:</span>
                      <span className="ml-2 font-bold text-blue-600">
                        Rs. {stock.quantity * stock.costPerType}/-
                      </span>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-8 text-gray-500">
                  No stock records found
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
                      Product Size
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                      Type
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                      Quantity
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                      Bottles
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                      Cost Per Type
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                      Total Cost
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filteredStocks.length > 0 ? (
                    filteredStocks.map((stock) => (
                      <tr
                        key={stock._id}
                        className="border-b border-gray-200 hover:bg-gray-50 transition-colors"
                      >
                        <td className="px-6 py-4 text-sm text-gray-700">
                          {new Date(stock.createdAt).toLocaleString("en-US", {
                            dateStyle: "short",
                            timeStyle: "short",
                          })}
                        </td>
                        <td className="px-6 py-4">
                          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                            {stock.productSize}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm font-medium text-gray-900 capitalize">
                          {stock.producyType}
                        </td>
                        <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                          {stock.quantity}
                        </td>
                        <td className="px-6 py-4 text-sm font-semibold text-green-600">
                          {stock.quantity * bottleQuantities[stock.productSize]}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-700">
                          Rs. {stock.costPerType}/-
                        </td>
                        <td className="px-6 py-4 text-sm font-bold text-gray-900">
                          Rs. {stock.quantity * stock.costPerType}/-
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td
                        colSpan="7"
                        className="px-6 py-8 text-center text-gray-500"
                      >
                        No stock records found
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Add Stock Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-2xl max-w-md w-full p-6 sm:p-8 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4 sm:mb-6">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                Add New Stock
              </h2>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-500 hover:text-gray-700 text-2xl sm:text-3xl leading-none"
              >
                ×
              </button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
              <div>
                <label className="block text-gray-700 font-medium mb-1.5 sm:mb-2 text-sm sm:text-base">
                  Product Size *
                </label>
                <select
                  name="productSize"
                  value={formData.productSize}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-gray-300 focus:border-blue-600 focus:outline-none text-sm sm:text-base"
                >
                  <option value="500ml">500ml Bottle</option>
                  <option value="1500ml">1500ml Bottle</option>
                  <option value="6liter">6 Liter Bottle</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1.5 sm:mb-2 text-sm sm:text-base">
                  Type *
                </label>
                <select
                  name="producyType"
                  value={formData.producyType}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-gray-300 focus:border-blue-600 focus:outline-none text-sm sm:text-base"
                >
                  <option value="pet">Pet</option>
                  <option value="bottle">Bottle</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1.5 sm:mb-2 text-sm sm:text-base">
                  Quantity (Pets) *
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
                {formData.quantity && (
                  <p className="text-xs sm:text-sm text-gray-600 mt-1.5 sm:mt-2">
                    Total Bottles:{" "}
                    <span className="font-semibold text-green-600">
                      {formData.quantity *
                        bottleQuantities[formData.productSize]}
                    </span>
                  </p>
                )}
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1.5 sm:mb-2 text-sm sm:text-base">
                  Cost Per Type *
                </label>
                <input
                  type="number"
                  name="costPerType"
                  value={formData.costPerType}
                  onChange={handleChange}
                  required
                  min="0"
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-gray-300 focus:border-blue-600 focus:outline-none text-sm sm:text-base"
                  placeholder="Enter cost per pet"
                />
                {formData.quantity && formData.costPerType && (
                  <p className="text-xs sm:text-sm text-gray-600 mt-1.5 sm:mt-2">
                    Total Cost:{" "}
                    <span className="font-semibold text-blue-600">
                      Rs. {formData.quantity * formData.costPerType}/-
                    </span>
                  </p>
                )}
              </div>
              <div className="flex gap-2 sm:gap-3 pt-2 sm:pt-4">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="flex-1 bg-gray-200 text-gray-700 px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg hover:bg-gray-300 transition-colors font-medium text-sm sm:text-base"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-blue-600 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm sm:text-base"
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

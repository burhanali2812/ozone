"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";

export default function ManageRawItems() {
  const router = useRouter();
  const [rawItems, setRawItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showMenu, setShowMenu] = useState(false);
  const [userName, setUserName] = useState("");

  // Fetch raw items
  const getRawItems = async () => {
    try {
      setLoading(true);
      const res = await axios.get("/api/items");
      if (res.data.success) {
        setRawItems(res.data.data);
      } else {
        setRawItems([]);
      }
    } catch (error) {
      console.error("Error fetching raw items:", error);
      toast.error("Failed to fetch raw materials");
      setRawItems([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const user = localStorage.getItem("user");
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
    getRawItems();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    toast.success("Logged out successfully!");
    setShowMenu(false);
    router.push("/auth");
  };

  // Flatten all items from all entries
  const getAllItems = () => {
    const allItems = [];
    rawItems.forEach((entry) => {
      entry.items.forEach((item) => {
        allItems.push({
          ...item,
          supplier: entry.supplierInfo.name,
          supplierContact: entry.supplierInfo.contact,
          entryDate: entry.createdAt,
        });
      });
    });
    return allItems;
  };

  // Calculate totals by item name
  const getTotalQuantity = (itemName) => {
    return getAllItems()
      .filter((item) => item.itemName === itemName)
      .reduce((sum, item) => sum + item.quantity, 0);
  };

  // Get unique item names
  const uniqueItems = [...new Set(getAllItems().map((item) => item.itemName))];

  // Summary cards data
  const summaryCards = uniqueItems.map((itemName) => ({
    name: itemName,
    total: getTotalQuantity(itemName),
    isLowStock: getTotalQuantity(itemName) < 500,
  }));

  // Get all items for table
  const allItemsFlat = getAllItems();

  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 py-12">
      <Toaster />
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-8 flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Left - Menu Button & Heading */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setShowMenu(true)}
              className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
                Raw Materials
              </h1>
              <p className="text-gray-600">Manage your inventory</p>
            </div>
          </div>

          {/* Right - Add Button */}
          <button
            onClick={() => router.push("/rawItems/addRawItems")}
            className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
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
                d="M12 4v16m8-8H4"
              />
            </svg>
            Add Raw Material
          </button>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
          {summaryCards.map((card, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl shadow-lg p-6 transform hover:-translate-y-1 transition-all duration-300 ${
                card.isLowStock
                  ? "border-2 border-red-300 ring-2 ring-red-100"
                  : "hover:shadow-xl"
              }`}
            >
              {/* Low Stock Warning Badge */}
              {card.isLowStock && (
                <div className="absolute -top-3 -right-3">
                  <div className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg flex items-center gap-1 animate-pulse">
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Low Stock
                  </div>
                </div>
              )}

              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 ${
                  card.isLowStock
                    ? "bg-red-100"
                    : "bg-gradient-to-br from-blue-100 to-cyan-100"
                }`}
              >
                <svg
                  className={`w-7 h-7 ${
                    card.isLowStock ? "text-red-600" : "text-blue-600"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                  />
                </svg>
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {card.name}
              </h3>
              <div className="flex items-baseline gap-2">
                <span
                  className={`text-3xl font-bold ${
                    card.isLowStock ? "text-red-600" : "text-blue-600"
                  }`}
                >
                  {card.total.toLocaleString()}
                </span>
                <span className="text-gray-500 text-sm">units</span>
              </div>

              {/* Status */}
              <div className="mt-4 pt-4 border-t border-gray-100">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Status:</span>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      card.isLowStock
                        ? "bg-red-100 text-red-700"
                        : card.total > 1000
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {card.isLowStock
                      ? "Critical"
                      : card.total > 1000
                      ? "Good"
                      : "Medium"}
                  </span>
                </div>
              </div>
            </div>
          ))}

          {/* Empty State */}
          {summaryCards.length === 0 && !loading && (
            <div className="col-span-full bg-white rounded-2xl shadow-lg p-12 text-center">
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
                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                No Raw Materials Found
              </h3>
              <p className="text-gray-600 mb-6">
                Get started by adding your first raw material
              </p>
              <button
                onClick={() => router.push("/rawItems/addRawItems")}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Add Raw Material
              </button>
            </div>
          )}
        </div>

        {/* Detailed Table */}
        {allItemsFlat.length > 0 && (
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="p-6 bg-gradient-to-r from-blue-50 to-cyan-50 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900">
                Detailed Inventory
              </h2>
              <p className="text-gray-600 mt-1">
                Complete list of all raw material entries
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                      #
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                      Item Name
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                      Supplier
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                      Quantity
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                      Price/Unit
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                      Total Value
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                      Date Added
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {allItemsFlat.map((item, index) => {
                    const isLowStock = item.quantity < 500;
                    return (
                      <tr
                        key={index}
                        className={`hover:bg-gray-50 transition-colors ${
                          isLowStock ? "bg-red-50" : ""
                        }`}
                      >
                        <td className="px-6 py-4">
                          <span className="font-medium text-gray-900">
                            {index + 1}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div
                              className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                                isLowStock ? "bg-red-100" : "bg-blue-100"
                              }`}
                            >
                              <svg
                                className={`w-5 h-5 ${
                                  isLowStock ? "text-red-600" : "text-blue-600"
                                }`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                                />
                              </svg>
                            </div>
                            <div>
                              <span className="font-semibold text-gray-900 block">
                                {item.itemName}
                              </span>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div>
                            <p className="font-medium text-gray-900">
                              {item.supplier}
                            </p>
                            <p className="text-sm text-gray-500">
                              {item.supplierContact}
                            </p>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span
                            className={`font-bold ${
                              isLowStock ? "text-red-600" : "text-gray-900"
                            }`}
                          >
                            {item.quantity.toLocaleString()}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <span className="text-gray-900 font-medium">
                            Rs. {item.price.toLocaleString()}/-
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <span className="text-gray-900 font-bold">
                            Rs. {item.total.toLocaleString()}/-
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-600">
                          {item.entryDate
                            ? new Date(item.entryDate).toLocaleDateString(
                                "en-US",
                                {
                                  year: "numeric",
                                  month: "short",
                                  day: "numeric",
                                }
                              )
                            : "N/A"}
                        </td>
                        <td className="px-6 py-4">
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-semibold ${
                              isLowStock
                                ? "bg-red-100 text-red-700 animate-pulse"
                                : item.quantity > 1000
                                ? "bg-green-100 text-green-700"
                                : "bg-yellow-100 text-yellow-700"
                            }`}
                          >
                            {isLowStock
                              ? "⚠️ Low Stock"
                              : item.quantity > 1000
                              ? "✓ In Stock"
                              : "⚡ Medium"}
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Table Footer with Stats */}
            <div className="p-6 bg-gray-50 border-t border-gray-200">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="text-center">
                  <p className="text-sm text-gray-600 mb-1">Total Entries</p>
                  <p className="text-2xl font-bold text-blue-600">
                    {allItemsFlat.length}
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-600 mb-1">Total Value</p>
                  <p className="text-2xl font-bold text-green-600">
                    Rs.{" "}
                    {rawItems
                      .reduce((sum, entry) => sum + entry.totalCost, 0)
                      .toLocaleString()}
                    /-
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-600 mb-1">Low Stock Items</p>
                  <p className="text-2xl font-bold text-red-600">
                    {allItemsFlat.filter((item) => item.quantity < 500).length}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Loading State */}
        {loading && (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-600"></div>
          </div>
        )}
      </div>

      {/* Left Sidebar Menu (Offcanvas) */}
      {showMenu && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity"
            onClick={() => setShowMenu(false)}
          ></div>

          {/* Sidebar */}
          <div className="fixed top-0 left-0 h-full w-80 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out">
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-2xl font-bold text-white">Menu</h2>
                  <button
                    onClick={() => setShowMenu(false)}
                    className="text-white hover:text-gray-200"
                  >
                    <svg
                      className="w-6 h-6"
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
                </div>
                {/* User Info */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-blue-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-semibold">{userName}</p>
                    <p className="text-blue-100 text-sm">Administrator</p>
                  </div>
                </div>
              </div>

              {/* Menu Items */}
              <nav className="flex-1 p-4 space-y-2">
                <button
                  onClick={() => {
                    router.push("/orderDashboard");
                    setShowMenu(false);
                  }}
                  className="w-full flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-blue-50 rounded-lg transition-colors group"
                >
                  <svg
                    className="w-5 h-5 text-gray-500 group-hover:text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                    />
                  </svg>
                  <span className="font-medium">Manage Orders</span>
                </button>

                <button
                  onClick={() => {
                    router.push("/stocks");
                    setShowMenu(false);
                  }}
                  className="w-full flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-blue-50 rounded-lg transition-colors group"
                >
                  <svg
                    className="w-5 h-5 text-gray-500 group-hover:text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                    />
                  </svg>
                  <span className="font-medium">Manage Stocks</span>
                </button>

                <button
                  onClick={() => {
                    router.push("/rawItems/manageRawItems");
                    setShowMenu(false);
                  }}
                  className="w-full flex items-center gap-3 px-4 py-3 bg-blue-50 text-blue-600 rounded-lg transition-colors group"
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
                      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                    />
                  </svg>
                  <span className="font-medium">Manage Raw Materials</span>
                </button>

                <div className="border-t border-gray-200 my-4"></div>

                <button
                  onClick={handleLogout}
                  className="w-full flex items-center gap-3 px-4 py-3 text-red-600 hover:bg-red-50 rounded-lg transition-colors group"
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
                      d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                    />
                  </svg>
                  <span className="font-medium">Logout</span>
                </button>
              </nav>

              {/* Footer */}
              <div className="p-4 border-t border-gray-200">
                <p className="text-xs text-gray-500 text-center">
                  OZONE Mineral Water © 2025
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
}

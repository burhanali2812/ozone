"use client";

import { useState, useEffect } from "react";
import Sidebar from "@/components/Sidebar";
import SidebarLayout from "@/components/SidebarLayout";

export default function CashFlowPage() {
  const [cashFlows, setCashFlows] = useState([]);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    type: "In",
    source: "",
    amount: "",
    description: "",
    date: new Date().toISOString().split("T")[0],
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [totalIn, setTotalIn] = useState(0);
  const [totalOut, setTotalOut] = useState(0);

  // Fetch cash flows on component mount
  useEffect(() => {
    fetchCashFlows();
  }, []);

  const fetchCashFlows = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/cashFlow/cashFlow.js");
      const data = await response.json();
      setCashFlows(data);
      calculateTotals(data);
    } catch (error) {
      console.error("Error fetching cash flows:", error);
      setErrorMessage("Failed to fetch cash flow records");
    } finally {
      setLoading(false);
    }
  };

  const calculateTotals = (data) => {
    let inTotal = 0;
    let outTotal = 0;
    data.forEach((item) => {
      if (item.type === "In") {
        inTotal += item.amount;
      } else {
        outTotal += item.amount;
      }
    });
    setTotalIn(inTotal);
    setTotalOut(outTotal);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!formData.source.trim()) {
      setErrorMessage("Please enter a source");
      return;
    }
    if (!formData.amount || parseFloat(formData.amount) <= 0) {
      setErrorMessage("Please enter a valid amount");
      return;
    }
    if (!formData.description.trim()) {
      setErrorMessage("Please enter a description");
      return;
    }

    try {
      setLoading(true);
      const response = await fetch("/api/cashFlow/cashFlow.js", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          amount: parseFloat(formData.amount),
          date: new Date(formData.date),
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setSuccessMessage("Cash flow entry added successfully!");
        setFormData({
          type: "In",
          source: "",
          amount: "",
          description: "",
          date: new Date().toISOString().split("T")[0],
        });
        setErrorMessage("");
        await fetchCashFlows();
      } else {
        setErrorMessage(result.message || "Failed to add cash flow entry");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setErrorMessage("An error occurred while adding the entry");
    } finally {
      setLoading(false);
    }
  };

  const handleClearMessages = () => {
    setSuccessMessage("");
    setErrorMessage("");
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "PKR",
      minimumFractionDigits: 0,
    }).format(amount);
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <SidebarLayout>
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-white shadow-sm border-b border-gray-200">
          <div className="px-6 py-4">
            <h1 className="text-3xl font-bold text-gray-900">Cash Flow Management</h1>
            <p className="text-gray-600 mt-1">Track all cash in and cash out transactions</p>
          </div>
        </div>

        <div className="p-6 max-w-7xl mx-auto">
          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-white rounded-lg shadow p-6 border-l-4 border-green-500">
              <p className="text-gray-600 text-sm font-medium">Total Cash In</p>
              <p className="text-3xl font-bold text-green-600 mt-2">
                {formatCurrency(totalIn)}
              </p>
            </div>
            <div className="bg-white rounded-lg shadow p-6 border-l-4 border-red-500">
              <p className="text-gray-600 text-sm font-medium">Total Cash Out</p>
              <p className="text-3xl font-bold text-red-600 mt-2">
                {formatCurrency(totalOut)}
              </p>
            </div>
            <div className={`bg-white rounded-lg shadow p-6 border-l-4 ${totalIn - totalOut >= 0 ? 'border-blue-500' : 'border-orange-500'}`}>
              <p className="text-gray-600 text-sm font-medium">Net Balance</p>
              <p className={`text-3xl font-bold mt-2 ${totalIn - totalOut >= 0 ? 'text-blue-600' : 'text-orange-600'}`}>
                {formatCurrency(totalIn - totalOut)}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Form Section */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-md p-6 sticky top-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Add New Entry</h2>

                {successMessage && (
                  <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-lg text-green-700 text-sm">
                    {successMessage}
                  </div>
                )}

                {errorMessage && (
                  <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                    {errorMessage}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Type Selection */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Transaction Type
                    </label>
                    <div className="flex gap-4">
                      <label className="flex items-center cursor-pointer">
                        <input
                          type="radio"
                          name="type"
                          value="In"
                          checked={formData.type === "In"}
                          onChange={handleInputChange}
                          className="w-4 h-4 text-green-600"
                        />
                        <span className="ml-2 text-sm text-gray-700">Cash In</span>
                      </label>
                      <label className="flex items-center cursor-pointer">
                        <input
                          type="radio"
                          name="type"
                          value="Out"
                          checked={formData.type === "Out"}
                          onChange={handleInputChange}
                          className="w-4 h-4 text-red-600"
                        />
                        <span className="ml-2 text-sm text-gray-700">Cash Out</span>
                      </label>
                    </div>
                  </div>

                  {/* Source */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Source
                    </label>
                    <input
                      type="text"
                      name="source"
                      value={formData.source}
                      onChange={handleInputChange}
                      placeholder="e.g., Customer Payment, Supplier Invoice"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  {/* Amount */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Amount
                    </label>
                    <input
                      type="number"
                      name="amount"
                      value={formData.amount}
                      onChange={handleInputChange}
                      placeholder="0.00"
                      step="0.01"
                      min="0"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  {/* Description */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Description
                    </label>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      placeholder="Enter transaction details..."
                      rows="3"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  {/* Date */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Date
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-medium py-2 rounded-lg transition duration-200"
                  >
                    {loading ? "Adding..." : "Add Entry"}
                  </button>
                </form>
              </div>
            </div>

            {/* Transactions List Section */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
                  <h2 className="text-xl font-bold text-gray-900">Recent Transactions</h2>
                  <button
                    onClick={fetchCashFlows}
                    disabled={loading}
                    className="px-3 py-1 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-lg text-sm transition"
                  >
                    {loading ? "Refreshing..." : "Refresh"}
                  </button>
                </div>

                {cashFlows.length === 0 ? (
                  <div className="px-6 py-12 text-center">
                    <p className="text-gray-500">No cash flow entries yet</p>
                  </div>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-gray-50 border-b border-gray-200">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase">
                            Type
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase">
                            Source
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase">
                            Amount
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase">
                            Description
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase">
                            Date
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {cashFlows.map((cashFlow, index) => (
                          <tr
                            key={cashFlow._id || index}
                            className="border-b border-gray-200 hover:bg-gray-50 transition"
                          >
                            <td className="px-6 py-4">
                              <span
                                className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                                  cashFlow.type === "In"
                                    ? "bg-green-100 text-green-800"
                                    : "bg-red-100 text-red-800"
                                }`}
                              >
                                {cashFlow.type === "In" ? "▲ In" : "▼ Out"}
                              </span>
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-900 font-medium">
                              {cashFlow.source}
                            </td>
                            <td className="px-6 py-4">
                              <span
                                className={`text-sm font-semibold ${
                                  cashFlow.type === "In"
                                    ? "text-green-600"
                                    : "text-red-600"
                                }`}
                              >
                                {cashFlow.type === "In" ? "+" : "-"}
                                {formatCurrency(cashFlow.amount)}
                              </span>
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-600">
                              {cashFlow.description}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-600">
                              {formatDate(cashFlow.date)}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </SidebarLayout>
  );
}

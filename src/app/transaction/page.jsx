"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";

export default function TransactionPage() {
  const router = useRouter();
  const [transactions, setTransactions] = useState([]);
  const [filteredTransactions, setFilteredTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  const [showAddModal, setShowAddModal] = useState(false);
  const [userName, setUserName] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");

  // Form state
  const [newTransaction, setNewTransaction] = useState({
    doBy: "",
    amount: 0,
    purpose: "",
  });

  // Fetch transactions
  const getTransactions = async () => {
    try {
      setLoading(true);
      const res = await axios.get("/api/transaction");
      if (res.data.success) {
        setTransactions(res.data.data);
        setFilteredTransactions(res.data.data);
      } else {
        setTransactions([]);
        setFilteredTransactions([]);
      }
    } catch (error) {
      console.error("Error fetching transactions:", error);
      toast.error("Failed to fetch transactions");
      setTransactions([]);
      setFilteredTransactions([]);
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
    try {
      const userData = JSON.parse(user);
      setUserName(userData.name || "User");
    } catch (error) {
      console.error("Error parsing user data:", error);
      setUserName("User");
    }
    getTransactions();
  }, []);



  // Calculate totals for each person
  const burhanTotal = transactions
    .filter((t) => t.doBy === "Burhan Ali")
    .reduce((sum, t) => sum + t.amount, 0);

  const sharjeelTotal = transactions
    .filter((t) => t.doBy === "Sharjeel Khan")
    .reduce((sum, t) => sum + t.amount, 0);

  // Calculate difference
  const difference = Math.abs(burhanTotal - sharjeelTotal);
  const isBurhanHigher = burhanTotal > sharjeelTotal;
  const isSharjeelHigher = sharjeelTotal > burhanTotal;

  // Filter transactions
  const handleFilter = (person) => {
    setActiveFilter(person);
    if (person === "all") {
      setFilteredTransactions(transactions);
    } else {
      setFilteredTransactions(transactions.filter((t) => t.doBy === person));
    }
  };

  // Add transaction
  const handleAddTransaction = async () => {
    if (
      !newTransaction.doBy ||
      !newTransaction.purpose ||
      newTransaction.amount <= 0
    ) {
      toast.error("Please fill all fields correctly");
      return;
    }

    try {
      const res = await axios.post("/api/transaction", newTransaction);
      if (res.data.success) {
        toast.success("Transaction added successfully!");
        setTransactions([res.data.data, ...transactions]);

        // Update filtered list if needed
        if (activeFilter === "all" || activeFilter === newTransaction.doBy) {
          setFilteredTransactions([res.data.data, ...filteredTransactions]);
        }

        setShowAddModal(false);
        setNewTransaction({ doBy: "", amount: 0, purpose: "" });
      }
    } catch (error) {
      console.error("Error adding transaction:", error);
      toast.error("Failed to add transaction");
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

  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 py-12">
      <Toaster />
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-8 flex flex-col md:flex-row justify-between items-center gap-4">
        

          {/* Right - Add Transaction Button */}
          <button
            onClick={() => setShowAddModal(true)}
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
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
            Add Transaction
          </button>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Burhan Ali Card */}
          <div
            onClick={() => handleFilter("Burhan Ali")}
            className={`bg-white rounded-2xl shadow-lg p-6 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl ${
              activeFilter === "Burhan Ali" ? "ring-4 ring-purple-500" : ""
            }`}
          >
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl flex items-center justify-center text-white font-bold text-2xl">
                BA
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-900 mb-1">
                  Burhan Ali
                </h3>
                <p className="text-sm text-gray-600 mb-2">Total Transactions</p>
                <p className="text-2xl font-bold text-purple-600">
                  Rs. {burhanTotal.toLocaleString()}/-
                </p>
              </div>
            </div>

            {/* Status Badge */}
            {isBurhanHigher ? (
              <div className="mt-4 bg-green-50 border border-green-200 rounded-lg p-3">
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
                    <p className="text-sm font-semibold">Higher by</p>
                    <p className="text-lg font-bold">
                      Rs. {difference.toLocaleString()}/-
                    </p>
                  </div>
                </div>
              </div>
            ) : isSharjeelHigher ? (
              <div className="mt-4 bg-red-50 border border-red-200 rounded-lg p-3">
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
                    <p className="text-sm font-semibold">Lower by</p>
                    <p className="text-lg font-bold">
                      Rs. {difference.toLocaleString()}/-
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="mt-4 bg-blue-50 border border-blue-200 rounded-lg p-3">
                <div className="flex items-center gap-2 text-blue-700">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12zm-.75-8.25a.75.75 0 011.5 0v3.69l2.28 2.28a.75.75 0 11-1.06 1.06l-2.5-2.5a.75.75 0 01-.22-.53V7.75z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p className="text-sm font-semibold">Equal Balance</p>
                </div>
              </div>
            )}

            {activeFilter === "Burhan Ali" && (
              <div className="mt-3 text-sm text-purple-600 font-semibold flex items-center gap-2">
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

          {/* Sharjeel Khan Card */}
          <div
            onClick={() => handleFilter("Sharjeel Khan")}
            className={`bg-white rounded-2xl shadow-lg p-6 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl ${
              activeFilter === "Sharjeel Khan" ? "ring-4 ring-pink-500" : ""
            }`}
          >
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-700 rounded-xl flex items-center justify-center text-white font-bold text-2xl">
                SK
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-900 mb-1">
                  Sharjeel Khan
                </h3>
                <p className="text-sm text-gray-600 mb-2">Total Transactions</p>
                <p className="text-2xl font-bold text-pink-600">
                  Rs. {sharjeelTotal.toLocaleString()}/-
                </p>
              </div>
            </div>

            {/* Status Badge */}
            {isSharjeelHigher ? (
              <div className="mt-4 bg-green-50 border border-green-200 rounded-lg p-3">
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
                    <p className="text-sm font-semibold">Higher by</p>
                    <p className="text-lg font-bold">
                      Rs. {difference.toLocaleString()}/-
                    </p>
                  </div>
                </div>
              </div>
            ) : isBurhanHigher ? (
              <div className="mt-4 bg-red-50 border border-red-200 rounded-lg p-3">
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
                    <p className="text-sm font-semibold">Lower by</p>
                    <p className="text-lg font-bold">
                      Rs. {difference.toLocaleString()}/-
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="mt-4 bg-blue-50 border border-blue-200 rounded-lg p-3">
                <div className="flex items-center gap-2 text-blue-700">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12zm-.75-8.25a.75.75 0 011.5 0v3.69l2.28 2.28a.75.75 0 11-1.06 1.06l-2.5-2.5a.75.75 0 01-.22-.53V7.75z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p className="text-sm font-semibold">Equal Balance</p>
                </div>
              </div>
            )}

            {activeFilter === "Sharjeel Khan" && (
              <div className="mt-3 text-sm text-pink-600 font-semibold flex items-center gap-2">
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

          {/* All Transactions Card */}
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
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-900 mb-1">
                  All Transactions
                </h3>
                <p className="text-sm text-gray-600 mb-2">Total Amount</p>
                <p className="text-2xl font-bold text-blue-600">
                  Rs. {(burhanTotal + sharjeelTotal).toLocaleString()}/-
                </p>
              </div>
            </div>

            {/* Summary Badge */}
            <div className="mt-4 bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-lg p-3">
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div>
                  <p className="text-gray-600">Burhan Ali</p>
                  <p className="font-bold text-purple-600">
                    Rs. {burhanTotal.toLocaleString()}/-
                  </p>
                </div>
                <div>
                  <p className="text-gray-600">Sharjeel Khan</p>
                  <p className="font-bold text-pink-600">
                    Rs. {sharjeelTotal.toLocaleString()}/-
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

        {/* Transactions Table */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="p-6 bg-gradient-to-r from-purple-50 to-pink-50">
            <h2 className="text-xl font-bold text-gray-900">
              {activeFilter === "all"
                ? "All Transactions"
                : `${activeFilter}'s Transactions`}
            </h2>
            <p className="text-sm text-gray-600 mt-1">
              Showing {filteredTransactions.length} transaction
              {filteredTransactions.length !== 1 ? "s" : ""}
            </p>
          </div>

          {loading ? (
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-purple-600"></div>
            </div>
          ) : filteredTransactions.length > 0 ? (
            <div className="overflow-x-auto">
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
                  {filteredTransactions.map((transaction) => (
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
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm ${
                              transaction.doBy === "Burhan Ali"
                                ? "bg-gradient-to-br from-purple-500 to-purple-700"
                                : "bg-gradient-to-br from-pink-500 to-pink-700"
                            }`}
                          >
                            {transaction.doBy === "Burhan Ali" ? "BA" : "SK"}
                          </div>
                          <span className="font-medium text-gray-900">
                            {transaction.doBy}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-gray-700">
                          {transaction.purpose}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <span
                          className={`text-lg font-bold ${
                            transaction.doBy === "Burhan Ali"
                              ? "text-purple-600"
                              : "text-pink-600"
                          }`}
                        >
                          Rs. {transaction.amount.toLocaleString()}/-
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
                      Total:
                    </td>
                    <td className="px-6 py-4 text-right">
                      <span className="text-xl font-bold text-blue-600">
                        Rs.{" "}
                        {filteredTransactions
                          .reduce((sum, t) => sum + t.amount, 0)
                          .toLocaleString()}
                        /-
                      </span>
                    </td>
                  </tr>
                </tfoot>
              </table>
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
                No Transactions Found
              </h3>
              <p className="text-gray-600 mb-6">
                {activeFilter === "all"
                  ? "Get started by adding your first transaction"
                  : `No transactions found for ${activeFilter}`}
              </p>
              <button
                onClick={() => setShowAddModal(true)}
                className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors font-medium"
              >
                Add Transaction
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Add Transaction Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full">
            <div className="p-8">
              {/* Modal Header */}
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    Add New Transaction
                  </h2>
                  <p className="text-sm text-gray-600 mt-1">
                    Enter transaction details below
                  </p>
                </div>
                <button
                  onClick={() => {
                    setShowAddModal(false);
                    setNewTransaction({ doBy: "", amount: 0, purpose: "" });
                  }}
                  className="text-gray-500 hover:text-gray-700 text-2xl"
                >
                  ×
                </button>
              </div>

              {/* Form */}
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Done By *
                  </label>
                  <select
                    value={newTransaction.doBy}
                    onChange={(e) =>
                      setNewTransaction({
                        ...newTransaction,
                        doBy: e.target.value,
                      })
                    }
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-purple-600 focus:outline-none"
                  >
                    <option value="">Select Person</option>
                    <option value="Burhan Ali">Burhan Ali</option>
                    <option value="Sharjeel Khan">Sharjeel Khan</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Amount (Rs.) *
                  </label>
                  <input
                    type="number"
                    value={newTransaction.amount}
                    onChange={(e) =>
                      setNewTransaction({
                        ...newTransaction,
                        amount: parseFloat(e.target.value) || 0,
                      })
                    }
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-purple-600 focus:outline-none"
                    placeholder="Enter amount"
                    min="0"
                    step="0.01"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Purpose *
                  </label>
                  <textarea
                    value={newTransaction.purpose}
                    onChange={(e) =>
                      setNewTransaction({
                        ...newTransaction,
                        purpose: e.target.value,
                      })
                    }
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-purple-600 focus:outline-none resize-none"
                    placeholder="Enter transaction purpose"
                    rows="4"
                  />
                </div>

                {/* Preview */}
                {newTransaction.doBy && newTransaction.amount > 0 && (
                  <div className="bg-purple-50 rounded-lg p-4">
                    <p className="text-sm text-gray-600 mb-2">
                      Transaction Preview:
                    </p>
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-semibold text-gray-900">
                          {newTransaction.doBy}
                        </p>
                        <p className="text-sm text-gray-600">
                          {newTransaction.purpose || "No purpose specified"}
                        </p>
                      </div>
                      <p className="text-2xl font-bold text-purple-600">
                        Rs. {newTransaction.amount.toLocaleString()}/-
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 mt-6">
                <button
                  onClick={handleAddTransaction}
                  className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg hover:shadow-lg transition-all font-medium"
                >
                  Add Transaction
                </button>
                <button
                  onClick={() => {
                    setShowAddModal(false);
                    setNewTransaction({ doBy: "", amount: 0, purpose: "" });
                  }}
                  className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-lg hover:bg-gray-300 transition-colors font-medium"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}


    </section>
  );
}

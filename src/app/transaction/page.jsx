"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";

export default function TransactionPage() {
  const router = useRouter();
  const [transactions, setTransactions] = useState([]);
  const [filteredTransactions, setFilteredTransactions] = useState([]);
  const [currentBalance, setCurrentBalance] = useState(0);
  const [loading, setLoading] = useState(true);
  const [showAddModal, setShowAddModal] = useState(false);
  const [userName, setUserName] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");
  const [categoryFilter, setCategoryFilter] = useState("all");

  // Form state
  const [newTransaction, setNewTransaction] = useState({
    doBy: "",
    amount: 0,
    purpose: "",
    type: "out",
    category: "other",
  });

  // Fetch transactions and balance
  const getTransactions = async () => {
    try {
      setLoading(true);
      const [transRes, balanceRes] = await Promise.all([
        axios.get("/api/transaction"),
        axios.get("/api/balance"),
      ]);

      if (transRes.data.success) {
        setTransactions(transRes.data.data);
        setFilteredTransactions(transRes.data.data);
      }

      if (balanceRes.data.success) {
        setCurrentBalance(balanceRes.data.balance);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      toast.error("Failed to fetch transactions");
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
    try {
      const userData = JSON.parse(user);
      setUserName(userData.name || "User");
    } catch (error) {
      console.error("Error parsing user data:", error);
      setUserName("User");
    }
    getTransactions();
  }, []);

  // Apply filters
  useEffect(() => {
    let filtered = transactions;

    // Filter by type
    if (activeFilter !== "all") {
      filtered = filtered.filter((t) => t.type === activeFilter);
    }

    // Filter by category
    if (categoryFilter !== "all") {
      filtered = filtered.filter((t) => t.category === categoryFilter);
    }

    setFilteredTransactions(filtered);
  }, [activeFilter, categoryFilter, transactions]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTransaction((prev) => ({
      ...prev,
      [name]: name === "amount" ? parseFloat(value) || 0 : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !newTransaction.doBy.trim() ||
      !newTransaction.purpose.trim() ||
      newTransaction.amount <= 0
    ) {
      toast.error("Please fill all fields correctly");
      return;
    }

    try {
      const response = await axios.post("/api/transaction", {
        ...newTransaction,
        category: newTransaction.category,
      });

      if (response.data.success) {
        toast.success("Transaction recorded successfully!");
        setCurrentBalance(response.data.newBalance);
        setNewTransaction({
          doBy: "",
          amount: 0,
          purpose: "",
          type: "out",
          category: "other",
        });
        setShowAddModal(false);
        await getTransactions();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error(error.response?.data?.message || "Failed to record transaction");
    }
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

  const getCategoryColor = (category) => {
    switch (category) {
      case "sales":
        return "bg-green-100 text-green-800";
      case "purchase":
        return "bg-orange-100 text-orange-800";
      case "expense":
        return "bg-red-100 text-red-800";
      default:
        return "bg-blue-100 text-blue-800";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Toaster />

      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="px-6 py-4">
          <h1 className="text-3xl font-bold text-gray-900">Transaction Management</h1>
          <p className="text-gray-600 mt-1">Welcome, {userName}</p>
        </div>
      </div>

      <div className="p-6 max-w-7xl mx-auto">
        {/* Balance Card */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg shadow-lg p-8 mb-8 text-white">
          <p className="text-blue-100 text-sm font-medium">Current Account Balance</p>
          <h2 className="text-4xl font-bold mt-2">{formatCurrency(currentBalance)}</h2>
          <p className="text-blue-100 text-sm mt-2">Real-time balance tracking</p>
        </div>

        {/* Add Transaction Button */}
        <div className="mb-6">
          <button
            onClick={() => setShowAddModal(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition"
          >
            + Add Transaction
          </button>
        </div>

        {/* Add Transaction Modal */}
        {showAddModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-md">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Record Transaction</h2>

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
                        value="in"
                        checked={newTransaction.type === "in"}
                        onChange={handleInputChange}
                        className="w-4 h-4"
                      />
                      <span className="ml-2 text-sm">Money In (Sales)</span>
                    </label>
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="type"
                        value="out"
                        checked={newTransaction.type === "out"}
                        onChange={handleInputChange}
                        className="w-4 h-4"
                      />
                      <span className="ml-2 text-sm">Money Out (Purchase)</span>
                    </label>
                  </div>
                </div>

                {/* Category */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Category
                  </label>
                  <select
                    name="category"
                    value={newTransaction.category}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="other">Other</option>
                    <option value="sales">Sales</option>
                    <option value="purchase">Purchase</option>
                    <option value="expense">Expense</option>
                  </select>
                </div>

                {/* Amount */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Amount
                  </label>
                  <input
                    type="number"
                    name="amount"
                    value={newTransaction.amount}
                    onChange={handleInputChange}
                    placeholder="0.00"
                    step="0.01"
                    min="0"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Done By */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Done By
                  </label>
                  <input
                    type="text"
                    name="doBy"
                    value={newTransaction.doBy}
                    onChange={handleInputChange}
                    placeholder="Person name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Purpose */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Purpose
                  </label>
                  <textarea
                    name="purpose"
                    value={newTransaction.purpose}
                    onChange={handleInputChange}
                    placeholder="Transaction details..."
                    rows="3"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Buttons */}
                <div className="flex gap-3 pt-4">
                  <button
                    type="submit"
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg transition"
                  >
                    Record Transaction
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowAddModal(false)}
                    className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium py-2 rounded-lg transition"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-md p-4 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Type</label>
              <select
                value={activeFilter}
                onChange={(e) => setActiveFilter(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All</option>
                <option value="in">Money In</option>
                <option value="out">Money Out</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
              <select
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All</option>
                <option value="sales">Sales</option>
                <option value="purchase">Purchase</option>
                <option value="expense">Expense</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="flex items-end">
              <button
                onClick={() => {
                  setActiveFilter("all");
                  setCategoryFilter("all");
                }}
                className="w-full px-3 py-2 bg-gray-400 hover:bg-gray-500 text-white rounded-lg transition"
              >
                Clear Filters
              </button>
            </div>
          </div>
        </div>

        {/* Transactions Table */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-xl font-bold text-gray-900">
              Transaction History ({filteredTransactions.length})
            </h2>
          </div>

          {loading ? (
            <div className="px-6 py-12 text-center">
              <p className="text-gray-500">Loading transactions...</p>
            </div>
          ) : filteredTransactions.length === 0 ? (
            <div className="px-6 py-12 text-center">
              <p className="text-gray-500">No transactions found</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase">
                      Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase">
                      Type
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase">
                      Category
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase">
                      Done By
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase">
                      Purpose
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase">
                      Amount
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase">
                      Balance After
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filteredTransactions.map((transaction, index) => (
                    <tr
                      key={transaction._id || index}
                      className="border-b border-gray-200 hover:bg-gray-50 transition"
                    >
                      <td className="px-6 py-4 text-sm text-gray-600">
                        {formatDate(transaction.createdAt)}
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`px-3 py-1 rounded-full text-sm font-medium ${
                            transaction.type === "in"
                              ? "bg-green-100 text-green-800"
                              : "bg-red-100 text-red-800"
                          }`}
                        >
                          {transaction.type === "in" ? "IN" : "OUT"}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(
                            transaction.category
                          )}`}
                        >
                          {transaction.category.toUpperCase()}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">
                        {transaction.doBy}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        {transaction.purpose}
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`text-sm font-semibold ${
                            transaction.type === "in"
                              ? "text-green-600"
                              : "text-red-600"
                          }`}
                        >
                          {transaction.type === "in" ? "+" : "-"}
                          {formatCurrency(transaction.amount)}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-sm font-semibold text-blue-600">
                          {formatCurrency(transaction.balanceAfter)}
                        </span>
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
  );
}

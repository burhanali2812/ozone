"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { toast, Toaster } from "react-hot-toast";

export default function BalanceInitialization() {
  const [currentBalance, setCurrentBalance] = useState(0);
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchBalance = async () => {
    try {
      setLoading(true);
      const response = await axios.get("/api/balance");
      if (response.data.success) {
        setCurrentBalance(response.data.balance);
      }
    } catch (error) {
      console.error("Error fetching balance:", error);
      toast.error("Failed to fetch balance");
    } finally {
      setLoading(false);
    }
  };

  const recalculateBalance = async () => {
    try {
      setLoading(true);
      const response = await axios.get("/api/balance?action=recalculate");
      if (response.data.success) {
        setCurrentBalance(response.data.balance);
        setDetails(response.data.details);
        toast.success("Balance recalculated successfully!");
      }
    } catch (error) {
      console.error("Error recalculating balance:", error);
      toast.error("Failed to recalculate balance");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBalance();
  }, []);

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "PKR",
      minimumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Toaster />

      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="px-6 py-4">
          <h1 className="text-3xl font-bold text-gray-900">Balance Management</h1>
          <p className="text-gray-600 mt-1">Initialize and manage company account balance</p>
        </div>
      </div>

      <div className="p-6 max-w-4xl mx-auto">
        {/* Current Balance Card */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg shadow-lg p-8 mb-8 text-white">
          <p className="text-blue-100 text-sm font-medium">Current Account Balance</p>
          <h2 className="text-5xl font-bold mt-2">{formatCurrency(currentBalance)}</h2>
          <p className="text-blue-100 text-sm mt-2">
            Formula: Total Sales - Ozone Expenses = Balance
          </p>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <button
            onClick={recalculateBalance}
            disabled={loading}
            className="bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white px-6 py-3 rounded-lg font-medium transition flex items-center justify-center gap-2"
          >
            {loading ? "Calculating..." : "🔄 Recalculate Balance from Sales & Transactions"}
          </button>
          <button
            onClick={fetchBalance}
            disabled={loading}
            className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white px-6 py-3 rounded-lg font-medium transition flex items-center justify-center gap-2"
          >
            {loading ? "Loading..." : "🔄 Refresh Current Balance"}
          </button>
        </div>

        {/* Details Card */}
        {details && (
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Balance Calculation Details</h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {/* Total Sales */}
              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded">
                <p className="text-sm font-medium text-gray-600">Total Sales</p>
                <p className="text-3xl font-bold text-green-600 mt-2">
                  {formatCurrency(details.totalSales)}
                </p>
                <p className="text-xs text-gray-500 mt-1">All paid & partially-paid orders</p>
              </div>

              {/* Ozone Expenses */}
              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded">
                <p className="text-sm font-medium text-gray-600">Ozone Expenses</p>
                <p className="text-3xl font-bold text-red-600 mt-2">
                  {formatCurrency(details.ozoneExpenses)}
                </p>
                <p className="text-xs text-gray-500 mt-1">Total transactions by Ozone</p>
              </div>

              {/* Calculated Balance */}
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded">
                <p className="text-sm font-medium text-gray-600">Calculated Balance</p>
                <p className="text-3xl font-bold text-blue-600 mt-2">
                  {formatCurrency(details.calculatedBalance)}
                </p>
                <p className="text-xs text-gray-500 mt-1">Sales - Expenses</p>
              </div>
            </div>

            {/* Calculation Formula */}
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-4">Calculation Formula</h4>
              <div className="space-y-2 text-sm">
                <p>
                  <span className="font-semibold">Total Sales:</span> Sum of all orders with
                  payment status "paid" or "partially-paid"
                </p>
                <p>
                  <span className="font-semibold">Ozone Expenses:</span> Sum of all transactions
                  where type = "out" and doBy = "Ozone"
                </p>
                <p className="pt-2 border-t border-gray-300 mt-4">
                  <span className="font-bold text-lg">
                    Balance = {formatCurrency(details.totalSales)} - {formatCurrency(details.ozoneExpenses)} ={" "}
                    {formatCurrency(details.calculatedBalance)}
                  </span>
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Information Section */}
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h4 className="text-lg font-semibold text-blue-900 mb-3">ℹ️ How This Works</h4>
          <ul className="space-y-2 text-sm text-blue-800">
            <li>✅ <strong>Total Sales:</strong> Automatically sums all orders where customers have paid or partially paid</li>
            <li>✅ <strong>Ozone Expenses:</strong> Automatically sums all money transactions recorded by "Ozone" person/department</li>
            <li>✅ <strong>Current Balance:</strong> The result of Sales - Expenses</li>
            <li>✅ <strong>Recalculation:</strong> Use "Recalculate Balance" button to sync with all historical data</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

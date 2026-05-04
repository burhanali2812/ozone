"use client";
import React, { useState, useEffect } from "react";

function MyCustomerPage() {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("orders");

  useEffect(() => {
    fetchAndGroupOrders();
  }, []);

  const fetchAndGroupOrders = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/orders");
      const data = await response.json();

      // Handle different response formats
      let orders = Array.isArray(data) ? data : data.data || data.orders || [];

      // Filter out deleted orders
      orders = orders.filter((order) => !order.isDeleted);

      // Group orders by customer contact
      const groupedData = {};

      orders.forEach((order) => {
        const contact = order.shopContact || "Unknown";
        if (!groupedData[contact]) {
          groupedData[contact] = {
            shopName: order.shopName || "Unknown",
            shopAddress: order.shopAddress || "N/A",
            shopContact: contact,
            orders: [],
            totalOrders: 0,
            totalPrice: 0,
            totalQuantity: 0,
          };
        }

        groupedData[contact].orders.push(order);
        groupedData[contact].totalOrders += 1;
        groupedData[contact].totalPrice += order.totalPrice || 0;

        // Sum up quantities
        if (order.orderItems && Array.isArray(order.orderItems)) {
          order.orderItems.forEach((item) => {
            if (item.quantity) {
              groupedData[contact].totalQuantity += item.quantity;
            }
          });
        }
      });

      const customersList = Object.values(groupedData);
      setCustomers(customersList);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching orders:", error);
      setLoading(false);
    }
  };

  // Filter and sort customers
  const filteredCustomers = customers
    .filter(
      (customer) =>
        customer.shopName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        customer.shopContact.includes(searchTerm),
    )
    .sort((a, b) => {
      if (sortBy === "orders") {
        return b.totalOrders - a.totalOrders;
      } else if (sortBy === "price") {
        return b.totalPrice - a.totalPrice;
      } else if (sortBy === "quantity") {
        return b.totalQuantity - a.totalQuantity;
      } else if (sortBy === "name") {
        return a.shopName.localeCompare(b.shopName);
      }
      return 0;
    });

  const formatCurrency = (amount) => {
    return amount.toFixed(2);
  };

  const totalStats = {
    totalCustomers: customers.length,
    totalOrders: customers.reduce((sum, c) => sum + c.totalOrders, 0),
    totalRevenue: customers.reduce((sum, c) => sum + c.totalPrice, 0),
    totalQuantity: customers.reduce((sum, c) => sum + c.totalQuantity, 0),
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-6">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            👥 Customer Dashboard
          </h1>
          <p className="text-gray-600">
            View all customers and their order statistics
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-500">
            <p className="text-gray-600 text-sm mb-1">Total Customers</p>
            <p className="text-3xl font-bold text-blue-600">
              {totalStats.totalCustomers}
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-green-500">
            <p className="text-gray-600 text-sm mb-1">Total Orders</p>
            <p className="text-3xl font-bold text-green-600">
              {totalStats.totalOrders}
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-purple-500">
            <p className="text-gray-600 text-sm mb-1">Total Revenue</p>
            <p className="text-3xl font-bold text-purple-600">
              Rs. {formatCurrency(totalStats.totalRevenue)}
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-orange-500">
            <p className="text-gray-600 text-sm mb-1">Total Quantity</p>
            <p className="text-3xl font-bold text-orange-600">
              {totalStats.totalQuantity}
            </p>
          </div>
        </div>

        {/* Filters & Search */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Search by Name or Contact
              </label>
              <input
                type="text"
                placeholder="Search customer name or contact..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Sort By
              </label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="orders">Most Orders</option>
                <option value="price">Highest Revenue</option>
                <option value="quantity">Most Quantity</option>
                <option value="name">Name (A-Z)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {loading ? (
            <div className="p-8 text-center">
              <p className="text-gray-600">Loading customer data...</p>
            </div>
          ) : filteredCustomers.length === 0 ? (
            <div className="p-8 text-center">
              <p className="text-gray-600">No customers found</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-bold">
                      Customer Name
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-bold">
                      Contact
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-bold">
                      Address
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-bold">
                      Total Orders
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-bold">
                      Total Quantity
                    </th>
                    <th className="px-6 py-4 text-right text-sm font-bold">
                      Total Revenue
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {filteredCustomers.map((customer, index) => (
                    <tr
                      key={index}
                      className="hover:bg-blue-50 transition-colors"
                    >
                      <td className="px-6 py-4">
                        <div className="font-semibold text-gray-900">
                          {customer.shopName}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-gray-700">
                          {customer.shopContact}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-gray-700 text-sm">
                          {customer.shopAddress}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-semibold">
                          {customer.totalOrders}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full font-semibold">
                          {customer.totalQuantity}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="font-bold text-purple-600">
                          Rs. {formatCurrency(customer.totalPrice)}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Summary */}
        <div className="bg-white rounded-lg shadow-lg p-6 mt-6">
          <p className="text-gray-600 text-center">
            Showing {filteredCustomers.length} of {customers.length} customers
          </p>
        </div>
      </div>
    </div>
  );
}

export default MyCustomerPage;

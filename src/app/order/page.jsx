"use client";
import { useState } from "react";

export default function Order() {
  const [formData, setFormData] = useState({
    shopName: "",
    shopAddress: "",
    whatsappContact: "",
  });

  const [orders, setOrders] = useState([]);
  const [currentOrder, setCurrentOrder] = useState({
    type: "500ml",
    quantity: 1,
  });

  const productPrices = {
    "500ml": 20,
    "1500ml": 50,
    "6liter": 120,
  };

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddOrder = () => {
    if (currentOrder.quantity > 0) {
      const existingOrderIndex = orders.findIndex(
        (order) => order.type === currentOrder.type
      );

      if (existingOrderIndex !== -1) {
        const updatedOrders = [...orders];
        updatedOrders[existingOrderIndex].quantity += currentOrder.quantity;
        setOrders(updatedOrders);
      } else {
        setOrders([...orders, { ...currentOrder }]);
      }

      setCurrentOrder({ type: "500ml", quantity: 1 });
    }
  };

  const handleRemoveOrder = (index) => {
    setOrders(orders.filter((_, i) => i !== index));
  };

  const handleUpdateQuantity = (index, newQuantity) => {
    if (newQuantity > 0) {
      const updatedOrders = [...orders];
      updatedOrders[index].quantity = parseInt(newQuantity);
      setOrders(updatedOrders);
    }
  };

  const calculateTotal = () => {
    return orders.reduce((total, order) => {
      return total + productPrices[order.type] * order.quantity;
    }, 0);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const orderDetails = {
      ...formData,
      orders,
      total: calculateTotal(),
      paymentStatus: "unpaid",
      orderDate: new Date().toLocaleDateString(),
    };
    console.log("Order Submitted:", orderDetails);
    alert("Order placed successfully! Check console for details.");
  };

  const total = calculateTotal();

  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 py-12">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
            Place Your Order
          </h1>
          <p className="text-xl text-gray-600">OZONE Mineral Water</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Order Form Section */}
            <div className="lg:col-span-2 space-y-6">
              {/* Shop Details Card */}
              <div className="bg-white rounded-3xl shadow-xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Shop Details
                </h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Shop Name *
                    </label>
                    <input
                      type="text"
                      name="shopName"
                      required
                      value={formData.shopName}
                      onChange={handleFormChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-600 focus:outline-none"
                      placeholder="Enter shop name"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Shop Address *
                    </label>
                    <textarea
                      name="shopAddress"
                      required
                      value={formData.shopAddress}
                      onChange={handleFormChange}
                      rows="3"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-600 focus:outline-none resize-none"
                      placeholder="Enter complete address"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      WhatsApp Contact *
                    </label>
                    <input
                      type="tel"
                      name="whatsappContact"
                      required
                      value={formData.whatsappContact}
                      onChange={handleFormChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-600 focus:outline-none"
                      placeholder="+91 1234567890"
                    />
                  </div>
                </div>
              </div>

              {/* Add Order Card */}
              <div className="bg-white rounded-3xl shadow-xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Add Products
                </h2>
                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                  <div className="flex-1">
                    <label className="block text-gray-700 font-medium mb-2">
                      Product Type / Pet Price
                    </label>
                    <select
                      value={currentOrder.type}
                      onChange={(e) =>
                        setCurrentOrder({
                          ...currentOrder,
                          type: e.target.value,
                        })
                      }
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-600 focus:outline-none"
                    >
                      <option value="500ml">500ml Bottle - Rs. 260/-</option>
                      <option value="1500ml">1500ml Bottle - Rs. 300/-</option>
                      <option value="6liter">6 Liter Bottle - Rs. 120/-</option>
                    </select>
                  </div>
                 
                  <div className="w-full sm:w-32">
                    <label className="block text-gray-700 font-medium mb-2">
                      Pet Quantity
                    </label>
                    <input
                      type="number"
                      min="1"
                      value={currentOrder.quantity}
                      onChange={(e) =>
                        setCurrentOrder({
                          ...currentOrder,
                          quantity: parseInt(e.target.value) || 1,
                        })
                      }
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-600 focus:outline-none"
                    />
                  </div>
                  <div className="flex items-end">
                    <button
                      type="button"
                      onClick={handleAddOrder}
                      className="w-full sm:w-auto bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>

                {/* Current Orders List */}
                {orders.length > 0 && (
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-gray-900">
                      Cart Items
                    </h3>
                    {orders.map((order, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between bg-gray-50 p-4 rounded-lg"
                      >
                        <div className="flex-1">
                          <p className="font-medium text-gray-900">
                            {order.type === "500ml" && "500ml Bottle"}
                            {order.type === "1500ml" && "1500ml Bottle"}
                            {order.type === "6liter" && "6 Liter Bottle"}
                          </p>
                          <p className="text-sm text-gray-600">
                            Rs. {productPrices[order.type]}/- × {order.quantity} = Rs. 
                            {productPrices[order.type] * order.quantity}/-
                          </p>
                        </div>
                        <div className="flex items-center gap-3">
                          <input
                            type="number"
                            min="1"
                            value={order.quantity}
                            onChange={(e) =>
                              handleUpdateQuantity(index, e.target.value)
                            }
                            className="w-20 px-3 py-2 rounded border border-gray-300 focus:border-blue-600 focus:outline-none"
                          />
                          <button
                            type="button"
                            onClick={() => handleRemoveOrder(index)}
                            className="text-red-600 hover:text-red-800 font-medium"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Order Summary Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-3xl shadow-xl p-8 sticky top-24">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Order Summary
                </h2>

                <div className="space-y-4 mb-6">
                  {orders.length === 0 ? (
                    <p className="text-gray-500 text-center py-8">
                      No items in cart
                    </p>
                  ) : (
                    orders.map((order, index) => (
                      <div
                        key={index}
                        className="flex justify-between text-gray-700"
                      >
                        <span>
                          {order.type} × {order.quantity}
                        </span>
                        <span className="font-medium">
                          Rs. {productPrices[order.type] * order.quantity}/-
                        </span>
                      </div>
                    ))
                  )}
                </div>

                <div className="border-t border-gray-200 pt-4 space-y-3">
                  <div className="flex justify-between text-lg font-semibold">
                    <span>Total Amount:</span>
                    <span className="text-blue-600">Rs. {total}/-</span>
                  </div>

                  <div className="pt-4">
                    <div className="px-4 py-2 rounded-lg text-center font-medium bg-red-100 text-red-700">
                      Payment: Unpaid
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={
                    orders.length === 0 ||
                    !formData.shopName ||
                    !formData.shopAddress ||
                    !formData.whatsappContact
                  }
                  className="w-full mt-6 bg-blue-600 text-white py-4 rounded-lg hover:bg-blue-700 transition-colors font-medium disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  Place Order
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

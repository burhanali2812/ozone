"use client";
import axios from "axios";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { toast, Toaster } from "react-hot-toast";

export default function Order() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({
    shopName: "",
    shopAddress: "",
    whatsappContact: "",
  });

  const [orders, setOrders] = useState([]);
  const [currentOrder, setCurrentOrder] = useState({
    type: "500ml",
    quantity: "",
    customPrice: "",
  });

  const [paymentStatus, setPaymentStatus] = useState("unpaid");
  const [paidAmount, setPaidAmount] = useState(0);

  const productPrices = {
    "500ml": 290,
    "1500ml": 300,
    "6liter": 120,
  };

  // Check for user in localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem("user2");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddOrder = () => {
    const qty = parseInt(currentOrder.quantity);
    const price =
      parseFloat(currentOrder.customPrice) || productPrices[currentOrder.type];

    if (qty > 0 && price > 0) {
      const existingOrderIndex = orders.findIndex(
        (order) => order.type === currentOrder.type && order.price === price
      );

      if (existingOrderIndex !== -1) {
        const updatedOrders = [...orders];
        updatedOrders[existingOrderIndex].quantity += qty;
        setOrders(updatedOrders);
      } else {
        setOrders([
          ...orders,
          { type: currentOrder.type, quantity: qty, price: price },
        ]);
      }

      setCurrentOrder({ type: "500ml", quantity: "", customPrice: "" });
    } else {
      toast.error("Please enter a valid quantity and price");
    }
  };

  const handleRemoveOrder = (index) => {
    setOrders(orders.filter((_, i) => i !== index));
  };

  const handleUpdateQuantity = (index, newQuantity) => {
    const updatedOrders = [...orders];
    updatedOrders[index].quantity = newQuantity;
    setOrders(updatedOrders);
  };

  const handleUpdatePrice = (index, newPrice) => {
    const updatedOrders = [...orders];
    updatedOrders[index].price =
      parseFloat(newPrice) || productPrices[updatedOrders[index].type];
    setOrders(updatedOrders);
  };

  const calculateTotal = () => {
    return orders.reduce((total, order) => {
      const qty = parseInt(order.quantity) || 0;
      const price = order.price || productPrices[order.type];
      return total + price * qty;
    }, 0);
  };

  const calculateRemaining = () => {
    return calculateTotal() - paidAmount;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const total = calculateTotal();
    let finalPaymentStatus = paymentStatus;
    let finalPaidAmount = paidAmount;
    let finalRemainingAmount = total;

    // Calculate remaining amount based on payment status
    if (paymentStatus === "paid") {
      finalPaidAmount = total;
      finalRemainingAmount = 0;
    } else if (paymentStatus === "partially-paid") {
      finalRemainingAmount = total - paidAmount;
    } else {
      finalPaidAmount = 0;
      finalRemainingAmount = total;
    }

    const orderPayload = {
      shopName: formData.shopName,
      shopAddress: formData.shopAddress,
      shopContact: formData.whatsappContact,
      orderItems: orders.map((order) => ({
        size: order.type,
        quantity: order.quantity,
        price: order.price || productPrices[order.type],
      })),
      totalPrice: total,
      paymentStatus: finalPaymentStatus,
      paidAmount: finalPaidAmount,
      remainingAmount: finalRemainingAmount,
      status: "pending",
    };

    console.log("Order Submitted:", orderPayload);

    try {
      const res = await axios.post("/api/orders", orderPayload);
      if (res.data.message) {
        // Update stock for each order item
        try {
          for (const order of orders) {
            await axios.patch("/api/stock", {
              productSize: order.type,
              productType: order.type === "6liter" ? "pet" : "bottle",
              quantityToReduce: order.quantity,
            });
          }
          console.log("Stock updated successfully");
        } catch (stockError) {
          console.error("Error updating stock:", stockError);
          toast.error("Order placed but stock update failed");
        }

        toast.success(res.data.message || "Order placed successfully!");
        localStorage.setItem("receiptType", "order-placed");
        localStorage.setItem("currentOrder", JSON.stringify(res.data.order));
        setFormData({
          shopName: "",
          shopAddress: "",
          whatsappContact: "",
        });
        setOrders([]);
        setPaymentStatus("unpaid");
        setPaidAmount(0);
        if (user) {
          router.push("/receipt");
        }
      } else {
        router.push("/");
      }
    } catch (error) {
      toast.error("Order placement failed. Please try again.");
      console.error("Order submission error:", error);
    }
  };

  const total = calculateTotal();
  const remaining = calculateRemaining();

  // Check if form is valid for submission
  const isFormValid = () => {
    return (
      formData.shopName.trim() !== "" &&
      formData.shopAddress.trim() !== "" &&
      formData.whatsappContact.trim() !== "" &&
      orders.length > 0 &&
      orders.every((order) => {
        const qty = parseInt(order.quantity);
        return qty > 0;
      })
    );
  };

  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 py-12">
      <Toaster />
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
            Place Your Order
          </h1>
          <p className="text-xl text-gray-600">OZONE Mineral Water</p>
          {user && (
            <p className="text-sm text-gray-500 mt-2">
              Logged in as: {user.name} ({user.role})
            </p>
          )}
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
                      placeholder="03XX-XXXXXXX"
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
                          customPrice: "",
                        })
                      }
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-600 focus:outline-none"
                    >
                      <option value="500ml">500ml Bottle - Rs. 290/-</option>
                      <option value="1500ml">1500ml Bottle - Rs. 300/-</option>
                      <option value="6liter">6 Liter Bottle - Rs. 120/-</option>
                    </select>
                  </div>

                  <div className="w-full sm:w-32">
                    <label className="block text-gray-700 font-medium mb-2">
                      Custom Price
                    </label>
                    <input
                      type="number"
                      min="0"
                      value={currentOrder.customPrice}
                      onChange={(e) =>
                        setCurrentOrder({
                          ...currentOrder,
                          customPrice: e.target.value,
                        })
                      }
                      placeholder={productPrices[currentOrder.type]}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-600 focus:outline-none"
                    />
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
                          quantity: e.target.value,
                        })
                      }
                      placeholder="Enter quantity"
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
                            Rs. {order.price || productPrices[order.type]}/- ×{" "}
                            {order.quantity} = Rs.
                            {(order.price || productPrices[order.type]) *
                              order.quantity}
                            /-
                          </p>
                        </div>
                        <div className="flex items-center gap-3">
                          <div>
                            <label className="text-xs text-gray-600">
                              Price
                            </label>
                            <input
                              type="number"
                              min="0"
                              value={order.price || productPrices[order.type]}
                              onChange={(e) =>
                                handleUpdatePrice(index, e.target.value)
                              }
                              onBlur={(e) => {
                                const price = parseFloat(e.target.value);
                                if (!price || price < 0) {
                                  handleUpdatePrice(
                                    index,
                                    productPrices[order.type]
                                  );
                                }
                              }}
                              className="w-20 px-3 py-2 rounded border border-gray-300 focus:border-blue-600 focus:outline-none"
                            />
                          </div>
                          <div>
                            <label className="text-xs text-gray-600">Qty</label>
                            <input
                              type="number"
                              min="1"
                              value={order.quantity}
                              onChange={(e) =>
                                handleUpdateQuantity(index, e.target.value)
                              }
                              onBlur={(e) => {
                                const qty = parseInt(e.target.value);
                                if (!qty || qty < 1) {
                                  handleUpdateQuantity(index, 1);
                                }
                              }}
                              className="w-20 px-3 py-2 rounded border border-gray-300 focus:border-blue-600 focus:outline-none"
                            />
                          </div>
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

              {/* Payment Details Card - Only show if user is logged in */}
              {user && (
                <div className="bg-white rounded-3xl shadow-xl p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Payment Details
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">
                        Payment Status
                      </label>
                      <select
                        value={paymentStatus}
                        onChange={(e) => {
                          setPaymentStatus(e.target.value);
                          if (e.target.value === "paid") {
                            setPaidAmount(total);
                          } else if (e.target.value === "unpaid") {
                            setPaidAmount(0);
                          }
                        }}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-600 focus:outline-none"
                      >
                        <option value="unpaid">Unpaid</option>
                        <option value="partially-paid">Partially Paid</option>
                        <option value="paid">Paid</option>
                      </select>
                    </div>

                    {paymentStatus === "partially-paid" && (
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">
                          Paid Amount
                        </label>
                        <input
                          type="number"
                          min="0"
                          max={total}
                          value={paidAmount}
                          onChange={(e) =>
                            setPaidAmount(
                              Math.min(parseFloat(e.target.value) || 0, total)
                            )
                          }
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-600 focus:outline-none"
                          placeholder="Enter paid amount"
                        />
                        <p className="text-sm text-red-600 mt-2 font-medium">
                          Remaining: Rs. {remaining}/-
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              )}
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

                  {user && paymentStatus !== "unpaid" && (
                    <>
                      <div className="flex justify-between text-green-600">
                        <span>Paid:</span>
                        <span>Rs. {paidAmount}/-</span>
                      </div>
                      <div className="flex justify-between text-red-600 font-semibold">
                        <span>Remaining:</span>
                        <span>Rs. {remaining}/-</span>
                      </div>
                    </>
                  )}

                  <div className="pt-4">
                    <div
                      className={`px-4 py-2 rounded-lg text-center font-medium ${
                        user && paymentStatus === "paid"
                          ? "bg-green-100 text-green-700"
                          : user && paymentStatus === "partially-paid"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {user && paymentStatus === "paid" && "Fully Paid"}
                      {user &&
                        paymentStatus === "partially-paid" &&
                        "Partially Paid"}
                      {(!user || paymentStatus === "unpaid") &&
                        "Payment: Unpaid"}
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={!isFormValid()}
                  className={`w-full mt-6 py-4 rounded-lg font-medium transition-all ${
                    isFormValid()
                      ? "bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg cursor-pointer"
                      : "bg-gray-300 text-gray-500 cursor-not-allowed"
                  }`}
                  title={
                    !isFormValid()
                      ? "Please fill all required fields and add at least one item"
                      : "Click to place order"
                  }
                >
                  {isFormValid()
                    ? "Place Order 🚀"
                    : "Complete Form to Continue"}
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

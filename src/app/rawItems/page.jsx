"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import {toast, Toaster} from "react-hot-toast";
export default function RawItems() {
  const router = useRouter();
  const [supplierData, setSupplierData] = useState({
    supplierName: "",
    supplierContact: "",
  });

  const [currentItem, setCurrentItem] = useState({
    itemName: "",
    quantity: 1,
    price: 0,
  });

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSupplierChange = (e) => {
    setSupplierData({ ...supplierData, [e.target.name]: e.target.value });
  };

  const handleItemChange = (e) => {
    setCurrentItem({ ...currentItem, [e.target.name]: e.target.value });
  };

  const handleAddItem = () => {
    if (
      currentItem.itemName &&
      currentItem.quantity > 0 &&
      currentItem.price > 0
    ) {
      const newItem = {
        itemName: currentItem.itemName,
        quantity: parseInt(currentItem.quantity),
        price: parseFloat(currentItem.price),
        total: parseInt(currentItem.quantity) * parseFloat(currentItem.price),
      };

      setItems([...items, newItem]);
      setCurrentItem({ itemName: "", quantity: 1, price: 0 });
    } else {
      toast.error("Please fill all item fields with valid values");
    }
  };

  const handleRemoveItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  const handleUpdateItem = (index, field, value) => {
    const updatedItems = [...items];
    updatedItems[index][field] =
      field === "itemName" ? value : parseFloat(value) || 0;
    updatedItems[index].total =
      updatedItems[index].quantity * updatedItems[index].price;
    setItems(updatedItems);
  };

  const calculateSubtotal = () => {
    return items.reduce((sum, item) => sum + item.total, 0);
  };

  const handleSave = async () => {
    if (!supplierData.supplierName || !supplierData.supplierContact) {
      toast.error("Please enter supplier details");
      return;
    }

    if (items.length === 0) {
      toast.error("Please add at least one item");
      return;
    }

    setLoading(true);

    const payload = {
        supplierInfo:{
            name: supplierData.supplierName,
            contact: supplierData.supplierContact,
        },
      items: items,
      totalCost: calculateSubtotal(),
    };
    console.log("Payload to be sent:", payload);

    try {
      const response = await axios.post("/api/items", payload);
      if (response.data.success) {
        toast.success("Raw items saved successfully!");
        setSupplierData({ supplierName: "", supplierContact: "" });
        setItems([]);
        setCurrentItem({ itemName: "", quantity: 1, price: 0 });
      }
    } catch (error) {
      console.error("Error saving raw items:", error);
      toast.error(error.response?.data?.message || "Failed to save raw items");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 py-12">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
              Raw Items Entry
            </h1>
            <p className="text-gray-600">Add supplier and raw items details</p>
          </div>
          <button
            onClick={() => router.push("/orderDashboard")}
            className="bg-gray-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-gray-700 transition-colors font-medium shadow-lg whitespace-nowrap"
          >
            ← Back
          </button>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Left Section - Forms */}
          <div className="lg:col-span-2 space-y-6">
            {/* Supplier Details Card */}
            <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
                Supplier Details
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 font-medium mb-2 text-sm sm:text-base">
                    Supplier Name *
                  </label>
                  <input
                    type="text"
                    name="supplierName"
                    required
                    value={supplierData.supplierName}
                    onChange={handleSupplierChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-600 focus:outline-none text-sm sm:text-base"
                    placeholder="Enter supplier name"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2 text-sm sm:text-base">
                    Supplier Contact *
                  </label>
                  <input
                    type="tel"
                    name="supplierContact"
                    required
                    value={supplierData.supplierContact}
                    onChange={handleSupplierChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-600 focus:outline-none text-sm sm:text-base"
                    placeholder="Enter contact number"
                  />
                </div>
              </div>
            </div>

            {/* Add Items Card */}
            <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
                Add Items
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-700 font-medium mb-2 text-sm sm:text-base">
                    Item Name *
                  </label>
                  <input
                    type="text"
                    name="itemName"
                    value={currentItem.itemName}
                    onChange={handleItemChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-600 focus:outline-none text-sm sm:text-base"
                    placeholder="Enter item name"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2 text-sm sm:text-base">
                      Quantity *
                    </label>
                    <input
                      type="number"
                      name="quantity"
                      min="1"
                      value={currentItem.quantity}
                      onChange={handleItemChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-600 focus:outline-none text-sm sm:text-base"
                      placeholder="Qty"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2 text-sm sm:text-base">
                      Price *
                    </label>
                    <input
                      type="number"
                      name="price"
                      min="0"
                      step="0.01"
                      value={currentItem.price}
                      onChange={handleItemChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-600 focus:outline-none text-sm sm:text-base"
                      placeholder="Price"
                    />
                  </div>
                </div>
              </div>
              <button
                type="button"
                onClick={handleAddItem}
                className="w-full mt-6 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm sm:text-base"
              >
                + Add Item to List
              </button>
            </div>

            {/* Items Cards - Mobile & Desktop Friendly */}
            {items.length > 0 && (
              <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
                  Items List ({items.length})
                </h2>
                <div className="space-y-4">
                  {items.map((item, index) => (
                    <div
                      key={index}
                      className="border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow bg-gray-50"
                    >
                      {/* Item Header */}
                      <div className="flex justify-between items-start mb-3">
                        <div className="flex items-center gap-2">
                          <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                            {index + 1}
                          </span>
                          <h3 className="font-semibold text-gray-900 text-lg">
                            {item.itemName}
                          </h3>
                        </div>
                        <button
                          onClick={() => handleRemoveItem(index)}
                          className="text-red-600 hover:text-red-800 font-medium text-sm"
                        >
                          ✕ Remove
                        </button>
                      </div>

                      {/* Item Details - Grid Layout */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div>
                          <label className="block text-xs text-gray-600 mb-1">
                            Item Name
                          </label>
                          <input
                            type="text"
                            value={item.itemName}
                            onChange={(e) =>
                              handleUpdateItem(
                                index,
                                "itemName",
                                e.target.value
                              )
                            }
                            className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:border-blue-600 focus:outline-none text-sm"
                          />
                        </div>
                        <div>
                          <label className="block text-xs text-gray-600 mb-1">
                            Quantity
                          </label>
                          <input
                            type="number"
                            min="1"
                            value={item.quantity}
                            onChange={(e) =>
                              handleUpdateItem(
                                index,
                                "quantity",
                                e.target.value
                              )
                            }
                            className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:border-blue-600 focus:outline-none text-sm"
                          />
                        </div>
                        <div>
                          <label className="block text-xs text-gray-600 mb-1">
                            Price (Rs.)
                          </label>
                          <input
                            type="number"
                            min="0"
                            step="0.01"
                            value={item.price}
                            onChange={(e) =>
                              handleUpdateItem(index, "price", e.target.value)
                            }
                            className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:border-blue-600 focus:outline-none text-sm"
                          />
                        </div>
                      </div>

                      {/* Total Display */}
                      <div className="mt-3 pt-3 border-t border-gray-300">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-700 font-medium">
                            Total:
                          </span>
                          <span className="text-xl font-bold text-blue-600">
                            Rs. {item.total.toFixed(2)}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Section - Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 lg:sticky lg:top-24">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
                Summary
              </h2>

              <div className="space-y-4 mb-6">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-xs sm:text-sm text-gray-600">Supplier</p>
                  <p className="font-medium text-gray-900 truncate">
                    {supplierData.supplierName || "Not set"}
                  </p>
                </div>

                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-xs sm:text-sm text-gray-600">Contact</p>
                  <p className="font-medium text-gray-900">
                    {supplierData.supplierContact || "Not set"}
                  </p>
                </div>

                <div className="p-4 bg-blue-50 rounded-lg">
                  <p className="text-xs sm:text-sm text-blue-600">
                    Total Items
                  </p>
                  <p className="text-2xl font-bold text-blue-900">
                    {items.length}
                  </p>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-4 mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-600 text-sm sm:text-base">
                    Items Total:
                  </span>
                  <span className="font-semibold text-gray-900">
                    Rs. {calculateSubtotal().toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between items-center text-lg font-bold">
                  <span className="text-gray-900">Subtotal:</span>
                  <span className="text-blue-600">
                    Rs. {calculateSubtotal().toFixed(2)}
                  </span>
                </div>
              </div>

              <button
                onClick={handleSave}
                disabled={
                  loading ||
                  items.length === 0 ||
                  !supplierData.supplierName ||
                  !supplierData.supplierContact
                }
                className="w-full bg-green-600 text-white py-3 sm:py-4 rounded-lg hover:bg-green-700 transition-colors font-medium disabled:bg-gray-400 disabled:cursor-not-allowed shadow-lg text-sm sm:text-base"
              >
                {loading ? "Saving..." : " Save Raw Items"}
              </button>

              {items.length === 0 && (
                <p className="text-center text-xs sm:text-sm text-gray-500 mt-4">
                  Add items to enable save
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

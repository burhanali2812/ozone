"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";

export default function SupplierManage() {
  const router = useRouter();

  const [suppliers, setSuppliers] = useState([]);
  const [loading, setLoading] = useState(true);

  const [showAddSupplierModal, setShowAddSupplierModal] = useState(false);
  const [showAddItemModal, setShowAddItemModal] = useState(false);
  const [showEditItemModal, setShowEditItemModal] = useState(false);
  const [selectedSupplier, setSelectedSupplier] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [expandedSupplier, setExpandedSupplier] = useState(null);
  const [userName, setUserName] = useState("");


  // Form states
  const [newSupplier, setNewSupplier] = useState({
    name: "",
    contact: "",
    email: "",
    address: "",
  });

  // Initial items for new supplier (without quantity)
  const [supplierItems, setSupplierItems] = useState([
    { itemName: "", price: 0 },
  ]);

  const [newItem, setNewItem] = useState({
    itemName: "",
    price: 0,
  });

  const [editItemData, setEditItemData] = useState({
    itemName: "",
    price: 0,
  });


  // Fetch suppliers
  const getSuppliers = async () => {
    try {
      setLoading(true);
      const res = await axios.get("/api/supplier");
      if (res.data.success) {
        setSuppliers(res.data.data);
      } else {
        setSuppliers([]);
      }
    } catch (error) {
      console.error("Error fetching suppliers:", error);
      toast.error("Failed to fetch suppliers");
      setSuppliers([]);
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
    getSuppliers();
  }, []);



  // Add item row in supplier modal
  const addItemRow = () => {
    setSupplierItems([...supplierItems, { itemName: "", price: 0 }]);
  };

  // Remove item row
  const removeItemRow = (index) => {
    const updatedItems = supplierItems.filter((_, i) => i !== index);
    setSupplierItems(
      updatedItems.length > 0 ? updatedItems : [{ itemName: "", price: 0 }]
    );
  };

  // Update item in supplier modal
  const updateSupplierItem = (index, field, value) => {
    const updatedItems = [...supplierItems];
    updatedItems[index][field] = value;
    setSupplierItems(updatedItems);
  };

  // Add new supplier with items
  const handleAddSupplier = async () => {
    if (!newSupplier.name || !newSupplier.contact) {
      toast.error("Please fill required supplier fields");
      return;
    }

    // Filter out empty items (only check itemName and price)
    const validItems = supplierItems.filter(
      (item) => item.itemName && item.price > 0
    );

    try {
      const supplierData = {
        supplierName: newSupplier.name,
        contactEmail: newSupplier.email,
        address: newSupplier.address,
        contact: newSupplier.contact,
        suppliedItems: validItems,
      };

      const res = await axios.post("/api/supplier", supplierData);
      if (res.data.success) {
        toast.success("Supplier added successfully!");
        setSuppliers([...suppliers, res.data.data]);
        setShowAddSupplierModal(false);
        setNewSupplier({ name: "", contact: "", email: "", address: "" });
        setSupplierItems([{ itemName: "", price: 0 }]);
      }
    } catch (error) {
      console.error("Error adding supplier:", error);
      toast.error("Failed to add supplier");
    }
  };

  // Add item to supplier
  const handleAddItem = async () => {
    if (!newItem.itemName || newItem.price <= 0) {
      toast.error("Please fill all item fields correctly");
      return;
    }

    try {
     const res = await axios.post("/api/supplier/add-item", {
  supplierId: selectedSupplier._id,
  itemName: newItem.itemName,
  price: newItem.price,
});

      if (res.data.success) {
        toast.success("Item added successfully!");
        // Update local state
        setSuppliers(
          suppliers.map((sup) =>
            sup._id === selectedSupplier._id
              ? { ...sup, suppliedItems: [...sup.suppliedItems, res.data.data] }
              : sup
          )
        );
        setShowAddItemModal(false);
        setNewItem({ itemName: "", price: 0 });
        setSelectedSupplier(null);
      }
    } catch (error) {
      console.error("Error adding item:", error);
      toast.error("Failed to add item");
    }
  };

  // Update item price
const handleUpdateItem = async () => {
  if (!editItemData.itemName || editItemData.price <= 0) {
    toast.error("Please fill all fields correctly");
    return;
  }

  try {
    const res = await axios.put("/api/supplier", {
      supplierId: selectedSupplier._id,
      itemId: selectedItem._id,
      itemName: editItemData.itemName,
      price: editItemData.price,
    });

    if (res.data.success) {
      toast.success("Item updated successfully!");

      // Update UI
      setSuppliers(
        suppliers.map((sup) =>
          sup._id === selectedSupplier._id
            ? {
                ...sup,
                suppliedItems: sup.suppliedItems.map((item) =>
                  item._id === selectedItem._id ? res.data.data : item
                ),
              }
            : sup
        )
      );

      setShowEditItemModal(false);
      setEditItemData({ itemName: "", price: 0 });
      setSelectedSupplier(null);
      setSelectedItem(null);
    }
  } catch (error) {
    console.error("Error updating item:", error);
    toast.error("Failed to update item");
  }
};


  // Open edit item modal
  const openEditModal = (supplier, item) => {
    setSelectedSupplier(supplier);
    setSelectedItem(item);
    setEditItemData({
      itemName: item.itemName,
      price: item.price,
    });
    setShowEditItemModal(true);
  };

  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 py-12">
      <Toaster />
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-8 flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Left - Menu Button & Heading */}
       

          {/* Right - Add Supplier Button */}
          <button
            onClick={() => setShowAddSupplierModal(true)}
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
            Add Supplier
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-gray-600 text-sm">Total Suppliers</p>
                <p className="text-2xl font-bold text-gray-900">
                  {suppliers.length}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-green-600"
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
                <p className="text-gray-600 text-sm">Total Items</p>
                <p className="text-2xl font-bold text-gray-900">
                  {suppliers.reduce(
                    (sum, sup) => sum + (sup.suppliedItems?.length || 0),
                    0
                  )}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-yellow-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-gray-600 text-sm">Active Suppliers</p>
                <p className="text-2xl font-bold text-gray-900">
                  {
                    suppliers.filter((sup) => sup.suppliedItems?.length > 0)
                      .length
                  }
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-gray-600 text-sm">Avg Items/Supplier</p>
                <p className="text-2xl font-bold text-gray-900">
                  {suppliers.length > 0
                    ? (
                        suppliers.reduce(
                          (sum, sup) => sum + (sup.suppliedItems?.length || 0),
                          0
                        ) / suppliers.length
                      ).toFixed(1)
                    : 0}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Suppliers List */}
        <div className="space-y-6">
          {suppliers.map((supplier) => (
            <div
              key={supplier._id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
            >
              {/* Supplier Header */}
              <div
                className="p-6 bg-gradient-to-r from-blue-50 to-cyan-50 cursor-pointer"
                onClick={() =>
                  setExpandedSupplier(
                    expandedSupplier === supplier._id ? null : supplier._id
                  )
                }
              >
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div className="flex items-center gap-4 flex-1">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                      {supplier.supplierName?.charAt(0).toUpperCase()}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-1">
                        {supplier.supplierName}
                      </h3>
                      <div className="flex flex-wrap gap-3 text-sm text-gray-600">
                        <span className="flex items-center gap-1">
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
                              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                            />
                          </svg>
                          {supplier.contact}
                        </span>
                        {supplier.contactEmail && (
                          <span className="flex items-center gap-1">
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
                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 012 2z"
                              />
                            </svg>
                            {supplier.contactEmail}
                          </span>
                        )}
                      </div>
                      {supplier.address && (
                        <p className="text-sm text-gray-500 mt-1">
                          {supplier.address}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                      {supplier.suppliedItems?.length || 0} Items
                    </span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedSupplier(supplier);
                        setShowAddItemModal(true);
                      }}
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium flex items-center gap-2"
                    >
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
                          d="M12 4v16m8-8H4"
                        />
                      </svg>
                      Add Item
                    </button>
                    <button
                      className="text-gray-500 hover:text-gray-700 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <svg
                        className={`w-6 h-6 transform transition-transform ${
                          expandedSupplier === supplier._id ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* Items List (Expanded) */}
              {expandedSupplier === supplier._id && (
                <div className="p-6">
                  {supplier.suppliedItems &&
                  supplier.suppliedItems.length > 0 ? (
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                              Item Name
                            </th>
                            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                              Price/Unit
                            </th>
                            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                              Action
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                          {supplier.suppliedItems.map((item, index) => (
                            <tr
                              key={index}
                              className="hover:bg-gray-50 transition-colors"
                            >
                              <td className="px-4 py-3">
                                <span className="font-medium text-gray-900">
                                  {item.itemName}
                                </span>
                              </td>
                              <td className="px-4 py-3">
                                <span className="text-gray-900 font-bold">
                                  Rs. {item.price.toLocaleString()}/-
                                </span>
                              </td>
                              <td className="px-4 py-3">
                                <button
                                  onClick={() => openEditModal(supplier, item)}
                                  className="bg-yellow-500 text-white px-3 py-1.5 rounded-lg hover:bg-yellow-600 transition-colors text-sm font-medium flex items-center gap-1"
                                >
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
                                      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                                    />
                                  </svg>
                                  Edit
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg
                          className="w-8 h-8 text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                          />
                        </svg>
                      </div>
                      <p className="text-gray-500 mb-4">
                        No items added yet for this supplier
                      </p>
                      <button
                        onClick={() => {
                          setSelectedSupplier(supplier);
                          setShowAddItemModal(true);
                        }}
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                      >
                        Add First Item
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}

          {/* Empty State */}
          {suppliers.length === 0 && !loading && (
            <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
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
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                No Suppliers Found
              </h3>
              <p className="text-gray-600 mb-6">
                Get started by adding your first supplier
              </p>
              <button
                onClick={() => setShowAddSupplierModal(true)}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Add Supplier
              </button>
            </div>
          )}
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-600"></div>
          </div>
        )}
      </div>

      {/* Add Supplier Modal */}
      {showAddSupplierModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full my-8">
            <div className="p-8">
              {/* Modal Header */}
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    Add New Supplier
                  </h2>
                  <p className="text-sm text-gray-600 mt-1">
                    Enter supplier details and their item prices
                  </p>
                </div>
                <button
                  onClick={() => {
                    setShowAddSupplierModal(false);
                    setNewSupplier({
                      name: "",
                      contact: "",
                      email: "",
                      address: "",
                    });
                    setSupplierItems([{ itemName: "", price: 0 }]);
                  }}
                  className="text-gray-500 hover:text-gray-700 text-2xl"
                >
                  ×
                </button>
              </div>

              {/* Supplier Information */}
              <div className="mb-6 p-6 bg-gray-50 rounded-xl">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  Supplier Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Supplier Name *
                    </label>
                    <input
                      type="text"
                      value={newSupplier.name}
                      onChange={(e) =>
                        setNewSupplier({ ...newSupplier, name: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-600 focus:outline-none"
                      placeholder="Enter supplier name"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Contact Number *
                    </label>
                    <input
                      type="text"
                      value={newSupplier.contact}
                      onChange={(e) =>
                        setNewSupplier({
                          ...newSupplier,
                          contact: e.target.value,
                        })
                      }
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-600 focus:outline-none"
                      placeholder="Enter contact number"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      value={newSupplier.email}
                      onChange={(e) =>
                        setNewSupplier({
                          ...newSupplier,
                          email: e.target.value,
                        })
                      }
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-600 focus:outline-none"
                      placeholder="Enter email address"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Address
                    </label>
                    <input
                      type="text"
                      value={newSupplier.address}
                      onChange={(e) =>
                        setNewSupplier({
                          ...newSupplier,
                          address: e.target.value,
                        })
                      }
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-600 focus:outline-none"
                      placeholder="Enter supplier address"
                    />
                  </div>
                </div>
              </div>

              {/* Items Section */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">
                      Item Prices (Optional)
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">
                      Define items and their prices from this supplier
                    </p>
                  </div>
                  <button
                    onClick={addItemRow}
                    className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors text-sm font-medium flex items-center gap-2"
                  >
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
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                    Add Item
                  </button>
                </div>

                <div className="space-y-4 max-h-96 overflow-y-auto pr-2">
                  {supplierItems.map((item, index) => (
                    <div
                      key={index}
                      className="p-4 bg-white border border-gray-200 rounded-lg"
                    >
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-sm font-semibold text-gray-700">
                          Item {index + 1}
                        </span>
                        {supplierItems.length > 1 && (
                          <button
                            onClick={() => removeItemRow(index)}
                            className="text-red-600 hover:text-red-800 transition-colors"
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
                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                              />
                            </svg>
                          </button>
                        )}
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div>
                          <label className="block text-gray-700 text-sm font-medium mb-1">
                            Item Name
                          </label>
                          <input
                            type="text"
                            value={item.itemName}
                            onChange={(e) =>
                              updateSupplierItem(
                                index,
                                "itemName",
                                e.target.value
                              )
                            }
                            className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:border-blue-600 focus:outline-none text-sm"
                            placeholder="e.g., 500ml Bottles"
                          />
                        </div>

                        <div>
                          <label className="block text-gray-700 text-sm font-medium mb-1">
                            Price per Unit (Rs.)
                          </label>
                          <input
                            type="number"
                            value={item.price}
                            onChange={(e) =>
                              updateSupplierItem(
                                index,
                                "price",
                                parseFloat(e.target.value) || 0
                              )
                            }
                            className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:border-blue-600 focus:outline-none text-sm"
                            placeholder="Enter price"
                            min="0"
                            step="0.01"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <button
                  onClick={handleAddSupplier}
                  className="flex-1 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  Add Supplier
                </button>
                <button
                  onClick={() => {
                    setShowAddSupplierModal(false);
                    setNewSupplier({
                      name: "",
                      contact: "",
                      email: "",
                      address: "",
                    });
                    setSupplierItems([{ itemName: "", price: 0 }]);
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

      {/* Add Item Modal */}
      {showAddItemModal && selectedSupplier && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full">
            <div className="p-8">
              {/* Modal Header */}
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    Add Item to {selectedSupplier.supplierName}
                  </h2>
                  <p className="text-sm text-gray-600 mt-1">
                    Add a new item to this supplier
                  </p>
                </div>
                <button
                  onClick={() => {
                    setShowAddItemModal(false);
                    setSelectedSupplier(null);
                    setNewItem({ itemName: "", price: 0 });
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
                    Item Name *
                  </label>
                  <input
                    type="text"
                    value={newItem.itemName}
                    onChange={(e) =>
                      setNewItem({ ...newItem, itemName: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-600 focus:outline-none"
                    placeholder="e.g., 500ml Bottles"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Price per Unit (Rs.) *
                  </label>
                  <input
                    type="number"
                    value={newItem.price}
                    onChange={(e) =>
                      setNewItem({
                        ...newItem,
                        price: parseFloat(e.target.value) || 0,
                      })
                    }
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-600 focus:outline-none"
                    placeholder="Enter price"
                    min="0"
                    step="0.01"
                  />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 mt-6">
                <button
                  onClick={handleAddItem}
                  className="flex-1 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  Add Item
                </button>
                <button
                  onClick={() => {
                    setShowAddItemModal(false);
                    setSelectedSupplier(null);
                    setNewItem({ itemName: "", price: 0 });
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

      {/* Edit Item Modal */}
      {showEditItemModal && selectedSupplier && selectedItem && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full">
            <div className="p-8">
              {/* Modal Header */}
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    Edit Item
                  </h2>
                  <p className="text-sm text-gray-600 mt-1">
                    Update item details for {selectedSupplier.supplierName}
                  </p>
                </div>
                <button
                  onClick={() => {
                    setShowEditItemModal(false);
                    setSelectedSupplier(null);
                    setSelectedItem(null);
                    setEditItemData({ itemName: "", price: 0 });
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
                    Item Name *
                  </label>
                  <input
                    type="text"
                    value={editItemData.itemName}
                    onChange={(e) =>
                      setEditItemData({
                        ...editItemData,
                        itemName: e.target.value,
                      })
                    }
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-600 focus:outline-none"
                    placeholder="e.g., 500ml Bottles"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Price per Unit (Rs.) *
                  </label>
                  <input
                    type="number"
                    value={editItemData.price}
                    onChange={(e) =>
                      setEditItemData({
                        ...editItemData,
                        price: parseFloat(e.target.value) || 0,
                      })
                    }
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-600 focus:outline-none"
                    placeholder="Enter price"
                    min="0"
                    step="0.01"
                  />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 mt-6">
                <button
                  onClick={handleUpdateItem}
                  className="flex-1 bg-yellow-500 text-white py-3 rounded-lg hover:bg-yellow-600 transition-colors font-medium"
                >
                  Update Item
                </button>
                <button
                  onClick={() => {
                    setShowEditItemModal(false);
                    setSelectedSupplier(null);
                    setSelectedItem(null);
                    setEditItemData({ itemName: "", price: 0 });
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

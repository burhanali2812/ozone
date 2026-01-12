(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/OZONE/ozone-water-1/src/app/orderDashboard/page.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>OrderDashboard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OZONE/ozone-water-1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OZONE/ozone-water-1/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OZONE/ozone-water-1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OZONE/ozone-water-1/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OZONE/ozone-water-1/node_modules/react-hot-toast/dist/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function OrderDashboard() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [orders, setOrders] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [filterStatus, setFilterStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    const [filterPayment, setFilterPayment] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [selectedOrder, setSelectedOrder] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showModal, setShowModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showFilters, setShowFilters] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showMenu, setShowMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showDeleteConfirm, setShowDeleteConfirm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [userName, setUserName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [modalData, setModalData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        paymentStatus: "",
        remainingAmount: 0,
        paidAmount: 0,
        status: "",
        shopName: "",
        shopAddress: "",
        shopContact: ""
    });
    const getOrders = async ()=>{
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("/api/orders?action=active");
            if (res.data.success) {
                setOrders(res.data.data);
                console.log("Fetched Orders:", res.data.data);
            } else {
                setOrders([]);
            }
        } catch (error) {
            console.error("Error fetching orders:", error);
            setOrders([]);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OrderDashboard.useEffect": ()=>{
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
            getOrders();
            // Auto-refresh orders every 20 minutes
            const intervalId = setInterval({
                "OrderDashboard.useEffect.intervalId": ()=>{
                    getOrders();
                    console.log("Auto-refreshing orders...");
                }
            }["OrderDashboard.useEffect.intervalId"], 20 * 60 * 1000); // 20 minutes in milliseconds
            // Cleanup interval on component unmount
            return ({
                "OrderDashboard.useEffect": ()=>clearInterval(intervalId)
            })["OrderDashboard.useEffect"];
        }
    }["OrderDashboard.useEffect"], []);
    // Lock body scroll when modal is open
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OrderDashboard.useEffect": ()=>{
            if (showModal) {
                document.body.style.overflow = "hidden";
            } else {
                document.body.style.overflow = "unset";
            }
            return ({
                "OrderDashboard.useEffect": ()=>{
                    document.body.style.overflow = "unset";
                }
            })["OrderDashboard.useEffect"];
        }
    }["OrderDashboard.useEffect"], [
        showModal
    ]);
    const filteredOrders = orders.filter((order)=>{
        const statusMatch = filterStatus === "all" || order.status === filterStatus;
        const paymentMatch = filterPayment === "all" || order.paymentStatus === filterPayment;
        const searchMatch = searchQuery === "" || order.shopName?.toLowerCase().includes(searchQuery.toLowerCase());
        return statusMatch && paymentMatch && searchMatch;
    });
    // Open modal
    const handleEditOrder = (order)=>{
        setSelectedOrder(order);
        setModalData({
            paymentStatus: order.paymentStatus,
            remainingAmount: order.remainingAmount,
            status: order.status,
            shopName: order.shopName || "",
            shopAddress: order.shopAddress || "",
            shopContact: order.shopContact || ""
        });
        setShowModal(true);
    };
    // Update order
    const handleUpdateOrder = async ()=>{
        const updatePayload = {
            action: "update",
            orderId: selectedOrder._id,
            updateData: {
                paymentStatus: modalData.remainingAmount === 0 ? "paid" : modalData.paymentStatus,
                paidAmount: modalData.paymentStatus === "paid" ? selectedOrder.totalPrice : modalData.paymentStatus === "unpaid" ? 0 : modalData.remainingAmount === 0 ? selectedOrder.totalPrice : selectedOrder.paidAmount !== 0 ? selectedOrder.paidAmount + modalData.remainingAmount : selectedOrder.totalPrice - modalData.remainingAmount,
                remainingAmount: modalData.paymentStatus === "paid" ? 0 : modalData.paymentStatus === "unpaid" ? selectedOrder.totalPrice : modalData.remainingAmount,
                status: modalData.status,
                shopName: modalData.shopName,
                shopAddress: modalData.shopAddress,
                shopContact: modalData.shopContact
            }
        };
        console.log("Update Payload:", updatePayload);
        try {
            //  Update Order
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].put("/api/orders", updatePayload);
            if (!response.data?.success) {
                __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Order update failed");
                return;
            }
            const updatedOrder = response.data.order;
            // Update UI State
            setOrders((prevOrders)=>prevOrders?.map((order)=>order._id === updatedOrder._id ? {
                        ...order,
                        paymentStatus: updatedOrder.paymentStatus,
                        paidAmount: updatedOrder.paidAmount,
                        remainingAmount: updatedOrder.remainingAmount,
                        status: updatedOrder.status,
                        shopName: updatedOrder.shopName,
                        shopAddress: updatedOrder.shopAddress,
                        shopContact: updatedOrder.shopContact
                    } : order));
            console.log("Order updated on server:", updatedOrder);
            //  Update Stock ONLY when order is completed
            if (modalData.status === "completed" && modalData.paymentStatus === "paid") {
                try {
                    // Fetch all products from database
                    const productsResponse = await __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("/api/product");
                    if (!productsResponse.data?.success) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Failed to fetch products for stock update");
                        return;
                    }
                    const allProducts = productsResponse.data.data;
                    for (const item of updatedOrder?.orderItems){
                        // Get product ID from order item
                        const productId = typeof item.product === "string" ? item.product : item.product?._id;
                        if (!productId) {
                            console.error("Product ID not found for item:", item);
                            continue;
                        }
                        // Find product from all products
                        const product = allProducts?.find((p)=>p._id.toString() === productId.toString());
                        if (!product) {
                            console.error("Product not found:", productId);
                            continue;
                        }
                        // Update stock with fetched product details
                        await __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].patch("/api/stock", {
                            productSize: product.size,
                            producyType: product.packingType.toLowerCase(),
                            quantityToReduce: item.quantity
                        });
                    }
                    console.log("Stock updated successfully");
                } catch (stockError) {
                    console.error("Stock update error:", stockError);
                    if (stockError.response?.data?.error === "INSUFFICIENT_STOCK") {
                        __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(`Insufficient stock!
Available: ${stockError.response.data.available}
Requested: ${stockError.response.data.requested}`);
                        return;
                    }
                    __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(stockError.response?.data?.message || "Order updated, but stock update failed");
                    return;
                }
            }
            // Receipt Status
            let finalStatus = "pending";
            if (updatedOrder.status === "in-transit") {
                finalStatus = "order-in-transit";
            } else if (updatedOrder.status === "completed") {
                finalStatus = "order-delivered";
            }
            localStorage.setItem("receiptType", finalStatus);
            localStorage.setItem("currentOrder", JSON.stringify(updatedOrder));
            __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Order updated successfully!");
            setShowModal(false);
            router.push("/receipt");
        } catch (error) {
            console.error("Update order error:", error);
            // Backend error
            if (error.response) {
                const { data } = error.response;
                __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(data?.message || "Failed to update order");
                return;
            }
            // Network error
            if (error.request) {
                __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Server not responding. Please try again later.");
                return;
            }
            __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Unexpected error occurred");
        }
    };
    // Delete order
    const handleDeleteOrder = async ()=>{
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].put("/api/orders", {
                action: "delete",
                orderId: selectedOrder._id
            });
            if (response.data.success) {
                // Remove from UI
                setOrders(orders.filter((order)=>order._id !== selectedOrder._id));
                __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Order marked as deleted!");
                setShowDeleteConfirm(false);
                setShowModal(false);
            }
        } catch (error) {
            __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Failed to delete order.");
            console.error("Delete error:", error);
        }
    };
    // Get status badge color
    const getStatusColor = (status)=>{
        switch(status){
            case "pending":
                return "bg-yellow-100 text-yellow-700";
            case "in-transit":
                return "bg-blue-100 text-blue-700";
            case "completed":
                return "bg-green-100 text-green-700";
            case "cancelled":
                return "bg-red-100 text-red-700";
            default:
                return "bg-gray-100 text-gray-700";
        }
    };
    const getPaymentColor = (status)=>{
        switch(status){
            case "paid":
                return "bg-green-100 text-green-700";
            case "partially-paid":
                return "bg-yellow-100 text-yellow-700";
            case "unpaid":
                return "bg-red-100 text-red-700";
            default:
                return "bg-gray-100 text-gray-700";
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "w-full min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 py-12",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Toaster"], {}, void 0, false, {
                fileName: "[project]/OZONE/ozone-water-1/src/app/orderDashboard/page.jsx",
                lineNumber: 325,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto px-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-8 flex flex-col md:flex-row justify-between items-center gap-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-4xl font-bold text-gray-900 mb-2",
                                        children: "Order Dashboard"
                                    }, void 0, false, {
                                        fileName: "[project]/OZONE/ozone-water-1/src/app/orderDashboard/page.jsx",
                                        lineNumber: 332,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-600",
                                        children: "Manage all your orders"
                                    }, void 0, false, {
                                        fileName: "[project]/OZONE/ozone-water-1/src/app/orderDashboard/page.jsx",
                                        lineNumber: 335,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OZONE/ozone-water-1/src/app/orderDashboard/page.jsx",
                                lineNumber: 331,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/OZONE/ozone-water-1/src/app/orderDashboard/page.jsx",
                            lineNumber: 330,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/OZONE/ozone-water-1/src/app/orderDashboard/page.jsx",
                        lineNumber: 328,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-2xl shadow-lg p-6 mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            placeholder: "Search by shop name...",
                                            value: searchQuery,
                                            onChange: (e)=>setSearchQuery(e.target.value),
                                            className: "w-full px-4 py-3 pl-12 rounded-lg border border-gray-300 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all"
                                        }, void 0, false, {
                                            fileName: "[project]/OZONE/ozone-water-1/src/app/orderDashboard/page.jsx",
                                            lineNumber: 345,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "w-5 h-5 absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400",
                                            fill: "none",
                                            stroke: "currentColor",
                                            viewBox: "0 0 24 24",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: 2,
                                                d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                            }, void 0, false, {
                                                fileName: "[project]/OZONE/ozone-water-1/src/app/orderDashboard/page.jsx",
                                                lineNumber: 358,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/OZONE/ozone-water-1/src/app/orderDashboard/page.jsx",
                                            lineNumber: 352,
                                            columnNumber: 15
                                        }, this),
                                        searchQuery && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setSearchQuery(""),
                                            className: "absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: "w-5 h-5",
                                                fill: "none",
                                                stroke: "currentColor",
                                                viewBox: "0 0 24 24",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: 2,
                                                    d: "M6 18L18 6M6 6l12 12"
                                                }, void 0, false, {
                                                    fileName: "[project]/OZONE/ozone-water-1/src/app/orderDashboard/page.jsx",
                                                    lineNumber: 376,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/OZONE/ozone-water-1/src/app/orderDashboard/page.jsx",
                                                lineNumber: 370,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/OZONE/ozone-water-1/src/app/orderDashboard/page.jsx",
                                            lineNumber: 366,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OZONE/ozone-water-1/src/app/orderDashboard/page.jsx",
                                    lineNumber: 344,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/OZONE/ozone-water-1/src/app/orderDashboard/page.jsx",
                                lineNumber: 343,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col lg:flex-row justify-between items-center gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap gap-3 justify-center lg:justify-start",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "px-4 py-2 bg-gray-100 rounded-full",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm font-medium text-gray-700",
                                                    children: [
                                                        "Total: ",
                                                        orders.length
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/OZONE/ozone-water-1/src/app/orderDashboard/page.jsx",
                                                    lineNumber: 392,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/OZONE/ozone-water-1/src/app/orderDashboard/page.jsx",
                                                lineNumber: 391,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "px-4 py-2 bg-blue-100 rounded-full",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm font-medium text-blue-700",
                                                    children: [
                                                        "Filtered: ",
                                                        filteredOrders.length
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/OZONE/ozone-water-1/src/app/orderDashboard/page.jsx",
                                                    lineNumber: 397,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/OZONE/ozone-water-1/src/app/orderDashboard/page.jsx",
                                                lineNumber: 396,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OZONE/ozone-water-1/src/app/orderDashboard/page.jsx",
                                        lineNumber: 390,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative w-full lg:w-auto flex justify-center lg:justify-end",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setShowFilters(!showFilters),
                                                className: "bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium shadow-lg flex items-center gap-2 w-full lg:w-64 justify-center",
                                                children: [
                                                    "Filters",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `transform transition-transform ${showFilters ? "rotate-180" : ""}`,
                                                        children: "▼"
                                                    }, void 0, false, {
                                                        fileName: "[project]/OZONE/ozone-water-1/src/app/orderDashboard/page.jsx",
                                                        lineNumber: 410,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/OZONE/ozone-water-1/src/app/orderDashboard/page.jsx",
                                                lineNumber: 405,
                                                columnNumber: 15
                                            }, this),
                                            showFilters && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute top-full mt-2 right-0 lg:right-0 bg-white rounded-xl shadow-2xl p-6 z-50 w-full lg:w-96 max-h-80 overflow-y-auto",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mb-6",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "text-sm font-semibold text-gray-900 mb-3",
                                                                children: "Order Status"
                                                            }, void 0, false, {
                                                                fileName: "[project]/OZONE/ozone-water-1/src/app/orderDashboard/page.jsx",
                                                                lineNumber: 424,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "space-y-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: ()=>{
                                                                            setFilterStatus("all");
                                                                            setShowFilters(false);
                                                                        },
                                                                        className: `w-full text-left px-4 py-2 rounded-lg transition-colors ${filterStatus === "all" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`,
                                                                        children: [
                                                                            "All Orders (",
                                                                            orders.length,
                                                                            ")"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/OZONE/ozone-water-1/src/app/orderDashboard/page.jsx",
                                                                        lineNumber: 428,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: ()=>{
                                                                            setFilterStatus("pending");
                                                                            setShowFilters(false);
                                                                        },
                                                                        className: `w-full text-left px-4 py-2 rounded-lg transition-colors ${filterStatus === "pending" ? "bg-yellow-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`,
                                                                        children: [
                                                                            "Pending (",
                                                                            orders.filter((o)=>o.status === "pending").length,
                                                                            ")"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/OZONE/ozone-water-1/src/app/orderDashboard/page.jsx",
                                                                        lineNumber: 441,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: ()=>{
                                                                            setFilterStatus("in-transit");
                                                                            setShowFilters(false);
                                                                        },
                                                                        className: `w-full text-left px-4 py-2 rounded-lg transition-colors ${filterStatus === "in-transit" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`,
                                                                        children: [
                                                                            "In Transit (",
                                                                            orders.filter((o)=>o.status === "in-transit").length,
                                                                            ")"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/OZONE/ozone-water-1/src/app/orderDashboard/page.jsx",
                                                                        lineNumber: 455,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: ()=>{
                                                                            setFilterStatus("completed");
                                                                            setShowFilters(false);
                                                                        },
                                                                        className: `w-full text-left px-4 py-2 rounded-lg transition-colors ${filterStatus === "completed" ? "bg-green-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`,
                                                                        children: [
                                                                            "Completed (",
                                                                            orders.filter((o)=>o.status === "completed").length,
                                                                            ")"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/OZONE/ozone-water-1/src/app/orderDashboard/page.jsx",
                                                                        lineNumber: 470,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: ()=>{
                                                                            setFilterStatus("cancelled");
                                                                            setShowFilters(false);
                                                                        },
                                                                        className: `w-full text-left px-4 py-2 rounded-lg transition-colors ${filterStatus === "cancelled" ? "bg-red-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`,
                                                                        children: [
                                                                            "Cancelled (",
                                                                            orders.filter((o)=>o.status === "cancelled").length,
                                                                            ")"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/OZONE/ozone-water-1/src/app/orderDashboard/page.jsx",
                                                                        lineNumber: 484,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/OZONE/ozone-water-1/src/app/orderDashboard/page.jsx",
                                                                lineNumber: 427,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/OZONE/ozone-water-1/src/app/orderDashboard/page.jsx",
                                                        lineNumber: 423,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "border-t pt-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "text-sm font-semibold text-gray-900 mb-3",
                                                                children: "Payment Status"
                                                            }, void 0, false, {
                                                                fileName: "[project]/OZONE/ozone-water-1/src/app/orderDashboard/page.jsx",
                                                                lineNumber: 503,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "space-y-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: ()=>{
                                                                            setFilterPayment("all");
                                                                            setShowFilters(false);
                                                                        },
                                                                        className: `w-full text-left px-4 py-2 rounded-lg transition-colors ${filterPayment === "all" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`,
                                                                        children: "All Payments"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/OZONE/ozone-water-1/src/app/orderDashboard/page.jsx",
                                                                        lineNumber: 507,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: ()=>{
                                                                            setFilterPayment("paid");
                                                                            setShowFilters(false);
                                                                        },
                                                                        className: `w-full text-left px-4 py-2 rounded-lg transition-colors ${filterPayment === "paid" ? "bg-green-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`,
                                                                        children: [
                                                                            "Paid (",
                                                                            orders.filter((o)=>o.paymentStatus === "paid").length,
                                                                            ")"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/OZONE/ozone-water-1/src/app/orderDashboard/page.jsx",
                                                                        lineNumber: 520,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: ()=>{
                                                                            setFilterPayment("partially-paid");
                                                                            setShowFilters(false);
                                                                        },
                                                                        className: `w-full text-left px-4 py-2 rounded-lg transition-colors ${filterPayment === "partially-paid" ? "bg-yellow-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`,
                                                                        children: [
                                                                            "Partially Paid (",
                                                                            orders.filter((o)=>o.paymentStatus === "partially-paid").length,
                                                                            ")"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/OZONE/ozone-water-1/src/app/orderDashboard/page.jsx",
                                                                        lineNumber: 538,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: ()=>{
                                                                            setFilterPayment("unpaid");
                                                                            setShowFilters(false);
                                                                        },
                                                                        className: `w-full text-left px-4 py-2 rounded-lg transition-colors ${filterPayment === "unpaid" ? "bg-red-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`,
                                                                        children: [
                                                                            "Unpaid (",
                                                                            orders.filter((o)=>o.paymentStatus === "unpaid").length,
                                                                            ")"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/OZONE/ozone-water-1/src/app/orderDashboard/page.jsx",
                                                                        lineNumber: 557,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/OZONE/ozone-water-1/src/app/orderDashboard/page.jsx",
                                                                lineNumber: 506,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/OZONE/ozone-water-1/src/app/orderDashboard/page.jsx",
                                                        lineNumber: 502,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>{
                                                            setFilterStatus("all");
                                                            setFilterPayment("all");
                                                            setShowFilters(false);
                                                        },
                                                        className: "w-full mt-4 bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors font-medium",
                                                        children: "Reset All Filters"
                                                    }, void 0, false, {
                                                        fileName: "[project]/OZONE/ozone-water-1/src/app/orderDashboard/page.jsx",
                                                        lineNumber: 579,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/OZONE/ozone-water-1/src/app/orderDashboard/page.jsx",
                                                lineNumber: 421,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OZONE/ozone-water-1/src/app/orderDashboard/page.jsx",
                                        lineNumber: 404,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OZONE/ozone-water-1/src/app/orderDashboard/page.jsx",
                                lineNumber: 388,
                                columnNumber: 11
                            }, this),
                            (filterStatus !== "all" || filterPayment !== "all" || searchQuery !== "") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-4 flex flex-wrap gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm text-gray-600",
                                        children: "Active Filters:"
                                    }, void 0, false, {
                                        fileName: "[project]/OZONE/ozone-water-1/src/app/orderDashboard/page.jsx",
                                        lineNumber: 599,
                                        columnNumber: 15
                                    }, this),
                                    filterStatus !== "all" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium flex items-center gap-2",
                                        children: [
                                            "Status: ",
                                            filterStatus,
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setFilterStatus("all"),
                                                className: "hover:text-blue-900",
                                                children: "×"
                                            }, void 0, false, {
                                                fileName: "[project]/OZONE/ozone-water-1/src/app/orderDashboard/page.jsx",
                                                lineNumber: 603,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OZONE/ozone-water-1/src/app/orderDashboard/page.jsx",
                                        lineNumber: 601,
                                        columnNumber: 17
                                    }, this),
                                    filterPayment !== "all" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium flex items-center gap-2",
                                        children: [
                                            "Payment: ",
                                            filterPayment,
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setFilterPayment("all"),
                                                className: "hover:text-green-900",
                                                children: "×"
                                            }, void 0, false, {
                                                fileName: "[project]/OZONE/ozone-water-1/src/app/orderDashboard/page.jsx",
                                                lineNumber: 614,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OZONE/ozone-water-1/src/app/orderDashboard/page.jsx",
                                        lineNumber: 612,
                                        columnNumber: 17
                                    }, this),
                                    searchQuery !== "" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium flex items-center gap-2",
                                        children: [
                                            'Search: "',
                                            searchQuery,
                                            '"',
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setSearchQuery(""),
                                                className: "hover:text-purple-900",
                                                children: "×"
                                            }, void 0, false, {
                                                fileName: "[project]/OZONE/ozone-water-1/src/app/orderDashboard/page.jsx",
                                                lineNumber: 625,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OZONE/ozone-water-1/src/app/orderDashboard/page.jsx",
                                        lineNumber: 623,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OZONE/ozone-water-1/src/app/orderDashboard/page.jsx",
                                lineNumber: 598,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OZONE/ozone-water-1/src/app/orderDashboard/page.jsx",
                        lineNumber: 341,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-2xl shadow-lg overflow-hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "overflow-x-auto",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                    className: "w-full",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                            className: "bg-gray-50",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "px-6 py-4 text-left text-sm font-semibold text-gray-700",
                                                        children: "Order ID"
                                                    }, void 0, false, {
                                                        fileName: "[project]/OZONE/ozone-water-1/src/app/orderDashboard/page.jsx",
                                                        lineNumber: 643,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "px-6 py-4 text-left text-sm font-semibold text-gray-700",
                                                        children: "Shop Details"
                                                    }, void 0, false, {
                                                        fileName: "[project]/OZONE/ozone-water-1/src/app/orderDashboard/page.jsx",
                                                        lineNumber: 646,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "px-6 py-4 text-left text-sm font-semibold text-gray-700",
                                                        children: "Items(pet)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/OZONE/ozone-water-1/src/app/orderDashboard/page.jsx",
                                                        lineNumber: 649,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "px-6 py-4 text-left text-sm font-semibold text-gray-700",
                                                        children: "Total Amount"
                                                    }, void 0, false, {
                                                        fileName: "[project]/OZONE/ozone-water-1/src/app/orderDashboard/page.jsx",
                                                        lineNumber: 652,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "px-6 py-4 text-left text-sm font-semibold text-gray-700",
                                                        children: "Payment"
                                                    }, void 0, false, {
                                                        fileName: "[project]/OZONE/ozone-water-1/src/app/orderDashboard/page.jsx",
                                                        lineNumber: 655,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "px-6 py-4 text-left text-sm font-semibold text-gray-700",
                                                        children: "Status"
                                                    }, void 0, false, {
                                                        fileName: "[project]/OZONE/ozone-water-1/src/app/orderDashboard/page.jsx",
                                                        lineNumber: 658,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "px-6 py-4 text-left text-sm font-semibold text-gray-700",
                                                        children: "Date"
                                                    }, void 0, false, {
                                                        fileName: "[project]/OZONE/ozone-water-1/src/app/orderDashboard/page.jsx",
                                                        lineNumber: 661,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "px-6 py-4 text-left text-sm font-semibold text-gray-700",
                                                        children: "Action"
                                                    }, void 0, false, {
                                                        fileName: "[project]/OZONE/ozone-water-1/src/app/orderDashboard/page.jsx",
                                                        lineNumber: 664,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/OZONE/ozone-water-1/src/app/orderDashboard/page.jsx",
                                                lineNumber: 642,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/OZONE/ozone-water-1/src/app/orderDashboard/page.jsx",
                                            lineNumber: 641,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                            className: "divide-y divide-gray-200",
                                            children: filteredOrders?.map((order, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    className: "hover:bg-gray-50 transition-colors",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "px-6 py-4",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-medium text-gray-900",
                                                                children: "ORD" + String(index + 1).padStart(3, "0")
                                                            }, void 0, false, {
                                                                fileName: "[project]/OZONE/ozone-water-1/src/app/orderDashboard/page.jsx",
                                                                lineNumber: 676,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/OZONE/ozone-water-1/src/app/orderDashboard/page.jsx",
                                                            lineNumber: 675,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "px-6 py-4",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "font-medium text-gray-900",
                                                                        children: order.shopName
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/OZONE/ozone-water-1/src/app/orderDashboard/page.jsx",
                                                                        lineNumber: 682,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-sm text-gray-500",
                                                                        children: order.shopAddress
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/OZONE/ozone-water-1/src/app/orderDashboard/page.jsx",
                                                                        lineNumber: 685,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-sm text-gray-500",
                                                                        children: order.phone
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/OZONE/ozone-water-1/src/app/orderDashboard/page.jsx",
                                                                        lineNumber: 688,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/OZONE/ozone-water-1/src/app/orderDashboard/page.jsx",
                                                                lineNumber: 681,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/OZONE/ozone-water-1/src/app/orderDashboard/page.jsx",
                                                            lineNumber: 680,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "px-6 py-4",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-sm ",
                                                                children: order?.orderItems.map((item, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-gray-700 ",
                                                                        children: [
                                                                            item.product?.size,
                                                                            " (",
                                                                            item.product?.packingType,
                                                                            ") ×",
                                                                            " ",
                                                                            item.quantity
                                                                        ]
                                                                    }, idx, true, {
                                                                        fileName: "[project]/OZONE/ozone-water-1/src/app/orderDashboard/page.jsx",
                                                                        lineNumber: 694,
                                                                        columnNumber: 27
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/OZONE/ozone-water-1/src/app/orderDashboard/page.jsx",
                                                                lineNumber: 692,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/OZONE/ozone-water-1/src/app/orderDashboard/page.jsx",
                                                            lineNumber: 691,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "px-6 py-4",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-semibold text-gray-900",
                                                                children: [
                                                                    "Rs. ",
                                                                    order.totalPrice,
                                                                    "/-"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/OZONE/ozone-water-1/src/app/orderDashboard/page.jsx",
                                                                lineNumber: 702,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/OZONE/ozone-water-1/src/app/orderDashboard/page.jsx",
                                                            lineNumber: 701,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "px-6 py-4",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: `px-3 py-1 rounded-full text-xs font-medium ${getPaymentColor(order.paymentStatus)}`,
                                                                    children: [
                                                                        order.paymentStatus === "paid" && "Paid",
                                                                        order.paymentStatus === "partially-paid" && "Partial",
                                                                        order.paymentStatus === "unpaid" && "Unpaid"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/OZONE/ozone-water-1/src/app/orderDashboard/page.jsx",
                                                                    lineNumber: 707,
                                                                    columnNumber: 23
                                                                }, this),
                                                                order.paymentStatus === "partially-paid" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-xs text-gray-500 mt-1",
                                                                            children: [
                                                                                "Paid: Rs. ",
                                                                                order.paidAmount,
                                                                                "/-"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/OZONE/ozone-water-1/src/app/orderDashboard/page.jsx",
                                                                            lineNumber: 718,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-xs text-gray-500 mt-1",
                                                                            children: [
                                                                                "Remaining: Rs. ",
                                                                                order.remainingAmount,
                                                                                "/-"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/OZONE/ozone-water-1/src/app/orderDashboard/page.jsx",
                                                                            lineNumber: 721,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/OZONE/ozone-water-1/src/app/orderDashboard/page.jsx",
                                                            lineNumber: 706,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "px-6 py-4",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: `px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`,
                                                                children: order.status.charAt(0).toUpperCase() + order.status.slice(1).replace("-", " ")
                                                            }, void 0, false, {
                                                                fileName: "[project]/OZONE/ozone-water-1/src/app/orderDashboard/page.jsx",
                                                                lineNumber: 728,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/OZONE/ozone-water-1/src/app/orderDashboard/page.jsx",
                                                            lineNumber: 727,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "px-6 py-4 text-sm text-gray-600",
                                                            children: new Date(order.createdAt).toLocaleDateString()
                                                        }, void 0, false, {
                                                            fileName: "[project]/OZONE/ozone-water-1/src/app/orderDashboard/page.jsx",
                                                            lineNumber: 737,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "px-6 py-4",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>handleEditOrder(order),
                                                                className: "bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium",
                                                                children: "Manage"
                                                            }, void 0, false, {
                                                                fileName: "[project]/OZONE/ozone-water-1/src/app/orderDashboard/page.jsx",
                                                                lineNumber: 741,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/OZONE/ozone-water-1/src/app/orderDashboard/page.jsx",
                                                            lineNumber: 740,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, index, true, {
                                                    fileName: "[project]/OZONE/ozone-water-1/src/app/orderDashboard/page.jsx",
                                                    lineNumber: 671,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/OZONE/ozone-water-1/src/app/orderDashboard/page.jsx",
                                            lineNumber: 669,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OZONE/ozone-water-1/src/app/orderDashboard/page.jsx",
                                    lineNumber: 640,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/OZONE/ozone-water-1/src/app/orderDashboard/page.jsx",
                                lineNumber: 639,
                                columnNumber: 11
                            }, this),
                            filteredOrders.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center py-12",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-500 text-lg",
                                    children: "No orders found"
                                }, void 0, false, {
                                    fileName: "[project]/OZONE/ozone-water-1/src/app/orderDashboard/page.jsx",
                                    lineNumber: 756,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/OZONE/ozone-water-1/src/app/orderDashboard/page.jsx",
                                lineNumber: 755,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OZONE/ozone-water-1/src/app/orderDashboard/page.jsx",
                        lineNumber: 638,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OZONE/ozone-water-1/src/app/orderDashboard/page.jsx",
                lineNumber: 326,
                columnNumber: 7
            }, this),
            showModal && selectedOrder && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4",
                onClick: ()=>setShowModal(false),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-3xl shadow-2xl w-full max-w-2xl overflow-hidden flex flex-col",
                    style: {
                        maxHeight: "600px"
                    },
                    onClick: (e)=>e.stopPropagation(),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-6 border-b flex justify-between items-center flex-shrink-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-2xl font-bold text-gray-900",
                                    children: [
                                        "Manage Order - ",
                                        selectedOrder.id
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OZONE/ozone-water-1/src/app/orderDashboard/page.jsx",
                                    lineNumber: 776,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setShowModal(false),
                                    className: "text-gray-500 hover:text-gray-700 text-2xl",
                                    children: "×"
                                }, void 0, false, {
                                    fileName: "[project]/OZONE/ozone-water-1/src/app/orderDashboard/page.jsx",
                                    lineNumber: 779,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OZONE/ozone-water-1/src/app/orderDashboard/page.jsx",
                            lineNumber: 775,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 overflow-y-auto p-6",
                            style: {
                                minHeight: 0
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "font-semibold text-gray-900 mb-3",
                                            children: "Shop Details"
                                        }, void 0, false, {
                                            fileName: "[project]/OZONE/ozone-water-1/src/app/orderDashboard/page.jsx",
                                            lineNumber: 794,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-sm font-medium text-gray-700 mb-1",
                                                            children: "Shop Name"
                                                        }, void 0, false, {
                                                            fileName: "[project]/OZONE/ozone-water-1/src/app/orderDashboard/page.jsx",
                                                            lineNumber: 799,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "text",
                                                            value: modalData.shopName,
                                                            onChange: (e)=>setModalData({
                                                                    ...modalData,
                                                                    shopName: e.target.value
                                                                }),
                                                            className: "w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-blue-600 focus:outline-none",
                                                            placeholder: "Enter shop name"
                                                        }, void 0, false, {
                                                            fileName: "[project]/OZONE/ozone-water-1/src/app/orderDashboard/page.jsx",
                                                            lineNumber: 802,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/OZONE/ozone-water-1/src/app/orderDashboard/page.jsx",
                                                    lineNumber: 798,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-sm font-medium text-gray-700 mb-1",
                                                            children: "Shop Address"
                                                        }, void 0, false, {
                                                            fileName: "[project]/OZONE/ozone-water-1/src/app/orderDashboard/page.jsx",
                                                            lineNumber: 813,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "text",
                                                            value: modalData.shopAddress,
                                                            onChange: (e)=>setModalData({
                                                                    ...modalData,
                                                                    shopAddress: e.target.value
                                                                }),
                                                            className: "w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-blue-600 focus:outline-none",
                                                            placeholder: "Enter shop address"
                                                        }, void 0, false, {
                                                            fileName: "[project]/OZONE/ozone-water-1/src/app/orderDashboard/page.jsx",
                                                            lineNumber: 816,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/OZONE/ozone-water-1/src/app/orderDashboard/page.jsx",
                                                    lineNumber: 812,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-sm font-medium text-gray-700 mb-1",
                                                            children: "Shop Contact"
                                                        }, void 0, false, {
                                                            fileName: "[project]/OZONE/ozone-water-1/src/app/orderDashboard/page.jsx",
                                                            lineNumber: 830,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "text",
                                                            value: modalData.shopContact,
                                                            onChange: (e)=>setModalData({
                                                                    ...modalData,
                                                                    shopContact: e.target.value
                                                                }),
                                                            className: "w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-blue-600 focus:outline-none",
                                                            placeholder: "Enter shop contact"
                                                        }, void 0, false, {
                                                            fileName: "[project]/OZONE/ozone-water-1/src/app/orderDashboard/page.jsx",
                                                            lineNumber: 833,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/OZONE/ozone-water-1/src/app/orderDashboard/page.jsx",
                                                    lineNumber: 829,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/OZONE/ozone-water-1/src/app/orderDashboard/page.jsx",
                                            lineNumber: 797,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OZONE/ozone-water-1/src/app/orderDashboard/page.jsx",
                                    lineNumber: 793,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-6 p-4 bg-gray-50 rounded-xl",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "font-semibold text-gray-900 mb-2",
                                            children: "Order Items"
                                        }, void 0, false, {
                                            fileName: "[project]/OZONE/ozone-water-1/src/app/orderDashboard/page.jsx",
                                            lineNumber: 851,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm font-medium text-gray-700",
                                                    children: "Items:"
                                                }, void 0, false, {
                                                    fileName: "[project]/OZONE/ozone-water-1/src/app/orderDashboard/page.jsx",
                                                    lineNumber: 856,
                                                    columnNumber: 19
                                                }, this),
                                                selectedOrder.orderItems.map((item, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-gray-600",
                                                        children: [
                                                            item.product?.size,
                                                            " (",
                                                            item.product?.packingType,
                                                            ",",
                                                            " ",
                                                            item.product?.waterQuality,
                                                            ",",
                                                            " ",
                                                            item.product?.bottleQuality,
                                                            ") × ",
                                                            item.quantity,
                                                            " = Rs.",
                                                            " ",
                                                            item.price * item.quantity,
                                                            "/-"
                                                        ]
                                                    }, idx, true, {
                                                        fileName: "[project]/OZONE/ozone-water-1/src/app/orderDashboard/page.jsx",
                                                        lineNumber: 858,
                                                        columnNumber: 21
                                                    }, this)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-lg font-bold text-gray-900 mt-2",
                                                    children: [
                                                        "Total: Rs. ",
                                                        selectedOrder.totalPrice,
                                                        "/-"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/OZONE/ozone-water-1/src/app/orderDashboard/page.jsx",
                                                    lineNumber: 865,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/OZONE/ozone-water-1/src/app/orderDashboard/page.jsx",
                                            lineNumber: 855,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OZONE/ozone-water-1/src/app/orderDashboard/page.jsx",
                                    lineNumber: 850,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-gray-700 font-medium mb-2",
                                            children: "Payment Status"
                                        }, void 0, false, {
                                            fileName: "[project]/OZONE/ozone-water-1/src/app/orderDashboard/page.jsx",
                                            lineNumber: 873,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: modalData.paymentStatus,
                                            onChange: (e)=>setModalData({
                                                    ...modalData,
                                                    paymentStatus: e.target.value,
                                                    remainingAmount: e.target.value === "paid" ? 0 : e.target.value === "unpaid" ? selectedOrder.totalPrice : modalData.remainingAmount
                                                }),
                                            className: "w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-600 focus:outline-none",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "unpaid",
                                                    children: "Unpaid"
                                                }, void 0, false, {
                                                    fileName: "[project]/OZONE/ozone-water-1/src/app/orderDashboard/page.jsx",
                                                    lineNumber: 892,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "partially-paid",
                                                    children: "Partially Paid"
                                                }, void 0, false, {
                                                    fileName: "[project]/OZONE/ozone-water-1/src/app/orderDashboard/page.jsx",
                                                    lineNumber: 893,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "paid",
                                                    children: "Paid"
                                                }, void 0, false, {
                                                    fileName: "[project]/OZONE/ozone-water-1/src/app/orderDashboard/page.jsx",
                                                    lineNumber: 894,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/OZONE/ozone-water-1/src/app/orderDashboard/page.jsx",
                                            lineNumber: 876,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OZONE/ozone-water-1/src/app/orderDashboard/page.jsx",
                                    lineNumber: 872,
                                    columnNumber: 15
                                }, this),
                                modalData.paymentStatus === "partially-paid" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-gray-700 font-medium mb-2",
                                            children: "Remaining Amount"
                                        }, void 0, false, {
                                            fileName: "[project]/OZONE/ozone-water-1/src/app/orderDashboard/page.jsx",
                                            lineNumber: 901,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "number",
                                            min: "0",
                                            max: selectedOrder.totalPrice,
                                            value: modalData.remainingAmount,
                                            onChange: (e)=>setModalData({
                                                    ...modalData,
                                                    remainingAmount: Math.min(parseFloat(e.target.value) || 0, selectedOrder.totalPrice)
                                                }),
                                            className: "w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-600 focus:outline-none"
                                        }, void 0, false, {
                                            fileName: "[project]/OZONE/ozone-water-1/src/app/orderDashboard/page.jsx",
                                            lineNumber: 904,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OZONE/ozone-water-1/src/app/orderDashboard/page.jsx",
                                    lineNumber: 900,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-gray-700 font-medium mb-2",
                                            children: "Order Status"
                                        }, void 0, false, {
                                            fileName: "[project]/OZONE/ozone-water-1/src/app/orderDashboard/page.jsx",
                                            lineNumber: 925,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: modalData.status,
                                            onChange: (e)=>setModalData({
                                                    ...modalData,
                                                    status: e.target.value
                                                }),
                                            className: "w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-600 focus:outline-none",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "pending",
                                                    children: "Pending"
                                                }, void 0, false, {
                                                    fileName: "[project]/OZONE/ozone-water-1/src/app/orderDashboard/page.jsx",
                                                    lineNumber: 935,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "in-transit",
                                                    children: "In Transit"
                                                }, void 0, false, {
                                                    fileName: "[project]/OZONE/ozone-water-1/src/app/orderDashboard/page.jsx",
                                                    lineNumber: 936,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "completed",
                                                    children: "Completed"
                                                }, void 0, false, {
                                                    fileName: "[project]/OZONE/ozone-water-1/src/app/orderDashboard/page.jsx",
                                                    lineNumber: 937,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "cancelled",
                                                    children: "Cancelled"
                                                }, void 0, false, {
                                                    fileName: "[project]/OZONE/ozone-water-1/src/app/orderDashboard/page.jsx",
                                                    lineNumber: 938,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/OZONE/ozone-water-1/src/app/orderDashboard/page.jsx",
                                            lineNumber: 928,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OZONE/ozone-water-1/src/app/orderDashboard/page.jsx",
                                    lineNumber: 924,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OZONE/ozone-water-1/src/app/orderDashboard/page.jsx",
                            lineNumber: 788,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-6 border-t flex flex-col sm:flex-row gap-4 flex-shrink-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleUpdateOrder,
                                    className: "flex-1 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 font-medium",
                                    children: "Update Order"
                                }, void 0, false, {
                                    fileName: "[project]/OZONE/ozone-water-1/src/app/orderDashboard/page.jsx",
                                    lineNumber: 945,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        setShowModal(false);
                                        setShowDeleteConfirm(true);
                                    },
                                    className: "flex-1 bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 font-medium",
                                    children: "Delete Order"
                                }, void 0, false, {
                                    fileName: "[project]/OZONE/ozone-water-1/src/app/orderDashboard/page.jsx",
                                    lineNumber: 952,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OZONE/ozone-water-1/src/app/orderDashboard/page.jsx",
                            lineNumber: 944,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OZONE/ozone-water-1/src/app/orderDashboard/page.jsx",
                    lineNumber: 769,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/OZONE/ozone-water-1/src/app/orderDashboard/page.jsx",
                lineNumber: 764,
                columnNumber: 9
            }, this),
            showDeleteConfirm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-[60] p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-2xl shadow-2xl max-w-md w-full p-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center mb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "w-8 h-8 text-red-600",
                                        fill: "none",
                                        stroke: "currentColor",
                                        viewBox: "0 0 24 24",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: 2,
                                            d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                                        }, void 0, false, {
                                            fileName: "[project]/OZONE/ozone-water-1/src/app/orderDashboard/page.jsx",
                                            lineNumber: 978,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/OZONE/ozone-water-1/src/app/orderDashboard/page.jsx",
                                        lineNumber: 972,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/OZONE/ozone-water-1/src/app/orderDashboard/page.jsx",
                                    lineNumber: 971,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-2xl font-bold text-gray-900 mb-2",
                                    children: "Delete Order?"
                                }, void 0, false, {
                                    fileName: "[project]/OZONE/ozone-water-1/src/app/orderDashboard/page.jsx",
                                    lineNumber: 986,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-600",
                                    children: "Are you sure you want to delete this order? This action cannot be undone."
                                }, void 0, false, {
                                    fileName: "[project]/OZONE/ozone-water-1/src/app/orderDashboard/page.jsx",
                                    lineNumber: 989,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OZONE/ozone-water-1/src/app/orderDashboard/page.jsx",
                            lineNumber: 970,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setShowDeleteConfirm(false),
                                    className: "flex-1 bg-gray-200 text-gray-700 py-3 rounded-lg hover:bg-gray-300 transition-colors font-medium",
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/OZONE/ozone-water-1/src/app/orderDashboard/page.jsx",
                                    lineNumber: 996,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleDeleteOrder,
                                    className: "flex-1 bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition-colors font-medium",
                                    children: "Delete"
                                }, void 0, false, {
                                    fileName: "[project]/OZONE/ozone-water-1/src/app/orderDashboard/page.jsx",
                                    lineNumber: 1002,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OZONE/ozone-water-1/src/app/orderDashboard/page.jsx",
                            lineNumber: 995,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OZONE/ozone-water-1/src/app/orderDashboard/page.jsx",
                    lineNumber: 969,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/OZONE/ozone-water-1/src/app/orderDashboard/page.jsx",
                lineNumber: 968,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/OZONE/ozone-water-1/src/app/orderDashboard/page.jsx",
        lineNumber: 324,
        columnNumber: 5
    }, this);
}
_s(OrderDashboard, "bCEYlyTuazOvFRa7X9PPof+GBYQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = OrderDashboard;
var _c;
__turbopack_context__.k.register(_c, "OrderDashboard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=OZONE_ozone-water-1_src_app_orderDashboard_page_jsx_31ff63cc._.js.map
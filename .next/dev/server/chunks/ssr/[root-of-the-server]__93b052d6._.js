module.exports = [
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/https [external] (https, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/http2 [external] (http2, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http2", () => require("http2"));

module.exports = mod;
}),
"[externals]/assert [external] (assert, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("assert", () => require("assert"));

module.exports = mod;
}),
"[externals]/tty [external] (tty, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tty", () => require("tty"));

module.exports = mod;
}),
"[externals]/os [external] (os, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[project]/OZONE/ozone-water-1/src/app/order/page.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Order
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OZONE/ozone-water-1/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OZONE/ozone-water-1/node_modules/axios/lib/axios.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OZONE/ozone-water-1/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OZONE/ozone-water-1/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OZONE/ozone-water-1/node_modules/react-hot-toast/dist/index.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function Order() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [products, setProducts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loadingProducts, setLoadingProducts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        shopName: "",
        shopAddress: "",
        whatsappContact: ""
    });
    const [orders, setOrders] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [currentOrder, setCurrentOrder] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        productId: "",
        productDetails: null,
        quantity: "",
        discountedPrice: ""
    });
    const [deliveryStatus, setDeliveryStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("pending");
    const [paymentStatus, setPaymentStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("unpaid");
    const [paidAmount, setPaidAmount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    // Fetch products from database
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const fetchProducts = async ()=>{
            try {
                const response = await fetch("/api/product");
                const data = await response.json();
                if (data.success && data.products) {
                    setProducts(data.products);
                    // Set first product as default
                    if (data.products.length > 0) {
                        setCurrentOrder({
                            productId: data.products[0]._id,
                            productDetails: data.products[0],
                            quantity: "",
                            discountedPrice: ""
                        });
                    }
                }
            } catch (error) {
                console.error("Error fetching products:", error);
                __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("Failed to load products");
            } finally{
                setLoadingProducts(false);
            }
        };
        fetchProducts();
    }, []);
    // Check for user in localStorage
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const storedUser = localStorage.getItem("user2");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);
    const handleFormChange = (e)=>{
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };
    const handleAddOrder = ()=>{
        if (!currentOrder.productDetails) {
            __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("Please select a product");
            return;
        }
        const qty = parseInt(currentOrder.quantity);
        const actualPrice = currentOrder.productDetails.price;
        const discountedPrice = parseFloat(currentOrder.discountedPrice) || actualPrice;
        if (qty > 0 && discountedPrice > 0) {
            const existingOrderIndex = orders.findIndex((order)=>order.productId === currentOrder.productId && order.discountedPrice === discountedPrice);
            if (existingOrderIndex !== -1) {
                const updatedOrders = [
                    ...orders
                ];
                updatedOrders[existingOrderIndex].quantity += qty;
                setOrders(updatedOrders);
            } else {
                setOrders([
                    ...orders,
                    {
                        productId: currentOrder.productId,
                        productDetails: currentOrder.productDetails,
                        quantity: qty,
                        actualPrice: actualPrice,
                        discountedPrice: discountedPrice
                    }
                ]);
            }
            // Reset to first product
            if (products.length > 0) {
                setCurrentOrder({
                    productId: products[0]._id,
                    productDetails: products[0],
                    quantity: "",
                    discountedPrice: ""
                });
            }
        } else {
            __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("Please enter a valid quantity and price");
        }
    };
    const handleRemoveOrder = (index)=>{
        setOrders(orders.filter((_, i)=>i !== index));
    };
    const handleUpdateQuantity = (index, newQuantity)=>{
        const updatedOrders = [
            ...orders
        ];
        updatedOrders[index].quantity = newQuantity;
        setOrders(updatedOrders);
    };
    const handleUpdatePrice = (index, newPrice)=>{
        const updatedOrders = [
            ...orders
        ];
        const parsedPrice = parseFloat(newPrice);
        updatedOrders[index].discountedPrice = parsedPrice >= 0 ? parsedPrice : updatedOrders[index].actualPrice;
        setOrders(updatedOrders);
    };
    const calculateTotal = ()=>{
        return orders.reduce((total, order)=>{
            const qty = parseInt(order.quantity) || 0;
            const actualPrice = order.actualPrice || 0;
            return total + actualPrice * qty;
        }, 0);
    };
    const calculateDiscount = ()=>{
        return orders.reduce((totalDiscount, order)=>{
            const qty = parseInt(order.quantity) || 0;
            const actualPrice = order.actualPrice || 0;
            const discountedPrice = order.discountedPrice || 0;
            const discount = (actualPrice - discountedPrice) * qty;
            return totalDiscount + discount;
        }, 0);
    };
    const calculateGrandTotal = ()=>{
        return orders.reduce((grandTotal, order)=>{
            const qty = parseInt(order.quantity) || 0;
            const discountedPrice = order.discountedPrice || 0;
            return grandTotal + discountedPrice * qty;
        }, 0);
    };
    const calculateRemaining = ()=>{
        return calculateGrandTotal() - paidAmount;
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        const totalPrice = calculateTotal();
        const totalDiscount = calculateDiscount();
        const grandTotal = calculateGrandTotal();
        let finalPaymentStatus = paymentStatus;
        let finalPaidAmount = paidAmount;
        let finalRemainingAmount = grandTotal;
        // Calculate remaining amount based on payment status
        if (paymentStatus === "paid") {
            finalPaidAmount = grandTotal;
            finalRemainingAmount = 0;
        } else if (paymentStatus === "partially-paid") {
            finalRemainingAmount = grandTotal - paidAmount;
        } else {
            finalPaidAmount = 0;
            finalRemainingAmount = grandTotal;
        }
        const orderPayload = {
            shopName: formData.shopName,
            shopAddress: formData.shopAddress,
            shopContact: formData.whatsappContact,
            orderItems: orders.map((order)=>({
                    product: order.productId,
                    quantity: order.quantity,
                    price: order.actualPrice,
                    discountedPrice: order.discountedPrice
                })),
            totalPrice: grandTotal,
            totalDiscount: totalDiscount,
            grandTotal: grandTotal,
            paymentStatus: finalPaymentStatus,
            paidAmount: finalPaidAmount,
            remainingAmount: finalRemainingAmount,
            status: deliveryStatus
        };
        console.log("Order Submitted:", orderPayload);
        try {
            // Create Order
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].post("/api/orders", orderPayload);
            if (!res.data?.message) {
                __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("Order creation failed");
                return;
            }
            // Success Handling
            __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success(res.data.message || "Order placed successfully!");
            localStorage.setItem("receiptType", deliveryStatus === "completed" ? "order-delivered" : "order-placed");
            localStorage.setItem("currentOrder", JSON.stringify(res.data.order));
            setFormData({
                shopName: "",
                shopAddress: "",
                whatsappContact: ""
            });
            setOrders([]);
            setPaymentStatus("unpaid");
            setPaidAmount(0);
            if (user) {
                router.push("/receipt");
            }
        } catch (error) {
            console.error("Order submission error:", error);
            // Backend responded with an error
            if (error.response) {
                __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error(error.response.data?.message || "Order placement failed");
                return;
            }
            // Server not responding
            if (error.request) {
                __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("Server not responding. Please try again later.");
                return;
            }
            // Unknown error
            __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("Unexpected error occurred");
        }
    };
    const totalPrice = calculateTotal();
    const totalDiscount = calculateDiscount();
    const grandTotal = calculateGrandTotal();
    const remaining = calculateRemaining();
    // Check if form is valid for submission
    const isFormValid = ()=>{
        return formData.shopName.trim() !== "" && formData.shopAddress.trim() !== "" && formData.whatsappContact.trim() !== "" && orders.length > 0 && orders.every((order)=>{
            const qty = parseInt(order.quantity);
            return qty > 0;
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "w-full min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 py-6 sm:py-12",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Toaster"], {}, void 0, false, {
                fileName: "[project]/OZONE/ozone-water-1/src/app/order/page.jsx",
                lineNumber: 279,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto px-4 sm:px-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-4 sm:mb-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>router.back(),
                            className: "flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors font-medium text-sm sm:text-base",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "w-5 h-5 sm:w-6 sm:h-6",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M15 19l-7-7 7-7"
                                    }, void 0, false, {
                                        fileName: "[project]/OZONE/ozone-water-1/src/app/order/page.jsx",
                                        lineNumber: 293,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/OZONE/ozone-water-1/src/app/order/page.jsx",
                                    lineNumber: 287,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Back"
                                }, void 0, false, {
                                    fileName: "[project]/OZONE/ozone-water-1/src/app/order/page.jsx",
                                    lineNumber: 300,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OZONE/ozone-water-1/src/app/order/page.jsx",
                            lineNumber: 283,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/OZONE/ozone-water-1/src/app/order/page.jsx",
                        lineNumber: 282,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center mb-6 sm:mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-2",
                                children: "Place Your Order"
                            }, void 0, false, {
                                fileName: "[project]/OZONE/ozone-water-1/src/app/order/page.jsx",
                                lineNumber: 305,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-lg sm:text-xl text-gray-600",
                                children: "Ozone Mineral Water® Pvt Ltd"
                            }, void 0, false, {
                                fileName: "[project]/OZONE/ozone-water-1/src/app/order/page.jsx",
                                lineNumber: 308,
                                columnNumber: 11
                            }, this),
                            user && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs sm:text-sm text-gray-500 mt-2",
                                children: [
                                    "Logged in as: ",
                                    user.name,
                                    " (",
                                    user.role,
                                    ")"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OZONE/ozone-water-1/src/app/order/page.jsx",
                                lineNumber: 312,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OZONE/ozone-water-1/src/app/order/page.jsx",
                        lineNumber: 304,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: handleSubmit,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "lg:col-span-2 space-y-4 sm:space-y-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-white rounded-2xl sm:rounded-3xl shadow-xl p-4 sm:p-6 lg:p-8",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6",
                                                    children: "Shop Details"
                                                }, void 0, false, {
                                                    fileName: "[project]/OZONE/ozone-water-1/src/app/order/page.jsx",
                                                    lineNumber: 324,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-3 sm:space-y-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-gray-700 font-medium mb-1.5 sm:mb-2 text-sm sm:text-base",
                                                                    children: "Shop Name *"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/OZONE/ozone-water-1/src/app/order/page.jsx",
                                                                    lineNumber: 329,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "text",
                                                                    name: "shopName",
                                                                    required: true,
                                                                    value: formData.shopName,
                                                                    onChange: handleFormChange,
                                                                    className: "w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-gray-300 focus:border-blue-600 focus:outline-none text-sm sm:text-base",
                                                                    placeholder: "Enter shop name"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/OZONE/ozone-water-1/src/app/order/page.jsx",
                                                                    lineNumber: 332,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/OZONE/ozone-water-1/src/app/order/page.jsx",
                                                            lineNumber: 328,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-gray-700 font-medium mb-1.5 sm:mb-2 text-sm sm:text-base",
                                                                    children: "Shop Address *"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/OZONE/ozone-water-1/src/app/order/page.jsx",
                                                                    lineNumber: 343,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                                    name: "shopAddress",
                                                                    required: true,
                                                                    value: formData.shopAddress,
                                                                    onChange: handleFormChange,
                                                                    rows: "3",
                                                                    className: "w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-gray-300 focus:border-blue-600 focus:outline-none resize-none text-sm sm:text-base",
                                                                    placeholder: "Enter complete address"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/OZONE/ozone-water-1/src/app/order/page.jsx",
                                                                    lineNumber: 346,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/OZONE/ozone-water-1/src/app/order/page.jsx",
                                                            lineNumber: 342,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-gray-700 font-medium mb-1.5 sm:mb-2 text-sm sm:text-base",
                                                                    children: "WhatsApp Contact *"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/OZONE/ozone-water-1/src/app/order/page.jsx",
                                                                    lineNumber: 357,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "tel",
                                                                    name: "whatsappContact",
                                                                    required: true,
                                                                    value: formData.whatsappContact,
                                                                    onChange: handleFormChange,
                                                                    className: "w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-gray-300 focus:border-blue-600 focus:outline-none text-sm sm:text-base",
                                                                    placeholder: "03XX-XXXXXXX"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/OZONE/ozone-water-1/src/app/order/page.jsx",
                                                                    lineNumber: 360,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/OZONE/ozone-water-1/src/app/order/page.jsx",
                                                            lineNumber: 356,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/OZONE/ozone-water-1/src/app/order/page.jsx",
                                                    lineNumber: 327,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/OZONE/ozone-water-1/src/app/order/page.jsx",
                                            lineNumber: 323,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-white rounded-2xl sm:rounded-3xl shadow-xl p-4 sm:p-6 lg:p-8",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6",
                                                    children: "Add Products"
                                                }, void 0, false, {
                                                    fileName: "[project]/OZONE/ozone-water-1/src/app/order/page.jsx",
                                                    lineNumber: 375,
                                                    columnNumber: 17
                                                }, this),
                                                loadingProducts ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-center py-8",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"
                                                    }, void 0, false, {
                                                        fileName: "[project]/OZONE/ozone-water-1/src/app/order/page.jsx",
                                                        lineNumber: 380,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/OZONE/ozone-water-1/src/app/order/page.jsx",
                                                    lineNumber: 379,
                                                    columnNumber: 19
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-3 sm:space-y-0 sm:flex sm:flex-row sm:gap-3 lg:gap-4 mb-4 sm:mb-6",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-gray-700 font-medium mb-1.5 sm:mb-2 text-sm sm:text-base",
                                                                    children: "Select Product"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/OZONE/ozone-water-1/src/app/order/page.jsx",
                                                                    lineNumber: 385,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                    value: currentOrder.productId,
                                                                    onChange: (e)=>{
                                                                        const selected = products.find((p)=>p._id === e.target.value);
                                                                        setCurrentOrder({
                                                                            ...currentOrder,
                                                                            productId: e.target.value,
                                                                            productDetails: selected,
                                                                            discountedPrice: ""
                                                                        });
                                                                    },
                                                                    className: "w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-gray-300 focus:border-blue-600 focus:outline-none text-sm sm:text-base",
                                                                    children: products.map((product)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: product._id,
                                                                            children: [
                                                                                product.size,
                                                                                " - ",
                                                                                product.packingType,
                                                                                " (",
                                                                                product.waterQuality,
                                                                                ", ",
                                                                                product.bottleQuality,
                                                                                ") - Rs. ",
                                                                                product.price,
                                                                                "/-"
                                                                            ]
                                                                        }, product._id, true, {
                                                                            fileName: "[project]/OZONE/ozone-water-1/src/app/order/page.jsx",
                                                                            lineNumber: 404,
                                                                            columnNumber: 27
                                                                        }, this))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/OZONE/ozone-water-1/src/app/order/page.jsx",
                                                                    lineNumber: 388,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/OZONE/ozone-water-1/src/app/order/page.jsx",
                                                            lineNumber: 384,
                                                            columnNumber: 21
                                                        }, this),
                                                        user && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-full sm:w-32 md:w-36",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-gray-700 font-medium mb-1.5 sm:mb-2 text-sm sm:text-base",
                                                                    children: "Discounted Price"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/OZONE/ozone-water-1/src/app/order/page.jsx",
                                                                    lineNumber: 415,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "number",
                                                                    min: "0",
                                                                    value: currentOrder.discountedPrice,
                                                                    onChange: (e)=>setCurrentOrder({
                                                                            ...currentOrder,
                                                                            discountedPrice: e.target.value
                                                                        }),
                                                                    placeholder: currentOrder.productDetails?.price || "0",
                                                                    className: "w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-gray-300 focus:border-blue-600 focus:outline-none text-sm sm:text-base"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/OZONE/ozone-water-1/src/app/order/page.jsx",
                                                                    lineNumber: 418,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/OZONE/ozone-water-1/src/app/order/page.jsx",
                                                            lineNumber: 414,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-full sm:w-28 md:w-32",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-gray-700 font-medium mb-1.5 sm:mb-2 text-sm sm:text-base",
                                                                    children: "Quantity"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/OZONE/ozone-water-1/src/app/order/page.jsx",
                                                                    lineNumber: 437,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "number",
                                                                    min: "1",
                                                                    value: currentOrder.quantity,
                                                                    onChange: (e)=>setCurrentOrder({
                                                                            ...currentOrder,
                                                                            quantity: e.target.value
                                                                        }),
                                                                    placeholder: "Enter quantity",
                                                                    className: "w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-gray-300 focus:border-blue-600 focus:outline-none text-sm sm:text-base"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/OZONE/ozone-water-1/src/app/order/page.jsx",
                                                                    lineNumber: 440,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/OZONE/ozone-water-1/src/app/order/page.jsx",
                                                            lineNumber: 436,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-end",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: handleAddOrder,
                                                                disabled: loadingProducts || products.length === 0,
                                                                className: "w-full sm:w-auto bg-blue-600 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm sm:text-base disabled:bg-gray-400 disabled:cursor-not-allowed",
                                                                children: "Add to Cart"
                                                            }, void 0, false, {
                                                                fileName: "[project]/OZONE/ozone-water-1/src/app/order/page.jsx",
                                                                lineNumber: 455,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/OZONE/ozone-water-1/src/app/order/page.jsx",
                                                            lineNumber: 454,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/OZONE/ozone-water-1/src/app/order/page.jsx",
                                                    lineNumber: 383,
                                                    columnNumber: 19
                                                }, this),
                                                orders.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-2 sm:space-y-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "text-base sm:text-lg font-semibold text-gray-900",
                                                            children: "Cart Items"
                                                        }, void 0, false, {
                                                            fileName: "[project]/OZONE/ozone-water-1/src/app/order/page.jsx",
                                                            lineNumber: 470,
                                                            columnNumber: 21
                                                        }, this),
                                                        orders.map((order, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex flex-col sm:flex-row sm:items-center sm:justify-between bg-gray-50 p-3 sm:p-4 rounded-lg space-y-3 sm:space-y-0",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex-1",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "font-medium text-gray-900 text-sm sm:text-base",
                                                                                children: [
                                                                                    order.productDetails.size,
                                                                                    " -",
                                                                                    " ",
                                                                                    order.productDetails.packingType
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/OZONE/ozone-water-1/src/app/order/page.jsx",
                                                                                lineNumber: 479,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-xs text-gray-500",
                                                                                children: [
                                                                                    order.productDetails.waterQuality,
                                                                                    " |",
                                                                                    " ",
                                                                                    order.productDetails.bottleQuality
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/OZONE/ozone-water-1/src/app/order/page.jsx",
                                                                                lineNumber: 483,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-xs sm:text-sm text-gray-600 mt-1",
                                                                                children: [
                                                                                    order.actualPrice !== order.discountedPrice && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "line-through text-gray-400 mr-2",
                                                                                        children: [
                                                                                            "Rs. ",
                                                                                            order.actualPrice,
                                                                                            "/-"
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/OZONE/ozone-water-1/src/app/order/page.jsx",
                                                                                        lineNumber: 489,
                                                                                        columnNumber: 31
                                                                                    }, this),
                                                                                    "Rs. ",
                                                                                    order.discountedPrice,
                                                                                    "/- × ",
                                                                                    order.quantity,
                                                                                    " = Rs.",
                                                                                    order.discountedPrice * order.quantity,
                                                                                    "/-",
                                                                                    order.actualPrice !== order.discountedPrice && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-green-600 ml-2 text-xs",
                                                                                        children: [
                                                                                            "(Save Rs.",
                                                                                            " ",
                                                                                            (order.actualPrice - order.discountedPrice) * order.quantity,
                                                                                            ")"
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/OZONE/ozone-water-1/src/app/order/page.jsx",
                                                                                        lineNumber: 497,
                                                                                        columnNumber: 31
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/OZONE/ozone-water-1/src/app/order/page.jsx",
                                                                                lineNumber: 487,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/OZONE/ozone-water-1/src/app/order/page.jsx",
                                                                        lineNumber: 478,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center gap-2 sm:gap-3 flex-wrap",
                                                                        children: [
                                                                            user && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                        className: "text-xs text-gray-600",
                                                                                        children: "Disc. Price"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/OZONE/ozone-water-1/src/app/order/page.jsx",
                                                                                        lineNumber: 509,
                                                                                        columnNumber: 31
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                        type: "number",
                                                                                        min: "0",
                                                                                        value: order.discountedPrice,
                                                                                        onChange: (e)=>handleUpdatePrice(index, e.target.value),
                                                                                        onBlur: (e)=>{
                                                                                            const price = parseFloat(e.target.value);
                                                                                            if (isNaN(price) || price < 0) {
                                                                                                handleUpdatePrice(index, order.actualPrice);
                                                                                            }
                                                                                        },
                                                                                        className: "w-16 sm:w-20 px-2 sm:px-3 py-1.5 sm:py-2 rounded border border-gray-300 focus:border-blue-600 focus:outline-none text-sm"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/OZONE/ozone-water-1/src/app/order/page.jsx",
                                                                                        lineNumber: 512,
                                                                                        columnNumber: 31
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/OZONE/ozone-water-1/src/app/order/page.jsx",
                                                                                lineNumber: 508,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                        className: "text-xs text-gray-600",
                                                                                        children: "Qty"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/OZONE/ozone-water-1/src/app/order/page.jsx",
                                                                                        lineNumber: 530,
                                                                                        columnNumber: 29
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                        type: "number",
                                                                                        min: "1",
                                                                                        value: order.quantity,
                                                                                        onChange: (e)=>handleUpdateQuantity(index, e.target.value),
                                                                                        onBlur: (e)=>{
                                                                                            const qty = parseInt(e.target.value);
                                                                                            if (!qty || qty < 1) {
                                                                                                handleUpdateQuantity(index, 1);
                                                                                            }
                                                                                        },
                                                                                        className: "w-16 sm:w-20 px-2 sm:px-3 py-1.5 sm:py-2 rounded border border-gray-300 focus:border-blue-600 focus:outline-none text-sm"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/OZONE/ozone-water-1/src/app/order/page.jsx",
                                                                                        lineNumber: 531,
                                                                                        columnNumber: 29
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/OZONE/ozone-water-1/src/app/order/page.jsx",
                                                                                lineNumber: 529,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                type: "button",
                                                                                onClick: ()=>handleRemoveOrder(index),
                                                                                className: "text-red-600 hover:text-red-800 font-medium text-sm",
                                                                                children: "Remove"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/OZONE/ozone-water-1/src/app/order/page.jsx",
                                                                                lineNumber: 547,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/OZONE/ozone-water-1/src/app/order/page.jsx",
                                                                        lineNumber: 506,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, index, true, {
                                                                fileName: "[project]/OZONE/ozone-water-1/src/app/order/page.jsx",
                                                                lineNumber: 474,
                                                                columnNumber: 23
                                                            }, this))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/OZONE/ozone-water-1/src/app/order/page.jsx",
                                                    lineNumber: 469,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/OZONE/ozone-water-1/src/app/order/page.jsx",
                                            lineNumber: 374,
                                            columnNumber: 15
                                        }, this),
                                        user && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-white rounded-2xl sm:rounded-3xl shadow-xl p-4 sm:p-6 lg:p-8",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6",
                                                    children: "Payment Details"
                                                }, void 0, false, {
                                                    fileName: "[project]/OZONE/ozone-water-1/src/app/order/page.jsx",
                                                    lineNumber: 564,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-3 sm:space-y-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-gray-700 font-medium mb-1.5 sm:mb-2 text-sm sm:text-base",
                                                                    children: "Payment Status"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/OZONE/ozone-water-1/src/app/order/page.jsx",
                                                                    lineNumber: 569,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                    value: paymentStatus,
                                                                    onChange: (e)=>{
                                                                        setPaymentStatus(e.target.value);
                                                                        if (e.target.value === "paid") {
                                                                            setPaidAmount(grandTotal);
                                                                        } else if (e.target.value === "unpaid") {
                                                                            setPaidAmount(0);
                                                                        }
                                                                    },
                                                                    className: "w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-gray-300 focus:border-blue-600 focus:outline-none text-sm sm:text-base",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: "unpaid",
                                                                            children: "Unpaid"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/OZONE/ozone-water-1/src/app/order/page.jsx",
                                                                            lineNumber: 584,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: "partially-paid",
                                                                            children: "Partially Paid"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/OZONE/ozone-water-1/src/app/order/page.jsx",
                                                                            lineNumber: 585,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: "paid",
                                                                            children: "Paid"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/OZONE/ozone-water-1/src/app/order/page.jsx",
                                                                            lineNumber: 586,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/OZONE/ozone-water-1/src/app/order/page.jsx",
                                                                    lineNumber: 572,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/OZONE/ozone-water-1/src/app/order/page.jsx",
                                                            lineNumber: 568,
                                                            columnNumber: 21
                                                        }, this),
                                                        paymentStatus === "partially-paid" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-gray-700 font-medium mb-1.5 sm:mb-2 text-sm sm:text-base",
                                                                    children: "Paid Amount"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/OZONE/ozone-water-1/src/app/order/page.jsx",
                                                                    lineNumber: 592,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "number",
                                                                    min: "0",
                                                                    max: grandTotal,
                                                                    value: paidAmount,
                                                                    onChange: (e)=>setPaidAmount(Math.min(parseFloat(e.target.value) || 0, grandTotal)),
                                                                    className: "w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-gray-300 focus:border-blue-600 focus:outline-none text-sm sm:text-base",
                                                                    placeholder: "Enter paid amount"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/OZONE/ozone-water-1/src/app/order/page.jsx",
                                                                    lineNumber: 595,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-sm text-red-600 mt-2 font-medium",
                                                                    children: [
                                                                        "Remaining: Rs. ",
                                                                        remaining,
                                                                        "/-"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/OZONE/ozone-water-1/src/app/order/page.jsx",
                                                                    lineNumber: 611,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/OZONE/ozone-water-1/src/app/order/page.jsx",
                                                            lineNumber: 591,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/OZONE/ozone-water-1/src/app/order/page.jsx",
                                                    lineNumber: 567,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/OZONE/ozone-water-1/src/app/order/page.jsx",
                                            lineNumber: 563,
                                            columnNumber: 17
                                        }, this),
                                        user && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-white rounded-2xl sm:rounded-3xl shadow-xl p-4 sm:p-6 lg:p-8",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6",
                                                    children: "Delivery Status"
                                                }, void 0, false, {
                                                    fileName: "[project]/OZONE/ozone-water-1/src/app/order/page.jsx",
                                                    lineNumber: 623,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-3 sm:space-y-4",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "block text-gray-700 font-medium mb-1.5 sm:mb-2 text-sm sm:text-base",
                                                                children: "Delivery Status"
                                                            }, void 0, false, {
                                                                fileName: "[project]/OZONE/ozone-water-1/src/app/order/page.jsx",
                                                                lineNumber: 628,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                value: deliveryStatus,
                                                                onChange: (e)=>{
                                                                    setDeliveryStatus(e.target.value);
                                                                },
                                                                className: "w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-gray-300 focus:border-blue-600 focus:outline-none text-sm sm:text-base",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "pending",
                                                                        children: "Pending"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/OZONE/ozone-water-1/src/app/order/page.jsx",
                                                                        lineNumber: 638,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "completed",
                                                                        children: "Completed"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/OZONE/ozone-water-1/src/app/order/page.jsx",
                                                                        lineNumber: 639,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/OZONE/ozone-water-1/src/app/order/page.jsx",
                                                                lineNumber: 631,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/OZONE/ozone-water-1/src/app/order/page.jsx",
                                                        lineNumber: 627,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/OZONE/ozone-water-1/src/app/order/page.jsx",
                                                    lineNumber: 626,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/OZONE/ozone-water-1/src/app/order/page.jsx",
                                            lineNumber: 622,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OZONE/ozone-water-1/src/app/order/page.jsx",
                                    lineNumber: 321,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "lg:col-span-1",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-white rounded-2xl sm:rounded-3xl shadow-xl p-4 sm:p-6 lg:p-8 lg:sticky lg:top-24",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6",
                                                children: "Order Summary"
                                            }, void 0, false, {
                                                fileName: "[project]/OZONE/ozone-water-1/src/app/order/page.jsx",
                                                lineNumber: 652,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-2 sm:space-y-3 mb-4 sm:mb-6",
                                                children: orders.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-gray-500 text-center py-6 sm:py-8 text-sm sm:text-base",
                                                    children: "No items in cart"
                                                }, void 0, false, {
                                                    fileName: "[project]/OZONE/ozone-water-1/src/app/order/page.jsx",
                                                    lineNumber: 658,
                                                    columnNumber: 21
                                                }, this) : orders.map((order, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between text-gray-700 text-xs sm:text-sm",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "flex-1 pr-2",
                                                                children: [
                                                                    order.productDetails.size,
                                                                    " (",
                                                                    order.productDetails.packingType,
                                                                    ") × ",
                                                                    order.quantity
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/OZONE/ozone-water-1/src/app/order/page.jsx",
                                                                lineNumber: 667,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-medium whitespace-nowrap",
                                                                children: [
                                                                    "Rs. ",
                                                                    order.discountedPrice * order.quantity,
                                                                    "/-"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/OZONE/ozone-water-1/src/app/order/page.jsx",
                                                                lineNumber: 671,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, index, true, {
                                                        fileName: "[project]/OZONE/ozone-water-1/src/app/order/page.jsx",
                                                        lineNumber: 663,
                                                        columnNumber: 23
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/OZONE/ozone-water-1/src/app/order/page.jsx",
                                                lineNumber: 656,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "border-t border-gray-200 pt-3 sm:pt-4 space-y-2 sm:space-y-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between text-sm sm:text-base text-gray-700",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "Total Price:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/OZONE/ozone-water-1/src/app/order/page.jsx",
                                                                lineNumber: 681,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: [
                                                                    "Rs. ",
                                                                    totalPrice,
                                                                    "/-"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/OZONE/ozone-water-1/src/app/order/page.jsx",
                                                                lineNumber: 682,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/OZONE/ozone-water-1/src/app/order/page.jsx",
                                                        lineNumber: 680,
                                                        columnNumber: 19
                                                    }, this),
                                                    totalDiscount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between text-sm sm:text-base text-green-600",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "Total Discount:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/OZONE/ozone-water-1/src/app/order/page.jsx",
                                                                lineNumber: 686,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: [
                                                                    "- Rs. ",
                                                                    totalDiscount.toFixed(2),
                                                                    "/-"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/OZONE/ozone-water-1/src/app/order/page.jsx",
                                                                lineNumber: 687,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/OZONE/ozone-water-1/src/app/order/page.jsx",
                                                        lineNumber: 685,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between text-base sm:text-lg font-semibold border-t pt-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "Grand Total:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/OZONE/ozone-water-1/src/app/order/page.jsx",
                                                                lineNumber: 691,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-blue-600",
                                                                children: [
                                                                    "Rs. ",
                                                                    grandTotal.toFixed(2),
                                                                    "/-"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/OZONE/ozone-water-1/src/app/order/page.jsx",
                                                                lineNumber: 692,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/OZONE/ozone-water-1/src/app/order/page.jsx",
                                                        lineNumber: 690,
                                                        columnNumber: 19
                                                    }, this),
                                                    user && paymentStatus !== "unpaid" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex justify-between text-green-600 text-sm sm:text-base",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: "Paid:"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/OZONE/ozone-water-1/src/app/order/page.jsx",
                                                                        lineNumber: 700,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: [
                                                                            "Rs. ",
                                                                            paidAmount,
                                                                            "/-"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/OZONE/ozone-water-1/src/app/order/page.jsx",
                                                                        lineNumber: 701,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/OZONE/ozone-water-1/src/app/order/page.jsx",
                                                                lineNumber: 699,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex justify-between text-red-600 font-semibold text-sm sm:text-base",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: "Remaining:"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/OZONE/ozone-water-1/src/app/order/page.jsx",
                                                                        lineNumber: 704,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: [
                                                                            "Rs. ",
                                                                            remaining,
                                                                            "/-"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/OZONE/ozone-water-1/src/app/order/page.jsx",
                                                                        lineNumber: 705,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/OZONE/ozone-water-1/src/app/order/page.jsx",
                                                                lineNumber: 703,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "pt-3 sm:pt-4",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: `px-3 sm:px-4 py-2 rounded-lg text-center font-medium text-sm sm:text-base ${user && paymentStatus === "paid" ? "bg-green-100 text-green-700" : user && paymentStatus === "partially-paid" ? "bg-yellow-100 text-yellow-700" : "bg-red-100 text-red-700"}`,
                                                            children: [
                                                                user && paymentStatus === "paid" && "Fully Paid",
                                                                user && paymentStatus === "partially-paid" && "Partially Paid",
                                                                (!user || paymentStatus === "unpaid") && "Payment: Unpaid"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/OZONE/ozone-water-1/src/app/order/page.jsx",
                                                            lineNumber: 711,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/OZONE/ozone-water-1/src/app/order/page.jsx",
                                                        lineNumber: 710,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/OZONE/ozone-water-1/src/app/order/page.jsx",
                                                lineNumber: 679,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "submit",
                                                disabled: !isFormValid(),
                                                className: `w-full mt-4 sm:mt-6 py-3 sm:py-4 rounded-lg font-medium transition-all text-sm sm:text-base ${isFormValid() ? "bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg cursor-pointer" : "bg-gray-300 text-gray-500 cursor-not-allowed"}`,
                                                title: !isFormValid() ? "Please fill all required fields and add at least one item" : "Click to place order",
                                                children: isFormValid() ? "Place Order 🚀" : "Complete Form to Continue"
                                            }, void 0, false, {
                                                fileName: "[project]/OZONE/ozone-water-1/src/app/order/page.jsx",
                                                lineNumber: 730,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OZONE/ozone-water-1/src/app/order/page.jsx",
                                        lineNumber: 651,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/OZONE/ozone-water-1/src/app/order/page.jsx",
                                    lineNumber: 650,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OZONE/ozone-water-1/src/app/order/page.jsx",
                            lineNumber: 319,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/OZONE/ozone-water-1/src/app/order/page.jsx",
                        lineNumber: 318,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OZONE/ozone-water-1/src/app/order/page.jsx",
                lineNumber: 280,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/OZONE/ozone-water-1/src/app/order/page.jsx",
        lineNumber: 278,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__93b052d6._.js.map
module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/mongoose [external] (mongoose, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("mongoose", () => require("mongoose"));

module.exports = mod;
}),
"[project]/OZONE/ozone-water-1/lib/db.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs)");
;
const connectionDb = async ()=>{
    if (__TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].connections[0].readyState) {
        console.log("MongoDB already connected");
        return;
    }
    try {
        await __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].connect(process.env.MONGO_URI);
        console.log("MongoDB connected successfully");
    } catch (err) {
        console.error("MongoDB connection failed:", err);
        throw err;
    }
};
const __TURBOPACK__default__export__ = connectionDb;
}),
"[project]/OZONE/ozone-water-1/models/Order.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs)");
;
const orderItemSchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].Schema({
    product: {
        type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].Schema.Types.ObjectId,
        ref: "Product",
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    quantity: {
        type: Number,
        required: true,
        min: 1
    },
    discountedPrice: {
        type: Number,
        min: 0
    }
}, {
    _id: false
});
const orderSchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].Schema({
    shopName: {
        type: String,
        required: true,
        trim: true
    },
    shopAddress: {
        type: String,
        required: true,
        trim: true
    },
    shopContact: {
        type: String,
        required: true,
        trim: true
    },
    trackingID: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    orderItems: {
        type: [
            orderItemSchema
        ],
        required: true,
        validate: {
            validator: (items)=>items.length > 0,
            message: "Order must include at least 1 item."
        }
    },
    totalPrice: {
        type: Number,
        required: true,
        min: 0
    },
    totalcost: {
        type: Number,
        default: 0
    },
    deliveryCharges: {
        type: Number,
        default: 0
    },
    netProfit: {
        type: Number,
        default: 0
    },
    paymentStatus: {
        type: String,
        enum: [
            "unpaid",
            "paid",
            "partially-paid"
        ],
        default: "unpaid"
    },
    paidAmount: {
        type: Number,
        min: 0,
        default: 0
    },
    isDeleted: {
        type: Boolean,
        default: false
    },
    remainingAmount: {
        type: Number,
        min: 0,
        default: 0,
        validate: {
            validator: function(value) {
                if (this.paymentStatus === "partially-paid") {
                    return value > 0;
                }
                return true;
            },
            message: "Remaining amount must be greater than 0 when status is partially-paid."
        }
    },
    status: {
        type: String,
        enum: [
            "pending",
            "in-transit",
            "completed",
            "canceled"
        ],
        default: "pending"
    }
}, {
    timestamps: true
});
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].models.Order || __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].model("Order", orderSchema);
}),
"[project]/OZONE/ozone-water-1/models/Stock.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs)");
;
const StockSchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].Schema({
    product: {
        type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].Schema.Types.ObjectId,
        ref: "Product",
        required: true,
        unique: true
    },
    quantity: {
        type: Number,
        required: true,
        default: 0,
        min: 0
    }
}, {
    timestamps: true
});
const Stock = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].models.Stock || __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].model("Stock", StockSchema);
const __TURBOPACK__default__export__ = Stock;
}),
"[project]/OZONE/ozone-water-1/models/StockLog.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs)");
;
const StockLogSchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].Schema({
    product: {
        type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].Schema.Types.ObjectId,
        ref: "Product",
        required: true
    },
    actionType: {
        type: String,
        required: true,
        enum: [
            "add",
            "reduce"
        ]
    },
    quantityChanged: {
        type: Number,
        required: true
    },
    previousQuantity: {
        type: Number,
        required: true
    },
    newQuantity: {
        type: Number,
        required: true
    },
    orderId: {
        type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].Schema.Types.ObjectId,
        ref: "Order"
    },
    reason: {
        type: String,
        default: ""
    },
    performedBy: {
        type: String,
        default: "System"
    }
}, {
    timestamps: true
});
const StockLog = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].models.StockLog || __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].model("StockLog", StockLogSchema);
const __TURBOPACK__default__export__ = StockLog;
}),
"[project]/OZONE/ozone-water-1/lib/stockHelpers.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addStock",
    ()=>addStock,
    "adjustStockForOrder",
    ()=>adjustStockForOrder,
    "reduceStock",
    ()=>reduceStock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$models$2f$Stock$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OZONE/ozone-water-1/models/Stock.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$models$2f$StockLog$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OZONE/ozone-water-1/models/StockLog.js [app-route] (ecmascript)");
;
;
async function reduceStock({ productId, quantity, orderId, performedBy, reason }) {
    if (quantity <= 0) return;
    const stock = await __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$models$2f$Stock$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].findOne({
        product: productId
    });
    const previousQuantity = stock ? stock.quantity : 0;
    if (previousQuantity < quantity) {
        const err = new Error(`Insufficient stock. Available: ${previousQuantity}, requested: ${quantity}`);
        err.code = "INSUFFICIENT_STOCK";
        err.productId = productId;
        err.available = previousQuantity;
        err.requested = quantity;
        throw err;
    }
    stock.quantity = previousQuantity - quantity;
    await stock.save();
    await __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$models$2f$StockLog$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].create({
        product: productId,
        actionType: "reduce",
        quantityChanged: quantity,
        previousQuantity,
        newQuantity: stock.quantity,
        orderId: orderId || undefined,
        reason: reason || "Order placed",
        performedBy: performedBy || "System"
    });
}
async function addStock({ productId, quantity, orderId, performedBy, reason }) {
    if (quantity <= 0) return;
    let stock = await __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$models$2f$Stock$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].findOne({
        product: productId
    });
    const previousQuantity = stock ? stock.quantity : 0;
    if (!stock) {
        stock = new __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$models$2f$Stock$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"]({
            product: productId,
            quantity: 0
        });
    }
    stock.quantity = previousQuantity + quantity;
    await stock.save();
    await __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$models$2f$StockLog$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].create({
        product: productId,
        actionType: "add",
        quantityChanged: quantity,
        previousQuantity,
        newQuantity: stock.quantity,
        orderId: orderId || undefined,
        reason: reason || "Stock added",
        performedBy: performedBy || "System"
    });
}
async function adjustStockForOrder({ oldItems = [], newItems = [], orderId, performedBy, reason }) {
    const oldMap = new Map();
    oldItems.forEach((i)=>{
        const id = String(i.product);
        oldMap.set(id, (oldMap.get(id) || 0) + Number(i.quantity));
    });
    const newMap = new Map();
    newItems.forEach((i)=>{
        const id = String(i.product);
        newMap.set(id, (newMap.get(id) || 0) + Number(i.quantity));
    });
    const productIds = new Set([
        ...oldMap.keys(),
        ...newMap.keys()
    ]);
    const deltas = [];
    for (const id of productIds){
        const oldQty = oldMap.get(id) || 0;
        const newQty = newMap.get(id) || 0;
        const delta = newQty - oldQty; // >0 => reduce stock, <0 => add back
        if (delta !== 0) deltas.push({
            productId: id,
            delta
        });
    }
    // Pre-check every increase so we never partially apply an order.
    for (const { productId, delta } of deltas){
        if (delta > 0) {
            const stock = await __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$models$2f$Stock$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].findOne({
                product: productId
            });
            const available = stock ? stock.quantity : 0;
            if (available < delta) {
                const err = new Error(`Insufficient stock for product ${productId}. Available: ${available}, requested: ${delta}`);
                err.code = "INSUFFICIENT_STOCK";
                err.productId = productId;
                err.available = available;
                err.requested = delta;
                throw err;
            }
        }
    }
    for (const { productId, delta } of deltas){
        if (delta > 0) {
            await reduceStock({
                productId,
                quantity: delta,
                orderId,
                performedBy,
                reason
            });
        } else {
            await addStock({
                productId,
                quantity: -delta,
                orderId,
                performedBy,
                reason
            });
        }
    }
}
}),
"[project]/OZONE/ozone-water-1/src/app/api/orders/route.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET,
    "POST",
    ()=>POST,
    "PUT",
    ()=>PUT
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OZONE/ozone-water-1/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$lib$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OZONE/ozone-water-1/lib/db.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$models$2f$Order$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OZONE/ozone-water-1/models/Order.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$lib$2f$stockHelpers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OZONE/ozone-water-1/lib/stockHelpers.js [app-route] (ecmascript)");
;
;
;
;
const generateTrackingID = ()=>{
    const prefix = "OZONE";
    const id = Math.random().toString(36).substring(2, 10).toUpperCase();
    return `${prefix}-${id}`;
};
async function POST(request) {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$lib$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])();
        const { shopName, shopAddress, shopContact, orderItems, paidAmount, totalPrice, paymentStatus, remainingAmount, status } = await request.json();
        if (!shopName || !shopAddress || !shopContact) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                message: "Shop details are required"
            }, {
                status: 400
            });
        }
        if (!Array.isArray(orderItems) || orderItems.length === 0) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                message: "Order must contain at least 1 item"
            }, {
                status: 400
            });
        }
        for (let item of orderItems){
            if (!item.product || !item.price || !item.quantity || item.discountedPrice === undefined) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    success: false,
                    message: "Each order item must include product, price, quantity, and discountedPrice"
                }, {
                    status: 400
                });
            }
        }
        if (totalPrice === undefined) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                message: "totalPrice is required"
            }, {
                status: 400
            });
        }
        const newOrder = new __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$models$2f$Order$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"]({
            shopName,
            shopAddress,
            shopContact,
            orderItems,
            totalPrice,
            paidAmount,
            paymentStatus,
            remainingAmount,
            status,
            trackingID: generateTrackingID()
        });
        await newOrder.save();
        // Reduce stock for every item. Order-driven changes are attributed to
        // "System" (no performedBy passed here on purpose). If anything is
        // short, the order is rolled back.
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$lib$2f$stockHelpers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["adjustStockForOrder"])({
                oldItems: [],
                newItems: orderItems,
                orderId: newOrder._id,
                reason: `Order ${newOrder.trackingID} placed`
            });
        } catch (stockError) {
            await __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$models$2f$Order$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].findByIdAndDelete(newOrder._id);
            if (stockError.code === "INSUFFICIENT_STOCK") {
                return __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    success: false,
                    message: "Order not placed — insufficient stock",
                    productId: stockError.productId,
                    available: stockError.available,
                    requested: stockError.requested
                }, {
                    status: 400
                });
            }
            throw stockError;
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            message: "Order placed successfully",
            order: newOrder
        }, {
            status: 201
        });
    } catch (error) {
        console.error("Order creation error:", error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: false,
            message: "Server error",
            error: error.message
        }, {
            status: 500
        });
    }
}
async function GET(request) {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$lib$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])();
        const action = request.nextUrl.searchParams.get("action");
        const trackingId = request.nextUrl.searchParams.get("trackingId");
        const contact = request.nextUrl.searchParams.get("contact");
        if (trackingId && contact) {
            const order = await __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$models$2f$Order$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].findOne({
                trackingID: trackingId,
                shopContact: contact,
                isDeleted: {
                    $ne: true
                }
            }).populate("orderItems.product");
            if (!order) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    success: false,
                    message: "Order not found with the provided tracking ID and contact number"
                }, {
                    status: 404
                });
            }
            return __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: true,
                message: "Order found",
                order
            }, {
                status: 200
            });
        }
        let orders;
        if (action === "deleted") {
            orders = await __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$models$2f$Order$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].find({
                isDeleted: true
            }).populate("orderItems.product").sort({
                createdAt: -1
            });
        } else if (action === "top20") {
            orders = await __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$models$2f$Order$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].find({
                isDeleted: {
                    $ne: true
                }
            }).populate("orderItems.product").sort({
                createdAt: -1
            }).limit(20);
        } else {
            orders = await __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$models$2f$Order$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].find({
                isDeleted: {
                    $ne: true
                }
            }).populate("orderItems.product").sort({
                createdAt: -1
            });
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            message: "Orders fetched successfully",
            data: orders
        }, {
            status: 200
        });
    } catch (error) {
        console.error("Error fetching orders:", error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: false,
            message: "Server error",
            error: error.message
        }, {
            status: 500
        });
    }
}
async function PUT(request) {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$lib$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])();
        const { action, orderId, updateData } = await request.json();
        if (!orderId) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                message: "orderId is required"
            }, {
                status: 400
            });
        }
        const existingOrder = await __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$models$2f$Order$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].findById(orderId);
        if (!existingOrder) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                message: "Order not found"
            }, {
                status: 404
            });
        }
        let finalUpdate = {};
        let oldItems = existingOrder.orderItems;
        let newItems = existingOrder.orderItems;
        let stockReason = `Order ${existingOrder.trackingID} updated`;
        if (action === "delete") {
            // Soft delete: restore whatever stock this order was holding.
            finalUpdate.isDeleted = true;
            newItems = [];
            stockReason = `Order ${existingOrder.trackingID} cancelled`;
        } else if (action === "restore") {
            // Undo a soft delete: re-reduce stock (may fail if stock has run out since).
            finalUpdate.isDeleted = false;
            oldItems = [];
            newItems = existingOrder.orderItems;
            stockReason = `Order ${existingOrder.trackingID} restored`;
        } else if (action === "update") {
            finalUpdate = updateData;
            if (Array.isArray(updateData?.orderItems)) {
                newItems = updateData.orderItems;
            }
        }
        // Order-driven changes are attributed to "System" (no performedBy passed).
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$lib$2f$stockHelpers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["adjustStockForOrder"])({
                oldItems,
                newItems,
                orderId,
                reason: stockReason
            });
        } catch (stockError) {
            if (stockError.code === "INSUFFICIENT_STOCK") {
                return __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    success: false,
                    message: "Update failed — insufficient stock",
                    productId: stockError.productId,
                    available: stockError.available,
                    requested: stockError.requested
                }, {
                    status: 400
                });
            }
            throw stockError;
        }
        const updatedOrder = await __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$models$2f$Order$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].findByIdAndUpdate(orderId, {
            $set: finalUpdate
        }, {
            new: true
        });
        return __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            message: "Order updated",
            order: updatedOrder
        }, {
            status: 200
        });
    } catch (error) {
        console.error("Order update error:", error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: false,
            message: "Server error",
            error: error.message
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__199b135a._.js.map
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
        required: true
    },
    quantity: {
        type: Number,
        required: true,
        default: 0
    },
    doBy: {
        type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].Schema.Types.ObjectId,
        ref: "User",
        required: true
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
"[project]/OZONE/ozone-water-1/src/app/api/stock/route.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET,
    "PATCH",
    ()=>PATCH,
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$lib$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OZONE/ozone-water-1/lib/db.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$models$2f$Stock$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OZONE/ozone-water-1/models/Stock.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$models$2f$StockLog$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OZONE/ozone-water-1/models/StockLog.js [app-route] (ecmascript)");
;
;
;
async function POST(request) {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$lib$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])();
        const { productId, doBy, quantity: quantity1 } = await request.json();
        if (!productId || !doBy || quantity1 === undefined) {
            return new Response(JSON.stringify({
                success: false,
                message: "All fields are required"
            }), {
                status: 400
            });
        }
        // Check if stock with same productId already exists
        const existingStock = await __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$models$2f$Stock$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].findOne({
            product: productId
        });
        if (existingStock) {
            const previousQuantity = existingStock.quantity;
            existingStock.quantity += Number(quantity1);
            await existingStock.save();
            // Create log entry
            await __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$models$2f$StockLog$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].create({
                product: productId,
                actionType: "add",
                quantityChanged: Number(quantity1),
                previousQuantity,
                newQuantity: existingStock.quantity,
                reason: "Stock replenishment",
                performedBy: doBy
            });
            return new Response(JSON.stringify({
                success: true,
                message: "Stock updated successfully",
                stock: existingStock,
                action: "updated"
            }), {
                status: 200
            });
        } else {
            const newStock = new __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$models$2f$Stock$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"]({
                product: productId,
                doBy,
                quantity: quantity1
            });
            await newStock.save();
            // Create log entry for new stock
            await __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$models$2f$StockLog$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].create({
                product: productId,
                actionType: "add",
                quantityChanged: Number(quantity1),
                previousQuantity: 0,
                newQuantity: Number(quantity1),
                reason: "Initial stock added",
                performedBy: doBy
            });
            return new Response(JSON.stringify({
                success: true,
                message: "Stock added successfully",
                stock: newStock,
                action: "created"
            }), {
                status: 201
            });
        }
    } catch (error) {
        console.error("Error adding stock:", error);
        return new Response(JSON.stringify({
            success: false,
            message: "Internal Server Error"
        }), {
            status: 500
        });
    }
}
async function GET(request) {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$lib$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])();
        const stocks = await __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$models$2f$Stock$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].find().sort({
            createdAt: -1
        });
        return new Response(JSON.stringify({
            success: true,
            stocks
        }), {
            status: 200
        });
    } catch (error) {
        console.error("Error fetching stocks:", error);
        return new Response(JSON.stringify({
            success: false,
            message: "Internal Server Error"
        }), {
            status: 500
        });
    }
}
async function PATCH(request) {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$lib$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])();
        const { productId, doBy, quantityToReduce, orderId, reason } = await request.json();
        if (!productId || !doBy || quantityToReduce === undefined || quantityToReduce <= 0) {
            return new Response(JSON.stringify({
                success: false,
                message: "Product ID, user ID, and valid quantity to reduce are required"
            }), {
                status: 400
            });
        }
        // Find the stock entry for this product
        const stock = await __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$models$2f$Stock$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].findOne({
            product: productId
        });
        if (!stock) {
            return new Response(JSON.stringify({
                success: false,
                message: "No stock found for this product"
            }), {
                status: 404
            });
        }
        // Check if sufficient stock is available
        if (stock.quantity < quantityToReduce) {
            return new Response(JSON.stringify({
                success: false,
                message: "Insufficient stock",
                available: stock.quantity,
                requested: quantityToReduce,
                error: "INSUFFICIENT_STOCK"
            }), {
                status: 400
            });
        }
        const existingStock = await __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$models$2f$Stock$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].findOne({
            product: productId
        });
        if (existingStock) {
            const previousQuantity = existingStock.quantity;
            existingStock.quantity -= Number(quantityToReduce);
            await existingStock.save();
            // Create log entry
            await __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$models$2f$StockLog$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].create({
                product: productId,
                actionType: "reduce",
                quantityChanged: Number(quantityToReduce),
                previousQuantity,
                newQuantity: existingStock.quantity,
                reason: "Stock replenishment"
            });
            return new Response(JSON.stringify({
                success: true,
                message: "Stock updated successfully",
                stock: existingStock,
                action: "updated"
            }), {
                status: 200
            });
        } else {
            const newStock = new __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$models$2f$Stock$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"]({
                productSize,
                producyType,
                bottleQuality,
                quantity
            });
            await newStock.save();
            // Create log entry for new stock
            await __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$models$2f$StockLog$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].create({
                product: productId,
                actionType: "add",
                quantityChanged: Number(quantity),
                previousQuantity: 0,
                newQuantity: Number(quantity),
                reason: "Initial stock added"
            });
            return new Response(JSON.stringify({
                success: true,
                message: "Stock added successfully",
                stock: newStock,
                action: "created"
            }), {
                status: 201
            });
        }
    } catch (error) {
        console.error("Error adding stock:", error);
        return new Response(JSON.stringify({
            success: false,
            message: "Internal Server Error"
        }), {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0105042b._.js.map
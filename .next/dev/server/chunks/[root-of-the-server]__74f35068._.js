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
    productSize: {
        type: String,
        required: true
    },
    producyType: {
        type: String,
        required: true,
        enum: [
            "bottle",
            "pet"
        ]
    },
    quantity: {
        type: Number,
        required: true,
        default: 0
    },
    costPerType: {
        type: Number,
        required: true
    }
}, {
    timestamps: true
});
const Stock = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].models.Stock || __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].model("Stock", StockSchema);
const __TURBOPACK__default__export__ = Stock;
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
;
;
async function POST(request) {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$lib$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])();
        const { productSize, producyType, quantity, costPerType } = await request.json();
        if (!productSize || !producyType || quantity === undefined || costPerType === undefined) {
            return new Response(JSON.stringify({
                message: "All fields are required"
            }), {
                status: 400
            });
        }
        // Check if stock with same productSize and producyType already exists
        const existingStock = await __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$models$2f$Stock$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].findOne({
            productSize,
            producyType
        });
        if (existingStock) {
            existingStock.quantity += Number(quantity);
            existingStock.costPerType = costPerType; // Update cost per type to latest
            await existingStock.save();
            return new Response(JSON.stringify({
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
                quantity,
                costPerType
            });
            await newStock.save();
            return new Response(JSON.stringify({
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
            stocks
        }), {
            status: 200
        });
    } catch (error) {
        console.error("Error fetching stocks:", error);
        return new Response(JSON.stringify({
            message: "Internal Server Error"
        }), {
            status: 500
        });
    }
}
async function PATCH(request) {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$lib$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])();
        const { productSize, producyType, quantityToReduce } = await request.json();
        if (!productSize || !producyType || quantityToReduce === undefined || quantityToReduce <= 0) {
            return new Response(JSON.stringify({
                message: "Product size, product type, and valid quantity to reduce are required"
            }), {
                status: 400
            });
        }
        // Find the stock entry for this product size and type
        const stock = await __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$models$2f$Stock$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].findOne({
            productSize,
            producyType
        });
        if (!stock) {
            return new Response(JSON.stringify({
                message: "No stock found for this product"
            }), {
                status: 404
            });
        }
        // Check if sufficient stock is available
        if (stock.quantity < quantityToReduce) {
            return new Response(JSON.stringify({
                message: "Insufficient stock",
                available: stock.quantity,
                requested: quantityToReduce
            }), {
                status: 400
            });
        }
        // Reduce the quantity
        stock.quantity -= quantityToReduce;
        await stock.save();
        return new Response(JSON.stringify({
            message: "Stock reduced successfully",
            reducedQuantity: quantityToReduce,
            remainingQuantity: stock.quantity,
            updatedStock: stock
        }), {
            status: 200
        });
    } catch (error) {
        console.error("Error reducing stock:", error);
        return new Response(JSON.stringify({
            message: "Internal Server Error"
        }), {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__74f35068._.js.map
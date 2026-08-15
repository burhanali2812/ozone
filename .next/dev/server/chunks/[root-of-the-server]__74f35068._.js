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
(()=>{
    const e = new Error("Cannot find module '../../../../lib/stockHelpers'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
;
;
async function POST(request) {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$lib$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])();
        const { productId, quantity, performedBy } = await request.json();
        if (!productId || quantity === undefined || Number(quantity) <= 0) {
            return new Response(JSON.stringify({
                success: false,
                message: "productId and a positive quantity are required"
            }), {
                status: 400
            });
        }
        await addStock({
            productId,
            quantity: Number(quantity),
            performedBy: performedBy || "Worker",
            reason: "Manual stock addition"
        });
        const stock = await __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$models$2f$Stock$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].findOne({
            product: productId
        });
        return new Response(JSON.stringify({
            success: true,
            message: "Stock added successfully",
            stock
        }), {
            status: 200
        });
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
            updatedAt: -1
        }).populate("product");
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
        const { productId, quantityToReduce, performedBy, reason } = await request.json();
        if (!productId || !quantityToReduce || Number(quantityToReduce) <= 0) {
            return new Response(JSON.stringify({
                success: false,
                message: "productId and a positive quantityToReduce are required"
            }), {
                status: 400
            });
        }
        await reduceStock({
            productId,
            quantity: Number(quantityToReduce),
            performedBy: performedBy || "Admin",
            reason: reason || "Manual stock correction"
        });
        const stock = await __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$models$2f$Stock$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].findOne({
            product: productId
        });
        return new Response(JSON.stringify({
            success: true,
            message: "Stock reduced successfully",
            stock
        }), {
            status: 200
        });
    } catch (error) {
        if (error.code === "INSUFFICIENT_STOCK") {
            return new Response(JSON.stringify({
                success: false,
                message: "Insufficient stock",
                available: error.available,
                requested: error.requested
            }), {
                status: 400
            });
        }
        console.error("Error reducing stock:", error);
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

//# sourceMappingURL=%5Broot-of-the-server%5D__74f35068._.js.map
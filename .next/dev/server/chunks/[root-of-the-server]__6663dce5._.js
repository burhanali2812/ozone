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
"[project]/OZONE/ozone-water-1/models/Product.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs)");
;
const productSchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].Schema({
    packingType: {
        type: String,
        required: true
    },
    size: {
        type: String,
        required: true
    },
    bottleQuality: {
        type: String,
        required: true,
        enum: [
            "Pure",
            "Mix"
        ]
    },
    waterQuality: {
        type: String,
        required: true,
        enum: [
            "RO (Reverse Osmosis)",
            "Mineral"
        ]
    },
    price: {
        type: Number,
        required: true
    },
    productionCost: {
        type: Number,
        required: true
    }
});
const Product = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].models.Product || __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].model("Product", productSchema);
const __TURBOPACK__default__export__ = Product;
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
"[project]/OZONE/ozone-water-1/src/app/api/stock/logs/route.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$lib$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OZONE/ozone-water-1/lib/db.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$models$2f$StockLog$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OZONE/ozone-water-1/models/StockLog.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$models$2f$Product$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OZONE/ozone-water-1/models/Product.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$models$2f$Order$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OZONE/ozone-water-1/models/Order.js [app-route] (ecmascript)");
;
;
;
;
async function GET(request) {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$lib$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])();
        const { searchParams } = new URL(request.url);
        const productId = searchParams.get("productId");
        const limit = parseInt(searchParams.get("limit")) || 50;
        let query = {};
        if (productId) query.product = productId;
        const logs = await __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$models$2f$StockLog$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].find(query).sort({
            createdAt: -1
        }).limit(limit).populate("product", "size bottleQuality packingType").populate("orderId", "shopName");
        return new Response(JSON.stringify({
            success: true,
            logs
        }), {
            status: 200
        });
    } catch (error) {
        console.error("Error fetching stock logs:", error);
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

//# sourceMappingURL=%5Broot-of-the-server%5D__6663dce5._.js.map
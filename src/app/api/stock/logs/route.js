import connectionDb from "../../../../../lib/db";
import StockLog from "../../../../../models/StockLog";
import Product from "../../../../../models/Product";
import Order from "../../../../../models/Order";

export async function GET(request) {
  try {
    await connectionDb();

    const { searchParams } = new URL(request.url);
    const productId = searchParams.get("productId");
    const limit = parseInt(searchParams.get("limit")) || 50;

    let query = {};
    if (productId) query.product = productId;

    const logs = await StockLog.find(query)
      .sort({ createdAt: -1 })
      .limit(limit)
      .populate("product", "size bottleQuality packingType")
      .populate("orderId", "shopName");

    return new Response(JSON.stringify({ success: true, logs }), {
      status: 200,
    });
  } catch (error) {
    console.error("Error fetching stock logs:", error);
    return new Response(
      JSON.stringify({ success: false, message: "Internal Server Error" }),
      { status: 500 },
    );
  }
}
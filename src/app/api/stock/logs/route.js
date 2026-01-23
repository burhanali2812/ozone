import connectionDb from "../../../../../lib/db";
import StockLog from "../../../../../models/StockLog";

export async function GET(request) {
  try {
    await connectionDb();

    const { searchParams } = new URL(request.url);
    const productSize = searchParams.get("productSize");
    const producyType = searchParams.get("producyType");
    const limit = parseInt(searchParams.get("limit")) || 50;

    let query = {};
    if (productSize) query.productSize = productSize;
    if (producyType) query.producyType = producyType;

    const logs = await StockLog.find(query)
      .sort({ createdAt: -1 })
      .limit(limit)
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

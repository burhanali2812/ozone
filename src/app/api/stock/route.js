import connectionDb from "../../../../lib/db";
import Stock from "../../../../models/Stock";
import { addStock, reduceStock } from "../../../../lib/stockHelpers";

// Worker: pick a product, enter quantity, stock goes up.
export async function POST(request) {
  try {
    await connectionDb();
    const { productId, quantity, performedBy } = await request.json();

    if (!productId || quantity === undefined || Number(quantity) <= 0) {
      return new Response(
        JSON.stringify({ success: false, message: "productId and a positive quantity are required" }),
        { status: 400 }
      );
    }

    await addStock({
      productId,
      quantity: Number(quantity),
      performedBy: performedBy || "Worker",
      reason: "Manual stock addition",
    });

    const stock = await Stock.findOne({ product: productId });

    return new Response(
      JSON.stringify({ success: true, message: "Stock added successfully", stock }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error adding stock:", error);
    return new Response(
      JSON.stringify({ success: false, message: "Internal Server Error" }),
      { status: 500 }
    );
  }
}

export async function GET(request) {
  try {
    await connectionDb();
    const stocks = await Stock.find().sort({ updatedAt: -1 }).populate("product");
    return new Response(JSON.stringify({ success: true, stocks }), { status: 200 });
  } catch (error) {
    console.error("Error fetching stocks:", error);
    return new Response(
      JSON.stringify({ success: false, message: "Internal Server Error" }),
      { status: 500 }
    );
  }
}

// Admin-only manual correction (e.g. damaged goods), not for normal worker use.
export async function PATCH(request) {
  try {
    await connectionDb();
    const { productId, quantityToReduce, performedBy, reason } = await request.json();

    if (!productId || !quantityToReduce || Number(quantityToReduce) <= 0) {
      return new Response(
        JSON.stringify({ success: false, message: "productId and a positive quantityToReduce are required" }),
        { status: 400 }
      );
    }

    await reduceStock({
      productId,
      quantity: Number(quantityToReduce),
      performedBy: performedBy || "Admin",
      reason: reason || "Manual stock correction",
    });

    const stock = await Stock.findOne({ product: productId });

    return new Response(
      JSON.stringify({ success: true, message: "Stock reduced successfully", stock }),
      { status: 200 }
    );
  } catch (error) {
    if (error.code === "INSUFFICIENT_STOCK") {
      return new Response(
        JSON.stringify({
          success: false,
          message: "Insufficient stock",
          available: error.available,
          requested: error.requested,
        }),
        { status: 400 }
      );
    }
    console.error("Error reducing stock:", error);
    return new Response(
      JSON.stringify({ success: false, message: "Internal Server Error" }),
      { status: 500 }
    );
  }
}
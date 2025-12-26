import connectionDb from "../../../../lib/db";
import Stock from "../../../../models/Stock";

export async function POST(request) {
  try {
    await connectionDb();
    const { productSize, producyType, quantity, costPerType } =
      await request.json();

    if (
      !productSize ||
      !producyType ||
      quantity === undefined ||
      costPerType === undefined
    ) {
      return new Response(
        JSON.stringify({ message: "All fields are required" }),
        { status: 400 }
      );
    }

    // Check if stock with same productSize and producyType already exists
    const existingStock = await Stock.findOne({ productSize, producyType });

    if (existingStock) {
      existingStock.quantity += Number(quantity);
      existingStock.costPerType = costPerType; 
      await existingStock.save();

      return new Response(
        JSON.stringify({
          message: "Stock updated successfully",
          stock: existingStock,
          action: "updated",
        }),
        { status: 200 }
      );
    } else {
      const newStock = new Stock({
        productSize,
        producyType,
        quantity,
        costPerType,
      });
      await newStock.save();

      return new Response(
        JSON.stringify({
          message: "Stock added successfully",
          stock: newStock,
          action: "created",
        }),
        { status: 201 }
      );
    }
  } catch (error) {
    console.error("Error adding stock:", error);
    return new Response(JSON.stringify({ message: "Internal Server Error" }), {
      status: 500,
    });
  }
}

export async function GET(request) {
  try {
    await connectionDb();
    const stocks = await Stock.find().sort({ createdAt: -1 });
    return new Response(JSON.stringify({ stocks }), { status: 200 });
  } catch (error) {
    console.error("Error fetching stocks:", error);
    return new Response(JSON.stringify({ message: "Internal Server Error" }), {
      status: 500,
    });
  }
}

export async function PATCH(request) {
  try {
    await connectionDb();
    const { productSize, producyType, quantityToReduce } = await request.json();

    if (
      !productSize ||
      !producyType ||
      quantityToReduce === undefined ||
      quantityToReduce <= 0
    ) {
      return new Response(
        JSON.stringify({
          message:
            "Product size, product type, and valid quantity to reduce are required",
        }),
        { status: 400 }
      );
    }

    // Find the stock entry for this product size and type
    const stock = await Stock.findOne({ productSize, producyType });

    if (!stock) {
      return new Response(
        JSON.stringify({ message: "No stock found for this product" }),
        { status: 404 }
      );
    }

    // Check if sufficient stock is available
    if (stock.quantity < quantityToReduce) {
      return new Response(
        JSON.stringify({
          message: "Insufficient stock",
          available: stock.quantity,
          requested: quantityToReduce,
        }),
        { status: 400 }
      );
    }

    // Reduce the quantity
    stock.quantity -= quantityToReduce;
    await stock.save();

    return new Response(
      JSON.stringify({
        message: "Stock reduced successfully",
        reducedQuantity: quantityToReduce,
        remainingQuantity: stock.quantity,
        updatedStock: stock,
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error reducing stock:", error);
    return new Response(JSON.stringify({ message: "Internal Server Error" }), {
      status: 500,
    });
  }
}

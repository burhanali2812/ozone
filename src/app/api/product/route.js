import connectionDb from "../../../../lib/db";
import Product from "../../../../models/Product";

export async function POST(request) {
  try {
    await connectionDb();
    const { packingType, size, bottleQuality, waterQuality, price } =
      await request.json();
    if (
      !packingType ||
      !size ||
      !bottleQuality ||
      !waterQuality ||
      price === undefined
    ) {
      return new Response(
        JSON.stringify({ success: false, message: "All fields are required" }),
        { status: 400 }
      );
    }
    const newProduct = new Product({
      packingType,
      size,
      bottleQuality,
      waterQuality,
      price,
    });
    await newProduct.save();
    return new Response(
      JSON.stringify({
        success: true,
        message: "Product added successfully",
        product: newProduct,
      }),
      { status: 201 }
    );
  } catch (error) {
    console.error("Error adding product:", error);
    return new Response(
      JSON.stringify({ success: false, message: "Internal Server Error" }),
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await connectionDb();
    const products = await Product.find({});
    return new Response(JSON.stringify({ success: true, products }), {
      status: 200,
    });
  } catch (error) {
    console.error("Error fetching products:", error);
    return new Response(
      JSON.stringify({ success: false, message: "Internal Server Error" }),
      { status: 500 }
    );
  }
}

export async function DELETE(request) {
  try {
    await connectionDb();
    const { productId } = await request.json();
    if (!productId) {
      return new Response(
        JSON.stringify({ success: false, message: "Product ID is required" }),
        { status: 400 }
      );
    }
    const deletedProduct = await Product.findByIdAndDelete(productId);
    if (!deletedProduct) {
      return new Response(
        JSON.stringify({ success: false, message: "Product not found" }),
        { status: 404 }
      );
    }
    return new Response(
      JSON.stringify({
        success: true,
        message: "Product deleted successfully",
        product: deletedProduct,
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting product:", error);
    return new Response(
      JSON.stringify({ success: false, message: "Internal Server Error" }),
      { status: 500 }
    );
  }
}

export async function PUT(request) {
  try {
    await connectionDb();
    const { productId, packingType, size, bottleQuality, waterQuality, price } =
      await request.json();
    if (
      !productId ||
      !packingType ||
      !size ||
      !bottleQuality ||
      !waterQuality ||
      price === undefined
    ) {
      return new Response(
        JSON.stringify({ success: false, message: "All fields are required" }),
        { status: 400 }
      );
    }
    const updatedProduct = await Product.findByIdAndUpdate(
      productId,
      { packingType, size, bottleQuality, waterQuality, price },
      { new: true }
    );
    if (!updatedProduct) {
      return new Response(
        JSON.stringify({ success: false, message: "Product not found" }),
        { status: 404 }
      );
    }
    return new Response(
      JSON.stringify({
        success: true,
        message: "Product updated successfully",
        product: updatedProduct,
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating product:", error);
    return new Response(
      JSON.stringify({ success: false, message: "Internal Server Error" }),
      { status: 500 }
    );
  }
}

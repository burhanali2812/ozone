"use client";
import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { Toaster, toast } from "react-hot-toast";

export default function Receipt() {
  const router = useRouter();
  const [orderData, setOrderData] = useState(null);
  const [receiptType, setReceiptType] = useState("order-placed");
  const [loading, setLoading] = useState(true);
  const receiptRef = useRef(null);

  useEffect(() => {
    const fetchOrderWithProducts = async () => {
      const storedOrder = localStorage.getItem("currentOrder");
      const storedType = localStorage.getItem("receiptType") || "order-placed";

      if (storedOrder) {
        try {
          const parsedOrder = JSON.parse(storedOrder);

          // Fetch all products
          const productsResponse = await fetch("/api/product");
          const productsData = await productsResponse.json();

          if (productsData.success && productsData.products) {
            // Map product IDs to full product details
            const enrichedOrderItems = parsedOrder.orderItems.map((item) => {
              const productId =
                typeof item.product === "string"
                  ? item.product
                  : item.product?._id;
              const productDetails = productsData.products.find(
                (p) => p._id === productId,
              );

              return {
                ...item,
                product: productDetails || item.product,
              };
            });

            setOrderData({
              ...parsedOrder,
              orderItems: enrichedOrderItems,
            });
          } else {
            setOrderData(parsedOrder);
          }

          setReceiptType(storedType);
        } catch (error) {
          console.error("Error parsing order data:", error);
          toast.error("Failed to load receipt data");
        }
      } else {
        toast.error("No order data found");
        setTimeout(() => router.push("/"), 2000);
      }
      setLoading(false);
    };

    fetchOrderWithProducts();
  }, [router]);

  const getTypeConfig = (type) => {
    const configs = {
      "order-placed": {
        title: "Order Placed Successfully",
        color: "#10b981",
      },
      "order-in-transit": {
        title: "Order In Transit",
        color: "#3b82f6",
      },
      "order-delivered": {
        title: "Order Delivered",
        color: "#a855f7",
      },
      pending: {
        title: "Order Pending",
        icon: "⚠️",
        color: "#f59e0b",
      },
    };
    return configs[type] || configs["order-placed"];
  };

  const getPaymentBadge = (status) => {
    const badges = {
      paid: { label: "Paid", color: "#10b981" },
      unpaid: { label: "Unpaid", color: "#ef4444" },
      "partially-paid": { label: "Partially Paid", color: "#eab308" },
    };
    return badges[status] || badges.unpaid;
  };

  const getWhatsAppUrl = () => {
    if (!orderData) return "#";

    // Convert 03xx-xxxxxxx format to 923xxxxxxxxx
    let formattedNumber = orderData.shopContact.replace(/[-\s]/g, "");
    if (formattedNumber.startsWith("0")) {
      formattedNumber = "92" + formattedNumber.substring(1);
    }

    return `https://wa.me/${formattedNumber}`;
  };

  const downloadPDF = async () => {
    try {
      const html2pdf = (await import("html2pdf.js")).default;
      const element = receiptRef.current;

      const opt = {
        margin: 0.5,
        filename: `Ozone-Receipt-${orderData.trackingID || Date.now()}.pdf`,
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2, logging: false },
        jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
      };

      await html2pdf().set(opt).from(element).save();
      toast.success("Receipt downloaded successfully!");
    } catch (error) {
      console.error("Error downloading PDF:", error);
      toast.error("Failed to download PDF");
    }
  };

  // Auto-download PDF on load (optional - remove if not wanted)
  useEffect(() => {
    if (orderData && receiptRef.current) {
      // Wait a moment for everything to render before downloading
      const timer = setTimeout(() => {
        downloadPDF();
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [orderData]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-600 mx-auto mb-3"></div>
          <p className="text-sm text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (!orderData) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-50">
        <div className="text-center bg-white p-6 rounded-xl shadow-lg max-w-sm">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
            <svg
              className="w-8 h-8 text-red-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </div>
          <h2 className="text-lg font-bold text-gray-900 mb-2">
            No Receipt Found
          </h2>
          <p className="text-sm text-gray-600 mb-4">
            Unable to load receipt data
          </p>
          <button
            onClick={() => router.push("/")}
            className="bg-blue-600 text-white text-sm px-5 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Go Home
          </button>
        </div>
      </div>
    );
  }

  const typeConfig = getTypeConfig(receiptType);
  const paymentBadge = getPaymentBadge(orderData.paymentStatus);

  return (
    <section className="w-full min-h-screen bg-gray-50 py-4">
      <Toaster />

      <div className="container mx-auto px-4 max-w-xl">
        {/* Action Buttons */}
        <div className="flex flex-wrap gap-2 mb-3 justify-center">
          {/* Download PDF */}
          <button
            onClick={downloadPDF}
            className="bg-blue-600 text-white text-xs px-4 py-2 rounded-lg hover:bg-blue-700 transition-all flex items-center gap-2 shadow-sm"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <span>Download PDF</span>
          </button>

          {/* WhatsApp */}
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 text-white text-xs px-4 py-2 rounded-lg hover:bg-green-700 transition-all flex items-center gap-2 shadow-sm"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            <span>WhatsApp</span>
          </a>

          <button
            onClick={() => router.push("/orderDashboard")}
            className="bg-gray-200 text-gray-700 text-xs px-4 py-2 rounded-lg hover:bg-gray-300 transition-all"
          >
            Home
          </button>
        </div>

        {/* Receipt Card - Clean Text Only */}
        <div
          ref={receiptRef}
          className="bg-white p-5 shadow-md rounded-md max-w-[400px] mx-auto font-sans"
        >
          {/* Header */}
          <div className="text-center mb-4">
            <h1 className="text-xl font-bold text-gray-900 tracking-wide">
              OZONE MINERAL WATER® PVT LTD
            </h1>
            <p className="text-xs text-gray-500 uppercase tracking-wider mt-1">
              Sip the Good Life
            </p>
          </div>

          {/* Status */}
          <div className="text-center mb-4">
            <span
              className="font-semibold text-sm uppercase"
              style={{ color: typeConfig.color }}
            >
              {typeConfig.title}
            </span>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-300 my-4"></div>

          {/* Tracking ID */}
          {orderData.trackingID && (
            <div className="mb-4 bg-blue-50 border border-blue-200 rounded-md p-3">
              <div className="flex justify-between items-center">
                <span className="text-xs text-blue-600 font-semibold uppercase tracking-wide">
                  Tracking ID:
                </span>
                <span className="text-sm font-bold text-blue-800">
                  {orderData.trackingID}
                </span>
              </div>
            </div>
          )}

          {/* Shop Details */}
          <div className="mb-4">
            <h2 className="text-sm font-semibold text-gray-900 mb-2 uppercase tracking-wide">
              Shop Details
            </h2>
            <div className="space-y-1 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-500">Name:</span>
                <span className="font-medium text-gray-900 text-right max-w-[70%]">
                  {orderData.shopName}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Address:</span>
                <span className="font-medium text-gray-900 text-right max-w-[70%]">
                  {orderData.shopAddress}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Contact:</span>
                <span className="font-medium text-gray-900">
                  {orderData.shopContact}
                </span>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-300 my-4"></div>

          {/* Order Items */}
          <div className="mb-4">
            <h2 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">
              Order Details
            </h2>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-xs border-collapse">
                <thead>
                  <tr className="border-b-2 border-gray-300">
                    <th className="text-left py-2 px-1 font-semibold text-gray-700">
                      #
                    </th>
                    <th className="text-left py-2 px-1 font-semibold text-gray-700">
                      Item
                    </th>
                    <th className="text-center py-2 px-1 font-semibold text-gray-700">
                      Qty
                    </th>
                    <th className="text-right py-2 px-1 font-semibold text-gray-700">
                      Price
                    </th>
                    <th className="text-right py-2 px-1 font-semibold text-gray-700">
                      Disc. Price
                    </th>
                    <th className="text-right py-2 px-1 font-semibold text-gray-700">
                      Total
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {orderData.orderItems.map((item, index) => {
                    const actualPrice = item.price || 0;
                    const discountedPrice =
                      item.discountedPrice || item.price || 0;
                    const hasDiscount =
                      item.discountedPrice &&
                      item.discountedPrice !== item.price;

                    return (
                      <tr key={index} className="border-b border-gray-100">
                        <td className="py-2 px-1 text-gray-600">{index + 1}</td>
                        <td className="py-2 px-1">
                          <div className="font-medium text-gray-900">
                            {item.product?.size || "N/A"}
                          </div>
                          <div className="text-[10px] text-gray-500">
                            {item.product?.packingType}
                          </div>
                        </td>
                        <td className="py-2 px-1 text-center text-gray-900 font-medium">
                          {item.quantity}
                        </td>
                        <td className="py-2 px-1 text-right">
                          <span
                            className={
                              hasDiscount
                                ? "line-through text-gray-400"
                                : "text-gray-900"
                            }
                          >
                            Rs. {actualPrice}
                          </span>
                        </td>
                        <td className="py-2 px-1 text-right">
                          <span className="text-gray-900 font-medium">
                            Rs. {discountedPrice}
                          </span>
                        </td>
                        <td className="py-2 px-1 text-right">
                          <div className="font-semibold text-gray-900">
                            Rs. {(discountedPrice * item.quantity).toFixed(2)}
                          </div>
                          {hasDiscount && (
                            <div className="text-[10px] text-green-600">
                              Save Rs.{" "}
                              {(
                                (actualPrice - discountedPrice) *
                                item.quantity
                              ).toFixed(2)}
                            </div>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Pricing Summary */}
            <div className="pt-3 border-t-2 border-gray-300 mt-3 space-y-2">
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-600">Total Price:</span>
                <span className="font-semibold text-gray-900">
                  Rs. {(orderData.totalPrice || 0).toFixed(2)}/-
                </span>
              </div>

              {(() => {
                // Calculate original total (before discount)
                const originalTotal = orderData.orderItems.reduce((sum, item) => {
                  const price = item.price || 0;
                  return sum + price * item.quantity;
                }, 0);

                // Calculate grand total (after discount)
                const grandTotal = orderData.orderItems.reduce((sum, item) => {
                  const discountedPrice = item.discountedPrice || item.price || 0;
                  return sum + discountedPrice * item.quantity;
                }, 0);

                // Total discount is the difference between original and discounted
                const totalDiscount = originalTotal - grandTotal;

                return (
                  <>
                    {totalDiscount > 0 && (
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-600">Total Discount:</span>
                        <span className="font-semibold text-green-600">
                          - Rs. {totalDiscount.toFixed(2)}/-
                        </span>
                      </div>
                    )}

                    <div className="flex justify-between items-center pt-2 border-t border-gray-200">
                      <span className="font-bold text-gray-900">
                        Grand Total (Payable):
                      </span>
                      <span className="text-lg font-bold text-blue-600">
                        Rs. {grandTotal.toFixed(2)}/-
                      </span>
                    </div>
                  </>
                );
              })()}
            </div>
          </div>

          <div className="border-t border-gray-300 my-4"></div>

          {/* Payment Details */}
          <div className="mb-4">
            <h2 className="text-sm font-semibold text-gray-900 mb-2 uppercase tracking-wide">
              Payment Details
            </h2>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-500">Status:</span>
                <span
                  className="font-semibold"
                  style={{ color: paymentBadge.color }}
                >
                  {paymentBadge.label}
                </span>
              </div>

              {orderData.paymentStatus === "paid" && (
                <div className="flex justify-between">
                  <span className="text-gray-500">Paid Amount:</span>
                  <span className="font-semibold text-green-600">
                    Rs. {orderData.paidAmount.toFixed(2)}/-
                  </span>
                </div>
              )}

              {orderData.paymentStatus === "partially-paid" && (
                <>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Paid:</span>
                    <span className="font-semibold text-green-600">
                      Rs. {orderData.paidAmount.toFixed(2)}/-
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Remaining:</span>
                    <span className="font-semibold text-red-600">
                      Rs. {orderData.remainingAmount.toFixed(2)}/-
                    </span>
                  </div>
                </>
              )}

              {orderData.paymentStatus === "unpaid" && (
                <div className="flex justify-between">
                  <span className="text-gray-500">Pending:</span>
                  <span className="font-semibold text-red-600">
                    Rs.{" "}
                    {(() => {
                      const grandTotal = orderData.orderItems.reduce(
                        (sum, item) => {
                          const discountedPrice =
                            item.discountedPrice || item.price || 0;
                          return sum + discountedPrice * item.quantity;
                        },
                        0,
                      );
                      return grandTotal.toFixed(2);
                    })()}
                    /-
                  </span>
                </div>
              )}
            </div>
          </div>

          <div className="border-t border-gray-300 my-4"></div>

          {/* Footer */}
          <div className="text-center text-xs text-gray-500">
            <p>
              Ozone Mineral Water® Pvt Ltd © {new Date().toLocaleString()} |
              Thank you for your order!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

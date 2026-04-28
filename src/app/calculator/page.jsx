"use client";
import React, { useState, useEffect } from "react";

function CalculatorPage() {
  // Size selection
  const [size, setSize] = useState("");
  const [capPrice, setCapPrice] = useState("");
  const [tagNeeded, setTagNeeded] = useState(false);
  const [tagPrice, setTagPrice] = useState("");
  const [petSheetPrice, setPetSheetPrice] = useState(22);

  // Fixed prices
  const bottlePrices = {
    "500ml": 13.75,
    "1500ml": 22.5,
  };
  const labelPrice = 1.88;
  const bottlesPerPet = {
    "500ml": 12,
    "1500ml": 6,
  };

  // Calculations
  const [oneBottlePrice, setOneBottlePrice] = useState(0);
  const [onePetPrice, setOnePetPrice] = useState(0);

  useEffect(() => {
    calculatePrices();
  }, [size, capPrice, tagNeeded, tagPrice, petSheetPrice]);

  const calculatePrices = () => {
    if (!size || !capPrice) {
      setOneBottlePrice(0);
      setOnePetPrice(0);
      return;
    }

    const bottlePrice = bottlePrices[size] || 0;
    const cap = parseFloat(capPrice) || 0;
    const tag = tagNeeded && tagPrice ? parseFloat(tagPrice) : 0;
    const label = labelPrice;

    // One bottle price
    const singleBottlePrice = bottlePrice + cap + label + tag;
    setOneBottlePrice(singleBottlePrice);

    // One PET price
    const bottlesInPet = bottlesPerPet[size] || 0;
    const petSheet = parseFloat(petSheetPrice) || 0;
    const singlePetPrice = singleBottlePrice * bottlesInPet + petSheet;
    setOnePetPrice(singlePetPrice);
  };

  const formatCurrency = (amount) => {
    return amount.toFixed(2);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-6">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            🧴 PET Price Calculator
          </h1>
          <p className="text-gray-600">Calculate the price per PET bottle packaging</p>
        </div>

        {/* Calculator Card */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="space-y-8">
            {/* Step 1: Size Selection */}
            <div className="border-l-4 border-blue-500 pl-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center">
                  1
                </span>
                Select Size
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => {
                    setSize("500ml");
                  }}
                  className={`p-4 rounded-lg border-2 font-bold text-lg transition ${
                    size === "500ml"
                      ? "border-blue-500 bg-blue-50 text-blue-700"
                      : "border-gray-300 hover:border-blue-300 text-gray-700"
                  }`}
                >
                  500ml
                </button>
                <button
                  onClick={() => {
                    setSize("1500ml");
                  }}
                  className={`p-4 rounded-lg border-2 font-bold text-lg transition ${
                    size === "1500ml"
                      ? "border-blue-500 bg-blue-50 text-blue-700"
                      : "border-gray-300 hover:border-blue-300 text-gray-700"
                  }`}
                >
                  1500ml
                </button>
              </div>
              {size && (
                <div className="mt-3 p-3 bg-blue-50 rounded text-sm text-blue-700">
                  ✓ Bottle Price (Pure): Rs. {formatCurrency(bottlePrices[size])}
                </div>
              )}
            </div>

            {size && (
              <>
                {/* Step 2: Cap Price */}
                <div className="border-l-4 border-indigo-500 pl-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <span className="bg-indigo-500 text-white rounded-full w-8 h-8 flex items-center justify-center">
                      2
                    </span>
                    Cap Price
                  </h2>
                  <div className="flex gap-2">
                    <div className="flex-1">
                      <input
                        type="number"
                        placeholder="Enter cap price"
                        value={capPrice}
                        onChange={(e) => setCapPrice(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        step="0.01"
                        min="0"
                      />
                    </div>
                    <span className="flex items-center text-gray-600 font-medium">Rs.</span>
                  </div>
                </div>

                {/* Fixed Info */}
                <div className="bg-gray-50 rounded-lg p-6 space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Label Price (Fixed):</span>
                    <span className="font-bold text-gray-900">Rs. {formatCurrency(labelPrice)}</span>
                  </div>
                </div>

                {capPrice && (
                  <>
                    {/* Step 3: Tag Option */}
                    <div className="border-l-4 border-purple-500 pl-6">
                      <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <span className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center">
                          3
                        </span>
                        Tag (Optional)
                      </h2>
                      <label className="flex items-center gap-3 cursor-pointer mb-4">
                        <input
                          type="checkbox"
                          checked={tagNeeded}
                          onChange={(e) => setTagNeeded(e.target.checked)}
                          className="w-5 h-5 rounded"
                        />
                        <span className="text-gray-700 font-medium">Add Tag</span>
                      </label>

                      {tagNeeded && (
                        <div className="flex gap-2 mt-4">
                          <div className="flex-1">
                            <input
                              type="number"
                              placeholder="Enter tag price"
                              value={tagPrice}
                              onChange={(e) => setTagPrice(e.target.value)}
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                              step="0.01"
                              min="0"
                            />
                          </div>
                          <span className="flex items-center text-gray-600 font-medium">Rs.</span>
                        </div>
                      )}
                    </div>

                    {/* Step 4: PET Sheet Price */}
                    <div className="border-l-4 border-green-500 pl-6">
                      <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <span className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center">
                          4
                        </span>
                        PET Sheet Price
                      </h2>
                      <div className="flex gap-2">
                        <div className="flex-1">
                          <input
                            type="number"
                            placeholder="PET sheet price"
                            value={petSheetPrice}
                            onChange={(e) => setPetSheetPrice(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                            step="0.01"
                            min="0"
                          />
                        </div>
                        <span className="flex items-center text-gray-600 font-medium">Rs.</span>
                      </div>
                      <div className="mt-2 text-xs text-gray-500">Default: Rs. 22</div>
                    </div>

                    {/* Breakdown */}
                    <div className="bg-blue-50 rounded-lg p-6 space-y-3 border border-blue-200">
                      <h3 className="font-bold text-gray-900 text-lg mb-4">📊 One Bottle Price Breakdown</h3>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-gray-700">Pure Bottle ({size}):</span>
                          <span className="font-semibold">Rs. {formatCurrency(bottlePrices[size])}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-700">Cap:</span>
                          <span className="font-semibold">Rs. {formatCurrency(capPrice || 0)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-700">Label:</span>
                          <span className="font-semibold">Rs. {formatCurrency(labelPrice)}</span>
                        </div>
                        {tagNeeded && (
                          <div className="flex justify-between">
                            <span className="text-gray-700">Tag:</span>
                            <span className="font-semibold">Rs. {formatCurrency(tagPrice || 0)}</span>
                          </div>
                        )}
                        <div className="border-t-2 border-blue-300 pt-2 flex justify-between">
                          <span className="font-bold text-gray-900">One Bottle Total:</span>
                          <span className="font-bold text-blue-600 text-lg">
                            Rs. {formatCurrency(oneBottlePrice)}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Final Result */}
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-8 border-2 border-green-400">
                      <h3 className="font-bold text-gray-900 text-lg mb-4">🎯 One PET Price Calculation</h3>
                      <div className="space-y-3 mb-6">
                        <div className="flex justify-between items-center text-lg">
                          <span className="text-gray-700">
                            {bottlesPerPet[size]} bottles × Rs. {formatCurrency(oneBottlePrice)}:
                          </span>
                          <span className="font-semibold">
                            Rs. {formatCurrency(oneBottlePrice * bottlesPerPet[size])}
                          </span>
                        </div>
                        <div className="flex justify-between items-center text-lg">
                          <span className="text-gray-700">PET Sheet:</span>
                          <span className="font-semibold">Rs. {formatCurrency(petSheetPrice)}</span>
                        </div>
                      </div>
                      <div className="bg-white rounded-lg p-6 text-center border-2 border-green-400">
                        <p className="text-gray-600 text-sm mb-2">One PET Price ({size})</p>
                        <p className="text-5xl font-bold text-green-600">
                          Rs. {formatCurrency(onePetPrice)}
                        </p>
                      </div>
                    </div>

                    {/* Summary */}
                    <div className="bg-gray-100 rounded-lg p-6">
                      <h3 className="font-bold text-gray-900 mb-4">📋 Summary</h3>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white p-4 rounded-lg">
                          <p className="text-gray-600 text-sm">Size</p>
                          <p className="text-xl font-bold text-gray-900">{size}</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg">
                          <p className="text-gray-600 text-sm">Bottles/PET</p>
                          <p className="text-xl font-bold text-gray-900">{bottlesPerPet[size]}</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg">
                          <p className="text-gray-600 text-sm">Per Bottle</p>
                          <p className="text-xl font-bold text-blue-600">Rs. {formatCurrency(oneBottlePrice)}</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg">
                          <p className="text-gray-600 text-sm">Per PET</p>
                          <p className="text-xl font-bold text-green-600">Rs. {formatCurrency(onePetPrice)}</p>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CalculatorPage;

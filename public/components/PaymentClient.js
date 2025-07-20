"use client";
import { useState } from "react";
import { promocodes } from "@/public/constants";

export default function PaymentClient({ car }) {
    const [promoCode, setPromoCode] = useState("");
    const [appliedPromo, setAppliedPromo] = useState(null);
    const [promoError, setPromoError] = useState("");
    const [promoSuccess, setPromoSuccess] = useState("");

    // Calculate discount amount
    const discountAmount = appliedPromo
        ? (car.price * appliedPromo.discount_percent) / 100
        : 0;

    // Calculate final total
    const subtotal = car.price;
    const tax = car.tax;
    const finalTotal = subtotal + tax - discountAmount;

    const handleApplyPromo = () => {
        setPromoError("");
        setPromoSuccess("");

        if (!promoCode.trim()) {
            setPromoError("Please enter a promo code");
            return;
        }

        // Find matching promo code (case insensitive)
        const matchedPromo = promocodes.find(
            promo => promo.code.toLowerCase() === promoCode.trim().toLowerCase()
        );

        if (!matchedPromo) {
            setPromoError("Invalid promo code");
            return;
        }

        const currentDate = new Date();
        const expiryDate = new Date(matchedPromo.expiryDate);

        if (currentDate > expiryDate) {
            setPromoError("This promo code has expired");
            return;
        }

        setAppliedPromo(matchedPromo);
        setPromoSuccess(`Promo code applied! You saved ${matchedPromo.discount_percent}%`);
        setPromoCode("");
    };

    const handleRemovePromo = () => {
        setAppliedPromo(null);
        setPromoError("");
        setPromoSuccess("");
        setPromoCode("");
    };

    return (
        <>
            <span className="mt-10 mb-5 w-full h-0.5 bg-gray-200"></span>

            <div>
                <div className="flex justify-between mb-2">
                    <h2 className="text-slate-gray text-md">Subtotal</h2>
                    <h2 className="font-bold text-xl">${subtotal.toFixed(2)}</h2>
                </div>
                <div className="flex justify-between mb-2">
                    <h2 className="text-slate-gray text-md">Tax</h2>
                    <h2 className="font-bold text-xl">${tax.toFixed(2)}</h2>
                </div>

                {appliedPromo && (
                    <div className="flex justify-between mb-2">
                        <h2 className="text-green-600 text-md">
                            Discount - {appliedPromo.discount_percent}%
                        </h2>
                        <h2 className="font-bold text-xl text-green-600">-${discountAmount.toFixed(2)}</h2>
                    </div>
                )}
            </div>
            <div className="mt-5 mb-5">
                {!appliedPromo ? (
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Apply Promo Code"
                            value={promoCode}
                            onChange={(e) => setPromoCode(e.target.value)}
                            className="bg-[#F6F7F9] pl-6 pr-30 py-4 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                            onKeyPress={(e) => e.key === 'Enter' && handleApplyPromo()}
                        />
                        <button
                            onClick={handleApplyPromo}
                            className="absolute right-0 top-1/2 -translate-y-1/2 px-4 py-2 cursor-pointer text-sm lg:text-lg font-semibold text-primary rounded"
                        >
                            Apply now
                        </button>
                    </div>
                ) : (
                    <div className="flex justify-between items-center bg-green-50 p-4 rounded-md border border-green-200">
                        <div>
                            <h3 className="font-semibold text-green-800">Promo Applied: {appliedPromo.code}</h3>
                            <p className="text-sm text-green-600">{appliedPromo.discount_percent}% discount</p>
                        </div>
                        <button
                            onClick={handleRemovePromo}
                            className="text-red-500 hover:text-red-700 font-semibold"
                        >
                            Remove
                        </button>
                    </div>
                )}

                {/* Error Message */}
                {promoError && (
                    <p className="text-red-500 text-sm mt-2">{promoError}</p>
                )}

                {/* Success Message */}
                {promoSuccess && (
                    <p className="text-green-600 text-sm mt-2">{promoSuccess}</p>
                )}
            </div>
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-xl font-bold">Total Rental Price</h2>
                    <h2 className="text-md text-slate-gray">Overall Rental Price</h2>
                </div>
                <div className="text-right">
                    {appliedPromo && (
                        <p className="text-sm text-slate-gray line-through">
                            ${(subtotal + tax).toFixed(2)}
                        </p>
                    )}
                    <h2 className="text-2xl font-bold">${finalTotal.toFixed(2)}</h2>
                </div>
            </div>
        </>
    );
}
"use client";

import { useState } from "react";
import { useCart } from "./CartContext";
import { COLORS, FONTS, BUTTON_CLASSES } from "@/constants/constants";
import { X, ShoppingCart, Trash2 } from "lucide-react";
import { loadStripe } from "@stripe/stripe-js";

export default function FloatingCartButton() {
    const { items, itemCount, removeFromCart, clearCart } = useCart();
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    if (itemCount === 0) return null;

    const handleCheckout = async () => {
        try {
            setLoading(true);

            const response = await fetch(
                "https://no-sweat-api.onrender.com/api/create-checkout-session/",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        items: items.map((item) => ({
                            name: item.name,
                            quantity: item.quantity,
                            // You can set size-based price logic on backend or here
                            price: item.size === "16oz" ? 19.99 : 29.99,
                        })),
                    }),
                }
            );

            const data = await response.json();
            if (!response.ok) throw new Error(data.error || "Checkout failed");

            const stripe = await loadStripe(
                // process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
                "pk_test_51PcjKqLFE9BMR2wqGHeEmbTLifZIH9p9y6GLDDzXAvFEq0I2g2IX3J4ybyK8z0VnfjSYtBvl55baMxahKiA2M3HF00ZrrPNET2"
            );
            // stripe types from @stripe/stripe-js may not expose redirectToCheckout in some versions;
            // cast to any to call the client-side redirect method without a type error.
            await (stripe as any)?.redirectToCheckout({ sessionId: data.sessionId });
        } catch (err) {
            console.error("Checkout error:", err);
            alert("Error starting checkout. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            {/* Floating button */}
            <button
                onClick={() => setOpen(!open)}
                aria-label="Toggle cart"
                className="fixed bottom-6 right-6 bg-[#00AEEF] text-white rounded-full p-4 flex items-center shadow-xl z-50 hover:bg-[#008ec1] transition-colors"
            >
                <ShoppingCart size={24} />
                <span className="ml-2 font-semibold">{itemCount}</span>
            </button>

            {/* Cart drawer */}
            {open && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 flex justify-end"
                    onClick={() => setOpen(false)}
                >
                    <div
                        onClick={(e) => e.stopPropagation()}
                        className="w-80 md:w-96 bg-white h-full p-6 flex flex-col shadow-lg"
                    >
                        <div className="flex justify-between items-center mb-4">
                            <h3
                                className={`${FONTS.heading} text-xl`}
                                style={{ color: COLORS.jetBlack }}
                            >
                                Your Cart
                            </h3>
                            <button onClick={() => setOpen(false)} aria-label="Close cart">
                                <X size={24} className="text-[#00AEEF]" />
                            </button>
                        </div>

                        {/* Cart content */}
                        {items.length === 0 ? (
                            <p
                                className={`${FONTS.body} text-sm`}
                                style={{ color: COLORS.jetBlack }}
                            >
                                Your cart is empty.
                            </p>
                        ) : (
                            <ul className="space-y-4 flex-1 overflow-y-auto">
                                {items.map((item) => (
                                    <li
                                        key={item.id}
                                        className="flex justify-between items-center border-b pb-2"
                                    >
                                        <div>
                                            <p
                                                className={`${FONTS.heading} text-sm`}
                                                style={{ color: COLORS.jetBlack }}
                                            >
                                                {item.name}
                                            </p>
                                            <p
                                                className={`${FONTS.body} text-xs`}
                                                style={{ color: COLORS.jetBlack }}
                                            >
                                                Size: {item.size} | Qty: {item.quantity}
                                            </p>
                                        </div>
                                        <button
                                            onClick={() => removeFromCart(item.id)}
                                            aria-label="Remove item"
                                            className="p-1 rounded-full hover:bg-[#F7FBFD]"
                                        >
                                            <Trash2 size={16} className="text-[#d9534f]" />
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        )}

                        {/* Actions */}
                        {items.length > 0 && (
                            <>
                                <button
                                    onClick={clearCart}
                                    className={`${BUTTON_CLASSES} mt-4 w-full flex items-center justify-center`}
                                >
                                    Clear Cart
                                </button>

                                <button
                                    onClick={handleCheckout}
                                    disabled={loading}
                                    className={`${BUTTON_CLASSES} mt-3 w-full flex items-center justify-center ${loading ? "opacity-75 cursor-not-allowed" : ""
                                        }`}
                                >
                                    {loading ? "Processing..." : "Checkout"}
                                </button>
                            </>
                        )}
                    </div>
                </div>
            )}
        </>
    );
}

"use client";

import { useState } from "react";
import { useCart } from "./CartContext";
import { COLORS, FONTS, BUTTON_CLASSES } from "@/constants/constants";
import { ChevronLeft, ChevronRight } from "lucide-react";

export interface ProductDetailProps {
    id: string;
    name: string;
    images: string[];
    description: string;
    specs: string[];
    directions: string[];
    availableSizes: string[];
    safetySheet: string;
}

export default function ProductDetail({
    id,
    name,
    images,
    description,
    specs,
    directions,
    availableSizes,
    safetySheet,
}: ProductDetailProps) {
    const { addToCart } = useCart();
    const [currentImage, setCurrentImage] = useState(0);
    const [selectedSize, setSelectedSize] = useState(availableSizes[0]);
    const [quantity, setQuantity] = useState(1);
    const [loading, setLoading] = useState(false);

    const prevImage = () =>
        setCurrentImage((prev) => (prev - 1 + images.length) % images.length);

    const nextImage = () =>
        setCurrentImage((prev) => (prev + 1) % images.length);

    const handleAddToCart = () => {
        addToCart(
            { id: `${id}-${selectedSize}`, name, size: selectedSize },
            quantity
        );
    };

    const handleCheckout = async () => {
        try {
            setLoading(true);
            const response = await fetch("https://no-sweat-api.onrender.com/api/create-checkout-session/", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    items: [
                        {
                            name,
                            quantity,
                            price: selectedSize === "16oz" ? 19.99 : 29.99, // example
                        },
                    ],
                }),
            });

            const data = await response.json();
            if (!response.ok) throw new Error(data.error || "Failed to create checkout session");

            const stripeModule = await import("@stripe/stripe-js");
            const stripe = await stripeModule.loadStripe(
                process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
            );
            if (!stripe) throw new Error("Stripe failed to load");
            await (stripe as any).redirectToCheckout({ sessionId: data.sessionId });
        } catch (err) {
            console.error("Checkout error:", err);
            alert("Error creating checkout session.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="bg-white py-16 px-4 sm:px-6 lg:px-8 pt-20">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
                {/* Carousel */}
                <div className="relative flex flex-col items-center">
                    <div className="relative w-full h-72 md:h-96 bg-gray-100 rounded-xl overflow-hidden flex items-center justify-center">
                        <img
                            src={images[currentImage]}
                            alt={`${name} image ${currentImage + 1}`}
                            className="max-h-full object-contain"
                        />
                        {images.length > 1 && (
                            <>
                                <button
                                    onClick={prevImage}
                                    className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 bg-white/70 hover:bg-white rounded-r-md"
                                >
                                    <ChevronLeft size={24} className="text-[#00AEEF]" />
                                </button>
                                <button
                                    onClick={nextImage}
                                    className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-white/70 hover:bg-white rounded-l-md"
                                >
                                    <ChevronRight size={24} className="text-[#00AEEF]" />
                                </button>
                            </>
                        )}
                    </div>
                </div>

                {/* Product details */}
                <div>
                    <h2 className={`text-2xl md:text-3xl mb-4 ${FONTS.heading}`} style={{ color: COLORS.jetBlack }}>
                        {name}
                    </h2>
                    <p className={`${FONTS.body} mb-4`} style={{ color: COLORS.jetBlack }}>
                        {description}
                    </p>

                    {/* Size selector */}
                    <div className="mb-4 flex items-center space-x-2">
                        <label className={FONTS.body} style={{ color: COLORS.jetBlack }}>
                            Size:
                        </label>
                        <select
                            value={selectedSize}
                            onChange={(e) => setSelectedSize(e.target.value)}
                            style={{ color: COLORS.jetBlack }}
                            className="border border-gray-300 p-2 rounded-md"
                        >
                            {availableSizes.map((size) => (
                                <option key={size} style={{ color: COLORS.jetBlack }}>{size}</option>
                            ))}
                        </select>
                    </div>

                    {/* Quantity */}
                    <div className="mb-4 flex items-center space-x-2">
                        <label className={FONTS.body} style={{ color: COLORS.jetBlack }}>
                            Quantity:
                        </label>
                        <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
                            <button
                                type="button"
                                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                                className="px-3 py-1 bg-[#F7FBFD] hover:bg-[#E5EDF0]"
                                style={{ color: COLORS.jetBlack }}
                            >
                                −
                            </button>
                            <input
                                type="number"
                                value={quantity}
                                min={1}
                                style={{ color: COLORS.jetBlack }}
                                onChange={(e) => setQuantity(Number(e.target.value))}
                                className="w-12 text-center appearance-none focus:outline-none"
                            />
                            <button
                                type="button"
                                onClick={() => setQuantity((q) => q + 1)}
                                className="px-3 py-1 bg-[#F7FBFD] hover:bg-[#E5EDF0]"
                                style={{ color: COLORS.jetBlack }}
                            >
                                +
                            </button>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <button onClick={handleAddToCart} className={BUTTON_CLASSES}>
                            Add to Cart
                        </button>
                        <button onClick={handleCheckout} className={BUTTON_CLASSES}>
                            {loading ? "Processing..." : "Buy Now"}
                        </button>
                    </div>

                    {/* Safety Sheet */}
                    {safetySheet && (
                        <a href={safetySheet} target="_blank" className={`${BUTTON_CLASSES} mt-4 block`}>
                            Safety Data Sheet
                        </a>
                    )}
                </div>
            </div>
        </section>
    );
}

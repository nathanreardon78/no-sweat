"use client";

import { useState } from 'react';
import { useCart } from './CartContext';
import { COLORS, FONTS, BUTTON_CLASSES } from '@/constants/constants';
import { ChevronLeft, ChevronRight } from 'lucide-react';

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

    const prevImage = () => {
        setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
    };

    const nextImage = () => {
        setCurrentImage((prev) => (prev + 1) % images.length);
    };

    const handleAddToCart = () => {
        addToCart(
            { id: `${id}-${selectedSize}`, name, size: selectedSize },
            quantity
        );
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
                                    aria-label="Previous image"
                                    className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 bg-white/70 hover:bg-white rounded-r-md"
                                >
                                    <ChevronLeft size={24} className="text-[#00AEEF]" />
                                </button>
                                <button
                                    onClick={nextImage}
                                    aria-label="Next image"
                                    className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-white/70 hover:bg-white rounded-l-md"
                                >
                                    <ChevronRight size={24} className="text-[#00AEEF]" />
                                </button>
                            </>
                        )}
                    </div>
                    {images.length > 1 && (
                        <div className="flex space-x-2 mt-4">
                            {images.map((imgSrc, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setCurrentImage(idx)}
                                    className={`w-16 h-16 rounded-md overflow-hidden border-2 ${idx === currentImage ? 'border-[#00AEEF]' : 'border-transparent'
                                        }`}
                                >
                                    <img src={imgSrc} alt="thumbnail" className="w-full h-full object-cover" />
                                </button>
                            ))}
                        </div>
                    )}
                </div>
                {/* Details */}
                <div>
                    <h2
                        className={`text-2xl md:text-3xl mb-4 ${FONTS.heading}`}
                        style={{ color: COLORS.jetBlack }}
                    >
                        {name}
                    </h2>
                    <p
                        className={`${FONTS.body} mb-4`}
                        style={{ color: COLORS.jetBlack }}
                    >
                        {description}
                    </p>
                    {/* Size selector */}
                    <div className="mb-4 flex items-center space-x-2">
                        <label className={`${FONTS.body}`} style={{ color: COLORS.jetBlack }}>
                            Size:
                        </label>
                        <select
                            value={selectedSize}
                            onChange={(e) => setSelectedSize(e.target.value)}
                            className="border border-gray-300 p-2 rounded-md"
                            style={{ color: COLORS.jetBlack }}
                        >
                            {availableSizes.map((size) => (
                                <option key={size} value={size}>
                                    {size}
                                </option>
                            ))}
                        </select>
                    </div>
                    {/* Quantity selector */}
                    <div className="mb-4 flex items-center space-x-2">
                        <label className={`${FONTS.body}`} style={{ color: COLORS.jetBlack }}>
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
                                min={1}
                                value={quantity}
                                onChange={(e) => setQuantity(Math.max(1, Number(e.target.value)))}
                                className="w-12 text-center appearance-none focus:outline-none"
                                style={{ color: COLORS.jetBlack }}
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
                    <button onClick={handleAddToCart} className={`${BUTTON_CLASSES} mb-6`}>
                        Add to Cart
                    </button>
                    {/* Specs */}
                    <h3 className={`text-xl mb-2 ${FONTS.heading}`} style={{ color: COLORS.jetBlack }}>
                        Specs
                    </h3>
                    <ul className="list-disc list-inside mb-4 space-y-1">
                        {specs.map((spec, idx) => (
                            <li key={idx} className={`${FONTS.body}`} style={{ color: COLORS.jetBlack }}>
                                {spec}
                            </li>
                        ))}
                    </ul>
                    {/* Directions */}
                    <h3 className={`text-xl mb-2 ${FONTS.heading}`} style={{ color: COLORS.jetBlack }}>
                        Directions
                    </h3>
                    <ol className="list-decimal list-inside mb-4 space-y-1 ml-4">
                        {directions.map((dir, idx) => (
                            <li key={idx} className={`${FONTS.body}`} style={{ color: COLORS.jetBlack }}>
                                {dir}
                            </li>
                        ))}
                    </ol>
                    {/* Safety sheet link */}
                    {safetySheet && (
                        <a
                            href={safetySheet}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${BUTTON_CLASSES}`}
                        >
                            Safety Data Sheet
                        </a>
                    )}
                </div>
            </div>
        </section>
    );
}

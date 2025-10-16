"use client";

import { useState } from 'react';
import { useCart } from './CartContext';
import { COLORS, FONTS, BUTTON_CLASSES } from '@/constants/constants';
import { X, ShoppingCart, Trash2 } from 'lucide-react';

export default function FloatingCartButton() {
    const { items, itemCount, removeFromCart, clearCart } = useCart();
    const [open, setOpen] = useState(false);

    if (itemCount === 0) return null;

    return (
        <>
            <button
                onClick={() => setOpen(!open)}
                aria-label="Toggle cart"
                className="fixed bottom-6 right-6 bg-[#00AEEF] text-white rounded-full p-4 flex items-center shadow-xl z-50 hover:bg-[#008ec1] transition-colors"
            >
                <ShoppingCart size={24} />
                <span className="ml-2 font-semibold">{itemCount}</span>
            </button>
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
                            <h3 className={`${FONTS.heading} text-xl`} style={{ color: COLORS.jetBlack }}>
                                Your Cart
                            </h3>
                            <button onClick={() => setOpen(false)} aria-label="Close cart">
                                <X size={24} className="text-[#00AEEF]" />
                            </button>
                        </div>
                        {items.length === 0 ? (
                            <p className={`${FONTS.body} text-sm`} style={{ color: COLORS.jetBlack }}>
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
                                            <p className={`${FONTS.heading} text-sm`} style={{ color: COLORS.jetBlack }}>
                                                {item.name}
                                            </p>
                                            <p className={`${FONTS.body} text-xs`} style={{ color: COLORS.jetBlack }}>
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
                        {items.length > 0 && (
                            <button
                                onClick={clearCart}
                                className={`${BUTTON_CLASSES} mt-4 w-full flex items-center justify-center`}
                            >
                                Clear Cart
                            </button>
                        )}
                    </div>
                </div>
            )}
        </>
    );
}

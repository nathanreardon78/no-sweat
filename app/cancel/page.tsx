// app/cancel/page.tsx
"use client";

import Link from "next/link";
import { COLORS, FONTS, BUTTON_CLASSES } from "@/constants/constants";
import { XCircle } from "lucide-react";

export default function CancelPage() {
    return (
        <section className="flex flex-col items-center justify-center h-screen text-center px-6">
            <XCircle size={80} className="text-red-500 mb-6" />
            <h1 className={`text-3xl mb-4 ${FONTS.heading}`} style={{ color: COLORS.jetBlack }}>
                Payment Cancelled
            </h1>
            <p className={`${FONTS.body} text-lg mb-8`} style={{ color: COLORS.jetBlack }}>
                Your payment was cancelled. You can try again at any time.
            </p>
            <Link href="/" className={BUTTON_CLASSES}>
                Return to Home
            </Link>
        </section>
    );
}

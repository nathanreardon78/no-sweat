// app/success/page.tsx
"use client";

import Link from "next/link";
import { COLORS, FONTS, BUTTON_CLASSES } from "@/constants/constants";
import { CheckCircle } from "lucide-react";

export default function SuccessPage() {
    return (
        <section className="flex flex-col items-center justify-center h-screen text-center px-6">
            <CheckCircle size={80} className="text-green-500 mb-6" />
            <h1 className={`text-3xl mb-4 ${FONTS.heading}`} style={{ color: COLORS.jetBlack }}>
                Payment Successful!
            </h1>
            <p className={`${FONTS.body} text-lg mb-8`} style={{ color: COLORS.jetBlack }}>
                Thank you for your purchase. A confirmation email has been sent to you.
            </p>
            <Link href="/" className={BUTTON_CLASSES}>
                Return to Home
            </Link>
        </section>
    );
}

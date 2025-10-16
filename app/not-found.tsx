import Link from 'next/link';
import { COLORS, FONTS, BUTTON_CLASSES } from '@/constants/constants';

export default function NotFound() {
    return (
        <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#F7FBFD] to-[#D9E1E5] p-8">
            <div className="text-center max-w-lg mx-auto">
                <h1
                    className={`text-6xl md:text-8xl font-extrabold mb-4 ${FONTS.heading}`}
                    style={{ color: COLORS.jetBlack }}
                >
                    404
                </h1>
                <h2
                    className={`text-2xl md:text-3xl mb-4 ${FONTS.heading}`}
                    style={{ color: COLORS.jetBlack }}
                >
                    Page Not Found
                </h2>
                <p
                    className={`${FONTS.body} mb-8`}
                    style={{ color: COLORS.jetBlack }}
                >
                    Oops! It seems you've ventured off the beaten path. The page you're looking for doesn't exist or has been moved.
                </p>
                <Link href="/" className={BUTTON_CLASSES}>
                    Return Home
                </Link>
            </div>
        </section>
    );
}

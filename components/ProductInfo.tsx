// components/ProductInfo.tsx
// Displays detailed information about a product including image, description, features and safety sheet link.
import { COLORS, FONTS, BUTTON_CLASSES } from '@/constants/constants';

export interface ProductInfoProps {
  name: string;
  imageSrc: string;
  description: string;
  features: string[];
  safetySheet: string;
}

export default function ProductInfo({
  name,
  imageSrc,
  description,
  features,
  safetySheet,
}: ProductInfoProps) {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="flex justify-center">
          <img
            src={imageSrc}
            alt={name}
            className="max-w-full rounded-lg shadow-lg"
          />
        </div>
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
          <ul className="list-disc list-inside mb-4 space-y-1">
            {features.map((feature, idx) => (
              <li
                key={idx}
                className={`${FONTS.body}`}
                style={{ color: COLORS.jetBlack }}
              >
                {feature}
              </li>
            ))}
          </ul>
          <a
            href={safetySheet}
            className={BUTTON_CLASSES}
          >
            Download Safety Sheet
          </a>
        </div>
      </div>
    </section>
  );
}

import { COLORS, FONTS } from '@/constants/constants';

export default function TermsPage() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <h1 className={`text-3xl md:text-4xl mb-6 ${FONTS.heading}`} style={{ color: COLORS.jetBlack }}>
          Terms & Conditions
        </h1>
        <p className={`${FONTS.body} mb-4`} style={{ color: COLORS.jetBlack }}>
          This terms and conditions page is under construction. Please replace this placeholder content with your company's actual terms and conditions.
        </p>
        <p className={`${FONTS.body}`} style={{ color: COLORS.jetBlack }}>
          By accessing or using this site, you agree to be bound by the terms and conditions set forth herein. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
        </p>
      </div>
    </section>
  );
}

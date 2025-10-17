import { COLORS, FONTS } from '@/constants/constants';

/**
 * PrivacyPolicy page presents the comprehensive privacy policy for No Sweat™ in a
 * clean, readable format. It uses a table of contents for easy navigation and
 * breaks each numbered section into digestible paragraphs or lists. Styling
 * emphasizes clarity and legibility, in line with usability guidelines that
 * recommend clear headings, concise language and scannable content:contentReference[oaicite:4]{index=4}.
 */
export default function PrivacyPage() {
  const currentYear = new Date().getFullYear();
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#F7FBFD]">
      <div className="max-w-5xl mx-auto">
        <h1
          className={`text-3xl md:text-4xl mb-4 ${FONTS.heading}`}
          style={{ color: COLORS.jetBlack }}
        >
          Privacy Policy
        </h1>
        <p
          className={`${FONTS.body} text-sm italic mb-6`}
          style={{ color: COLORS.jetBlack }}
        >
          Last Updated: <span className="not-italic">[Insert Date]</span>
        </p>
        {/* Introduction and high‑level summary */}
        <p
          className={`${FONTS.body} mb-4 text-base leading-relaxed`}
          style={{ color: COLORS.jetBlack }}
        >
          This Global Privacy Policy (the “Policy”) describes how No Sweat™
          (“Company,” “we,” “our,” or “us”) collects, uses, discloses and
          safeguards personal information across all current and future websites,
          subdomains and online services (collectively, the “Services”). This
          Policy sets a global standard for privacy compliance and data
          protection in accordance with the highest international legal
          frameworks, including but not limited to the General Data Protection
          Regulation (EU) 2016/679 (“GDPR”), the California Consumer Privacy Act
          and Privacy Rights Act (CCPA/CPRA), the Virginia Consumer Data
          Protection Act (VCDPA), the Canadian Personal Information Protection
          and Electronic Documents Act (PIPEDA) and the Brazilian General Data
          Protection Law (LGPD). It applies to all users regardless of
          geographic location.
        </p>
        {/* Table of Contents */}
        <div className="bg-white/60 rounded-xl shadow-md p-4 mb-10">
          <h2
            className={`text-xl mb-3 ${FONTS.heading}`}
            style={{ color: COLORS.jetBlack }}
          >
            Contents
          </h2>
          <ol className="list-decimal list-inside space-y-1 text-sm md:text-base">
            <li>
              <a href="#scope" className="text-[#00AEEF] hover:underline">
                Scope &amp; Applicability
              </a>
            </li>
            <li>
              <a href="#info" className="text-[#00AEEF] hover:underline">
                Information We Collect
              </a>
            </li>
            <li>
              <a href="#ai" className="text-[#00AEEF] hover:underline">
                Automated &amp; AI‑Based Processing
              </a>
            </li>
            <li>
              <a href="#use" className="text-[#00AEEF] hover:underline">
                How We Use Information
              </a>
            </li>
            <li>
              <a href="#disclosure" className="text-[#00AEEF] hover:underline">
                Disclosure &amp; Data Sharing
              </a>
            </li>
            <li>
              <a href="#transfers" className="text-[#00AEEF] hover:underline">
                International Data Transfers
              </a>
            </li>
            <li>
              <a href="#retention" className="text-[#00AEEF] hover:underline">
                Data Retention
              </a>
            </li>
            <li>
              <a href="#children" className="text-[#00AEEF] hover:underline">
                Children’s Privacy
              </a>
            </li>
            <li>
              <a href="#rights" className="text-[#00AEEF] hover:underline">
                Your Rights
              </a>
            </li>
            <li>
              <a href="#security" className="text-[#00AEEF] hover:underline">
                Security &amp; Safeguards
              </a>
            </li>
            <li>
              <a href="#cookies" className="text-[#00AEEF] hover:underline">
                Cookies &amp; Tracking Technologies
              </a>
            </li>
            <li>
              <a href="#principles" className="text-[#00AEEF] hover:underline">
                Cross‑Border Compliance Principles
              </a>
            </li>
            <li>
              <a href="#dpo" className="text-[#00AEEF] hover:underline">
                Data Protection Officer &amp; Contact
              </a>
            </li>
            <li>
              <a href="#updates" className="text-[#00AEEF] hover:underline">
                Updates to This Policy
              </a>
            </li>
          </ol>
        </div>
        {/* Sections */}
        <div className="space-y-10">
          {/* 1. Scope */}
          <section id="scope">
            <h3
              className={`text-2xl mb-4 ${FONTS.heading}`}
              style={{ color: COLORS.jetBlack }}
            >
              1.&nbsp;Scope &amp; Applicability
            </h3>
            <p className={`${FONTS.body} text-base mb-4`} style={{ color: COLORS.jetBlack }}>
              This Policy applies to all visitors, customers and users of our
              Services and to all data collected online or offline through any
              form of interaction. By using our Services, you consent to the
              practices described herein.
            </p>
          </section>
          {/* 2. Information We Collect */}
          <section id="info">
            <h3
              className={`text-2xl mb-4 ${FONTS.heading}`}
              style={{ color: COLORS.jetBlack }}
            >
              2.&nbsp;Information We Collect
            </h3>
            <p className={`${FONTS.body} text-base mb-2`} style={{ color: COLORS.jetBlack }}>
              We collect personal data directly and automatically, including:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li className={`${FONTS.body} text-base`} style={{ color: COLORS.jetBlack }}>
                Identifiers: name, email, phone number and address
              </li>
              <li className={`${FONTS.body} text-base`} style={{ color: COLORS.jetBlack }}>
                Commercial data: transactions, purchases and payment methods
              </li>
              <li className={`${FONTS.body} text-base`} style={{ color: COLORS.jetBlack }}>
                Biometric &amp; health data (where applicable)
              </li>
              <li className={`${FONTS.body} text-base`} style={{ color: COLORS.jetBlack }}>
                Geolocation &amp; device identifiers
              </li>
              <li className={`${FONTS.body} text-base`} style={{ color: COLORS.jetBlack }}>
                Internet activity &amp; behavioural analytics
              </li>
              <li className={`${FONTS.body} text-base`} style={{ color: COLORS.jetBlack }}>
                Any other data required for lawful and legitimate business
                operations
              </li>
            </ul>
          </section>
          {/* 3. Automated & AI‑Based Processing */}
          <section id="ai">
            <h3
              className={`text-2xl mb-4 ${FONTS.heading}`}
              style={{ color: COLORS.jetBlack }}
            >
              3.&nbsp;Automated &amp; AI‑Based Processing
            </h3>
            <p className={`${FONTS.body} text-base mb-4`} style={{ color: COLORS.jetBlack }}>
              We utilise Artificial Intelligence and Machine Learning (“AI/ML”)
              technologies to analyse behavioural data, enhance service
              personalisation, detect fraud and improve user experience.
            </p>
            <p className={`${FONTS.body} text-base`} style={{ color: COLORS.jetBlack }}>
              Automated decision‑making may influence personalised
              recommendations or fraud prevention mechanisms, never without
              appropriate human oversight and legal safeguards.
            </p>
          </section>
          {/* 4. How We Use Information */}
          <section id="use">
            <h3
              className={`text-2xl mb-4 ${FONTS.heading}`}
              style={{ color: COLORS.jetBlack }}
            >
              4.&nbsp;How We Use Information
            </h3>
            <p className={`${FONTS.body} text-base mb-2`} style={{ color: COLORS.jetBlack }}>
              We process data for legitimate business purposes including:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li className={`${FONTS.body} text-base`} style={{ color: COLORS.jetBlack }}>
                Service delivery &amp; account management
              </li>
              <li className={`${FONTS.body} text-base`} style={{ color: COLORS.jetBlack }}>
                Communication &amp; customer support
              </li>
              <li className={`${FONTS.body} text-base`} style={{ color: COLORS.jetBlack }}>
                Compliance with legal obligations
              </li>
              <li className={`${FONTS.body} text-base`} style={{ color: COLORS.jetBlack }}>
                Analytics, marketing &amp; personalisation
              </li>
              <li className={`${FONTS.body} text-base`} style={{ color: COLORS.jetBlack }}>
                Platform security &amp; fraud prevention
              </li>
            </ul>
          </section>
          {/* 5. Disclosure & Data Sharing */}
          <section id="disclosure">
            <h3
              className={`text-2xl mb-4 ${FONTS.heading}`}
              style={{ color: COLORS.jetBlack }}
            >
              5.&nbsp;Disclosure &amp; Data Sharing
            </h3>
            <p className={`${FONTS.body} text-base mb-2`} style={{ color: COLORS.jetBlack }}>
              We do not sell personal data. We share information only with
              trusted service providers, payment processors, affiliates,
              analytics vendors and legal authorities when required by law.
            </p>
            <p className={`${FONTS.body} text-base`} style={{ color: COLORS.jetBlack }}>
              Each third‑party partner is contractually obligated to maintain
              equivalent data protection standards.
            </p>
          </section>
          {/* 6. International Data Transfers */}
          <section id="transfers">
            <h3
              className={`text-2xl mb-4 ${FONTS.heading}`}
              style={{ color: COLORS.jetBlack }}
            >
              6.&nbsp;International Data Transfers
            </h3>
            <p className={`${FONTS.body} text-base mb-2`} style={{ color: COLORS.jetBlack }}>
              Data may be processed and stored in the United States and other
              jurisdictions. All transfers comply with GDPR Chapter V and
              equivalent safeguards through Standard Contractual Clauses,
              adequacy decisions or binding corporate rules.
            </p>
          </section>
          {/* 7. Data Retention */}
          <section id="retention">
            <h3
              className={`text-2xl mb-4 ${FONTS.heading}`}
              style={{ color: COLORS.jetBlack }}
            >
              7.&nbsp;Data Retention
            </h3>
            <p className={`${FONTS.body} text-base mb-2`} style={{ color: COLORS.jetBlack }}>
              Personal data is retained only for as long as necessary to fulfil
              the purposes for which it was collected or as required by law.
            </p>
            <p className={`${FONTS.body} text-base`} style={{ color: COLORS.jetBlack }}>
              Retention schedules are periodically reviewed for compliance and
              minimisation.
            </p>
          </section>
          {/* 8. Children’s Privacy */}
          <section id="children">
            <h3
              className={`text-2xl mb-4 ${FONTS.heading}`}
              style={{ color: COLORS.jetBlack }}
            >
              8.&nbsp;Children’s Privacy
            </h3>
            <p className={`${FONTS.body} text-base mb-2`} style={{ color: COLORS.jetBlack }}>
              We comply with the Children’s Online Privacy Protection Act (COPPA)
              and do not knowingly collect data from children under 13 years
              old (or 16 in applicable jurisdictions) without verifiable
              parental consent.
            </p>
            <p className={`${FONTS.body} text-base`} style={{ color: COLORS.jetBlack }}>
              Parents may contact us to review or delete their child’s data at
              any time.
            </p>
          </section>
          {/* 9. Your Rights */}
          <section id="rights">
            <h3
              className={`text-2xl mb-4 ${FONTS.heading}`}
              style={{ color: COLORS.jetBlack }}
            >
              9.&nbsp;Your Rights
            </h3>
            <p className={`${FONTS.body} text-base mb-2`} style={{ color: COLORS.jetBlack }}>
              Depending on your jurisdiction, you may have the right to:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li className={`${FONTS.body} text-base`} style={{ color: COLORS.jetBlack }}>
                Access, correct or delete your data
              </li>
              <li className={`${FONTS.body} text-base`} style={{ color: COLORS.jetBlack }}>
                Restrict or object to processing
              </li>
              <li className={`${FONTS.body} text-base`} style={{ color: COLORS.jetBlack }}>
                Port your data to another service
              </li>
              <li className={`${FONTS.body} text-base`} style={{ color: COLORS.jetBlack }}>
                Withdraw consent where processing is based on consent
              </li>
            </ul>
            <p className={`${FONTS.body} text-base mt-2`} style={{ color: COLORS.jetBlack }}>
              Requests can be submitted using the contact information below.
            </p>
          </section>
          {/* 10. Security & Safeguards */}
          <section id="security">
            <h3
              className={`text-2xl mb-4 ${FONTS.heading}`}
              style={{ color: COLORS.jetBlack }}
            >
              10.&nbsp;Security &amp; Safeguards
            </h3>
            <p className={`${FONTS.body} text-base mb-2`} style={{ color: COLORS.jetBlack }}>
              We employ administrative, technical and physical safeguards that
              meet or exceed industry standards, including encryption,
              pseudonymisation, role‑based access controls, multi‑factor
              authentication and continuous threat monitoring.
            </p>
          </section>
          {/* 11. Cookies & Tracking Technologies */}
          <section id="cookies">
            <h3
              className={`text-2xl mb-4 ${FONTS.heading}`}
              style={{ color: COLORS.jetBlack }}
            >
              11.&nbsp;Cookies &amp; Tracking Technologies
            </h3>
            <p className={`${FONTS.body} text-base mb-2`} style={{ color: COLORS.jetBlack }}>
              We use cookies, web beacons and similar tools for site
              functionality, analytics and marketing. Users can control cookie
              preferences via browser settings or our Cookie Management Tool.
            </p>
          </section>
          {/* 12. Cross‑Border Compliance Principles */}
          <section id="principles">
            <h3
              className={`text-2xl mb-4 ${FONTS.heading}`}
              style={{ color: COLORS.jetBlack }}
            >
              12.&nbsp;Cross‑Border Compliance Principles
            </h3>
            <p className={`${FONTS.body} text-base mb-2`} style={{ color: COLORS.jetBlack }}>
              This Policy incorporates global privacy principles such as
              lawfulness, fairness, transparency, purpose limitation, data
              minimisation, accuracy, integrity and accountability. These
              principles apply uniformly across all operations and subsidiaries.
            </p>
          </section>
          {/* 13. Data Protection Officer & Contact */}
          <section id="dpo">
            <h3
              className={`text-2xl mb-4 ${FONTS.heading}`}
              style={{ color: COLORS.jetBlack }}
            >
              13.&nbsp;Data Protection Officer &amp; Contact
            </h3>
            <p className={`${FONTS.body} text-base mb-4`} style={{ color: COLORS.jetBlack }}>
              We maintain a designated Data Protection Officer (“DPO”) to
              oversee compliance. Users may exercise their rights or submit
              complaints via email at&nbsp;
              <a
                href="mailto:privacy@nosweatsealer.com"
                className="text-[#00AEEF] underline"
              >
                privacy@nosweatsealer.com
              </a>
              &nbsp;or by mail to our registered office in Florida, USA.
            </p>
          </section>
          {/* 14. Updates to This Policy */}
          <section id="updates">
            <h3
              className={`text-2xl mb-4 ${FONTS.heading}`}
              style={{ color: COLORS.jetBlack }}
            >
              14.&nbsp;Updates to This Policy
            </h3>
            <p className={`${FONTS.body} text-base mb-2`} style={{ color: COLORS.jetBlack }}>
              We may update this Policy to reflect legal, technical or business
              developments. The latest version will always be available on our
              website, with a new “Last Updated” date.
            </p>
            <p className={`${FONTS.body} text-base`} style={{ color: COLORS.jetBlack }}>
              Continued use of our Services constitutes acceptance of any
              modifications.
            </p>
          </section>
          {/* Footer note */}
          <p
            className={`${FONTS.body} text-sm mt-8`}
            style={{ color: COLORS.jetBlack }}
          >
            © {currentYear} No Sweat. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}

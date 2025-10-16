"use client";
import { Droplet, SprayCan, CheckCircle } from 'lucide-react';
import { COLORS, FONTS, LAYOUT } from '@/constants/constants';
import { motion } from 'framer-motion';

/**
 * The HowItWorks component explains the three‑step process of No Sweat™ using a video clip and animated cards.
 * A short looping video demonstrates the spray, bond and bead process with an overlay caption.
 * Below the video, each step is highlighted with an icon and description. Cards animate into view and on hover.
 */
const steps = [
  {
    icon: SprayCan,
    title: 'Spray',
    description: 'Apply No Sweat onto the surface of your cup or tumbler.',
  },
  {
    icon: Droplet,
    title: 'Bond',
    description:
      'Our silica‑based micro‑layer bonds to the surface, creating an invisible shield.',
  },
  {
    icon: CheckCircle,
    title: 'Bead',
    description:
      'Condensation beads up and rolls off, leaving your hands and surfaces dry.',
  },
];

export default function HowItWorks() {
  return (
    <section className={`relative ${LAYOUT.sectionPadding} bg-[#F7FBFD] overflow-hidden`}>
      {/* Decorative gradient blob */}
      <div className="absolute -top-20 right-0 w-72 h-72 bg-gradient-to-br from-[#00AEEF]/20 via-[#D9E1E5]/20 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-6xl mx-auto flex flex-col space-y-12 relative z-10">
        {/* Section heading */}
        <h2
          className={`text-3xl md:text-4xl text-center mb-4 ${FONTS.heading}`}
          style={{ color: COLORS.jetBlack }}
        >
          How It Works
        </h2>
        {/* Step cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map(({ icon: Icon, title, description }, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{
                type: 'spring',
                stiffness: 150,
                damping: 18,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="p-6 rounded-xl bg-gradient-to-br from-[#FFFFFF] via-[#F7FBFD] to-[#D9E1E5]/30 shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-gradient-to-br from-[#00AEEF]/20 to-[#D9E1E5]/20 rounded-full">
                <Icon size={40} className="text-[#00AEEF]" />
              </div>
              <h3
                className={`text-xl mb-2 ${FONTS.heading}`}
                style={{ color: COLORS.jetBlack }}
              >
                {title}
              </h3>
              <p
                className={`${FONTS.body}`}
                style={{ color: COLORS.jetBlack }}
              >
                {description}
              </p>
            </motion.div>
          ))}
        </div>
        {/* Video and overlay */}
        <div className="relative w-full rounded-xl overflow-hidden shadow-lg">
          <video
            src="/assets/drip-placeholder.mp4"
            className="w-full h-[260px] md:h-[360px] object-cover"
            autoPlay
            loop
            muted
            playsInline
          />
          {/* Text overlay on video */}
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center p-4">
            <p
              className={`text-lg mb-6 ${FONTS.body}`}
            >
              No Sweat™ uses silica‑based micro‑layer technology to block
              condensation at the source.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

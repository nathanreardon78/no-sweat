'use client';
import { COLORS, FONTS, LAYOUT } from '@/constants/constants';
import { CupSoda, GlassWater, Wine, Beer } from 'lucide-react';
import { motion } from 'framer-motion';

const useCases = [
  { icon: CupSoda, title: 'Plastic Cups' },
  { icon: GlassWater, title: 'Glassware' },
  { icon: Wine, title: 'Metal Tumblers' },
  { icon: Beer, title: 'Bar Equipment' },
];

export default function UseCases() {
  return (
    // Add a light background and hide overflow to remove any dark strip
    <section
      className={`relative ${LAYOUT.sectionPadding} bg-[#F7FBFD] overflow-hidden`}
    >
      {/* Decorative gradient backdrop */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-[#F7FBFD] to-[#FFFFFF] pointer-events-none"
      />
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <h2
          className={`text-3xl md:text-4xl mb-8 ${FONTS.heading}`}
          style={{ color: COLORS.jetBlack }}
        >
          Where You Can Use It
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {useCases.map(({ icon: Icon, title }, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.08, y: -4 }}
              transition={{
                type: 'spring',
                stiffness: 120,
                damping: 14,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="flex flex-col items-center p-6 rounded-xl bg-gradient-to-br from-[#FFFFFF] via-[#F7FBFD] to-[#D9E1E5]/30 shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 mb-4 flex items-center justify-center bg-gradient-to-br from-[#00AEEF]/20 to-[#D9E1E5]/20 rounded-full">
                <Icon size={40} className="text-[#00AEEF]" />
              </div>
              <h3
                className={`text-lg ${FONTS.heading}`}
                style={{ color: COLORS.jetBlack }}
              >
                {title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

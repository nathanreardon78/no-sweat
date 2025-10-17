"use client";
import { COLORS, FONTS, LAYOUT } from "@/constants/constants";
import {
  CupSoda,
  GlassWater,
  Wine,
  Martini,
  FlipHorizontal,
  AppWindow,
} from "lucide-react";
import { motion } from "framer-motion";

// const useCases = [
//   { icon: CupSoda, title: "Plastic Cups" },
//   { icon: GlassWater, title: "Glassware" },
//   { icon: Wine, title: "Metal Tumblers" },
//   { icon: Martini, title: "Bar Equipment" },
//   { icon: FlipHorizontal, title: "Mirrors" },
//   { icon: AppWindow, title: "Windows" },
// ];
const useCases = [
  { src: '/icons/plastic-cup.png', title: 'Plastic Cups' },
  { src: '/icons/glasses.png', title: 'Glassware' },
  { src: '/icons/metal-glassware.png', title: 'Metal Tumblers' },
  { src: '/icons/bar-equipment.png', title: 'Bar Equipment' },
  { src: '/icons/mirror.png', title: 'Mirrors' },
  { src: '/icons/window.png', title: 'Windows' },
];


export default function UseCases() {
  return (
    // Add a light background and hide overflow to remove any dark strip
    <section
      className={`relative ${LAYOUT.sectionPadding} bg-[#F7FBFD] overflow-hidden`}
    >
      {/* Decorative gradient backdrop */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F7FBFD] to-[#FFFFFF] pointer-events-none" />
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <h2
          className={`text-3xl md:text-4xl mb-8 ${FONTS.heading}`}
          style={{ color: COLORS.jetBlack }}
        >
          Where You Can Use It
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {useCases.map(({ src, title }, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.08, y: -4 }}
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 14,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="flex flex-col items-center p-6 rounded-xl bg-gradient-to-br from-[#FFFFFF] via-[#F7FBFD] to-[#D9E1E5]/30 shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="rounded-full">
                {/* <Icon size={40} className="text-[#00AEEF]" /> */}
                <img
                  src={src}
                  alt={title}
                  className="w-14 h-14 mb-4 object-contain transition-transform duration-300 group-hover:scale-110"
                />
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

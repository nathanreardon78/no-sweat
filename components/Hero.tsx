"use client";
import Image from 'next/image';
import { BUTTON_CLASSES, COLORS, FONTS } from '@/constants/constants';
import { motion } from 'framer-motion';

export interface HeroButton {
  label: string;
  href: string;
}

interface HeroProps {
  title: string;
  subtitle: string;
  buttons: HeroButton[];
  videoSrc?: string;
  logoSrc?: string;
}

export default function Hero({
  title="Stop the Drip Before It Begins.",
  subtitle="No Sweat™ is a clear, silica-based spray that blocks condensation on any cup or tumbler—keeping surfaces clean and dry.",
  buttons,
  videoSrc,
  logoSrc,
}: HeroProps) {
  return (
    <section className="relative w-full h-[70vh] md:h-screen flex items-center justify-center overflow-hidden">
      {/* Background video */}
      {videoSrc && (
        <video
          className="absolute inset-0 w-full h-full object-cover brightness-75"
          src={videoSrc}
          autoPlay
          muted
          loop
          playsInline
        />
      )}
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#00AEEF]/60 via-[#D9E1E5]/40 to-transparent" />
      {/* Animated floating bubbles */}
      <div className="absolute -top-8 left-10 w-32 h-32 bg-[#00AEEF]/20 rounded-full blur-2xl animate-bounce-slow" />
      <div className="absolute bottom-10 right-20 w-24 h-24 bg-[#D9E1E5]/30 rounded-full blur-xl animate-ping-slow" />

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 py-12">
        {/* Main hero text */}
        <div className="flex-1 text-center md:text-left mb-8 md:mb-0">
          <h1
            className={`text-4xl md:text-6xl mb-4 ${FONTS.heading}`}
            style={{ color: COLORS.iceWhite }}
          >
            {title}
          </h1>
          <p
            className={`text-lg md:text-xl mb-8 ${FONTS.body}`}
            style={{ color: COLORS.iceWhite }}
          >
            {subtitle}
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            {buttons.map((btn) => (
              <motion.a
                key={btn.label}
                href={btn.href}
                className={BUTTON_CLASSES}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {btn.label}
              </motion.a>
            ))}
          </div>
        </div>
        {/* Logo image */}
        {logoSrc && (
          <div className="flex-1 flex justify-center md:justify-end">
            <Image
              src={logoSrc}
              alt="No Sweat logo"
              width={220}
              height={220}
              className="object-contain drop-shadow-lg"
            />
          </div>
        )}
      </div>
    </section>
  );
}

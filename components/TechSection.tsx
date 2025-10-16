"use client";
import { COLORS, FONTS, LAYOUT } from '@/constants/constants';
import { CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

interface TechSectionProps {
    id?: string;
}

const features: string[] = [
    'Hydrophobic silica micro‑layer technology',
    'Bonding promoter for strong adhesion',
    'Non‑toxic & odor‑free formulation',
    'Clear finish that doesn’t alter appearance',
];

export default function TechSection({ id }: TechSectionProps) {
    return (
        <section
            id={id}
            className={`relative ${LAYOUT.sectionPadding} bg-[#F7FBFD] overflow-hidden`}
        >
            {/* Floating decorative elements */}
            <div className="absolute -top-12 left-8 w-32 h-32 bg-[#00AEEF]/20 rounded-full blur-2xl animate-bounce-slow pointer-events-none" />
            <div className="absolute bottom-0 right-20 w-40 h-40 bg-[#D9E1E5]/30 rounded-full blur-3xl animate-ping-slow pointer-events-none" />
            {/* Content wrapper */}
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center relative z-10">
                {/* Text content */}
                <div>
                    <h2
                        className={`text-3xl md:text-4xl mb-2 ${FONTS.heading}`}
                        style={{ color: COLORS.jetBlack }}
                    >
                        Technology &amp; Science
                    </h2>
                    <h3
                        className={`text-2xl md:text-3xl mb-4 ${FONTS.heading}`}
                        style={{ color: COLORS.jetBlack }}
                    >
                        Hydrophobic Silica Micro‑Layer
                    </h3>
                    <p
                        className={`text-lg mb-6 ${FONTS.body}`}
                        style={{ color: COLORS.jetBlack }}
                    >
                        No Sweat™ utilises a proprietary silica‑based micro‑layer that forms an invisible shield on the surface of your drinkware. This hydrophobic barrier prevents condensation from clinging, causing water droplets to bead up and roll away.
                    </p>
                    <ul className="list-none space-y-3 mb-8">
                        {features.map((point, idx) => (
                            <motion.li
                                key={idx}
                                className="flex items-start space-x-3"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <CheckCircle2 size={20} className="text-[#00AEEF] mt-[2px]" />
                                <span
                                    className={`${FONTS.body}`}
                                    style={{ color: COLORS.jetBlack }}
                                >
                                    {point}
                                </span>
                            </motion.li>
                        ))}
                    </ul>
                </div>
                {/* Image content */}
                <div className="flex justify-center md:justify-end">
                    <img
                        src="/assets/no_spill.png"
                        alt="Illustration of micro‑layer stopping condensation"
                        className="w-full max-w-md md:max-w-none md:w-[28rem] rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                    />
                </div>
            </div>
        </section>
    );
}

// components/FAQ.tsx
'use client';
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { COLORS, FONTS, LAYOUT } from '@/constants/constants';

interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

const faqs: FAQItem[] = [
  {
    question: 'What is No Sweat™?',
    answer: (
      <p>
        No Sweat™ is a clear, silica‑based surface coating that stops condensation from
        forming on cups, tumblers and drinkware — keeping them completely dry, even with
        ice‑cold drinks.
      </p>
    ),
  },
  {
    question: 'How does it work?',
    answer: (
      <p>
        No Sweat™ prevents condensation from developing by creating a thin, thermally insulating
        micro‑layer on the cup’s surface. This layer reduces the surface’s temperature differential,
        stopping water vapour from turning into droplets. In short: It doesn’t make water bead —
        it stops sweat from ever appearing.
      </p>
    ),
  },
  {
    question: 'Is it food‑safe?',
    answer: (
      <p>
        Yes. Once dry, No Sweat™ is non‑toxic, odourless and completely safe for use on drinkware
        and food‑contact surfaces.
      </p>
    ),
  },
  {
    question: 'Will it change the look or feel of my cup?',
    answer: <p>No. It dries perfectly clear and smooth — no haze, stickiness or residue.</p>,
  },
  {
    question: 'How long does it last?',
    answer: (
      <p>
        Each application can last several weeks of daily use. It’s durable through light rinsing
        or cleaning and can easily be reapplied when needed.
      </p>
    ),
  },
  {
    question: 'Can I use it on any material?',
    answer: (
      <p>
        Yes. It works on most common cup materials including plastic, glass, stainless steel and
        aluminium. For best adhesion, wipe surfaces clean with isopropyl alcohol before spraying.
      </p>
    ),
  },
  {
    question: 'Does it affect hot drinks?',
    answer: (
      <p>
        No Sweat™ is stable at high temperatures but it’s designed specifically for cold‑drink
        condensation control.
      </p>
    ),
  },
  {
    question: 'How do I apply it?',
    answer: (
      <ul className="list-decimal ml-4 space-y-1">
        <li>Clean surface with isopropyl alcohol.</li>
        <li>Shake well.</li>
        <li>Spray 6–10&nbsp;inches from surface in light, even coats.</li>
        <li>Allow 5&nbsp;minutes to dry.</li>
        <li>Apply a second thin coat for best results.</li>
      </ul>
    ),
  },
  {
    question: 'Can I remove it?',
    answer: <p>Yes. Remove easily with rubbing alcohol or warm, soapy water.</p>,
  },
  {
    question: 'Is it permanent?',
    answer: (
      <p>
        No. It’s a semi‑permanent coating designed for easy reapplication while maintaining strong
        adhesion.
      </p>
    ),
  },
  {
    question: 'Does it have an odour or taste?',
    answer: <p>None. Once dried, the coating is completely neutral.</p>,
  },
  {
    question: 'Can it be used commercially?',
    answer: (
      <p>
        Yes. Restaurants, cafés and beverage manufacturers use No Sweat™ to keep surfaces,
        counters and packaging dry and professional‑looking.
      </p>
    ),
  },
  {
    question: 'How should it be stored?',
    answer: (
      <p>
        Keep sealed at room temperature, away from direct sunlight. Shelf life: up to 24&nbsp;months.
      </p>
    ),
  },
  {
    question: 'Available Sizes',
    answer: (
      <ul className="list-disc ml-4 space-y-1">
        <li>4&nbsp;oz personal spray bottle</li>
        <li>16&nbsp;oz refill bottle</li>
        <li>1&nbsp;gallon commercial jug</li>
      </ul>
    ),
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggleIndex = (idx: number) => setOpenIndex(openIndex === idx ? null : idx);

  return (
    <section className={`bg-[#F7FBFD] ${LAYOUT.sectionPadding}`}>
      <div className="max-w-5xl mx-auto">
        <h2
          className={`text-3xl md:text-4xl mb-8 text-center ${FONTS.heading}`}
          style={{ color: COLORS.jetBlack }}
        >
          Frequently Asked Questions
        </h2>
        <ul className="space-y-4">
          {faqs.map((faq, idx) => (
            <li key={idx} className="border border-gray-200 rounded-xl overflow-hidden transition-all duration-300">
              <button
                type="button"
                onClick={() => toggleIndex(idx)}
                className="w-full flex justify-between items-center p-4 bg-white hover:bg-[#F7FBFD]"
              >
                <span
                  className={`${FONTS.heading} text-lg`}
                  style={{ color: COLORS.jetBlack }}
                >
                  {faq.question}
                </span>
                {openIndex === idx ? (
                  <ChevronUp size={20} className="text-[#00AEEF]" />
                ) : (
                  <ChevronDown size={20} className="text-[#00AEEF]" />
                )}
              </button>
              {openIndex === idx && (
                <div className="px-4 pb-4 bg-gradient-to-r from-[#F7FBFD] to-[#D9E1E5]/50">
                  {typeof faq.answer === 'string' ? (
                    <p className={`${FONTS.body}`} style={{ color: COLORS.jetBlack }}>
                      {faq.answer}
                    </p>
                  ) : (
                    <div className={`${FONTS.body} space-y-1`} style={{ color: COLORS.jetBlack }}>
                      {faq.answer}
                    </div>
                  )}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

// components/Reviews.tsx
// Displays customer reviews in a horizontally scrollable list.
import { COLORS, FONTS, LAYOUT } from '@/constants/constants';
import { Star } from 'lucide-react';

interface Review {
  id: number;
  name: string;
  text: string;
  rating: number;
}

// Sample reviews; in a real application these might come from an API.
const reviews: Review[] = [
  {
    id: 1,
    name: 'Sarah',
    text: 'It works great! No more condensation on my desk.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Mike',
    text: 'I use it for my bar – customers love the dry glasses.',
    rating: 4,
  },
  {
    id: 3,
    name: 'Aisha',
    text: 'My metal tumbler stays dry all day.',
    rating: 5,
  },
];

export default function Reviews() {
  return (
    <section className={`bg-white ${LAYOUT.sectionPadding}`}>
      <div className="max-w-5xl mx-auto">
        <h2
          className={`text-3xl md:text-4xl mb-8 text-center ${FONTS.heading}`}
          style={{ color: COLORS.jetBlack }}
        >
          Customer Reviews
        </h2>
        <div className="flex overflow-x-auto space-x-4 pb-4">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="min-w-[280px] flex-shrink-0 bg-[#F7FBFD] border border-gray-200 rounded-lg p-6 shadow"
            >
              <div className="flex mb-2">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} size={16} className="text-[#00AEEF] mr-1" />
                ))}
              </div>
              <p
                className={`${FONTS.body} mb-2`}
                style={{ color: COLORS.jetBlack }}
              >
                {review.text}
              </p>
              <p
                className={`${FONTS.heading} text-sm`}
                style={{ color: COLORS.jetBlack }}
              >
                – {review.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

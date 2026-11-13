import React from 'react';
import { Star } from 'lucide-react';

const reviews = [
  {
    id: 1,
    text: '"Chashmar frame-ta khubee solid ar heavy, amar mukheo khub bhalo set hoyeche. Delivery fast chilo, r glass er finish dekhte ekdom premium lage."',
    name: 'Zayan H.',
    meta: 'Verified Purchase • Black Matte Frame',
  },
  {
    id: 2,
    text: '"Argentina Special Edition order koresilam. Polarized lens er quality khub bhalo ar sky blue detailgulo oshadharon. Customer service niye ami khub satisfied."',
    name: 'Arif R.',
    meta: 'Verified Purchase • Argentina Edition',
  },
  {
    id: 3,
    text: '"Ekdom clean style, unisex fit. Packaging ta khultei monay holo kono high-end luxury brand unbox korchi. Highly recommended!"',
    name: 'Mitali Khan',
    meta: 'Verified Purchase • Gold Polarized',
  },
];

export default function Testimonials() {
  return (
    <section className="w-full bg-white py-16 md:py-24 px-6 md:px-14 border-t border-gray-100">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 space-y-2">
          <p className="text-[10px] font-bold tracking-[0.25em] text-[#D4A338] uppercase">
            TESTIMONIALS
          </p>
          <h2 className="text-3xl md:text-4xl font-serif text-gray-900 tracking-wide uppercase">
            VERIFIED REVIEWS
          </h2>
        </div>

        {/* 3 Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white border border-gray-200/80 rounded-xl p-6 flex flex-col justify-between space-y-6 shadow-xs"
            >
              <div className="space-y-4">
                {/* 5 Gold Stars */}
                <div className="flex items-center gap-1 text-[#F5C542]">
                  {[...Array(5)].map((_, idx) => (
                    <Star key={idx} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-xs text-gray-600 italic leading-relaxed">
                  {review.text}
                </p>
              </div>

              {/* Author Details */}
              <div className="pt-2">
                <h4 className="text-xs font-bold text-gray-900">{review.name}</h4>
                <p className="text-[11px] text-gray-400 mt-0.5">{review.meta}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
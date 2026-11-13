
import { ArrowRight } from 'lucide-react';

export default function BrandStory() {
  return (
    <section className="w-full bg-white py-16 md:py-24 px-6 md:px-14">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16">
        {/* Left Image */}
        <div className="w-full md:w-1/2">
          <div className="rounded-xl overflow-hidden shadow-md h-80 md:h-96">
            <img
              src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=800&q=80"
              alt="MAZISH Lifestyle"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2 space-y-5 text-left">
          <h2 className="text-2xl md:text-3xl font-serif text-gray-900 leading-snug uppercase">
            MADE TO BE NOTICED. <br />
            DESIGNED TO FEEL LIKE YOU.
          </h2>

          <p className="text-sm text-gray-600 leading-relaxed font-normal">
            MAZISH brings together expressive design, everyday comfort, and accessible luxury. From signature statement eyewear to future jewelry collections, every piece is curated to help you wear your individuality with complete confidence.
          </p>

          <div className="pt-2">
            <a
              href="#collection"
              className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.15em] text-gray-900 uppercase hover:text-amber-700 transition group"
            >
              EXPLORE THE COLLECTION
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
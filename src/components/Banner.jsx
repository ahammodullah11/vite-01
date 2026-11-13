
import { ChevronRight, ChevronLeft } from 'lucide-react';

export default function Banner() {
  return (
    <section className="relative w-full bg-[#F6F2EC] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-14 py-14 md:py-24 flex flex-col md:flex-row items-center justify-between relative">
        
        {/* Background Faint Watermark 'M' */}
        <div className="absolute top-6 left-10 text-[120px] font-serif font-bold text-amber-900/5 select-none pointer-events-none">
          M
        </div>

        {/* Left Side Text Content */}
        <div className="z-10 max-w-lg space-y-5 text-center md:text-left">
          <p className="text-[11px] tracking-[0.3em] font-semibold text-amber-800 uppercase">
            MAZISH PREMIUM EYEWEAR
          </p>

          <div className="space-y-1">
            <h2 className="text-4xl md:text-6xl font-serif tracking-tight text-gray-900 leading-none">
              SEE DIFFERENT.
            </h2>
            <h3 className="text-3xl md:text-5xl font-serif text-gray-400 font-light tracking-wide">
              EVERY DETAIL
            </h3>
          </div>

          <p className="text-sm md:text-base text-gray-600 font-normal leading-relaxed pt-1">
            Curated sunglasses designed to elevate every look. Premium eyewear crafted for those who appreciate true sophistication.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center gap-5 justify-center md:justify-start">
            <button className="bg-[#D5A249] hover:bg-[#c2903b] text-white px-8 py-3.5 text-xs font-bold tracking-[0.2em] uppercase transition shadow-sm cursor-pointer">
              SHOP COLLECTION
            </button>
            <a
              href="#new-arrivals"
              className="text-xs font-medium tracking-wider text-gray-700 hover:text-black border-b border-gray-400 pb-0.5 transition"
            >
              Explore new arrivals
            </a>
          </div>
        </div>

        {/* Right Side Sunglass Showcase */}
        <div className="mt-12 md:mt-0 relative w-full md:w-1/2 flex justify-center items-center">
          <div className="relative w-full max-w-md flex flex-col items-end gap-4">
            {/* Top Sunglass */}
            <div className="w-72 md:w-80 bg-white/60 backdrop-blur-sm p-3 rounded-xl shadow-md border border-white">
              <img
                src="https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=600&q=80"
                alt="Luxury Sunglass 1"
                className="w-full h-36 object-contain"
              />
            </div>

            {/* Middle Sunglass */}
            <div className="w-72 md:w-80 bg-white/80 backdrop-blur-sm p-3 rounded-xl shadow-md border border-white mr-12 -mt-6">
              <img
                src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=600&q=80"
                alt="Luxury Sunglass 2"
                className="w-full h-36 object-contain"
              />
            </div>
          </div>
        </div>

        {/* Left & Right Slider Arrows */}
        <button className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-700 p-2 rounded-full shadow transition cursor-pointer">
          <ChevronLeft className="w-4 h-4" />
        </button>
        <button className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-700 p-2 rounded-full shadow transition cursor-pointer">
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}
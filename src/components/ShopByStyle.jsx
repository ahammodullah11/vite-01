
import { ChevronRight } from 'lucide-react';

const styles = [
  {
    id: 1,
    title: 'FOR HIM',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 2,
    title: 'FOR HER',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 3,
    title: 'UNISEX ESSENTIALS',
    image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=600&q=80',
  },
];

export default function ShopByStyle() {
  return (
    <section className="w-full bg-[#FDFBF2] py-16 md:py-24 px-6 md:px-14">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 space-y-2">
          <p className="text-[10px] font-bold tracking-[0.25em] text-[#D4A338] uppercase">
            CURATED STYLES
          </p>
          <h2 className="text-3xl md:text-4xl font-serif text-gray-900 tracking-wide uppercase">
            SHOP BY STYLE
          </h2>
        </div>

        {/* 3 Style Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {styles.map((item) => (
            <div
              key={item.id}
              className="group relative h-96 rounded-xl overflow-hidden cursor-pointer shadow-sm"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
              {/* Bottom Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

              {/* Text Content */}
              <div className="absolute bottom-5 left-5 right-5 text-white space-y-1">
                <h3 className="font-serif text-lg tracking-wider uppercase">
                  {item.title}
                </h3>
                <p className="text-[10px] tracking-[0.2em] text-amber-300 font-semibold flex items-center gap-1 uppercase group-hover:translate-x-1 transition">
                  EXPLORE STYLE <ChevronRight className="w-3 h-3" />
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
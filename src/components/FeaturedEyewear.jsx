
import { ShoppingBag, ArrowRight } from 'lucide-react';

const products = [
  {
    id: 1,
    badge: '৳50 OFF',
    badgeType: 'discount',
    category: 'SUNGLASSES',
    gender: 'UNISEX',
    title: 'Matte Black Sunglass',
    price: 949,
    oldPrice: 999,
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 2,
    badge: '৳501 OFF',
    badgeType: 'discount',
    category: 'SUNGLASSES',
    gender: 'UNISEX',
    title: 'MAZISH Cheetah Luxury',
    price: 1799,
    oldPrice: 2300,
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 3,
    badge: '৳300 OFF',
    badgeType: 'discount',
    category: 'SUNGLASSES',
    gender: 'UNISEX',
    title: 'MAZISH Cartier Luxury',
    price: 1099,
    oldPrice: 1399,
    image: 'https://images.unsplash.com/photo-1577803645773-f96470509666?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 4,
    badge: 'STOCK OUT',
    badgeType: 'stockout',
    category: 'SUNGLASSES',
    gender: 'UNISEX',
    title: 'MAZISH Apex Horizon',
    price: 1799,
    oldPrice: 1950,
    image: 'https://images.unsplash.com/photo-1509695507497-903c140c43b0?auto=format&fit=crop&w=600&q=80',
  },
];

export default function FeaturedEyewear() {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-14 py-16 md:py-24">
      {/* Section Header */}
      <div className="text-center max-w-xl mx-auto mb-14 space-y-3">
        <p className="text-[11px] font-bold tracking-[0.25em] text-[#D4A338] uppercase">
          THE COLLECTION
        </p>
        <h2 className="text-3xl md:text-4xl font-serif tracking-wide text-gray-900 uppercase">
          FEATURED EYEWEAR
        </h2>
        <p className="text-sm text-gray-500 font-normal leading-relaxed">
          Modern frames selected for comfort, confidence, and premium style.
        </p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="group bg-white rounded-xl border border-gray-200/80 overflow-hidden hover:shadow-lg transition duration-300 flex flex-col justify-between"
          >
            {/* Image & Badge Container */}
            <div className="relative bg-[#F5F3EF] h-64 overflow-hidden">
              {/* Top Left Badge */}
              <span
                className={`absolute top-3 left-3 z-10 text-[10px] font-bold px-2.5 py-1 rounded uppercase tracking-wider ${
                  product.badgeType === 'stockout'
                    ? 'bg-[#D92D20] text-white'
                    : 'bg-[#F5C542] text-gray-900'
                }`}
              >
                {product.badge}
              </span>

              {/* Product Image */}
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
            </div>

            {/* Product Details */}
            <div className="p-5 space-y-3">
              {/* Category & Gender Tag */}
              <div className="flex items-center justify-between text-[10px] tracking-widest uppercase font-semibold text-gray-400">
                <span>{product.category}</span>
                <span className="bg-gray-100 text-gray-600 px-2 py-0.5 rounded">
                  {product.gender}
                </span>
              </div>

              {/* Product Title */}
              <h3 className="font-serif text-base text-gray-900 font-medium">
                {product.title}
              </h3>

              {/* Price & Cart Button */}
              <div className="pt-2 flex items-center justify-between">
                <div className="flex items-baseline gap-2">
                  <span className="text-lg font-bold text-gray-900">
                    ৳{product.price}
                  </span>
                  <span className="text-xs text-gray-400 line-through">
                    ৳{product.oldPrice}
                  </span>
                </div>

                <button
                  disabled={product.badgeType === 'stockout'}
                  className={`p-2.5 rounded-lg border transition ${
                    product.badgeType === 'stockout'
                      ? 'border-gray-200 text-gray-300 cursor-not-allowed'
                      : 'border-gray-200 text-gray-700 hover:bg-gray-900 hover:text-white hover:border-gray-900 cursor-pointer'
                  }`}
                  title={product.badgeType === 'stockout' ? 'Stock Out' : 'Add to Cart'}
                >
                  <ShoppingBag className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Explore Button */}
      <div className="mt-14 text-center">
        <button className="inline-flex items-center gap-2 bg-[#F5C542] hover:bg-[#e5b532] text-gray-900 text-xs font-bold tracking-[0.15em] uppercase px-8 py-4 rounded-full shadow-sm transition cursor-pointer group">
          EXPLORE FULL COLLECTION
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
        </button>
      </div>
    </section>
  );
}
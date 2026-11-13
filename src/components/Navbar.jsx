
import { ShoppingBag, Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="w-full sticky top-0 z-50">
      {/* Main Navigation Bar */}
      <div className="flex items-center justify-between px-6 md:px-14 py-4 bg-white border-b border-gray-100">
        {/* Left Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-semibold tracking-widest text-gray-700">
          <a href="#home" className="hover:text-black transition">
            HOME
          </a>
          <a href="#shop" className="hover:text-black transition">
            SHOP SUNGLASSES
          </a>
          <a href="#track" className="hover:text-black transition">
            TRACK ORDER
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <Menu className="w-6 h-6 cursor-pointer text-gray-800" />
        </div>

        {/* Center Logo */}
        <div className="text-center cursor-pointer flex items-center gap-2">
          <span className="text-2xl font-serif font-bold text-amber-700">M</span>
          <h1 className="text-xl md:text-2xl font-serif tracking-[0.25em] font-normal text-gray-900">
            MAZISH
          </h1>
        </div>

        {/* Right Contact & Cart */}
        <div className="flex items-center gap-6 text-gray-800">
          <a
            href="#contact"
            className="hidden md:inline-block text-xs font-semibold tracking-wider border border-gray-200 px-4 py-1.5 rounded-full hover:border-black transition"
          >
            CONTACT
          </a>
          <div className="relative cursor-pointer">
            <ShoppingBag className="w-5 h-5 hover:text-amber-700 transition" />
            <span className="absolute -top-1.5 -right-2 bg-amber-700 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
              0
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Delivery Announcement Bar */}
      <div className="bg-[#181818] text-gray-200 text-[10px] md:text-[11px] text-center py-2 uppercase tracking-[0.15em] font-medium px-2">
        CASH ON DELIVERY AVAILABLE • NATIONWIDE DELIVERY ACROSS BANGLADESH • INSPECT AT DELIVERY
      </div>
    </header>
  );
}
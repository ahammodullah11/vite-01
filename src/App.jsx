
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import FeaturedEyewear from './components/FeaturedEyewear';
import ShopByStyle from './components/ShopByStyle';
import BrandStory from './components/BrandStory';
import ComingSoon from './components/ComingSoon';
import Testimonials from './components/Testimonials';
import GalleryAndFooter from './components/GalleryAndFooter';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* ১. ন্যাভবার */}
      <Navbar />

      <main>
        {/* ২. ব্যানার */}
        <Banner />

        {/* ৩. ফিচার্ড আইওয়্যার কালেকশন */}
        <FeaturedEyewear />

        {/* ৪. শপ বাই স্টাইল */}
        <ShopByStyle />

        {/* ৫. ব্র্যান্ড স্টোরি */}
        <BrandStory />

        {/* ৬. কামিং সুন (জুয়েলারি) */}
        <ComingSoon />

        {/* ৭. কাস্টমার রিভিউ */}
        <Testimonials />
      </main>

      {/* ৮. গ্যালারি এবং ফুটার */}
      <GalleryAndFooter />
    </div>
  );
}
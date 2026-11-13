import React, { useState } from 'react';

export default function ComingSoon() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      alert(`Thank you! We will notify ${email} when launched.`);
      setEmail('');
    }
  };

  return (
    <section className="w-full bg-[#FAF9F5] py-16 md:py-24 px-6 md:px-14">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 md:gap-14">
        {/* Left Form Content */}
        <div className="w-full md:w-1/2 space-y-4">
          <span className="inline-block bg-white border border-gray-200 text-[10px] font-bold tracking-[0.2em] text-gray-600 px-3 py-1 rounded-full uppercase">
            THE HER EDIT
          </span>

          <h2 className="text-2xl md:text-3xl font-serif text-gray-900 leading-snug uppercase">
            EARRINGS & JEWELRY <br />
            COMING SOON
          </h2>

          <p className="text-sm text-gray-600 leading-relaxed">
            A refined collection of elegant earrings, modern jewelry, and curated accessories is joining the world of MAZISH. Join our first-access list to receive updates.
          </p>

          {/* Email Input & Button */}
          <form onSubmit={handleSubmit} className="pt-2 flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="flex-1 bg-white border border-gray-200 rounded-lg px-4 py-3 text-xs text-gray-800 focus:outline-none focus:border-amber-500"
            />
            <button
              type="submit"
              className="bg-[#F5C542] hover:bg-[#e5b532] text-gray-900 text-xs font-bold tracking-wider uppercase px-6 py-3 rounded-lg transition cursor-pointer"
            >
              NOTIFY ME
            </button>
          </form>

          <p className="text-[11px] text-gray-400">
            * We value your privacy. We'll only send launch notifications.
          </p>
        </div>

        {/* Right Jewelry Showcase Image */}
        <div className="w-full md:w-1/2">
          <div className="rounded-xl overflow-hidden shadow-sm h-72 md:h-80">
            <img
              src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80"
              alt="Earrings & Jewelry Collection"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
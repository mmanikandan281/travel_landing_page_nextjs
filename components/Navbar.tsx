'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
        <Link href="/" className="text-3xl font-black text-[#181E4B] tracking-tight">
          Jadoo
        </Link>

        <div className="hidden lg:flex items-center gap-10">
          {['Destinations', 'Hotels', 'Flights', 'Bookings'].map((item) => (
            <a
              key={item}
              href="#"
              className="text-[#212832] font-medium text-[15px] hover:text-[#DF6951] transition-colors duration-200"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-6">
          <Link href="/login" className="text-[#212832] font-medium text-[15px] hover:text-[#DF6951] transition-colors">
            Login
          </Link>
          <Link
            href="/signup"
            className="border border-[#FF7235] text-[#FF7235] font-medium text-[15px] px-7 py-2 rounded-md hover:bg-[#FF7235] hover:text-white transition-all duration-200"
          >
            Sign up
          </Link>
          <button className="flex items-center gap-1 text-[#212832] font-medium text-[15px] hover:text-[#DF6951] transition-colors">
            EN <ChevronDown size={14} />
          </button>
        </div>

        <button
          className="lg:hidden p-2 text-[#181E4B]"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
          {['Destinations', 'Hotels', 'Flights', 'Bookings'].map((item) => (
            <a
              key={item}
              href="#"
              className="text-[#212832] font-medium text-[15px] hover:text-[#DF6951] transition-colors py-1"
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <div className="flex items-center gap-4 pt-2 border-t border-gray-100">
            <Link href="/login" className="text-[#212832] font-medium text-[15px]" onClick={() => setIsMenuOpen(false)}>
              Login
            </Link>
            <Link
              href="/signup"
              className="border border-[#FF7235] text-[#FF7235] font-medium text-[15px] px-6 py-2 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Sign up
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

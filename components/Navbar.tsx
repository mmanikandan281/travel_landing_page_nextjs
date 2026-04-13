'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';

function JadooLogo() {
  return (
    <span className="inline-flex h-[34px] w-[115px] items-end">
      <span
        className="inline-flex items-end text-[42px] font-bold leading-[0.76] tracking-[-0.06em] text-[#000000]"
        style={{ fontFamily: 'var(--font-poppins), system-ui, -apple-system, Segoe UI, Roboto, sans-serif' }}
      >
        Jad
      </span>
      <span className="ml-[2px] inline-flex h-[20px] w-[20px] translate-y-[-1px] rounded-full border-[4px] border-[#000000] bg-[#F3B300]" />
      <span className="ml-[1.5px] inline-flex h-[20px] w-[20px] translate-y-[-1px] rounded-full border-[4px] border-[#000000] bg-[#F3B300]" />
    </span>
  );
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="absolute inset-x-0 top-0 z-50 bg-transparent pt-6">
      <div className="mx-auto flex h-[40px] max-w-[1160px] items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex min-w-[115px] items-center">
          <JadooLogo />
        </Link>

        <div className="hidden flex-1 items-center justify-center gap-12 lg:flex">
          {['Destinations', 'Hotels', 'Flights', 'Bookings'].map((item) => (
            <a
              key={item}
              href="#"
              className="text-[15px] font-medium text-[#212832] transition-colors duration-200 hover:text-[#DF6951]"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="hidden min-w-[230px] items-center justify-end gap-7 lg:flex">
          <Link href="/login" className="text-[15px] font-medium text-[#212832] transition-colors hover:text-[#DF6951]">
            Login
          </Link>
          <Link
            href="/signup"
            className="rounded-[5px] border border-[#212832] px-5 py-2 text-[15px] font-medium text-[#212832] transition-all duration-200 hover:border-[#DF6951] hover:bg-[#DF6951] hover:text-white"
          >
            Sign up
          </Link>
          <button className="flex items-center gap-1 text-[15px] font-medium text-[#212832] transition-colors hover:text-[#DF6951]">
            EN <ChevronDown size={14} />
          </button>
        </div>

        <button className="p-2 text-[#181E4B] lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="mt-3 border border-[#E5E5E5] bg-white px-4 py-5 shadow-sm lg:hidden">
          <div className="flex flex-col gap-4">
            {['Destinations', 'Hotels', 'Flights', 'Bookings'].map((item) => (
              <a
                key={item}
                href="#"
                className="py-1 text-[15px] font-medium text-[#212832] transition-colors hover:text-[#DF6951]"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
          <div className="mt-4 flex items-center gap-4 border-t border-[#E5E5E5] pt-4">
            <Link href="/login" className="text-[15px] font-medium text-[#212832]" onClick={() => setIsMenuOpen(false)}>
              Login
            </Link>
            <Link
              href="/signup"
              className="rounded-[6px] border border-[#212832] px-5 py-2.5 text-[15px] font-medium text-[#212832]"
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

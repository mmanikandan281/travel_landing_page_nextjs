import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const footerLinks = {
  Company: ['About', 'Careers', 'Mobile', 'Blog', 'How we work'],
  Contact: ['Help/FAQ', 'Press', 'Affiliates', 'Hotel owners', 'Work with us'],
  More: ['Airline fees', 'Tips', 'Jadoo for Business', 'Privacy Policy', 'Terms & Conditions'],
};

export default function Footer() {
  return (
    <footer className="bg-white pt-16 pb-8 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="text-3xl font-black text-[#181E4B] tracking-tight block mb-4">
              Jadoo
            </a>
            <p className="text-[#7B8593] text-[14px] leading-relaxed mb-6 max-w-xs">
              Book your trip in minutes, get full control for much longer.
            </p>
            <div className="flex items-center gap-4">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-[#7B8593] hover:text-[#DF6951] hover:border-[#DF6951] transition-all duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-[#181E4B] font-bold text-[16px] mb-5">{title}</h4>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-[#7B8593] text-[14px] hover:text-[#DF6951] transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* App download + copyright */}
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#7B8593] text-[13px]">
            Copyright 2026 Jadoo. All rights reserved
          </p>
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="flex items-center gap-2 bg-[#181E4B] text-white px-5 py-2.5 rounded-lg hover:bg-[#0f1430] transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.7 9.05 7.4c1.37.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.39-1.32 2.76-2.53 3.99zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
              </svg>
              <span className="text-sm font-medium">App Store</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-2 bg-[#181E4B] text-white px-5 py-2.5 rounded-lg hover:bg-[#0f1430] transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                <path d="M3.18 23.76a2.5 2.5 0 01-.23-1.1V1.34a2.5 2.5 0 01.23-1.1l.1-.1L14.92 12l-11.64 11.87-.1-.1zM17.97 15.9L5.08 23.1l9.84-9.84 3.05 2.64zM21.7 10.65c.48.28.8.78.8 1.35s-.32 1.07-.8 1.35l-2.97 1.72-3.29-3.07 3.29-3.07 2.97 1.72zM5.08.9l12.89 7.2-3.05 2.64L5.08.9z"/>
              </svg>
              <span className="text-sm font-medium">Google Play</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

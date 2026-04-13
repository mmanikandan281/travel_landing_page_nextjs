import { Facebook, Instagram, Twitter } from 'lucide-react';

const footerLinks = {
  Company: ['About', 'Careers', 'Mobile'],
  Contact: ['Help/FAQ', 'Press', 'Affilates'],
  More: ['Airlinefees', 'Airline', 'Low fare tips'],
};

export default function Footer() {
  return (
    <footer className="bg-white pb-10 pt-16 md:pt-20">
      <div className="mx-auto max-w-[1160px] px-4 md:px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.35fr_repeat(3,minmax(120px,1fr))_1.2fr] md:items-start">
          <div>
            <a href="#" className="mb-5 block text-[44px] font-medium leading-none tracking-[-0.02em] text-[#181E4B]">
              Jadoo.
            </a>
            <p className="max-w-[210px] text-[13px] leading-6 text-[#5E6282]">
              Book your trip in minutes, get full control for much longer.
            </p>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="mb-4 text-[20px] font-bold text-[#080809]">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-[16px] text-[#5E6282] transition-colors hover:text-[#DF6951]">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="md:justify-self-end">
            <div className="mb-5 flex items-center gap-4">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#080809] shadow-[0_8px_20px_rgba(0,0,0,0.08)]"
              >
                <Facebook size={15} />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#B8D2F1] via-[#F289AA] to-[#C68BF0] text-white shadow-[0_10px_22px_rgba(208,122,199,0.28)]"
              >
                <Instagram size={15} />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#080809] shadow-[0_8px_20px_rgba(0,0,0,0.08)]"
              >
                <Twitter size={15} />
              </a>
            </div>

            <p className="mb-3 text-[18px] text-[#5E6282]">Discover our app</p>

            <div className="flex items-center gap-2">
              <a href="#" className="rounded-full bg-[#080809] px-3 py-1.5 text-[10px] font-medium text-white">
                Google Play
              </a>
              <a href="#" className="rounded-full bg-[#080809] px-3 py-1.5 text-[10px] font-medium text-white">
                Apple Store
              </a>
            </div>
          </div>
        </div>

        <p className="mt-14 text-center text-[14px] text-[#5E6282]">All rights reserved@jadoo.co</p>
      </div>
    </footer>
  );
}

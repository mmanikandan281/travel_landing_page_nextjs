export default function Services() {
  const services = [
    {
      icon: (
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
          <rect width="64" height="64" rx="8" fill="#F3EFE8"/>
          <circle cx="32" cy="28" r="10" stroke="#B8860B" strokeWidth="2" fill="none"/>
          <path d="M32 18 L32 14" stroke="#B8860B" strokeWidth="2" strokeLinecap="round"/>
          <path d="M32 42 L32 46" stroke="#B8860B" strokeWidth="2" strokeLinecap="round"/>
          <path d="M22 28 L18 28" stroke="#B8860B" strokeWidth="2" strokeLinecap="round"/>
          <path d="M46 28 L42 28" stroke="#B8860B" strokeWidth="2" strokeLinecap="round"/>
          <path d="M25 21 L22 18" stroke="#B8860B" strokeWidth="2" strokeLinecap="round"/>
          <path d="M39 21 L42 18" stroke="#B8860B" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="32" cy="28" r="4" fill="#F1A501"/>
          <path d="M26 44 Q32 38 38 44" stroke="#5B8DB8" strokeWidth="2" fill="none" strokeLinecap="round"/>
          <path d="M20 50 L44 50" stroke="#5B8DB8" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      title: 'Calculated Weather',
      description: 'Built Wicket longer admire do barton vanity itself do in it.',
    },
    {
      icon: (
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
          <rect width="64" height="64" rx="8" fill="#EFF6FF"/>
          <path d="M8 36 L42 20 L36 36 L42 52 Z" fill="#38BDF8"/>
          <rect x="22" y="30" width="16" height="10" rx="2" fill="#7DD3FC"/>
          <circle cx="48" cy="36" r="4" fill="#0EA5E9"/>
          <path d="M14 36 L8 30 L8 42 Z" fill="#0EA5E9" opacity="0.6"/>
        </svg>
      ),
      title: 'Best Flights',
      description: 'Engrossed listening. Park gate sell they west hard for the.',
    },
    {
      icon: (
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
          <rect width="64" height="64" rx="8" fill="#F3EFE8"/>
          <ellipse cx="32" cy="20" rx="8" ry="12" stroke="#6B7280" strokeWidth="2" fill="#9CA3AF"/>
          <ellipse cx="32" cy="20" rx="5" ry="8" fill="#6B7280"/>
          <rect x="28" y="32" width="8" height="3" rx="1" fill="#6B7280"/>
          <rect x="26" y="35" width="12" height="4" rx="2" fill="#4B5563"/>
          <circle cx="32" cy="16" r="2" fill="#D1D5DB"/>
        </svg>
      ),
      title: 'Local Events',
      description: 'Barton vanity itself do in it. Preferd to men it engrossed listening.',
    },
    {
      icon: (
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
          <rect width="64" height="64" rx="8" fill="#F0F4F8"/>
          <circle cx="32" cy="32" r="14" stroke="#9CA3AF" strokeWidth="3" fill="none"/>
          <circle cx="32" cy="32" r="8" stroke="#9CA3AF" strokeWidth="2" fill="none"/>
          <circle cx="32" cy="32" r="3" fill="#6B7280"/>
          <path d="M32 18 L32 14" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round"/>
          <path d="M32 50 L32 46" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round"/>
          <path d="M18 32 L14 32" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round"/>
          <path d="M50 32 L46 32" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      title: 'Customization',
      description: 'We deliver outsourced aviation services for military customers.',
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative dots */}
      <div className="absolute top-12 right-12 grid grid-cols-5 gap-3 opacity-40">
        {Array.from({ length: 25 }).map((_, i) => (
          <span
            key={i}
            className={`w-1.5 h-1.5 rounded-full ${i === 7 || i === 13 ? 'bg-[#DF6951]' : 'bg-[#B0C4D8]'}`}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <p className="text-[#7B8593] font-medium text-sm tracking-[3px] uppercase mb-3">
            Category
          </p>
          <h2 className="text-[42px] md:text-[50px] font-black text-[#181E4B] leading-tight">
            We Offer Best Services
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group flex flex-col items-center text-center p-8 rounded-3xl transition-all duration-300 cursor-pointer
                ${index === 1
                  ? 'bg-white shadow-2xl shadow-[#181E4B]/10 scale-105'
                  : 'hover:bg-white hover:shadow-xl hover:shadow-[#181E4B]/8 hover:scale-105'
                }`}
            >
              <div className="mb-5 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-[#181E4B] font-bold text-[17px] mb-3">{service.title}</h3>
              <p className="text-[#7B8593] text-[14px] leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative shape bottom left */}
      <div className="absolute bottom-0 left-16 w-20 h-20 opacity-20">
        <svg viewBox="0 0 80 80" fill="none">
          <path d="M80 80 Q0 80 0 0 Q80 0 80 80" fill="#DF6951"/>
        </svg>
      </div>
    </section>
  );
}

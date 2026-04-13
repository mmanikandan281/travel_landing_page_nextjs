import Image from 'next/image';
import { MapPin, CreditCard, Plane, Leaf, ChartBar as BarChart2, Navigation, Heart, Users } from 'lucide-react';

const steps = [
  {
    icon: <MapPin size={22} className="text-white" />,
    iconBg: 'bg-[#F1A501]',
    title: 'Choose Destination',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.',
  },
  {
    icon: <CreditCard size={22} className="text-white" />,
    iconBg: 'bg-[#DF6951]',
    title: 'Make Payment',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.',
  },
  {
    icon: <Plane size={22} className="text-white" />,
    iconBg: 'bg-[#006380]',
    title: 'Reach Airport on Selected Date',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.',
  },
];

export default function Booking() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="mb-4 text-[18px] font-semibold text-[#5E6282]">
              Easy and Fast
            </p>
            <h2
              className="mb-12 text-[38px] font-bold leading-[1] text-[#14183E] md:text-[50px]"
              style={{ fontFamily: 'var(--font-volkhov), serif' }}
            >
              Book Your Next Trip
              <br />
              In 3 Easy Steps
            </h2>

            <div className="flex flex-col gap-8">
              {steps.map((step, index) => (
                <div key={index} className="flex items-start gap-5">
                  <div className={`${step.iconBg} flex h-12 w-12 shrink-0 items-center justify-center rounded-xl shadow-lg`}>
                    {step.icon}
                  </div>
                  <div>
                    <h3 className="mb-1 text-[18px] font-semibold text-[#5E6282]">{step.title}</h3>
                    <p className="max-w-[395px] text-[15px] leading-7 text-[#5E6282]">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="absolute top-10 h-[330px] w-[330px] rounded-full bg-[#59B1E6]/10 blur-3xl" />

            <div className="relative z-10 w-full max-w-[430px] p-4">
              <div className="overflow-hidden rounded-[26px] bg-white shadow-[0_24px_55px_rgba(24,30,75,0.12)]">
                <div className="relative h-56">
                  <Image
                    src="https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Trip to Greece"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-6">
                  <h3 className="mb-1 text-lg font-semibold text-[#080809]">Trip To Greece</h3>
                  <p className="mb-5 text-sm text-[#84829A]">14-29 June | by Robbin jo</p>

                  <div className="mb-7 flex items-center gap-4">
                    <button className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F5F5F5] transition-colors hover:bg-[#FFE7DB]">
                      <Leaf size={15} className="text-[#7B8593]" />
                    </button>
                    <button className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F5F5F5] transition-colors hover:bg-[#FFE7DB]">
                      <BarChart2 size={15} className="text-[#7B8593]" />
                    </button>
                    <button className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F5F5F5] transition-colors hover:bg-[#FFE7DB]">
                      <Navigation size={15} className="text-[#7B8593]" />
                    </button>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-[#84829A]">
                      <Users size={15} />
                      <span>24 people going</span>
                    </div>
                    <button className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F5F5F5] transition-colors hover:bg-[#FFE7DB]">
                      <Heart size={15} className="text-[#7B8593]" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="absolute -right-2 bottom-12 w-[220px] rounded-[20px] bg-white p-4 shadow-[0_18px_45px_rgba(24,30,75,0.16)] sm:right-[-50px]">
                <div className="mb-3 flex items-center gap-3">
                  <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full">
                    <Image
                      src="https://images.pexels.com/photos/1462980/pexels-photo-1462980.jpeg?auto=compress&cs=tinysrgb&w=200"
                      alt="Trip to Rome"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-[12px] text-[#84829A]">Ongoing</p>
                    <p className="text-[16px] font-semibold text-[#080809]">Trip to rome</p>
                  </div>
                </div>
                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-[13px] text-[#84829A]"><span className="font-semibold text-[#8A79DF]">40%</span> completed</span>
                  </div>
                  <div className="h-1.5 overflow-hidden rounded-full bg-[#F5F5F5]">
                    <div className="h-full w-[40%] rounded-full bg-[#8B5CF6]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

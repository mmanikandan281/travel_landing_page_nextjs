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
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <p className="text-[#7B8593] font-medium text-sm tracking-[3px] uppercase mb-4">
              Easy and Fast
            </p>
            <h2 className="text-[42px] md:text-[50px] font-black text-[#181E4B] leading-tight mb-12">
              Book Your Next Trip
              <br />
              In 3 Easy Steps
            </h2>

            <div className="flex flex-col gap-8">
              {steps.map((step, index) => (
                <div key={index} className="flex items-start gap-5">
                  <div className={`${step.iconBg} w-12 h-12 rounded-xl flex items-center justify-center shrink-0 shadow-lg`}>
                    {step.icon}
                  </div>
                  <div>
                    <h3 className="text-[#181E4B] font-bold text-[16px] mb-1">{step.title}</h3>
                    <p className="text-[#7B8593] text-[14px] leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Trip Card */}
          <div className="relative flex justify-center">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#E8F4FD] to-[#F0F8FF] rounded-3xl" />

            <div className="relative z-10 p-8 w-full max-w-[380px]">
              {/* Main Trip Card */}
              <div className="bg-white rounded-3xl shadow-2xl shadow-[#181E4B]/10 overflow-hidden">
                {/* Card Image */}
                <div className="relative h-52">
                  <Image
                    src="https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Trip to Greece"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Card Content */}
                <div className="p-5">
                  <h3 className="text-[#181E4B] font-bold text-lg mb-1">Trip To Greece</h3>
                  <p className="text-[#7B8593] text-sm mb-4">14-29 June | by Robbin jo</p>

                  {/* Action icons */}
                  <div className="flex items-center gap-4 mb-5">
                    <button className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center hover:border-[#DF6951] transition-colors">
                      <Leaf size={15} className="text-[#7B8593]" />
                    </button>
                    <button className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center hover:border-[#DF6951] transition-colors">
                      <BarChart2 size={15} className="text-[#7B8593]" />
                    </button>
                    <button className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center hover:border-[#DF6951] transition-colors">
                      <Navigation size={15} className="text-[#7B8593]" />
                    </button>
                  </div>

                  {/* People going & heart */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-[#7B8593] text-sm">
                      <Users size={15} />
                      <span>24 people going</span>
                    </div>
                    <button className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center hover:border-red-400 transition-colors">
                      <Heart size={15} className="text-[#7B8593]" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Ongoing trip pill */}
              <div className="absolute top-12 right-4 bg-white rounded-2xl shadow-xl p-4 w-[180px]">
                <div className="flex items-center gap-3 mb-3">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0">
                    <Image
                      src="https://images.pexels.com/photos/1462980/pexels-photo-1462980.jpeg?auto=compress&cs=tinysrgb&w=200"
                      alt="Trip to Rome"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-[#7B8593] text-[10px]">Ongoing</p>
                    <p className="text-[#181E4B] font-bold text-[12px]">Trip to rome</p>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] text-[#7B8593]">40% completed</span>
                  </div>
                  <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full w-[40%] bg-[#8B5CF6] rounded-full" />
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

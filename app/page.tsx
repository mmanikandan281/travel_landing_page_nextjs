import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Destinations from '@/components/Destinations';
import Booking from '@/components/Booking';
import Testimonials from '@/components/Testimonials';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <Services />
      <Destinations />
      <Booking />
      <Testimonials />
      <Newsletter />
      <Footer />
    </main>
  );
}

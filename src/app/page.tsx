import { About, Events, Features, Hero, ReservationForm, Services, SpecialDish, Testimonials } from '@/components';
import { HomeMenuItems, slides } from '@/utils';
import HomeMenu from './../components/HomeMenu';

export default function Home() {
  return (
    <main className="">
      {/* Hero */}
      <Hero page='home' slides={slides} />
      <Services />
      <About />
      <SpecialDish />
      <HomeMenu />
      <Testimonials />
      <div className="reservation-form-wrapper">
       <ReservationForm />
      </div>
      <Features />
      <Events />
    </main>
  )
}

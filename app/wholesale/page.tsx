import Hero from '@/components/Hero';
import WholesaleForm from '@/components/WholesaleForm';
import { COLORS } from '@/constants/constants';

export default function WholesalePage() {
  return (
    <>
      <Hero
        title="Wholesale & Commercial"
        subtitle="Interested in carrying No Sweat™? Contact us using the form below."
        buttons={[]}
        videoSrc="/assets/drip-placeholder.mp4"
        logoSrc="/assets/logo_red_cup.png"
      />
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          
          <WholesaleForm />
        </div>
      </section>
    </>
  );
}

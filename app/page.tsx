import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import UseCases from '@/components/UseCases';
import TechSection from '@/components/TechSection';
import Reviews from '@/components/Reviews';
import FAQ from '@/components/FAQ';

export default function HomePage() {
  return (
    <>
      <Hero
        title="Say goodbye to condensation!"
        subtitle="No Sweat™ is a clear, silica‑based spray that blocks condensation on any cup or tumbler—keeping surfaces clean and dry."
        buttons={[
          { label: 'Shop Now', href: '/product' },
          // Anchor link to technology section on the same page
          { label: 'Learn More', href: '#tech' },
          { label: 'Wholesale', href: '/wholesale' },
        ]}
        videoSrc="/assets/drip-placeholder.mp4"
        logoSrc="/assets/logo_red_cup.png"
      />
      <div className="absolute bottom-0 w-full h-15 bg-gradient-to-b from-transparent to-[#F7FBFD]" />
      
      <HowItWorks />
      <UseCases />
      {/* Technology section integrated into home page */}
      <TechSection id="tech" />
      {/* <Reviews /> */}
      <FAQ />
    </>
  );
}

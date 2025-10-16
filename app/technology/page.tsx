import Hero from '@/components/Hero';
import { COLORS, FONTS } from '@/constants/constants';

export default function TechnologyPage() {
  return (
    <>
      <Hero
        title="The Science of No Sweat™"
        subtitle="Discover the silica‑based technology that blocks condensation before it begins."
        buttons={[{ label: 'Shop Now', href: '/product' }]}
        videoSrc="/assets/drip-placeholder.mp4"
        logoSrc="/assets/logo_red_cup.png"
      />
      <section className="bg-[#F7FBFD] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className={`text-3xl md:text-4xl mb-6 ${FONTS.heading}`} style={{ color: COLORS.jetBlack }}>
            Hydrophobic Silica Micro‑Layer
          </h2>
          <p className={`text-lg mb-8 ${FONTS.body}`} style={{ color: COLORS.jetBlack }}>
            No Sweat™ utilises a proprietary silica‑based micro‑layer that forms an invisible shield on the surface of your drinkware. This hydrophobic barrier prevents condensation from clinging, causing water droplets to bead up and roll away.
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li className={`${FONTS.body} text-base`} style={{ color: COLORS.jetBlack }}>Transparent, non‑toxic and odor‑free</li>
            <li className={`${FONTS.body} text-base`} style={{ color: COLORS.jetBlack }}>Bonds to plastic, glass or metal surfaces</li>
            <li className={`${FONTS.body} text-base`} style={{ color: COLORS.jetBlack }}>Durable through multiple washes</li>
            <li className={`${FONTS.body} text-base`} style={{ color: COLORS.jetBlack }}>Fast‑drying, one‑step application</li>
          </ul>
          <div className="mt-8">
            <img
              src="/assets/no_spill.png"
              alt="Condensation blocked by No Sweat"
              className="w-full max-w-md mx-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
    </>
  );
}

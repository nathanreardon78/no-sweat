import Hero from '@/components/Hero';
import ProductDetail from '@/components/ProductDetail';


export const metadata = {
  title: 'Product – No Sweat™',
  description: 'Shop No Sweat™: choose from 4 oz, 16 oz or 1 gallon sizes and stop condensation.',
  openGraph: {
    images: ['/assets/goodbye_condensation.png'],
  },
  twitter: {
    images: ['/assets/goodbye_condensation.png'],
  },
};


export default function ProductPage() {
  return (
    <>
      <Hero
        title="Stop condensation before it begins."
        subtitle="No Sweat™ is a clear, silica‑based spray that blocks condensation on any cup or tumbler — keeping surfaces clean and dry."
        buttons={[]} // no CTA buttons needed here
        videoSrc="/assets/drip-placeholder.mp4"
        logoSrc="/assets/logo_red_cup.png"
      />
      <ProductDetail
        id="no-sweat"
        name="No Sweat™ Spray"
        images={[
          '/assets/before_it_begins.png',
          '/assets/goodbye_condensation.png',
          '/assets/no_spill.png',
        ]}
        description="No Sweat™ is a clear, silica‑based spray that blocks condensation on any cup or tumbler — keeping surfaces clean and dry. Easy to apply and perfect for home or commercial use."
        specs={[
          'Hydrophobic silica micro‑layer technology',
          'Bonding promoter for strong adhesion',
          'Non‑toxic & odor‑free',
          'Clear finish that doesn’t alter appearance',
        ]}
        directions={[
          'Clean surface with isopropyl alcohol.',
          'Shake well.',
          'Spray 6–10 inches from surface in light, even coats.',
          'Allow 5 minutes to dry.',
          'Apply a second thin coat for best results.',
        ]}
        availableSizes={['4 oz', '16 oz', '1 gallon']}
        safetySheet="/doc/No_Sweat_SDS.pdf"
      />
    </>
  );
}

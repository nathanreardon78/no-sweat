import './globals.css';
import { Montserrat, Open_Sans } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { CartProvider } from '@/components/CartContext';
import FloatingCartButton from '@/components/FloatingCartButton';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-montserrat',
});
const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-opensans',
});

export const metadata = {
  title: 'No Sweat™ | Stops Condensation',
  description:
    'No Sweat™ is a clear, silica-based spray that blocks condensation on any cup or tumbler—keeping surfaces clean and dry.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className={`${montserrat.variable} ${openSans.variable}`}>
      <body className='bg-[#ffffff] text-[#111111] font-[var(--font-opensans)] flex flex-col min-h-screen'>
        <CartProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <FloatingCartButton />
        </CartProvider>
      </body>
    </html>
  );
}

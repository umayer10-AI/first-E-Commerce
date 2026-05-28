import { Hanken_Grotesk } from 'next/font/google';
import './globals.css';
import { CartProvider } from '@/context/CartContext';
import SmoothScroll from '@/components/SmoothScroll';
import CustomCursor from '@/components/CustomCursor';
import Header from '@/components/Header';
import CartDrawer from '@/components/CartDrawer';
import Footer from '@/components/Footer';

// Dynamic Google Font configuration for optimum layout performance
const hankenGrotesk = Hanken_Grotesk({
  variable: '--font-hanken-grotesk',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
});

// Premium SEO Metadata
export const metadata = {
  title: 'BR.F STORE | Design That Moves',
  description: 'A premium lifestyle storefront crafting multi-disciplinary digital objects and techwear that prioritize mathematical clarity, intent, and editorial precision.',
  keywords: 'Next.js, Tailwind CSS, Lenis, Framer Motion, E-commerce, Premium Design, Techwear',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${hankenGrotesk.variable} h-full antialiased`}>
      <head>
        {/* Link for Material symbols to support exact legacy references */}
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-on-background selection:bg-primary-container selection:text-on-primary-container">
        <CartProvider>
          <SmoothScroll>
            {/* Luxurious Custom Cursor follow-dot */}
            <CustomCursor />

            {/* Sticky glassmorphism header navigation */}
            <Header />

            {/* Main scroll dynamic container */}
            <div className="flex-1">
              {children}
            </div>

            {/* Sliding shopping cart drawer */}
            <CartDrawer />

            {/* High-contrast brand footer */}
            <Footer />
          </SmoothScroll>
        </CartProvider>
      </body>
    </html>
  );
}

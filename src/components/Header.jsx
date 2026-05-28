'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCart } from '@/context/CartContext';
import { ShoppingBag, Menu, X, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const pathname = usePathname();
  const { cartCount, setIsCartOpen } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    try {
      const storedTheme = localStorage.getItem('brf_theme');
      if (storedTheme) {
        setTheme(storedTheme);
        
        if (storedTheme === 'dark') {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      } else {
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const defaultTheme = systemPrefersDark ? 'dark' : 'light';
        setTheme(defaultTheme);
        if (defaultTheme === 'dark') {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      }
    } catch (e) {
      console.error('Failed to sync theme preference:', e);
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
    try {
      localStorage.setItem('brf_theme', nextTheme);
      if (nextTheme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    } catch (e) {
      console.error('Failed to write theme preference to localStorage:', e);
    }
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-outline-variant bg-surface/80 backdrop-blur-md transition-colors duration-300">
        <nav className="mx-auto flex max-w-container-max-width items-center justify-between px-margin-mobile py-4 md:px-margin-desktop">
          {/* Left: Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="flex items-center gap-2 text-primary transition-transform active:scale-95 md:hidden cursor-pointer"
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </button>

          {/* Logo next to BR.F */}
          <Link
            href="/"
            className="flex items-center gap-2.5 transition-all hover:opacity-85 group cursor-pointer"
          >
            {/* Custom 3D Isometric Wireframe Cube SVG Logo */}
            <svg
              className="h-6 w-6 text-primary flex-shrink-0 transition-transform duration-500 group-hover:rotate-45"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              {/* Top Face */}
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 2L2 7l10 5 10-5-10-5z" />
              {/* Left Face */}
              <path strokeLinecap="round" strokeLinejoin="round" d="M2 7v10l10 5V12L2 7z" />
              {/* Right Face */}
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 12l10-5v10l-10 5v-10z" />
            </svg>
            <span className="font-headline-lg-mobile text-primary tracking-tighter md:font-headline-lg">
              BR.F
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.path;
              return (
                <Link
                  key={link.name}
                  href={link.path}
                  className={`relative font-label-md text-label-md transition-colors duration-300 py-1 hover:text-primary ${
                    isActive ? 'text-primary font-bold' : 'text-on-surface-variant'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavLine"
                      className="absolute bottom-0 left-0 h-[2px] w-full bg-primary"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Right Actions: Theme Toggle & Cart */}
          <div className="flex items-center gap-2">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="relative flex items-center justify-center p-2 text-primary transition-transform active:scale-95 cursor-pointer rounded-full hover:bg-surface-container-low"
              aria-label="Toggle dark theme"
            >
              <AnimatePresence mode="wait" initial={false}>
                {theme === 'dark' ? (
                  <motion.div
                    key="sun"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Sun className="h-5 w-5 text-tertiary-container" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="moon"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Moon className="h-5 w-5 text-primary" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>

            {/* Cart Button */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative flex items-center justify-center p-2 text-primary transition-transform active:scale-95 cursor-pointer rounded-full hover:bg-surface-container-low"
              aria-label="Open cart"
            >
              <ShoppingBag className="h-5 w-5" />
              <AnimatePresence>
                {cartCount > 0 && (
                  <motion.span
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary-container text-on-primary-container text-[9px] font-bold shadow-sm"
                  >
                    {cartCount}
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm md:hidden"
            />

            {/* Sidebar drawer */}
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              className="fixed inset-y-0 left-0 z-50 w-4/5 max-w-sm bg-surface p-6 shadow-2xl md:hidden border-r border-outline-variant flex flex-col justify-between"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between border-b border-outline-variant pb-4 mb-6">
                  <div className="flex items-center gap-2 group">
                    <svg
                      className="h-5 w-5 text-primary flex-shrink-0 transition-transform duration-500 group-hover:rotate-45"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 2L2 7l10 5 10-5-10-5z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2 7v10l10 5V12L2 7z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 12l10-5v10l-10 5v-10z" />
                    </svg>
                    <span className="font-headline-lg-mobile text-primary tracking-tighter">BR.F</span>
                  </div>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-1 text-on-surface-variant hover:text-primary transition-transform active:scale-95 cursor-pointer"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>

                {/* Nav Links List */}
                <div className="flex flex-col gap-4">
                  {navLinks.map((link) => {
                    const isActive = pathname === link.path;
                    return (
                      <Link
                        key={link.name}
                        href={link.path}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`text-lg font-medium p-2 rounded-lg transition-colors ${
                          isActive
                            ? 'bg-primary-container text-on-primary-container font-semibold'
                            : 'text-on-surface hover:bg-surface-container-low'
                        }`}
                      >
                        {link.name}
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* Mobile Footer */}
              <div className="border-t border-outline-variant pt-6 text-center text-xs text-on-surface-variant flex flex-col gap-4 items-center">
                {/* Mobile Theme Toggle */}
                <button
                  onClick={toggleTheme}
                  className="flex items-center gap-2 border border-outline px-4 py-2 rounded-lg font-semibold text-xs text-on-surface hover:bg-surface-container cursor-pointer"
                >
                  {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                  <span>Switch Theme</span>
                </button>
                <div>&copy; {new Date().getFullYear()} BR.F DESIGN STORE</div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

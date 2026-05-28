'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles, Terminal, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { products } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import { motion } from 'framer-motion';

export default function Home() {
  // Get top featured products for home showcase
  const featuredProducts = products.slice(0, 3);
  const primaryFeatured = products.find(p => p.id === 'reebok-velocity') || products[0];

  return (
    <main className="mx-auto max-w-container-max-width px-margin-mobile pb-stack-xl md:px-margin-desktop">
      
      {/* Redesigned Premium Hero Section (Asymmetric Grid) */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-gutter py-12 md:py-24 items-center min-h-[70vh] animate-fade-in">
        
        {/* Left Side: Premium Typography & Actions */}
        <div className="lg:col-span-7 flex flex-col items-start gap-6">
          
          {/* Editorial Label Capsule */}
          <div className="flex items-center gap-2 rounded-full border border-outline-variant bg-surface-container-low px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-primary shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            BR.F Design &bull; VOL. 01 / RELEASE
          </div>

          <h1 className="font-display-lg text-4xl sm:text-5xl md:text-[76px] md:leading-[80px] font-extrabold tracking-tighter text-on-background max-w-[680px]">
            Design that <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">moves</span>. <br />
            Wear that <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">speaks</span>.
          </h1>

          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-[500px] leading-relaxed">
            A premium, multi-disciplinary design studio crafting curated garments and functional digital objects. We prioritize mathematical clarity, structural intent, and editorial precision.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-2">
            <Link
              href="/shop"
              className="group bg-primary text-on-primary px-8 py-4 rounded-xl font-label-md text-label-md flex items-center justify-center gap-2 hover:opacity-90 transition-all active:scale-95 shadow-md uppercase tracking-widest text-xs font-bold"
            >
              Shop Collections
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            
            <Link
              href="/about"
              className="border border-outline text-on-surface hover:bg-surface-container-low px-8 py-4 rounded-xl font-label-md text-label-md flex items-center justify-center gap-2 transition-all active:scale-95 uppercase tracking-widest text-xs font-bold"
            >
              Explore Philosophy
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Right Side: Elegant Floating Product Showcase */}
        <div className="lg:col-span-5 flex items-center justify-center mt-8 lg:mt-0">
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: [0, -15, 0] }}
            transition={{
              repeat: Infinity,
              duration: 6,
              ease: "easeInOut"
            }}
            className="relative w-full max-w-[360px] aspect-[4/5] rounded-2xl border border-outline-variant bg-surface-container shadow-2xl p-4 overflow-hidden group cursor-pointer"
          >
            {/* Visual background layers */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-transparent opacity-60" />
            <div className="absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-primary-container/20 blur-3xl" />

            {/* Glowing price tag */}
            <div className="absolute top-4 right-4 z-10 rounded-xl bg-surface/90 px-4 py-2 border border-outline-variant backdrop-blur-md shadow-md text-right">
              <p className="text-[9px] font-bold text-on-surface-variant uppercase tracking-widest">Velocity V-01</p>
              <p className="text-sm font-extrabold text-primary">$180.00</p>
            </div>

            {/* Image container */}
            <div className="w-full h-full overflow-hidden rounded-xl bg-surface border border-outline-variant/60 flex items-center justify-center">
              <img
                src={primaryFeatured.image}
                alt="Sneaker Showcase"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-103 transition-all duration-700"
              />
            </div>

            {/* Bottom details tab */}
            <div className="absolute bottom-4 left-4 right-4 bg-surface/80 backdrop-blur-md border border-outline-variant/60 p-4 rounded-xl flex justify-between items-center shadow-md">
              <div>
                <p className="text-[10px] font-extrabold text-primary uppercase tracking-widest">FOOTWEAR COLLAB</p>
                <h3 className="font-bold text-sm text-on-surface mt-0.5">The Velocity Release</h3>
              </div>
              <Link
                href={`/product/${primaryFeatured.id}`}
                className="h-8 w-8 rounded-full bg-primary text-on-primary flex items-center justify-center hover:opacity-90 active:scale-90 transition-all shadow-sm"
              >
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="w-full h-[1px] bg-outline-variant mb-stack-xl" />

      {/* Large Featured Release Showcase Section (Fades-in instantly) */}
      <section className="pb-stack-xl animate-fade-in">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-stack-lg gap-4">
          <h2 className="font-headline-md text-headline-md text-on-surface">Selected Release</h2>
          <p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest">
            Collaboration 01 / {new Date().getFullYear()}
          </p>
        </div>

        <Link href={`/product/${primaryFeatured.id}`} className="group block cursor-pointer">
          <div className="aspect-square md:aspect-[16/9] overflow-hidden bg-surface-container-high relative rounded-xl border border-outline-variant transition-all duration-500 group-hover:border-primary/45">
            <img
              src={primaryFeatured.image}
              alt={primaryFeatured.name}
              className="w-full h-full object-cover grayscale transition-transform duration-1000 ease-out group-hover:scale-103 group-hover:grayscale-0"
            />
            <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-500" />
            <div className="absolute top-6 left-6 rounded-lg bg-surface/90 px-4 py-2 text-xs font-bold uppercase tracking-widest text-primary backdrop-blur-sm border border-outline-variant">
              Curated Masterwork
            </div>
          </div>
          
          <div className="mt-6 flex justify-between items-start">
            <div className="space-y-1">
              <h3 className="font-headline-lg-mobile md:font-headline-lg text-on-surface group-hover:text-primary transition-colors">
                {primaryFeatured.name}
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                {primaryFeatured.subtext}
              </p>
            </div>
            <div className="hidden md:block">
              <div className="rounded-full border border-outline p-4 group-hover:border-primary group-hover:text-primary transition-colors">
                <ArrowUpRight className="h-6 w-6" />
              </div>
            </div>
          </div>
        </Link>
      </section>

      {/* Interactive Bento Grid Section (Scroll reveals organically) */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-gutter pb-stack-xl">
        {/* Bento Card 1: Apparel */}
        <Link
          href="/shop?category=Apparel"
          className="reveal-on-scroll bg-surface-container-low p-8 flex flex-col justify-between min-h-[320px] rounded-xl border border-outline-variant hover:border-primary/45 transition-all duration-300 group cursor-pointer"
        >
          <div>
            <div className="h-12 w-12 rounded-xl bg-surface flex items-center justify-center text-primary border border-outline-variant mb-6 shadow-sm">
              <Sparkles className="h-5 w-5" />
            </div>
            <h3 className="font-headline-md text-headline-md mb-2 text-on-surface group-hover:text-primary transition-colors">
              Apparel Series
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed max-w-[340px]">
              Sculptural jackets and weather-sealed layers that interface with urban environments.
            </p>
          </div>
          <span className="font-label-md text-label-md border-b-2 border-primary-container group-hover:border-primary w-fit pb-1 transition-all text-on-surface flex items-center gap-1 uppercase tracking-widest text-xs">
            Browse Jackets <ArrowRight className="h-3 w-3" />
          </span>
        </Link>

        {/* Bento Card 2: Accessories / Tech */}
        <Link
          href="/shop?category=Accessories"
          className="reveal-on-scroll bg-primary text-on-primary p-8 flex flex-col justify-between min-h-[320px] rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
        >
          <div>
            <div className="h-12 w-12 rounded-xl bg-surface/10 flex items-center justify-center text-primary-container mb-6 border border-white/10">
              <Terminal className="h-5 w-5" />
            </div>
            <h3 className="font-headline-md text-headline-md mb-2">
              Hardware & Accessories
            </h3>
            <p className="font-body-md text-body-md opacity-80 leading-relaxed max-w-[340px]">
              Slim pocket consoles, algorithmic structural prints, and storage gear engineered for travel.
            </p>
          </div>
          <span className="font-label-md text-label-md border-b-2 border-primary-container group-hover:border-on-primary w-fit pb-1 transition-all flex items-center gap-1 uppercase tracking-widest text-xs">
            Explore Hardware <ArrowRight className="h-3 w-3" />
          </span>
        </Link>
      </section>

      {/* Featured Catalog Grid (Scroll reveals organically) */}
      <section className="pb-stack-xl reveal-on-scroll">
        <div className="flex justify-between items-baseline mb-stack-lg border-b border-outline-variant pb-4">
          <h2 className="font-headline-md text-headline-md text-on-surface">The Storefront</h2>
          <Link
            href="/shop"
            className="text-xs uppercase tracking-widest font-bold text-primary hover:underline flex items-center gap-1"
          >
            All Products <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} reveal={true} />
          ))}
        </div>
      </section>
    </main>
  );
}

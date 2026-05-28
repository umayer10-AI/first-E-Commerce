'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export default function ProductCard({ product, reveal = false }) {
  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(product.price);

  return (
    <Link
      href={`/product/${product.id}`}
      className={`group block cursor-pointer ${reveal ? 'reveal-on-scroll' : ''}`}
    >
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl border border-outline-variant bg-surface-container transition-all duration-500 group-hover:border-primary/45 group-hover:shadow-md">
        {/* Grayscale hover-to-color smooth transition image */}
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover grayscale transition-transform duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0"
          loading="lazy"
        />
        {/* Color wash overlay */}
        <div className="absolute inset-0 bg-primary/0 transition-colors duration-500 group-hover:bg-primary/5" />
        
        {/* Dynamic Category Tag */}
        <div className="absolute top-4 left-4 rounded-lg bg-surface/90 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-primary backdrop-blur-sm border border-outline-variant">
          {product.category}
        </div>
      </div>

      {/* Info details */}
      <div className="mt-4 flex justify-between items-start gap-4">
        <div className="space-y-1">
          <h3 className="font-bold text-on-surface group-hover:text-primary transition-colors duration-300 text-base md:text-lg">
            {product.name}
          </h3>
          <p className="text-sm text-on-surface-variant font-medium">
            {product.subtext || 'Curated Design Series'}
          </p>
        </div>
        
        <div className="flex items-center gap-1 flex-shrink-0">
          <span className="font-bold text-on-surface text-sm md:text-base">
            {formattedPrice}
          </span>
          <ArrowUpRight className="h-5 w-5 text-outline transition-all duration-300 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>
    </Link>
  );
}

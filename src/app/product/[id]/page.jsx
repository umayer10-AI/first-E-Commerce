'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { getProductById, products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { ChevronDown, ChevronUp, ShoppingBag, Plus, Minus, ArrowLeft, Star } from 'lucide-react';
import ProductCard from '@/components/ProductCard';

export default function ProductDetailPage({ params }) {
  const router = useRouter();
  const unwrappedParams = React.use(params);
  const { id } = unwrappedParams;
  const product = getProductById(id);

  const { addToCart } = useCart();

  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [activeAccordion, setActiveAccordion] = useState('specs'); // 'specs' or 'delivery'

  // Hover magnification zoom state
  const [zoomStyle, setZoomStyle] = useState({ transformOrigin: 'center center', transform: 'scale(1)' });
  const containerRef = useRef(null);

  // Sync defaults upon product mount
  useEffect(() => {
    if (product) {
      setSelectedSize(product.sizes[0] || 'Standard');
      setSelectedColor(product.colors[0] || 'Default');
      setQuantity(1);
      setActiveImageIndex(0);
    }
  }, [product]);

  if (!product) {
    return (
      <main className="mx-auto max-w-container-max-width px-margin-mobile py-20 text-center md:px-margin-desktop min-h-screen flex flex-col items-center justify-center gap-4">
        <h2 className="font-headline-lg text-on-surface">Product Not Found</h2>
        <p className="text-on-surface-variant font-body-md">
          The requested luxury item has been archived or does not exist in this launch.
        </p>
        <Link
          href="/shop"
          className="bg-primary text-on-primary px-8 py-3 rounded-lg font-label-md hover:opacity-90 active:scale-95 transition-all text-sm uppercase tracking-widest"
        >
          Return to Catalog
        </Link>
      </main>
    );
  }

  // Handle magnification mouse events
  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setZoomStyle({
      transformOrigin: `${x}% ${y}%`,
      transform: 'scale(1.35)',
    });
  };

  const handleMouseLeave = () => {
    setZoomStyle({
      transformOrigin: 'center center',
      transform: 'scale(1)',
    });
  };

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedSize, selectedColor);
  };

  // Get other products in same category or just other products
  const relatedProducts = products
    .filter((p) => p.id !== product.id && (p.category === product.category || products.indexOf(p) < 3))
    .slice(0, 3);

  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(product.price);

  return (
    <main className="mx-auto max-w-container-max-width px-margin-mobile py-stack-lg md:px-margin-desktop md:py-stack-xl min-h-screen">
      {/* Return Navigation */}
      <div className="mb-8">
        <button
          onClick={() => router.back()}
          className="group flex items-center gap-2 text-on-surface-variant hover:text-primary transition-all duration-300 font-label-md text-xs uppercase tracking-widest cursor-pointer"
        >
          <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
          Back to Collections
        </button>
      </div>

      {/* Main product structure grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-gutter mb-stack-xl">
        {/* Left Column: Interactive Image Gallery */}
        <div className="space-y-4">
          <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="aspect-[4/5] w-full overflow-hidden rounded-xl border border-outline-variant bg-surface-container-low cursor-zoom-in relative"
          >
            <img
              src={(product.images && product.images[activeImageIndex]) || product.image}
              alt={product.name}
              style={zoomStyle}
              className="h-full w-full object-cover transition-transform duration-100 ease-out grayscale hover:grayscale-0"
            />
          </div>

          {/* Gallery Switchers (if product has multiple images) */}
          {product.images && product.images.length > 1 && (
            <div className="flex gap-3">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`h-20 w-20 overflow-hidden rounded-lg border bg-surface-container transition-all active:scale-95 cursor-pointer ${
                    activeImageIndex === idx ? 'border-primary border-2 scale-98 shadow-sm' : 'border-outline-variant hover:border-outline'
                  }`}
                >
                  <img src={img} alt={`${product.name} gallery ${idx}`} className="h-full w-full object-cover grayscale hover:grayscale-0 duration-300" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right Column: Descriptions & Custom Controls */}
        <div className="flex flex-col justify-between">
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[10px] font-bold uppercase tracking-widest text-primary border border-outline-variant bg-primary-container/20 px-2 py-0.5 rounded">
                  {product.category}
                </span>
                <div className="flex items-center text-tertiary-container gap-0.5 text-xs">
                  <Star className="h-3.5 w-3.5 fill-current" />
                  <span className="text-on-surface font-semibold text-[11px] ml-0.5">{product.rating}</span>
                </div>
              </div>
              <h1 className="font-headline-lg-mobile text-3xl md:text-[44px] md:leading-[48px] font-bold tracking-tighter text-on-background">
                {product.name}
              </h1>
              <p className="font-body-md text-on-surface-variant mt-1 text-sm">{product.subtext}</p>
            </div>

            <div className="font-display-lg text-2xl md:text-3xl text-primary font-bold">
              {formattedPrice}
            </div>

            <p className="font-body-lg text-on-surface-variant leading-relaxed text-base border-t border-b border-outline-variant py-6">
              {product.description}
            </p>

            {/* Custom variant selector arrays */}
            <div className="space-y-4">
              {/* Colors */}
              <div>
                <span className="text-xs uppercase tracking-widest text-on-surface-variant font-bold block mb-2">
                  Select Color: <span className="text-on-surface">{selectedColor}</span>
                </span>
                <div className="flex gap-3">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`px-4 py-2 border rounded-lg text-xs font-semibold active:scale-95 transition-all cursor-pointer ${
                        selectedColor === color
                          ? 'border-primary bg-primary-container/20 text-primary font-bold'
                          : 'border-outline-variant text-on-surface-variant hover:border-outline'
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>

              {/* Sizes */}
              <div>
                <span className="text-xs uppercase tracking-widest text-on-surface-variant font-bold block mb-2">
                  Select Size: <span className="text-on-surface">{selectedSize}</span>
                </span>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`h-11 min-w-11 px-3 border rounded-lg text-xs font-bold active:scale-95 transition-all cursor-pointer flex items-center justify-center ${
                        selectedSize === size
                          ? 'border-primary bg-primary text-on-primary'
                          : 'border-outline-variant text-on-surface hover:border-outline bg-surface-container-lowest'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity Selection */}
              <div>
                <span className="text-xs uppercase tracking-widest text-on-surface-variant font-bold block mb-2">
                  Select Quantity
                </span>
                <div className="flex items-center border border-outline rounded-lg bg-surface-container-low overflow-hidden w-fit">
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="p-3 text-on-surface-variant hover:bg-surface-container hover:text-primary active:scale-95 transition-all cursor-pointer"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="w-12 text-center text-sm font-semibold text-on-surface">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity((q) => q + 1)}
                    className="p-3 text-on-surface-variant hover:bg-surface-container hover:text-primary active:scale-95 transition-all cursor-pointer"
                    aria-label="Increase quantity"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 space-y-6">
            {/* Purchase triggers */}
            <button
              onClick={handleAddToCart}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary text-on-primary py-4 font-label-md hover:opacity-90 active:scale-[0.98] transition-all uppercase tracking-widest text-sm shadow-md cursor-pointer"
            >
              <ShoppingBag className="h-4 w-4" />
              Add to Bag
            </button>

            {/* Premium specs accordion tabs */}
            <div className="border-t border-outline-variant pt-4 space-y-2">
              {/* Accordion Item: Technical Features */}
              <div className="border-b border-outline-variant pb-2">
                <button
                  onClick={() => setActiveAccordion(activeAccordion === 'specs' ? '' : 'specs')}
                  className="flex w-full items-center justify-between py-2 text-xs uppercase tracking-widest font-bold text-on-surface cursor-pointer"
                >
                  Technical Specifications
                  {activeAccordion === 'specs' ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                </button>
                {activeAccordion === 'specs' && (
                  <ul className="pl-4 list-disc text-xs text-on-surface-variant space-y-2 py-2 leading-relaxed animate-slide-down">
                    {product.features.map((feat, idx) => (
                      <li key={idx}>{feat}</li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Accordion Item: Delivery */}
              <div className="border-b border-outline-variant pb-2">
                <button
                  onClick={() => setActiveAccordion(activeAccordion === 'delivery' ? '' : 'delivery')}
                  className="flex w-full items-center justify-between py-2 text-xs uppercase tracking-widest font-bold text-on-surface cursor-pointer"
                >
                  Delivery & Free Returns
                  {activeAccordion === 'delivery' ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                </button>
                {activeAccordion === 'delivery' && (
                  <p className="text-xs text-on-surface-variant leading-relaxed py-2 animate-slide-down">
                    Complimentary express dispatch is automatically applied to orders over $100. Delivery window is 3–5 business days, packaged strictly inside structural eco-fiber boxes. Free 14-day hassle-free returns are supported globally on all brand collections.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related releases Section */}
      <section className="border-t border-outline-variant pt-stack-xl reveal-on-scroll">
        <h2 className="font-headline-md text-headline-md text-on-surface mb-stack-lg">Related Releases</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {relatedProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </main>
  );
}

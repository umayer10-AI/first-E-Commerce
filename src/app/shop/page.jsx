'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { products } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import { Search, SlidersHorizontal, ArrowUpDown } from 'lucide-react';

function ShopContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const urlCategory = searchParams.get('category');

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('default');

  const categories = ['All', 'Apparel', 'Footwear', 'Accessories'];

  // Sync category from URL search query
  useEffect(() => {
    if (urlCategory && categories.includes(urlCategory)) {
      setSelectedCategory(urlCategory);
    } else {
      setSelectedCategory('All');
    }
  }, [urlCategory]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    // Update URL query parameters silently
    if (category === 'All') {
      router.push('/shop', { scroll: false });
    } else {
      router.push(`/shop?category=${category}`, { scroll: false });
    }
  };

  // Filter and sort items dynamically
  const filteredProducts = products
    .filter((product) => {
      const matchesCategory =
        selectedCategory === 'All' || product.category.toLowerCase() === selectedCategory.toLowerCase();
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      if (sortBy === 'price-low-high') return a.price - b.price;
      if (sortBy === 'price-high-low') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0; // Default sorting (insertion order)
    });

  const clearFilters = () => {
    setSelectedCategory('All');
    setSearchQuery('');
    setSortBy('default');
    router.push('/shop', { scroll: false });
  };

  return (
    <div className="space-y-stack-lg animate-fade-in">
      {/* Header and Horizontal Filters */}
      <section className="mb-stack-md">
        <h2 className="font-headline-lg-mobile text-on-surface mb-stack-md md:font-headline-lg">
          Selected Catalog
        </h2>
        <div className="flex gap-3 overflow-x-auto pb-4 no-scrollbar">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`px-6 py-2.5 text-label-sm font-label-sm rounded-lg whitespace-nowrap transition-all active:scale-95 cursor-pointer border ${
                  isActive
                    ? 'bg-primary-container text-on-primary-container border-primary-container font-semibold shadow-sm'
                    : 'border-outline text-on-surface-variant hover:bg-surface-container hover:text-primary'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </section>

      {/* Sorting & Search Controls */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center bg-surface-container-low p-4 rounded-xl border border-outline-variant">
        {/* Search bar */}
        <div className="md:col-span-7 relative">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-on-surface-variant opacity-60" />
          <input
            type="text"
            placeholder="Search items, specs, collections..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-surface border border-outline rounded-lg py-2.5 pl-10 pr-4 text-sm text-on-surface placeholder-on-surface-variant/60 focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/20 transition-all"
          />
        </div>

        {/* Sorting Dropdown */}
        <div className="md:col-span-5 flex items-center gap-2 justify-end w-full">
          <ArrowUpDown className="h-4 w-4 text-on-surface-variant opacity-60" />
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-surface border border-outline rounded-lg py-2.5 px-3 text-xs font-semibold text-on-surface focus:outline-none focus:border-primary/60 cursor-pointer w-full md:w-48"
          >
            <option value="default">Sort by: Default</option>
            <option value="price-low-high">Price: Low to High</option>
            <option value="price-high-low">Price: High to Low</option>
            <option value="rating">Top Customer Rated</option>
          </select>
        </div>
      </section>

      {/* Product Catalog Display Grid */}
      <section className="min-h-[400px]">
        {filteredProducts.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-center border border-dashed border-outline-variant rounded-xl gap-4 bg-surface-container-low">
            <SlidersHorizontal className="h-10 w-10 text-on-surface-variant opacity-40" />
            <div>
              <h3 className="font-headline-md text-on-surface">No products match your parameters</h3>
              <p className="font-body-md text-on-surface-variant mt-1 text-sm">
                Try modifying your queries, category tabs, or clear filter presets.
              </p>
            </div>
            <button
              onClick={clearFilters}
              className="bg-primary text-on-primary px-6 py-3 rounded-lg font-label-md hover:opacity-90 active:scale-95 transition-all text-xs uppercase tracking-widest cursor-pointer"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-gutter">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

export default function ShopPage() {
  return (
    <main className="mx-auto max-w-container-max-width px-margin-mobile py-stack-lg md:px-margin-desktop md:py-stack-xl min-h-screen">
      <Suspense
        fallback={
          <div className="flex h-screen items-center justify-center">
            <div className="h-8 w-8 animate-spin rounded-full border-2 border-primary border-t-transparent" />
          </div>
        }
      >
        <ShopContent />
      </Suspense>
    </main>
  );
}

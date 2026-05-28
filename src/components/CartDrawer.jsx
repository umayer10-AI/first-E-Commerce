'use client';

import React, { useRef, useEffect } from 'react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';

export default function CartDrawer() {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeFromCart,
    cartTotal,
    isHydrated,
  } = useCart();

  const drawerRef = useRef(null);

  // Close cart drawer on hitting Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsCartOpen(false);
    };

    if (isCartOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isCartOpen, setIsCartOpen]);

  // Click outside drawer to close
  const handleBackdropClick = (e) => {
    if (drawerRef.current && !drawerRef.current.contains(e.target)) {
      setIsCartOpen(false);
    }
  };

  const formattedPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price);
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <div className="fixed inset-0 z-50 flex justify-end" role="dialog" aria-modal="true">
          {/* Backdrop blur overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleBackdropClick}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
          />

          {/* Cart Drawer content body */}
          <motion.div
            ref={drawerRef}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 220 }}
            className="relative flex h-full w-full max-w-md flex-col border-l border-outline-variant bg-surface shadow-2xl"
          >
            {/* Header section */}
            <div className="flex items-center justify-between border-b border-outline-variant p-6">
              <div className="flex items-center gap-2">
                <ShoppingBag className="h-5 w-5 text-primary" />
                <h2 className="font-headline-md text-headline-md text-on-surface">Your Bag</h2>
              </div>
              <button
                onClick={() => setIsCartOpen(false)}
                className="rounded-full p-2 text-on-surface-variant hover:bg-surface-container-low hover:text-primary transition-colors active:scale-95 cursor-pointer"
                aria-label="Close cart"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Main content body (Scrollable list or Empty State) */}
            <div className="flex-1 overflow-y-auto p-6 no-scrollbar" data-lenis-prevent="true">
              {!isHydrated ? (
                <div className="flex h-full items-center justify-center">
                  <div className="h-6 w-6 animate-spin rounded-full border-2 border-primary border-t-transparent" />
                </div>
              ) : cart.length === 0 ? (
                <div className="flex h-full flex-col items-center justify-center gap-4 text-center">
                  <div className="rounded-full bg-surface-container p-6 text-on-surface-variant opacity-60">
                    <ShoppingBag className="h-12 w-12" />
                  </div>
                  <div>
                    <h3 className="font-headline-md text-on-surface">Your bag is empty</h3>
                    <p className="font-body-md text-on-surface-variant mt-1">
                      Explore our collections and add design that moves.
                    </p>
                  </div>
                  <Link
                    href="/shop"
                    onClick={() => setIsCartOpen(false)}
                    className="mt-2 bg-primary text-on-primary px-6 py-3 rounded-lg font-label-md hover:opacity-90 active:scale-95 transition-all text-sm uppercase tracking-widest"
                  >
                    Shop Collections
                  </Link>
                </div>
              ) : (
                <div className="space-y-6">
                  {cart.map((item) => (
                    <motion.div
                      layout
                      key={`${item.id}-${item.size}-${item.color}`}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="flex gap-4 border-b border-outline-variant pb-6 last:border-0 last:pb-0"
                    >
                      {/* Product thumbnail image */}
                      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-lg border border-outline-variant bg-surface-container">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-full w-full object-cover grayscale transition-all hover:grayscale-0"
                        />
                      </div>

                      {/* Item descriptions and controllers */}
                      <div className="flex flex-1 flex-col justify-between">
                        <div>
                          <div className="flex justify-between">
                            <h4 className="font-bold text-on-surface line-clamp-1">{item.name}</h4>
                            <p className="font-bold text-primary text-sm ml-2">
                              {formattedPrice(item.price * item.quantity)}
                            </p>
                          </div>
                          <p className="text-xs text-on-surface-variant mt-1">
                            {item.color} / Size {item.size}
                          </p>
                        </div>

                        {/* Adjust qty & Remove row */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center border border-outline rounded-lg bg-surface-container-low overflow-hidden">
                            <button
                              onClick={() =>
                                updateQuantity(item.id, item.size, item.color, item.quantity - 1)
                              }
                              className="px-2 py-1 text-on-surface-variant hover:bg-surface-container hover:text-primary active:scale-95 transition-all"
                              aria-label="Decrease quantity"
                            >
                              <Minus className="h-3 w-3" />
                            </button>
                            <span className="w-8 text-center text-xs font-semibold text-on-surface">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() =>
                                updateQuantity(item.id, item.size, item.color, item.quantity + 1)
                              }
                              className="px-2 py-1 text-on-surface-variant hover:bg-surface-container hover:text-primary active:scale-95 transition-all"
                              aria-label="Increase quantity"
                            >
                              <Plus className="h-3 w-3" />
                            </button>
                          </div>

                          <button
                            onClick={() => removeFromCart(item.id, item.size, item.color)}
                            className="flex items-center gap-1 text-xs text-error hover:text-error/85 transition-colors cursor-pointer"
                            aria-label="Remove item"
                          >
                            <Trash2 className="h-4 w-4" />
                            <span className="hidden sm:inline">Remove</span>
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer calculations & checkout actions */}
            {isHydrated && cart.length > 0 && (
              <div className="border-t border-outline-variant bg-surface-container-low p-6">
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-sm text-on-surface-variant">
                    <span>Subtotal</span>
                    <span>{formattedPrice(cartTotal)}</span>
                  </div>
                  <div className="flex justify-between text-sm text-on-surface-variant">
                    <span>Shipping</span>
                    <span>{cartTotal >= 100 ? 'Free' : '$15.00'}</span>
                  </div>
                  <div className="flex justify-between border-t border-outline-variant pt-3 font-headline-md text-on-surface">
                    <span>Total</span>
                    <span>{formattedPrice(cartTotal + (cartTotal >= 100 ? 0 : 15))}</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <Link
                    href="/checkout"
                    onClick={() => setIsCartOpen(false)}
                    className="flex w-full items-center justify-center rounded-xl bg-primary text-on-primary py-4 font-label-md hover:opacity-90 active:scale-98 transition-all uppercase tracking-widest text-sm shadow-md"
                  >
                    Proceed to Checkout
                  </Link>
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="flex w-full items-center justify-center rounded-xl border border-outline text-on-surface py-3 font-label-md hover:bg-surface-container transition-colors active:scale-98 text-xs uppercase tracking-widest cursor-pointer"
                  >
                    Continue Shopping
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

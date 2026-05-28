'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useCart } from '@/context/CartContext';
import { ShoppingBag, ArrowLeft, ShieldCheck, CheckCircle2, CreditCard } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CheckoutPage() {
  const router = useRouter();
  const { cart, cartTotal, clearCart, isHydrated } = useCart();

  // Form states
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [zip, setZip] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cardExpiry, setCardExpiry] = useState('');
  const [cardCvv, setCardCvv] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderCompleted, setOrderCompleted] = useState(false);
  const [generatedOrderNumber, setGeneratedOrderNumber] = useState('');

  const formattedPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price);
  };

  const handleCheckoutSubmit = (e) => {
    e.preventDefault();
    if (cart.length === 0) return;

    setIsSubmitting(true);

    // Simulate luxury api dispatch delay
    setTimeout(() => {
      const orderNum = `BRF-${Math.floor(100000 + Math.random() * 900000)}`;
      setGeneratedOrderNumber(orderNum);
      setIsSubmitting(false);
      setOrderCompleted(true);
    }, 2000);
  };

  const handleFinishCheckout = () => {
    clearCart();
    router.push('/');
  };

  // Hydration state check
  if (!isHydrated) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-primary border-t-transparent" />
      </div>
    );
  }

  // Empty cart checkout state
  if (cart.length === 0 && !orderCompleted) {
    return (
      <main className="mx-auto max-w-container-max-width px-margin-mobile py-20 text-center md:px-margin-desktop min-h-screen flex flex-col items-center justify-center gap-4">
        <div className="rounded-full bg-surface-container p-6 text-on-surface-variant opacity-60">
          <ShoppingBag className="h-12 w-12" />
        </div>
        <h2 className="font-headline-lg text-on-surface">Your bag is empty</h2>
        <p className="text-on-surface-variant font-body-md max-w-sm">
          Please add premium lifestyle items to your shopping cart before attempting to proceed to checkout.
        </p>
        <Link
          href="/shop"
          className="bg-primary text-on-primary px-8 py-3 rounded-lg font-label-md hover:opacity-90 active:scale-95 transition-all text-sm uppercase tracking-widest"
        >
          Browse Collections
        </Link>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-container-max-width px-margin-mobile py-stack-lg md:px-margin-desktop md:py-stack-xl min-h-screen">
      {/* Return to shop */}
      <div className="mb-8">
        <Link
          href="/shop"
          className="group flex items-center gap-2 text-on-surface-variant hover:text-primary transition-all duration-300 font-label-md text-xs uppercase tracking-widest"
        >
          <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
          Continue Shopping
        </Link>
      </div>

      <h1 className="font-headline-lg-mobile text-3xl md:text-4xl font-bold tracking-tighter text-on-background mb-8">
        Secure Checkout
      </h1>

      {/* Main split grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter relative items-start">
        {/* Left Column: Checkout Inputs Form */}
        <form onSubmit={handleCheckoutSubmit} className="lg:col-span-7 space-y-8 bg-surface-container-low p-6 rounded-xl border border-outline-variant">
          
          {/* Section 1: Contact Info */}
          <div className="space-y-4">
            <h2 className="text-xs uppercase tracking-widest font-bold text-primary flex items-center gap-2 border-b border-outline-variant pb-2">
              <span className="h-4 w-4 rounded-full bg-primary text-on-primary flex items-center justify-center text-[10px]">1</span>
              Contact Information
            </h2>
            <div>
              <label className="block text-xs font-bold text-on-surface-variant uppercase mb-1.5" htmlFor="email">
                Email Address
              </label>
              <input
                required
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="designer@studio.com"
                className="w-full bg-surface border border-outline rounded-lg py-2.5 px-4 text-sm text-on-surface focus:outline-none focus:border-primary/60 transition-all"
              />
            </div>
          </div>

          {/* Section 2: Shipping */}
          <div className="space-y-4">
            <h2 className="text-xs uppercase tracking-widest font-bold text-primary flex items-center gap-2 border-b border-outline-variant pb-2">
              <span className="h-4 w-4 rounded-full bg-primary text-on-primary flex items-center justify-center text-[10px]">2</span>
              Shipping Address
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-on-surface-variant uppercase mb-1.5" htmlFor="firstName">
                  First Name
                </label>
                <input
                  required
                  type="text"
                  id="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="Alex"
                  className="w-full bg-surface border border-outline rounded-lg py-2.5 px-4 text-sm text-on-surface focus:outline-none focus:border-primary/60 transition-all"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-on-surface-variant uppercase mb-1.5" htmlFor="lastName">
                  Last Name
                </label>
                <input
                  required
                  type="text"
                  id="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Vance"
                  className="w-full bg-surface border border-outline rounded-lg py-2.5 px-4 text-sm text-on-surface focus:outline-none focus:border-primary/60 transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-on-surface-variant uppercase mb-1.5" htmlFor="address">
                Street Address
              </label>
              <input
                required
                type="text"
                id="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="42 Minimalist Boulevard"
                className="w-full bg-surface border border-outline rounded-lg py-2.5 px-4 text-sm text-on-surface focus:outline-none focus:border-primary/60 transition-all"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-on-surface-variant uppercase mb-1.5" htmlFor="city">
                  City / State
                </label>
                <input
                  required
                  type="text"
                  id="city"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="New York"
                  className="w-full bg-surface border border-outline rounded-lg py-2.5 px-4 text-sm text-on-surface focus:outline-none focus:border-primary/60 transition-all"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-on-surface-variant uppercase mb-1.5" htmlFor="zip">
                  Postal ZIP Code
                </label>
                <input
                  required
                  type="text"
                  id="zip"
                  value={zip}
                  onChange={(e) => setZip(e.target.value)}
                  placeholder="10001"
                  className="w-full bg-surface border border-outline rounded-lg py-2.5 px-4 text-sm text-on-surface focus:outline-none focus:border-primary/60 transition-all"
                />
              </div>
            </div>
          </div>

          {/* Section 3: Payment */}
          <div className="space-y-4">
            <h2 className="text-xs uppercase tracking-widest font-bold text-primary flex items-center gap-2 border-b border-outline-variant pb-2">
              <span className="h-4 w-4 rounded-full bg-primary text-on-primary flex items-center justify-center text-[10px]">3</span>
              Credit Card Details
            </h2>
            <div>
              <label className="block text-xs font-bold text-on-surface-variant uppercase mb-1.5" htmlFor="cardNumber">
                Card Number
              </label>
              <div className="relative">
                <CreditCard className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-on-surface-variant opacity-60" />
                <input
                  required
                  type="text"
                  id="cardNumber"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                  placeholder="0000 0000 0000 0000"
                  maxLength={19}
                  className="w-full bg-surface border border-outline rounded-lg py-2.5 pl-10 pr-4 text-sm text-on-surface focus:outline-none focus:border-primary/60 transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-on-surface-variant uppercase mb-1.5" htmlFor="cardExpiry">
                  Expiration Date
                </label>
                <input
                  required
                  type="text"
                  id="cardExpiry"
                  value={cardExpiry}
                  onChange={(e) => setCardExpiry(e.target.value)}
                  placeholder="MM/YY"
                  maxLength={5}
                  className="w-full bg-surface border border-outline rounded-lg py-2.5 px-4 text-sm text-on-surface focus:outline-none focus:border-primary/60 transition-all"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-on-surface-variant uppercase mb-1.5" htmlFor="cardCvv">
                  Security Code (CVV)
                </label>
                <input
                  required
                  type="password"
                  id="cardCvv"
                  value={cardCvv}
                  onChange={(e) => setCardCvv(e.target.value)}
                  placeholder="***"
                  maxLength={3}
                  className="w-full bg-surface border border-outline rounded-lg py-2.5 px-4 text-sm text-on-surface focus:outline-none focus:border-primary/60 transition-all"
                />
              </div>
            </div>
          </div>

          {/* Secure lock note & Submit */}
          <div className="pt-4 space-y-4">
            <div className="flex gap-2 items-center text-xs text-on-surface-variant opacity-80 bg-surface p-3 rounded-lg border border-outline-variant">
              <ShieldCheck className="h-4 w-4 text-primary flex-shrink-0" />
              <span>Your luxury checkout is encrypted and secured by standard industry parameters.</span>
            </div>

            <button
              disabled={isSubmitting}
              type="submit"
              className="flex w-full items-center justify-center rounded-xl bg-primary text-on-primary py-4 font-label-md hover:opacity-90 active:scale-[0.98] transition-all uppercase tracking-widest text-sm shadow-md cursor-pointer disabled:opacity-50"
            >
              {isSubmitting ? (
                <div className="h-5 w-5 animate-spin rounded-full border-2 border-on-primary border-t-transparent" />
              ) : (
                `Place Order: ${formattedPrice(cartTotal + (cartTotal >= 100 ? 0 : 15))}`
              )}
            </button>
          </div>
        </form>

        {/* Right Column: Order Summary (Sticky) */}
        <div className="lg:col-span-5 lg:sticky lg:top-24 space-y-6">
          <div className="bg-surface-container p-6 rounded-xl border border-outline-variant">
            <h2 className="font-headline-md text-headline-md text-on-surface mb-6 flex justify-between items-baseline">
              <span>Summary</span>
              <span className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                {cart.length} unique items
              </span>
            </h2>

            {/* List of items */}
            <div className="space-y-4 max-h-[300px] overflow-y-auto no-scrollbar border-b border-outline-variant pb-6 mb-6">
              {cart.map((item) => (
                <div key={`${item.id}-${item.size}-${item.color}`} className="flex gap-4 items-center">
                  <div className="h-16 w-16 overflow-hidden rounded-lg border border-outline-variant bg-surface flex-shrink-0">
                    <img src={item.image} alt={item.name} className="h-full w-full object-cover grayscale" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-on-surface text-sm truncate">{item.name}</h4>
                    <p className="text-[11px] text-on-surface-variant mt-0.5">
                      {item.color} / Size {item.size} &bull; Qty {item.quantity}
                    </p>
                  </div>
                  <span className="font-bold text-on-surface text-sm">
                    {formattedPrice(item.price * item.quantity)}
                  </span>
                </div>
              ))}
            </div>

            {/* Totals calculations */}
            <div className="space-y-3">
              <div className="flex justify-between text-xs text-on-surface-variant uppercase tracking-wider font-semibold">
                <span>Subtotal</span>
                <span>{formattedPrice(cartTotal)}</span>
              </div>
              <div className="flex justify-between text-xs text-on-surface-variant uppercase tracking-wider font-semibold">
                <span>Shipping</span>
                <span>{cartTotal >= 100 ? 'Free' : '$15.00'}</span>
              </div>
              <div className="flex justify-between border-t border-outline-variant pt-3 font-headline-md text-on-surface">
                <span>Order Total</span>
                <span>{formattedPrice(cartTotal + (cartTotal >= 100 ? 0 : 15))}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Checkout Success Modal Overlay */}
      <AnimatePresence>
        {orderCompleted && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-md"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              className="relative w-full max-w-lg bg-surface p-8 rounded-2xl shadow-2xl border border-outline-variant text-center space-y-6"
            >
              <div className="flex justify-center">
                <CheckCircle2 className="h-16 w-16 text-primary animate-pulse" />
              </div>

              <div className="space-y-2">
                <h2 className="font-display-lg text-2xl md:text-3xl font-bold tracking-tighter text-on-background">
                  Purchase Confirmed
                </h2>
                <p className="text-on-surface-variant font-body-md text-sm leading-relaxed max-w-sm mx-auto">
                  Thank you for shopping with **BR.F DESIGN**. An editorial invoice and dispatch tracker have been transmitted to your email.
                </p>
              </div>

              {/* Order receipt details */}
              <div className="bg-surface-container-low p-4 rounded-xl text-left border border-outline-variant divide-y divide-outline-variant/65 text-xs font-semibold uppercase tracking-wider space-y-2 text-on-surface-variant">
                <div className="flex justify-between pb-2">
                  <span>Order Reference</span>
                  <span className="text-on-surface font-bold">{generatedOrderNumber}</span>
                </div>
                <div className="flex justify-between pt-2 pb-2">
                  <span>Customer Name</span>
                  <span className="text-on-surface font-bold">{firstName} {lastName}</span>
                </div>
                <div className="flex justify-between pt-2">
                  <span>Delivery Address</span>
                  <span className="text-on-surface font-bold truncate max-w-[200px]">{address}, {city}</span>
                </div>
              </div>

              <button
                onClick={handleFinishCheckout}
                className="flex w-full items-center justify-center rounded-xl bg-primary text-on-primary py-4 font-label-md hover:opacity-90 active:scale-[0.98] transition-all uppercase tracking-widest text-xs font-bold shadow-md cursor-pointer"
              >
                Clear Bag & Return Home
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </main>
  );
}

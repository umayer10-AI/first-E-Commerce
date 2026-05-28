'use client';

import React, { useState } from 'react';
import { Send, MapPin, Mail, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('collaboration');
  const [message, setMessage] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Mock API dispatch delay
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setName('');
      setEmail('');
      setMessage('');
    }, 1500);
  };

  return (
    <main className="mx-auto max-w-container-max-width px-margin-mobile py-stack-lg md:px-margin-desktop md:py-stack-xl min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center animate-fade-in">
        {/* Left Column: Coordinates Info */}
        <section className="lg:col-span-5 space-y-8">
          <div className="space-y-4">
            <span className="text-[10px] font-bold uppercase tracking-widest text-primary border border-outline-variant bg-primary-container/20 px-3 py-1 rounded w-fit">
              Connect
            </span>
            <h1 className="font-headline-lg-mobile text-3xl md:text-[52px] md:leading-[56px] font-bold tracking-tighter text-on-background">
              Let's create something structural.
            </h1>
            <p className="font-body-lg text-on-surface-variant leading-relaxed">
              Have a special launch project in mind, a bespoke product collaboration, or a technical inquiry? Send our design studio a message.
            </p>
          </div>

          <div className="space-y-6 pt-4">
            {/* Contact row 1 */}
            <div className="flex gap-4 items-center">
              <div className="h-10 w-10 rounded-lg bg-surface-container flex items-center justify-center text-primary border border-outline-variant flex-shrink-0">
                <Mail className="h-4 w-4" />
              </div>
              <div>
                <p className="text-[9px] font-bold uppercase tracking-widest text-on-surface-variant">General Inquiry</p>
                <a href="mailto:studio@brf-design.com" className="text-sm font-bold text-on-surface hover:text-primary transition-colors">
                  studio@brf-design.com
                </a>
              </div>
            </div>

            {/* Contact row 2 */}
            <div className="flex gap-4 items-center">
              <div className="h-10 w-10 rounded-lg bg-surface-container flex items-center justify-center text-primary border border-outline-variant flex-shrink-0">
                <MapPin className="h-4 w-4" />
              </div>
              <div>
                <p className="text-[9px] font-bold uppercase tracking-widest text-on-surface-variant">Global HQ</p>
                <p className="text-sm font-bold text-on-surface">
                  London, United Kingdom / Berlin, Germany
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Right Column: Contact Inputs Form */}
        <section className="lg:col-span-7 bg-surface-container-low p-8 rounded-2xl border border-outline-variant relative min-h-[460px] flex flex-col justify-center">
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form
                key="contact-form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-on-surface-variant uppercase mb-1.5" htmlFor="name">
                      Your Name
                    </label>
                    <input
                      required
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Alex Vance"
                      className="w-full bg-surface border border-outline rounded-lg py-2.5 px-4 text-sm text-on-surface focus:outline-none focus:border-primary/60 transition-all"
                    />
                  </div>
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
                      placeholder="alex@studio.com"
                      className="w-full bg-surface border border-outline rounded-lg py-2.5 px-4 text-sm text-on-surface focus:outline-none focus:border-primary/60 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-on-surface-variant uppercase mb-1.5" htmlFor="subject">
                    Subject Matter
                  </label>
                  <select
                    id="subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full bg-surface border border-outline rounded-lg py-2.5 px-4 text-sm text-on-surface focus:outline-none focus:border-primary/60 cursor-pointer"
                  >
                    <option value="collaboration">Product Collaboration Release</option>
                    <option value="press">Press & Media Editorial</option>
                    <option value="hardware">Hardware / Order Technical Support</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-on-surface-variant uppercase mb-1.5" htmlFor="message">
                    Your Message
                  </label>
                  <textarea
                    required
                    id="message"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Describe your design vision, timeline, and parameters..."
                    className="w-full bg-surface border border-outline rounded-lg py-2.5 px-4 text-sm text-on-surface focus:outline-none focus:border-primary/60 transition-all resize-none"
                  />
                </div>

                <button
                  disabled={isSubmitting}
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary text-on-primary py-4 font-label-md hover:opacity-90 active:scale-[0.98] transition-all uppercase tracking-widest text-xs font-bold shadow-md cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <div className="h-5 w-5 animate-spin rounded-full border-2 border-on-primary border-t-transparent" />
                  ) : (
                    <>
                      Transmit Message <Send className="h-3.5 w-3.5" />
                    </>
                  )}
                </button>
              </motion.form>
            ) : (
              <motion.div
                key="success-message"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                className="text-center space-y-6"
              >
                <div className="flex justify-center">
                  <CheckCircle2 className="h-14 w-14 text-primary animate-bounce" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-headline-md text-xl md:text-2xl text-on-surface">Message Transmitted</h3>
                  <p className="text-on-surface-variant font-body-md text-sm leading-relaxed max-w-sm mx-auto">
                    Thank you. Your message has bypassed typical channels and arrived inside the design team's mailbox. We will respond within 24 business hours.
                  </p>
                </div>
                <button
                  onClick={() => setSubmitted(false)}
                  className="border border-outline text-on-surface px-6 py-3 rounded-lg font-label-md hover:bg-surface transition-colors active:scale-95 text-xs uppercase tracking-widest font-bold cursor-pointer"
                >
                  Submit Another Ticket
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </section>
      </div>
    </main>
  );
}

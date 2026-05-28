'use client';

import React from 'react';
import Link from 'next/link';
import { Sparkles, Layers, Type, ArrowUpRight } from 'lucide-react';

export default function AboutPage() {
  const experiences = [
    {
      period: '2021 — PRESENT',
      role: 'Senior Product Designer',
      company: 'Lumina Systems Inc.',
      location: 'Remote / London',
    },
    {
      period: '2018 — 2021',
      role: 'UI/UX Designer',
      company: 'Aura Creative Agency',
      location: 'Berlin',
    },
    {
      period: '2016 — 2018',
      role: 'Junior Interaction Designer',
      company: 'Pixel Flow Studio',
      location: 'New York',
    },
  ];

  return (
    <main className="mx-auto max-w-container-max-width px-margin-mobile py-stack-lg md:px-margin-desktop md:py-stack-xl min-h-screen">
      {/* Hero Bio Section */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-gutter mb-stack-xl animate-fade-in">
        <div className="md:col-span-7 flex flex-col justify-center gap-4">
          <span className="text-[10px] font-bold uppercase tracking-widest text-primary border border-outline-variant bg-primary-container/20 px-3 py-1 rounded w-fit">
            The Philosophy
          </span>
          <h1 className="font-headline-lg-mobile text-3xl md:text-[52px] md:leading-[56px] font-bold tracking-tighter text-on-background">
            Crafting digital systems with mathematical precision and human-centric empathy.
          </h1>
          <p className="font-body-lg text-on-surface-variant leading-relaxed max-w-[580px] pt-2">
            I am a Senior Product Designer focused on building scalable design systems and high-performance e-commerce interfaces. With over 8 years of experience, I bridge the gap between creative vision and technical execution, ensuring every pixel serves a strategic purpose.
          </p>
          <div className="flex gap-4 pt-4">
            <button className="bg-primary-container text-on-primary-container px-6 py-3.5 rounded-xl font-label-md hover:bg-primary hover:text-on-primary transition-all active:scale-95 uppercase tracking-widest text-xs font-semibold cursor-pointer">
              Download CV
            </button>
            <Link
              href="/contact"
              className="border border-outline text-on-surface px-6 py-3.5 rounded-xl font-label-md hover:bg-surface-container-low transition-colors active:scale-95 uppercase tracking-widest text-xs font-semibold flex items-center justify-center"
            >
              Get In Touch
            </Link>
          </div>
        </div>

        <div className="md:col-span-5 flex items-center justify-center">
          <div className="aspect-[4/5] w-full max-w-[380px] bg-surface-container relative overflow-hidden rounded-xl border border-outline-variant shadow-md">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCMVnEjiVnGCe4nqXTiYLrl5A1UJ_Wrt48hwESIuOqFUXDxHfSQjH4_io81ScV71c1uLhE0demMTMtfkOKRwsDYpOUwVAI-QTl6g3SxdPppgXnOQx2K_TcaVqqpNzZRFW1b4iFJIBSq2qsuc-h9NNM4Zc0Qw9ee_WMhh9IimBF1Z8dfp9WqbBp2_ibEDcu-b9tD3r_T6_q68IMIZ8waXYhLjAN4ebE09DJOfGTtl6DTskcDtbgdgRvTHmWPfltkE0fO7qUU4tJK40Q"
              alt="Studio Creative Director"
              className="w-full h-full object-cover grayscale contrast-125 transition-transform duration-700 hover:scale-103"
            />
            <div className="absolute inset-0 bg-primary/0 hover:bg-primary/5 transition-colors duration-500" />
          </div>
        </div>
      </section>

      {/* Bento Grid for Skills & Stats */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-gutter mb-stack-xl reveal-on-scroll">
        {/* Core Skills Card */}
        <div className="md:col-span-2 p-8 bg-surface-container-low rounded-2xl border border-outline-variant flex flex-col justify-between">
          <h2 className="font-headline-md text-on-background mb-8">Core Disciplines</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="space-y-2">
              <div className="text-primary mb-3">
                <Sparkles className="h-7 w-7" />
              </div>
              <p className="font-bold text-on-background text-sm">UI Design</p>
              <p className="text-on-surface-variant text-xs leading-relaxed">
                High-fidelity interfaces engineered specifically for modern web and mobile storefronts.
              </p>
            </div>
            <div className="space-y-2">
              <div className="text-primary mb-3">
                <Layers className="h-7 w-7" />
              </div>
              <p className="font-bold text-on-background text-sm">Design Systems</p>
              <p className="text-on-surface-variant text-xs leading-relaxed">
                Building scalable, component-driven token libraries and documentation setups.
              </p>
            </div>
            <div className="space-y-2">
              <div className="text-primary mb-3">
                <Type className="h-7 w-7" />
              </div>
              <p className="font-bold text-on-background text-sm">Editorial Art</p>
              <p className="text-on-surface-variant text-xs leading-relaxed">
                Expertise in typographic hierarchy, layout systems, legibility, and geometric balance.
              </p>
            </div>
          </div>
        </div>

        {/* Stats Card */}
        <div className="p-8 bg-primary text-on-primary rounded-2xl flex flex-col justify-between shadow-lg">
          <div>
            <p className="text-[10px] font-bold tracking-widest opacity-70 mb-1">EXPERIENCE</p>
            <p className="text-[44px] font-bold leading-none tracking-tight">08+</p>
            <p className="font-body-md text-xs opacity-90 mt-1">Years in luxury product branding</p>
          </div>
          <div className="border-t border-white/20 pt-6 mt-6">
            <p className="text-[10px] font-bold tracking-widest opacity-70 mb-1">RELEASES</p>
            <p className="text-[44px] font-bold leading-none tracking-tight">120+</p>
            <p className="font-body-md text-xs opacity-90 mt-1">Successfully delivered objects</p>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="reveal-on-scroll">
        <h2 className="font-headline-md text-on-background mb-stack-lg border-b border-outline-variant pb-4">
          Experience History
        </h2>
        <div className="divide-y divide-outline-variant">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="group flex flex-col md:flex-row py-8 hover:bg-surface-container transition-all duration-300 px-4 -mx-4 rounded-lg items-start md:items-center"
            >
              <div className="md:w-1/4 mb-2 md:mb-0">
                <p className="font-label-sm text-on-surface-variant text-xs uppercase tracking-widest">
                  {exp.period}
                </p>
              </div>
              <div className="md:w-2/4">
                <h3 className="font-bold text-on-background group-hover:text-primary transition-colors text-base md:text-lg">
                  {exp.role}
                </h3>
                <p className="text-sm text-on-surface-variant mt-0.5">{exp.company}</p>
              </div>
              <div className="md:w-1/4 flex md:justify-end items-center mt-2 md:mt-0">
                <p className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider">
                  {exp.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

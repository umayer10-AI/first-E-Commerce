'use client';

import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full py-stack-xl border-t border-outline-variant bg-surface-container-lowest transition-colors duration-300">
      <div className="mx-auto max-w-container-max-width px-margin-mobile md:px-margin-desktop flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Brand */}
        <Link href="/" className="font-headline-md text-primary font-bold tracking-tighter hover:opacity-85 transition-opacity">
          BR.F
        </Link>

        {/* Links */}
        <div className="flex gap-gutter font-body-md text-body-md text-xs uppercase tracking-widest font-semibold">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-on-surface-variant hover:text-primary transition-colors duration-300"
          >
            Instagram
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-on-surface-variant hover:text-primary transition-colors duration-300"
          >
            LinkedIn
          </a>
          <a
            href="https://behance.net"
            target="_blank"
            rel="noopener noreferrer"
            className="text-on-surface-variant hover:text-primary transition-colors duration-300"
          >
            Behance
          </a>
        </div>

        {/* Copyright */}
        <div className="font-label-sm text-label-sm text-on-surface-variant">
          &copy; {new Date().getFullYear()} BR.F DESIGN STORE
        </div>
      </div>
    </footer>
  );
}

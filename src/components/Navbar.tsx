'use client';

import Link from 'next/link';
import { useTheme } from './ThemeProvider';
import { useState } from 'react';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-theme" style={{ backgroundColor: 'var(--nav-bg)', backdropFilter: 'blur(10px)' }}>
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Left side - Name and theme toggle */}
          <div className="flex items-center gap-3">
            <Link href="/" className="text-xl md:text-2xl font-cabinet font-bold hover:text-frog-green transition-colors">
              Kelli Landry
            </Link>
            <button
              onClick={toggleTheme}
              className="text-2xl hover:scale-110 transition-transform cursor-pointer"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? '🌙' : '☀️'}
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>

          {/* Right side - Navigation links (desktop) */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/about" className="font-geist hover:text-frog-green transition-colors">
              About
            </Link>
            <Link href="/cv" className="font-geist hover:text-frog-green transition-colors">
              CV
            </Link>
            <Link href="/kelli-do" className="font-geist hover:text-frog-green transition-colors">
              Do
            </Link>
            <Link href="/lafayette-lowdown-maps" className="font-geist hover:text-frog-green transition-colors">
              Maps
            </Link>
            <Link href="/contact" className="font-geist hover:text-frog-green transition-colors">
              Contact
            </Link>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            <Link href="/about" className="font-geist hover:text-frog-green transition-colors" onClick={() => setMobileMenuOpen(false)}>
              About
            </Link>
            <Link href="/cv" className="font-geist hover:text-frog-green transition-colors" onClick={() => setMobileMenuOpen(false)}>
              CV
            </Link>
            <Link href="/kelli-do" className="font-geist hover:text-frog-green transition-colors" onClick={() => setMobileMenuOpen(false)}>
              Do
            </Link>
            <Link href="/contact" className="font-geist hover:text-frog-green transition-colors" onClick={() => setMobileMenuOpen(false)}>
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
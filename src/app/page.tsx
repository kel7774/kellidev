'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-[calc(100vh-5rem)] overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-5rem)] flex items-center">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-frog-green/20 blur-3xl" />
          <div className="absolute bottom-20 right-20 w-48 h-48 rounded-full bg-sage-light/30 blur-3xl" />
          <div className="absolute top-1/2 left-1/3 w-24 h-24 rounded-full bg-frog-green/20 blur-2xl" />
        </div>

        <div className="max-w-7xl mx-auto px-6 py-12 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text Content */}
            <div className={`space-y-8 ${mounted ? 'animate-fade-in' : 'opacity-0'}`}>
              {/* Big Hello */}
              <div>
                <h2 className="text-6xl md:text-8xl font-cabinet font-bold text-frog-green leading-none">
                  Hello!
                </h2>
              </div>

              {/* Stacked Name */}
              <div className="space-y-0">
                <h1 className="text-5xl md:text-7xl font-geist font-bold leading-tight">
                  I&apos;m <span className="text-frog-green">Kelli</span>
                </h1>
                <h1 className="text-5xl md:text-7xl font-geist font-bold leading-tight">
                  Landry
                </h1>
              </div>

              {/* Titles */}
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-frog-green text-black-forest font-geist font-semibold rounded-full">
                  Project Manager
                </span>
                <span className="px-4 py-2 bg-frog-green text-black-forest font-geist font-semibold rounded-full">
                  Scrum Master
                </span>
              </div>

              {/* Tagline */}
              <p className="text-xl md:text-2xl font-geist text-sage-dark">
                cajun | world traveler | lap swimmer | dog enthusiast
              </p>

              {/* Social Links */}
              <div className="flex flex-col gap-3 pt-4">
                <Link href="mailto:landry.kel@gmail.com" className="flex items-center gap-3 text-lg font-geist hover:text-frog-green transition-colors group">
                  <span className="w-10 h-10 rounded-full bg-frog-green flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-5 h-5 text-black-forest" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                  </span>
                  landry.kel@gmail.com
                </Link>
                <Link href="https://linkedin.com/in/kelli-landry89" target="_blank" className="flex items-center gap-3 text-lg font-geist hover:text-frog-green transition-colors group">
                  <span className="w-10 h-10 rounded-full bg-frog-green flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-5 h-5 text-black-forest" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </span>
                  linkedin.com/in/kelli-landry89
                </Link>
                <Link href="https://github.com/kel7774" target="_blank" className="flex items-center gap-3 text-lg font-geist hover:text-frog-green transition-colors group">
                  <span className="w-10 h-10 rounded-full bg-sage-dark flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-5 h-5 text-black-forest" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </span>
                  github.com/kel7774
                </Link>
              </div>
            </div>

            {/* Right Side - Photo & Decorative Elements */}
            <div className={`relative ${mounted ? 'animate-slide-up' : 'opacity-0'}`}>
              {/* Main Photo */}
              <div className="relative z-10">
                <div className="relative w-full max-w-md mx-auto">
                  {/* Decorative shapes behind photo */}
                  <div className="absolute -top-4 -left-4 w-full h-full bg-black-forest rounded-3xl transform rotate-3" />
                  <div className="absolute -bottom-4 -right-4 w-full h-full bg-frog-green rounded-3xl transform -rotate-3" />
                  
                  {/* Photo container */}
                  <div className="relative rounded-3xl overflow-hidden border-4 border-white shadow-2xl">
                    <Image
                      src="/images/website_photo.jpg"
                      alt="Kelli Landry"
                      width={500}
                      height={600}
                      className="w-full h-auto object-cover"
                      priority
                    />
                  </div>
                </div>
              </div>

              {/* Floating decorative elements */}
              <div className="absolute -top-8 -right-4 w-16 h-16 bg-frog-green rounded-full animate-bounce-slow" />
              <div className="absolute bottom-20 -left-8 w-12 h-12 bg-sage-light rounded-full animate-bounce-slow" style={{ animationDelay: '0.5s' }} />
              <div className="absolute top-1/3 -right-12 w-8 h-8 bg-sage-dark rounded-full animate-bounce-slow" style={{ animationDelay: '1s' }} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
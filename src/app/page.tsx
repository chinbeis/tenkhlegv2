"use client";
import { useEffect, useState } from "react";
import About from "@/components/sections/About";
import Camp from "@/components/sections/Camp";
import Contact from "@/components/sections/Contact";
import Gallery from "@/components/sections/Gallery";
import Hero from "@/components/sections/Hero";
import Rooms from "@/components/sections/Rooms";
import Testimonials from "@/components/sections/Testimonials";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <main className="relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-green-400/20 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>

        {/* Gradient Orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-green-400/30 to-blue-500/30 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-500/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '4s' }} />

        {/* Mouse Follower */}
        <div
          className="absolute w-6 h-6 bg-gradient-to-r from-green-400 to-blue-500 rounded-full blur-sm opacity-50 transition-all duration-300 ease-out"
          style={{
            left: mousePosition.x - 12,
            top: mousePosition.y - 12,
          }}
        />
      </div>

      {/* Hero Section with Enhanced Background */}
      <section id="hero" className="min-h-screen relative">
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 -z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.1),transparent_50%)] -z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.1),transparent_50%)] -z-10" />
        <Hero />
      </section>

      {/* Main Content Sections */}
      <div className="relative z-10">
        {/* Camp Section with Animated Border */}
        <section id="camp" className="scroll-mt-20 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-100/50 to-transparent -z-10" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-400 to-transparent animate-shimmer" />
          <Camp />
        </section>

        {/* Gallery Section with Prismatic Effect */}
        <section id="gallery" className="scroll-mt-20 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 -z-10" />
          <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,rgba(16,185,129,0.1)_60deg,transparent_120deg)] -z-10" />
          <Gallery />
        </section>

        {/* Rooms Section with Geometric Patterns */}
        <section id="rooms" className="scroll-mt-20 relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-white via-green-50/30 to-blue-50/30 -z-10" />
          <div className="absolute inset-0 opacity-10 -z-10">
            <div className="absolute top-10 left-10 w-20 h-20 border-2 border-green-400 rotate-45 animate-spin-slow" />
            <div className="absolute bottom-20 right-20 w-16 h-16 border-2 border-blue-400 rotate-12 animate-bounce-slow" />
            <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-gradient-to-r from-green-400 to-blue-400 rounded-full animate-pulse" />
          </div>
          <Rooms />
        </section>

        {/* About Section with Aurora Effect */}
        <section id="about" className="scroll-mt-20 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-green-50/80 via-blue-50/80 to-purple-50/80 -z-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 via-transparent to-blue-400/20 animate-aurora -z-10" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 animate-shimmer" />
          <About />
        </section>

        {/* Testimonials Section with Sparkle Effect */}
        <section id="testimonials" className="scroll-mt-20 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-green-50/50 -z-10" />
          <div className="absolute inset-0 -z-10">
            {[...Array(15)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-yellow-400 rounded-full animate-twinkle"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                }}
              />
            ))}
          </div>
          <Testimonials />
        </section>

        {/* Contact Section with Wave Effect */}
        <section id="contact" className="scroll-mt-20 relative">
          <div className="absolute inset-0 bg-gradient-to-t from-green-100/50 via-white to-blue-50/30 -z-10" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-green-400/20 to-transparent animate-wave -z-10" />
          <Contact />
        </section>
      </div>

      {/* Enhanced Floating Navigation Dots */}
      <nav className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50 hidden lg:block">
        <div className="flex flex-col space-y-4 p-3 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-2xl">
          {[
            { id: 'hero', label: 'Home', icon: '🏠', color: 'from-green-400 to-blue-500' },
            { id: 'camp', label: 'Camp', icon: '🏕️', color: 'from-blue-400 to-purple-500' },
            { id: 'gallery', label: 'Gallery', icon: '🖼️', color: 'from-purple-400 to-pink-500' },
            { id: 'rooms', label: 'Rooms', icon: '🛏️', color: 'from-pink-400 to-red-500' },
            { id: 'about', label: 'About', icon: '📖', color: 'from-red-400 to-orange-500' },
            { id: 'testimonials', label: 'Reviews', icon: '⭐', color: 'from-orange-400 to-yellow-500' },
            { id: 'contact', label: 'Contact', icon: '📞', color: 'from-yellow-400 to-green-500' }
          ].map((item, index) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="group relative w-4 h-4 rounded-full bg-gradient-to-r bg-gray-300/50 hover:scale-150 transition-all duration-500 hover:rotate-180 glow-green"
              style={{
                background: `linear-gradient(135deg, var(--tw-gradient-stops))`,
                animationDelay: `${index * 0.1}s`
              }}
              aria-label={`Navigate to ${item.label}`}
            >
              <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse`} />
              <div className="absolute inset-0 rounded-full bg-white/20 group-hover:bg-white/40 transition-colors duration-300" />
              
              <span className="absolute right-8 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-gray-900 to-gray-700 text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap shadow-xl border border-white/20 backdrop-blur-sm">
                <span className="text-lg mr-2">{item.icon}</span>
                {item.label}
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1 w-2 h-2 bg-gray-900 rotate-45" />
              </span>
            </a>
          ))}
        </div>
      </nav>

      {/* Enhanced Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white rounded-full shadow-2xl hover:shadow-green-500/25 transition-all duration-500 hover:scale-125 hover:rotate-12 focus:outline-none focus:ring-4 focus:ring-green-500/50 focus:ring-offset-2 group overflow-hidden"
        aria-label="Scroll to top"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/10 animate-shimmer rounded-full" />
        <svg
          className="w-7 h-7 mx-auto relative z-10 group-hover:animate-bounce"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={3}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
        <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-blue-500 rounded-full blur opacity-30 group-hover:opacity-60 transition-opacity duration-300" />
      </button>

      {/* Floating Action Menu */}
      <div className="fixed bottom-24 right-6 z-40 flex flex-col space-y-3">
        <button className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:rotate-12 group">
          <span className="text-xl group-hover:animate-pulse">💬</span>
        </button>
        <button className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:-rotate-12 group">
          <span className="text-xl group-hover:animate-bounce">📱</span>
        </button>
        <button className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:rotate-12 group">
          <span className="text-xl group-hover:animate-spin">🎯</span>
        </button>
      </div>
    </main>
  );
}

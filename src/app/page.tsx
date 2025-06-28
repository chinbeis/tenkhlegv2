"use client";
import { useEffect, useState } from "react";
import About from "@/components/sections/About";
import Camp from "@/components/sections/Camp";
import HotelContact from "@/components/sections/HotelContact";
import Hero from "@/components/sections/Hero";
import HotelRooms from "@/components/sections/HotelRooms";
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
              className="absolute w-2 h-2 bg-blue-400/20 rounded-full animate-float"
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
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/30 to-purple-500/30 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-pink-400/20 to-red-500/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '4s' }} />

        {/* Mouse Follower */}
        <div
          className="absolute w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-sm opacity-50 transition-all duration-300 ease-out"
          style={{
            left: mousePosition.x - 12,
            top: mousePosition.y - 12,
          }}
        />
      </div>

      {/* Hero Section with Enhanced Background */}
      <section id="hero" className="min-h-screen relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 -z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)] -z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(236,72,153,0.1),transparent_50%)] -z-10" />
        <Hero page="hotel" />
      </section>

      {/* Main Content Sections */}
      <div className="relative z-10">
        {/* Camp Section with Animated Border */}
        <section id="camp" className="scroll-mt-20 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-100/50 to-transparent -z-10" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-shimmer" />
          <Camp page="hotel" />
        </section>


        {/* Rooms Section with Geometric Patterns */}
        <section id="rooms" className="scroll-mt-20 relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-white via-blue-50/30 to-purple-50/30 -z-10" />
          <div className="absolute inset-0 opacity-10 -z-10">
            <div className="absolute top-10 left-10 w-20 h-20 border-2 border-blue-400 rotate-45 animate-spin-slow" />
            <div className="absolute bottom-20 right-20 w-16 h-16 border-2 border-purple-400 rotate-12 animate-bounce-slow" />
            <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse" />
          </div>
          <HotelRooms />
        </section>

        {/* About Section with Aurora Effect */}
        <section id="about" className="scroll-mt-20 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50/80 via-purple-50/80 to-pink-50/80 -z-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-transparent to-pink-400/20 animate-aurora -z-10" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-shimmer" />
          <About page="hotel" />
        </section>

        {/* Testimonials Section with Sparkle Effect */}
        <section id="testimonials" className="scroll-mt-20 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-blue-50/50 -z-10" />
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
          <div className="absolute inset-0 bg-gradient-to-t from-blue-100/50 via-white to-purple-50/30 -z-10" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-blue-400/20 to-transparent animate-wave -z-10" />
          <HotelContact />
        </section>
      </div>

      {/* Enhanced Floating Navigation Dots */}
      <nav className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50 hidden lg:block">
        <div className="flex flex-col space-y-4 p-3 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-2xl">
          {[
            { id: 'hero', label: 'Home', icon: '🏠', color: 'from-blue-400 to-purple-500' },
            { id: 'camp', label: 'Camp', icon: '🏕️', color: 'from-purple-400 to-pink-500' },
            { id: 'gallery', label: 'Gallery', icon: '🖼️', color: 'from-pink-400 to-red-500' },
            { id: 'rooms', label: 'Rooms', icon: '🛏️', color: 'from-red-400 to-orange-500' },
            { id: 'about', label: 'About', icon: '📖', color: 'from-orange-400 to-yellow-500' },
            { id: 'testimonials', label: 'Reviews', icon: '⭐', color: 'from-yellow-400 to-green-500' },
            { id: 'contact', label: 'Contact', icon: '📞', color: 'from-green-400 to-blue-500' }
          ].map((item, index) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="group relative w-4 h-4 rounded-full bg-gradient-to-r bg-gray-300/50 hover:scale-150 transition-all duration-500 hover:rotate-180 glow-blue"
              style={{
                background: `linear-gradient(135deg, var(--tw-gradient-stops))`,
                animationDelay: `${index * 0.1}s`
              }}
              aria-label={`Navigate to ${item.label}`}
            >
              <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse`} />
              <div className="absolute inset-0 rounded-full bg-white/20 group-hover:bg-white/40 transition-colors duration-300" />
              
              <span className="absolute right-full mr-4 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-gray-900 to-gray-700 text-white text-xs px-2 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap shadow-xl border border-white/20 backdrop-blur-sm">
                <span className="text-base mr-2">{item.icon}</span>
                {item.label}
                <div className="absolute left-full top-1/2 transform -translate-y-1/2 translate-x-1 w-2 h-2 bg-gray-900 rotate-45" />
              </span>
            </a>
          ))}
        </div>
      </nav>

      {/* Enhanced Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white rounded-full shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 hover:scale-125 hover:rotate-12 focus:outline-none focus:ring-4 focus:ring-blue-500/50 focus:ring-offset-2 group overflow-hidden"
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
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur opacity-30 group-hover:opacity-60 transition-opacity duration-300" />
      </button>

          </main>
  );
}

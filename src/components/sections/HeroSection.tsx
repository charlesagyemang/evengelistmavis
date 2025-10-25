"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative h-[60vh] sm:h-[70vh] md:h-screen flex items-center justify-center overflow-hidden">
      {/* Background overlay with gradient - reduced opacity */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60 sm:from-black/40 sm:via-black/30 sm:to-black/50 z-10"></div>
      
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/hero.png" 
          alt="Evangelist Mavis preaching"
          fill
          className="object-cover object-right sm:object-right-top md:object-center"
          sizes="100vw"
          priority
        />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 sm:mb-4 px-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Evangelist Mavis Opoku Ayemang
          </motion.h1>
          
          <motion.p 
            className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-3 sm:mb-4 md:mb-6 px-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Spreading God's Word and Bringing Hope to Nations
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a 
              href="#about" 
              className="bg-white text-black px-5 py-2 sm:px-8 sm:py-3 rounded-full text-sm sm:text-base font-medium hover:bg-gray-100 transition-colors"
            >
              Learn More
            </a>
            <a 
              href="#media" 
              className="bg-transparent border-2 border-white text-white px-5 py-2 sm:px-8 sm:py-3 rounded-full text-sm sm:text-base font-medium hover:bg-white/10 transition-colors"
            >
              Watch Sermons
            </a>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        animate={{ 
          y: [0, 10, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "loop"
        }}
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-6 w-6 text-white" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M19 14l-7 7m0 0l-7-7m7 7V3" 
          />
        </svg>
      </motion.div>
    </section>
  );
}

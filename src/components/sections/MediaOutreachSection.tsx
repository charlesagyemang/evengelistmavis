"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

// Radio station data
const radioStations = [
  {
    id: "rejoice",
    name: "Rejoice FM",
    region: "Bono Region",
    frequency: "101.7",
    schedule: "Tuesday: 5:00 am - 6:00 am",
    logo: "/images/radios/rejoice.jpg"
  },
  {
    id: "oyerepa",
    name: "Oyerepa FM",
    region: "Ashanti Region",
    frequency: "100.7",
    schedule: "Saturday: 9:00 pm - 10:00 pm",
    logo: "/images/radios/oyerepa.png"
  },
  {
    id: "ayekoo",
    name: "Ayekoo FM",
    region: "Ashanti Region",
    frequency: "100.9",
    schedule: "Thursday: 7:00 pm - 8:00 pm",
    logo: "/images/radios/ayekoo.jpeg"
  }
];

// Social media platforms
const socialMediaPlatforms = [
  {
    id: "facebook",
    name: "Facebook",
    handle: "New Fire Media",
    url: "https://web.facebook.com/newfireradio",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
      </svg>
    )
  },
  {
    id: "youtube",
    name: "YouTube",
    handle: "Piano Afrik",
    url: "https://www.youtube.com/pianoafrik",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M21.582,6.186c-0.23-0.86-0.908-1.538-1.768-1.768C18.254,4,12,4,12,4S5.746,4,4.186,4.418 c-0.86,0.23-1.538,0.908-1.768,1.768C2,7.746,2,12,2,12s0,4.254,0.418,5.814c0.23,0.86,0.908,1.538,1.768,1.768 C5.746,20,12,20,12,20s6.254,0,7.814-0.418c0.861-0.23,1.538-0.908,1.768-1.768C22,16.254,22,12,22,12S22,7.746,21.582,6.186z M10,15.464V8.536L16,12L10,15.464z" />
      </svg>
    )
  },
  {
    id: "twitch",
    name: "Twitch",
    handle: "New Fire Media",
    url: "http://twitch.tv/newfiremedia",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714z" />
      </svg>
    )
  }
];

export default function MediaOutreachSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 }
    }
  };

  return (
    <section id="media-outreach" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-12"
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-white mb-4">
            Media Outreach
          </motion.h2>
          <motion.p variants={itemVariants} className="text-gray-400 max-w-2xl mx-auto">
            Listen to Evangelist Mavis Opoku Ayemang on various radio stations and follow her ministry online.
          </motion.p>
        </motion.div>
        
        {/* Radio Stations */}
        <motion.div variants={itemVariants} className="mb-16">
          <h3 className="text-2xl font-semibold text-white mb-8 text-center">Radio Programs</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {radioStations.map((station) => (
              <motion.div
                key={station.id}
                variants={itemVariants}
                className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className="h-40 sm:h-48 relative">
                  <Image
                    src={station.logo}
                    alt={`${station.name} logo`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4 sm:p-6">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-xl font-bold text-white">{station.name}</h4>
                    <span className="text-yellow-400 font-medium">{station.frequency}</span>
                  </div>
                  <p className="text-gray-300 mb-2">{station.region}</p>
                  <div className="bg-gray-700/50 p-3 rounded-lg mt-4">
                    <p className="text-gray-200 text-center font-medium">{station.schedule}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Power Encounter */}
        <motion.div variants={itemVariants} className="mb-16 bg-gradient-to-r from-purple-900/40 to-indigo-900/40 p-6 rounded-lg border border-purple-800/30">
          <h3 className="text-2xl font-semibold text-white mb-4 text-center">Power Encounter</h3>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="md:w-2/3 w-full text-center md:text-left">
              <p className="text-gray-300 mb-4">Join us every Sunday for Power Encounter from 7:00 pm - 9:00 pm</p>
              <div className="flex flex-wrap gap-3 mt-4 justify-center md:justify-start">
                {socialMediaPlatforms.map((platform) => (
                  <a 
                    key={platform.id}
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 px-3 py-2 rounded-full transition-colors text-sm sm:text-base sm:px-4"
                  >
                    <span className="text-white">{platform.icon}</span>
                    <span className="text-gray-200">{platform.name}</span>
                  </a>
                ))}
              </div>
            </div>
            <div className="md:w-1/3 mt-6 md:mt-0 flex justify-center">
              <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-1 rounded-full">
                <div className="bg-black rounded-full p-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* 24/7 Online Radio */}
        <motion.div variants={itemVariants} className="bg-gradient-to-r from-blue-900/40 to-gray-800/40 p-6 rounded-lg border border-blue-800/30">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="md:w-2/3 w-full text-center md:text-left">
              <h3 className="text-2xl font-semibold text-white mb-2">24/7 Online Radio</h3>
              <p className="text-gray-300 mb-4">Listen to New Fire Radio anytime, anywhere.</p>
              <a 
                href="https://newfireradio.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 sm:px-6 sm:py-3 rounded-full text-white font-medium transition-colors text-sm sm:text-base w-full sm:w-auto justify-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
                newfireradio.com
              </a>
            </div>
            <div className="md:w-1/3 mt-6 md:mt-0 flex justify-center">
              <div className="relative">
                <div className="absolute -inset-1 rounded-full bg-blue-500 opacity-75 blur-sm animate-pulse"></div>
                <div className="relative bg-gray-900 rounded-full p-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728m-9.9-2.829a5 5 0 010-7.07m7.072 0a5 5 0 010 7.07M13 12a1 1 0 11-2 0 1 1 0 012 0z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

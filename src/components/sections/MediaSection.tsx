"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import ReactPlayer from "react-player";
import Image from "next/image";

// Media content with actual links
const mediaContent = {
  videos: [
    {
      id: "video1",
      url: "https://www.youtube.com/watch?v=UknUXraepPI",
      date: "September 15, 2023",
    },
    {
      id: "video2",
      url: "https://www.youtube.com/watch?v=-jqIipA9QoI",
      date: "October 22, 2023",
    },
    {
      id: "video3",
      url: "https://www.youtube.com/watch?v=nho_401ktmg",
      date: "November 5, 2023",
    },
  ],
  audios: [
    {
      id: "audio1",
      title: "Power Thursday",
      thumbnail: "/images/audio-thumbnail-1.jpg",
      url: "https://open.spotify.com/episode/39dfriyELtR25PooGAmnoQ?si=2TS3fQROQsi4N_TUbLdgjQ",
      duration: "54:00",
    },
    {
      id: "audio2",
      title: "Walking in Divine Favor",
      thumbnail: "/images/audio-thumbnail-2.jpg",
      url: "https://open.spotify.com/episode/39dfriyELtR25PooGAmnoQ?si=2TS3fQROQsi4N_TUbLdgjQ",
      duration: "54:00",
    },
    {
      id: "audio3",
      title: "Spiritual Breakthrough Service",
      thumbnail: "/images/audio-thumbnail-3.jpg",
      url: "https://open.spotify.com/episode/39dfriyELtR25PooGAmnoQ?si=2TS3fQROQsi4N_TUbLdgjQ",
      duration: "54:00",
    },
  ],
};

export default function MediaSection() {
  const [activeTab, setActiveTab] = useState("videos");
  
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
    <section id="media" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-12"
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-white mb-4">
            Media Gallery
          </motion.h2>
          <motion.p variants={itemVariants} className="text-gray-400 max-w-2xl mx-auto">
            Explore sermons, teachings, and ministry moments through our collection of videos and audio recordings.
          </motion.p>
          
          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={() => setActiveTab("videos")}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                activeTab === "videos"
                  ? "bg-white text-black"
                  : "bg-transparent border border-white text-white hover:bg-white/10"
              }`}
            >
              Videos
            </button>
            <button
              onClick={() => setActiveTab("audios")}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                activeTab === "audios"
                  ? "bg-white text-black"
                  : "bg-transparent border border-white text-white hover:bg-white/10"
              }`}
            >
              Audio Sermons
            </button>
          </div>
        </motion.div>
        
        {activeTab === "videos" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mediaContent.videos.map((video) => (
              <motion.div
                key={video.id}
                variants={itemVariants}
                className="bg-black rounded-lg overflow-hidden"
              >
                <div className="aspect-video">
                  <iframe
                    src={`${video.url.replace('watch?v=', 'embed/')}?rel=0`}
                    title={`Video from ${video.date}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
                <div className="p-4">
                  <p className="text-gray-400 text-sm">{video.date}</p>
                </div>
              </motion.div>
            ))}
          </div>
        )}
        
        {activeTab === "audios" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mediaContent.audios.map((audio) => (
              <motion.div
                key={audio.id}
                variants={itemVariants}
                className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800"
              >
                <div className="p-5">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center mr-4 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.37 4.37 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">{audio.title}</h3>
                      <p className="text-gray-400 text-sm">Duration: {audio.duration}</p>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="h-2 bg-gray-800 rounded-full">
                      <div className="h-2 bg-green-600 rounded-full w-0"></div>
                    </div>
                    <div className="flex justify-between mt-1">
                      <span className="text-xs text-gray-500">0:00</span>
                      <span className="text-xs text-gray-500">{audio.duration}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-4">
                      <button className="text-white hover:text-green-400 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0019 16V8a1 1 0 00-1.6-.8l-5.333 4zM4.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0011 16V8a1 1 0 00-1.6-.8l-5.334 4z" />
                        </svg>
                      </button>
                      <a 
                        href="/podcasts"
                        className="bg-white rounded-full h-10 w-10 flex items-center justify-center text-black hover:bg-gray-200 transition-colors"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                        </svg>
                      </a>
                      <button className="text-white hover:text-green-400 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.933 12.8a1 1 0 000-1.6L6.6 7.2A1 1 0 005 8v8a1 1 0 001.6.8l5.333-4zM19.933 12.8a1 1 0 000-1.6l-5.333-4A1 1 0 0013 8v8a1 1 0 001.6.8l5.333-4z" />
                        </svg>
                      </button>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <a 
                        href="/podcasts" 
                        className="flex items-center space-x-1 text-purple-400 hover:text-purple-300 transition-colors"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.37 4.37 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z" />
                        </svg>
                        <span className="text-sm font-medium">All Podcasts</span>
                      </a>
                      <a 
                        href={audio.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center space-x-1 text-green-400 hover:text-green-300 transition-colors"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm font-medium">Listen on Spotify</span>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
        
        <motion.div variants={itemVariants} className="mt-12 text-center">
          {activeTab === "videos" ? (
            <a 
              href="https://www.youtube.com/@EvangelistMavisOpokuAyemang" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-red-600 text-white px-8 py-3 rounded-full font-medium hover:bg-red-700 transition-colors"
            >
              Visit YouTube Channel
            </a>
          ) : (
            <a 
              href="/podcasts" 
              className="inline-block bg-purple-600 text-white px-8 py-3 rounded-full font-medium hover:bg-purple-700 transition-colors"
            >
              Go to Podcasts
            </a>
          )}
        </motion.div>
      </div>
    </section>
  );
}

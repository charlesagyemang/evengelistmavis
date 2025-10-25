"use client";

import { useState, useEffect, useRef } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import Image from "next/image";

// Podcast data from the RSS feed
const podcastEpisodes = [
  {
    id: "episode6",
    title: "Episode 6 (August Week 1)",
    date: "October 20, 2024",
    duration: "52:47",
    description: "Power Thursday Service with Bishop Mavis Opoku-Agyemang",
    spotifyUrl: "https://open.spotify.com/episode/39dfriyELtR25PooGAmnoQ?si=2TS3fQROQsi4N_TUbLdgjQ",
    audioUrl: "https://anchor.fm/s/fc635914/podcast/play/93293117/https%3A%2F%2Fd3ctxlq1ktw2nl.cloudfront.net%2Fstaging%2F2024-9-20%2F2ba2c156-335c-68a4-cdb5-56d673d52409.mp3",
    imageUrl: "https://d3t3ozftmdmh3i.cloudfront.net/staging/podcast_uploaded_nologo/42243693/42243693-1729438320333-230aa21a952eb.jpg"
  },
  {
    id: "episode7",
    title: "Episode 7 (August Week 2)",
    date: "October 20, 2024",
    duration: "56:31",
    description: "Power Thursday Service with Bishop Mavis Opoku-Agyemang",
    spotifyUrl: "https://open.spotify.com/episode/39dfriyELtR25PooGAmnoQ?si=2TS3fQROQsi4N_TUbLdgjQ",
    audioUrl: "https://anchor.fm/s/fc635914/podcast/play/93293117/https%3A%2F%2Fd3ctxlq1ktw2nl.cloudfront.net%2Fstaging%2F2024-9-20%2F2ba2c156-335c-68a4-cdb5-56d673d52409.mp3",
    imageUrl: "https://d3t3ozftmdmh3i.cloudfront.net/staging/podcast_uploaded_nologo/42243693/42243693-1729438320333-230aa21a952eb.jpg"
  },
  {
    id: "episode8",
    title: "Episode 8 (August Week 3)",
    date: "October 20, 2024",
    duration: "59:42",
    description: "Power Thursday Service with Bishop Mavis Opoku-Agyemang",
    spotifyUrl: "https://open.spotify.com/episode/39dfriyELtR25PooGAmnoQ?si=2TS3fQROQsi4N_TUbLdgjQ",
    audioUrl: "https://anchor.fm/s/fc635914/podcast/play/93293117/https%3A%2F%2Fd3ctxlq1ktw2nl.cloudfront.net%2Fstaging%2F2024-9-20%2F2ba2c156-335c-68a4-cdb5-56d673d52409.mp3",
    imageUrl: "https://d3t3ozftmdmh3i.cloudfront.net/staging/podcast_uploaded_nologo/42243693/42243693-1729438320333-230aa21a952eb.jpg"
  },
  {
    id: "episode9",
    title: "Episode 9 (August Week 4)",
    date: "October 20, 2024",
    duration: "52:59",
    description: "Power Thursday Service with Bishop Mavis Opoku-Agyemang",
    spotifyUrl: "https://open.spotify.com/episode/39dfriyELtR25PooGAmnoQ?si=2TS3fQROQsi4N_TUbLdgjQ",
    audioUrl: "https://anchor.fm/s/fc635914/podcast/play/93293117/https%3A%2F%2Fd3ctxlq1ktw2nl.cloudfront.net%2Fstaging%2F2024-9-20%2F2ba2c156-335c-68a4-cdb5-56d673d52409.mp3",
    imageUrl: "https://d3t3ozftmdmh3i.cloudfront.net/staging/podcast_uploaded_nologo/42243693/42243693-1729438320333-230aa21a952eb.jpg"
  },
  {
    id: "episode10",
    title: "Episode 10 (September Week 1)",
    date: "October 20, 2024",
    duration: "57:22",
    description: "Power Thursday Service with Bishop Mavis Opoku-Agyemang",
    spotifyUrl: "https://open.spotify.com/episode/39dfriyELtR25PooGAmnoQ?si=2TS3fQROQsi4N_TUbLdgjQ",
    audioUrl: "https://anchor.fm/s/fc635914/podcast/play/93293117/https%3A%2F%2Fd3ctxlq1ktw2nl.cloudfront.net%2Fstaging%2F2024-9-20%2F2ba2c156-335c-68a4-cdb5-56d673d52409.mp3",
    imageUrl: "https://d3t3ozftmdmh3i.cloudfront.net/staging/podcast_uploaded_nologo/42243693/42243693-1729438320333-230aa21a952eb.jpg"
  },
  {
    id: "september2025",
    title: "September 2025",
    date: "September 21, 2025",
    duration: "54:20",
    description: "Power Thursday Service with Bishop Mavis Opoku-Agyemang",
    spotifyUrl: "https://open.spotify.com/episode/39dfriyELtR25PooGAmnoQ?si=2TS3fQROQsi4N_TUbLdgjQ",
    audioUrl: "https://anchor.fm/s/fc635914/podcast/play/93293117/https%3A%2F%2Fd3ctxlq1ktw2nl.cloudfront.net%2Fstaging%2F2024-9-20%2F2ba2c156-335c-68a4-cdb5-56d673d52409.mp3",
    imageUrl: "https://d3t3ozftmdmh3i.cloudfront.net/staging/podcast_uploaded_nologo/42243693/42243693-1729438320333-230aa21a952eb.jpg"
  }
];

interface PodcastEpisode {
  id: string;
  title: string;
  date: string;
  duration: string;
  description: string;
  spotifyUrl: string;
  audioUrl: string;
  imageUrl: string;
}

export default function PodcastsPage() {
  const [selectedEpisode, setSelectedEpisode] = useState<PodcastEpisode>(podcastEpisodes[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  
  // Log the raw RSS feed data to console
  useEffect(() => {
    const fetchRSSFeed = async () => {
      try {
        console.log("Fetching RSS feed...");
        const response = await fetch("https://anchor.fm/s/fc635914/podcast/rss", {
          headers: {
            'Accept': 'application/rss+xml'
          }
        });
        
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        const text = await response.text();
        console.log("Raw RSS Feed:", text);
        
        // Try to parse as XML
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(text, "text/xml");
        console.log("Parsed RSS Feed:", xmlDoc);
        
        // Log all items
        const items = xmlDoc.querySelectorAll("item");
        console.log(`Found ${items.length} episodes in the feed`);
        
        items.forEach((item, index) => {
          const title = item.querySelector("title")?.textContent;
          const pubDate = item.querySelector("pubDate")?.textContent;
          const enclosure = item.querySelector("enclosure");
          const audioUrl = enclosure?.getAttribute("url");
          const image = item.querySelector("itunes\\:image, image")?.getAttribute("href");
          
          console.log(`Episode ${index + 1}:`, {
            title,
            pubDate,
            audioUrl,
            image
          });
        });
      } catch (error) {
        console.error("Error fetching RSS feed:", error);
      }
    };
    
    fetchRSSFeed();
  }, []);
  
  const handleEpisodeSelect = (episode: PodcastEpisode) => {
    setSelectedEpisode(episode);
    setIsPlaying(false);
    setCurrentTime(0);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };
  
  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(error => {
          console.error("Error playing audio:", error);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };
  
  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };
  
  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };
  
  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseFloat(e.target.value);
    setCurrentTime(newTime);
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
    }
  };

  const skipForward = () => {
    if (audioRef.current) {
      const newTime = Math.min(audioRef.current.currentTime + 10, duration);
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const skipBackward = () => {
    if (audioRef.current) {
      const newTime = Math.max(audioRef.current.currentTime - 10, 0);
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };
  
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <>
      <Navbar />
      <main className="text-white min-h-screen pt-24 pb-16 relative overflow-hidden">
        {/* Podcast background image */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/podcast.png" 
            alt="Podcast background" 
            fill 
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="mb-8 text-center md:text-left flex flex-col md:flex-row items-center md:items-start gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative w-24 h-24 md:w-32 md:h-32 flex-shrink-0">
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-600 to-indigo-600 animate-pulse opacity-70"></div>
                <div className="absolute inset-2 rounded-full bg-black flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 md:h-16 w-12 md:w-16 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              
              <div>
                <motion.h1 
                  className="text-3xl md:text-4xl font-bold mb-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  Power Thursday Podcasts
                </motion.h1>
                <motion.p 
                  className="text-gray-400 mb-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  Listen to Bishop Mavis Opoku-Agyemang's weekly Power Thursday services
                </motion.p>
                <motion.div
                  className="flex items-center gap-2 text-sm text-gray-500"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <span className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                    </svg>
                    {podcastEpisodes.length} Episodes
                  </span>
                  <span>•</span>
                  <span className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    Updated Weekly
                  </span>
                </motion.div>
              </div>
            </motion.div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Episode List */}
              <motion.div 
                className="lg:col-span-1 bg-black/60 rounded-lg p-4 h-[600px] overflow-y-auto border border-gray-600/30 shadow-lg backdrop-blur-md"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h2 className="text-xl font-semibold mb-4 sticky top-0 bg-gradient-to-b from-gray-800 to-gray-800/90 py-2 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-purple-400" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.37 4.37 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z" />
                  </svg>
                  All Episodes
                </h2>
                <div className="space-y-4">
                  {podcastEpisodes.map((episode) => (
                    <div 
                      key={episode.id}
                      className={`p-3 rounded-lg cursor-pointer transition-all duration-300 border ${
                        selectedEpisode.id === episode.id 
                          ? "bg-gradient-to-r from-purple-900 to-indigo-900 border-purple-500/50 shadow-md" 
                          : "bg-gray-800 hover:bg-gray-700 border-transparent hover:border-gray-600"
                      }`}
                      onClick={() => handleEpisodeSelect(episode)}
                    >
                      <div className="flex gap-3">
                        <div className="w-16 h-16 flex-shrink-0 rounded overflow-hidden">
                          <img 
                            src={episode.imageUrl} 
                            alt={episode.title} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-medium truncate">{episode.title}</h3>
                          <p className="text-sm text-gray-400 mt-1">{episode.duration} • {episode.date}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
              
              {/* Episode Player */}
              <motion.div 
                className="lg:col-span-2 bg-black/60 backdrop-blur-md rounded-lg p-6 border border-gray-600/30 shadow-lg"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="flex flex-col md:flex-row gap-6 mb-6">
                  {/* Episode Image */}
                  <div className="w-full md:w-48 h-48 rounded-lg overflow-hidden flex-shrink-0">
                    <img 
                      src={selectedEpisode.imageUrl} 
                      alt={selectedEpisode.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Episode Info */}
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold mb-2">{selectedEpisode.title}</h2>
                    <p className="text-gray-400 mb-4">{selectedEpisode.date} • {selectedEpisode.duration}</p>
                    <p className="text-gray-300 mb-4">{selectedEpisode.description}</p>
                    
                    <div className="flex flex-wrap gap-3 mt-2">
                      <a 
                        href={selectedEpisode.spotifyUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-xs text-green-400 hover:text-green-300 transition-colors bg-gray-800 px-2 py-1 rounded"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.37 4.37 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z" />
                        </svg>
                        Listen on Spotify
                      </a>
                      
                      <a 
                        href={selectedEpisode.audioUrl} 
                        download
                        className="flex items-center gap-1 text-xs text-purple-400 hover:text-purple-300 transition-colors bg-gray-800 px-2 py-1 rounded"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                        Download Episode
                      </a>
                    </div>
                  </div>
                </div>
                
                {/* Audio Player */}
                <div className="bg-gradient-to-r from-purple-900/80 via-indigo-800/80 to-black/80 rounded-lg p-6 mt-6 shadow-lg border border-purple-500/30 relative overflow-hidden backdrop-blur-md">
                  {/* Decorative microphone icon */}
                  <div className="absolute -right-8 -bottom-8 opacity-10">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-40 w-40" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clipRule="evenodd" />
                    </svg>
                  </div>
                  
                  {/* Sound wave animation - using deterministic values */}
                  <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden opacity-10">
                    <div className="flex items-center justify-center h-full">
                      {[0.8, 1.2, 0.7, 0.9, 1.1, 0.75, 1.3, 0.65, 1.0, 1.4, 0.9, 0.7, 1.2, 0.8, 1.1, 0.6, 1.0, 0.9, 1.3, 0.7].map((animValue, i) => (
                        <div 
                          key={`wave-${i}`} 
                          className="w-1 mx-px bg-white rounded-full"
                          style={{
                            height: `${20 + Math.sin(i/3) * 30}px`,
                            animationName: 'soundWave',
                            animationDuration: `${0.5 + animValue * 0.5}s`,
                            animationTimingFunction: 'ease-in-out',
                            animationIterationCount: 'infinite',
                            animationDirection: 'alternate',
                            animationDelay: `${i * 0.05}s`
                          }}
                        ></div>
                      ))}
                    </div>
                  </div>
                  
                  <style jsx global>{`
                    @keyframes soundWave {
                      0% { height: 10px; }
                      100% { height: 40px; }
                    }
                  `}</style>
                  <audio 
                    ref={audioRef}
                    src={selectedEpisode.audioUrl}
                    onTimeUpdate={handleTimeUpdate}
                    onLoadedMetadata={handleLoadedMetadata}
                    onEnded={() => setIsPlaying(false)}
                    className="hidden"
                  />
                  
                  <div className="flex items-center justify-center mb-6">
                    <div className="flex items-center gap-3">
                      <button 
                        className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-gray-700 transition-colors shadow-md"
                        onClick={() => {
                          // Previous episode logic
                          const currentIndex = podcastEpisodes.findIndex(ep => ep.id === selectedEpisode.id);
                          if (currentIndex > 0) {
                            handleEpisodeSelect(podcastEpisodes[currentIndex - 1]);
                          }
                        }}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>
                      
                      <button 
                        onClick={togglePlayPause}
                        className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-indigo-600 flex items-center justify-center text-white hover:from-purple-600 hover:to-indigo-700 transition-all shadow-lg shadow-purple-900/30"
                      >
                        {isPlaying ? (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                          </svg>
                        ) : (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                          </svg>
                        )}
                      </button>
                      
                      <button 
                        className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-gray-700 transition-colors shadow-md"
                        onClick={() => {
                          // Next episode logic
                          const currentIndex = podcastEpisodes.findIndex(ep => ep.id === selectedEpisode.id);
                          if (currentIndex < podcastEpisodes.length - 1) {
                            handleEpisodeSelect(podcastEpisodes[currentIndex + 1]);
                          }
                        }}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="relative group">
                      <div className="overflow-hidden h-3 text-xs flex rounded-full bg-gray-700 shadow-inner group-hover:h-4 transition-all">
                        <div 
                          style={{ width: `${(currentTime / duration) * 100}%` }}
                          className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full relative"
                        >
                          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-md"></div>
                        </div>
                      </div>
                      <input 
                        type="range" 
                        min="0" 
                        max={duration || 100}
                        step="0.01"
                        value={currentTime}
                        onChange={handleSeek}
                        className="absolute inset-0 w-full h-3 opacity-0 cursor-pointer group-hover:h-4 transition-all z-10"
                      />
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center text-xs text-gray-300 mt-2">
                    <span className="bg-gray-800 px-2 py-1 rounded-full">{formatTime(currentTime)}</span>
                    
                    <div className="flex items-center gap-4">
                      <button 
                        onClick={skipBackward}
                        className="bg-gray-800 hover:bg-gray-700 p-1 rounded-full transition-colors"
                        title="Skip back 10 seconds"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clipRule="evenodd" />
                        </svg>
                      </button>
                      
                      <button 
                        onClick={skipForward}
                        className="bg-gray-800 hover:bg-gray-700 p-1 rounded-full transition-colors"
                        title="Skip forward 10 seconds"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.293 7.707a1 1 0 011.414-1.414l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L10.586 11H7a1 1 0 110-2h3.586l-1.293-1.293z" clipRule="evenodd" />
                        </svg>
                      </button>
                    </div>
                    
                    <span className="bg-gray-800 px-2 py-1 rounded-full">{formatTime(duration)}</span>
                  </div>
                </div>
                
                <div className="mt-8 bg-gradient-to-r from-black/70 to-gray-900/70 p-5 rounded-lg border border-gray-600/30 shadow-lg relative overflow-hidden backdrop-blur-md">
                  {/* Decorative podcast icon */}
                  <div className="absolute -right-6 -bottom-6 opacity-10">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-32 w-32" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728m-9.9-2.829a5 5 0 010-7.07m7.072 0a5 5 0 010 7.07M13 12a1 1 0 11-2 0 1 1 0 012 0z" />
                    </svg>
                  </div>
                  <h3 className="text-center text-white font-medium mb-4">Listen to Power Thursday Podcasts</h3>
                  <div className="flex flex-wrap justify-center gap-5">
                    <a 
                      href="https://open.spotify.com/show/your-podcast-id" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex flex-col items-center gap-2 group"
                    >
                      <div className="bg-[#1DB954]/10 hover:bg-[#1DB954]/20 p-3 rounded-full transition-colors group-hover:scale-110 duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#1DB954">
                          <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                        </svg>
                      </div>
                      <span className="text-xs text-[#1DB954] group-hover:text-[#1DB954]/80">Spotify</span>
                    </a>
                    <a 
                      href="https://podcasts.apple.com/podcast/your-podcast-id" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex flex-col items-center gap-2 group"
                    >
                      <div className="bg-[#872EC4]/10 hover:bg-[#872EC4]/20 p-3 rounded-full transition-colors group-hover:scale-110 duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#872EC4">
                          <path d="M5.34 0A5.328 5.328 0 000 5.34v13.32A5.328 5.328 0 005.34 24h13.32A5.328 5.328 0 0024 18.66V5.34A5.328 5.328 0 0018.66 0zm6.525 2.568c2.337 0 4.443 1.86 5.527 1.86 1.083 0 2.755-1.74 4.66-1.74.96 0 4.421.42 6.505 3.24-6.505 3.84-5.527 10.2-5.527 10.2s-3.183-6-6.6-6c-1.863 0-3.062 1.26-4.902 1.26-1.979 0-5.43-2.4-5.43-5.64 0-3.18 3.061-3.18 3.061-3.18s1.57 0 3.706 0zm.312 1.86c-.197 0-.384.024-.57.06 2.711.78 4.033 4.98 4.033 4.98s-2.53-.48-4.033-2.94c-.616-1.02-.93-1.86-1.222-2.04-.138-.06-.292-.06-.43-.06z"/>
                        </svg>
                      </div>
                      <span className="text-xs text-[#872EC4] group-hover:text-[#872EC4]/80">Apple</span>
                    </a>
                    <a 
                      href="https://www.google.com/podcasts?feed=your-podcast-feed" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex flex-col items-center gap-2 group"
                    >
                      <div className="bg-[#4285F4]/10 hover:bg-[#4285F4]/20 p-3 rounded-full transition-colors group-hover:scale-110 duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#4285F4">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
                        </svg>
                      </div>
                      <span className="text-xs text-[#4285F4] group-hover:text-[#4285F4]/80">Google</span>
                    </a>
                    <a 
                      href="https://anchor.fm/s/fc635914/podcast/rss" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex flex-col items-center gap-2 group"
                    >
                      <div className="bg-[#FF8800]/10 hover:bg-[#FF8800]/20 p-3 rounded-full transition-colors group-hover:scale-110 duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#FF8800">
                          <path d="M6.503 20.752c0 1.794-1.456 3.248-3.251 3.248-1.796 0-3.252-1.454-3.252-3.248 0-1.794 1.456-3.248 3.252-3.248 1.795.001 3.251 1.454 3.251 3.248zm-6.503-12.572v4.811c6.05.062 10.96 4.966 11.022 11.009h4.817c-.062-8.71-7.118-15.758-15.839-15.82zm0-3.368c10.58.046 19.152 8.594 19.183 19.188h4.817c-.03-13.231-10.755-23.954-24-24v4.812z"/>
                        </svg>
                      </div>
                      <span className="text-xs text-[#FF8800] group-hover:text-[#FF8800]/80">RSS</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

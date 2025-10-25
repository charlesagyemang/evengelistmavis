"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

// Sample itinerary data (replace with actual events)
const upcomingEvents = [
  {
    id: "event1",
    title: "Revival Crusade",
    date: "November 15-17, 2023",
    location: "Accra, Ghana",
    venue: "Independence Square",
    description: "A three-day revival crusade focused on healing, deliverance, and spiritual renewal.",
  },
  {
    id: "event2",
    title: "Women's Conference",
    date: "December 3-4, 2023",
    location: "Kumasi, Ghana",
    venue: "Golden Tulip Hotel",
    description: "A special conference for women focusing on spiritual growth and empowerment.",
  },
  {
    id: "event3",
    title: "Prophetic Summit",
    date: "January 10-12, 2024",
    location: "Lagos, Nigeria",
    venue: "Eko Convention Center",
    description: "A gathering of believers seeking prophetic direction and divine insights for the new year.",
  },
  {
    id: "event4",
    title: "Healing Service",
    date: "February 5, 2024",
    location: "London, UK",
    venue: "Emmanuel Centre",
    description: "A special service dedicated to divine healing and miraculous interventions.",
  },
];

export default function ItinerarySection() {
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
    <section id="itinerary" className="py-20 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-12"
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-white mb-4">
            Upcoming Events
          </motion.h2>
          <motion.p variants={itemVariants} className="text-gray-400 max-w-2xl mx-auto">
            Join Evangelist Mavis at these upcoming ministry events and experience the power of God's presence.
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {upcomingEvents.map((event) => (
            <motion.div
              key={event.id}
              variants={itemVariants}
              className="bg-gray-900 rounded-lg p-6 border border-gray-800"
            >
              <div className="flex flex-col md:flex-row justify-between mb-4">
                <h3 className="text-xl font-semibold text-white">{event.title}</h3>
                <span className="text-yellow-400 font-medium">{event.date}</span>
              </div>
              
              <div className="mb-4">
                <p className="text-gray-300">
                  <span className="font-medium">Location:</span> {event.location}
                </p>
                <p className="text-gray-300">
                  <span className="font-medium">Venue:</span> {event.venue}
                </p>
              </div>
              
              <p className="text-gray-400 mb-6">{event.description}</p>
              
              <div className="flex space-x-3">
                <a 
                  href="#" 
                  className="px-4 py-2 bg-white text-black rounded-full text-sm font-medium hover:bg-gray-100 transition-colors"
                >
                  Register
                </a>
                <a 
                  href="#" 
                  className="px-4 py-2 border border-white text-white rounded-full text-sm font-medium hover:bg-white/10 transition-colors"
                >
                  More Info
                </a>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div variants={itemVariants} className="mt-12 text-center">
          <a 
            href="#contact" 
            className="inline-block bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors"
          >
            Contact for Bookings
          </a>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const ministryAreas = [
  {
    title: "Evangelism",
    description: "Spreading the gospel message through powerful crusades and outreach programs that bring the word of God to communities.",
    icon: "🌍",
  },
  {
    title: "Healing & Deliverance",
    description: "Ministering healing and deliverance to those in need through the power of prayer and faith in Jesus Christ.",
    icon: "✝️",
  },
  {
    title: "Prophecy",
    description: "Sharing divine revelations and prophetic insights that guide, encourage, and bring direction to God's people.",
    icon: "📜",
  },
  {
    title: "Teaching",
    description: "Providing deep biblical teachings that help believers grow in their understanding of God's word and principles.",
    icon: "📚",
  },
];

export default function MinistrySection() {
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
    <section id="ministry" className="py-20 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ministry Areas
          </motion.h2>
          <motion.p variants={itemVariants} className="text-gray-400 max-w-2xl mx-auto">
            Evangelist Mavis's ministry is multifaceted, focusing on different aspects of spiritual growth and development.
            Her calling encompasses various areas of service to God and humanity.
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {ministryAreas.map((area, index) => (
            <motion.div
              key={area.title}
              variants={itemVariants}
              className="bg-gray-900 p-6 rounded-lg hover:bg-gray-800 transition-colors"
            >
              <div className="text-4xl mb-4">{area.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-3">{area.title}</h3>
              <p className="text-gray-400">{area.description}</p>
            </motion.div>
          ))}
        </div>
        
        <motion.div variants={itemVariants} className="mt-16 text-center">
          <a 
            href="#media-outreach" 
            className="inline-block bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors"
          >
            Explore Media Outreach
          </a>
        </motion.div>
      </div>
    </section>
  );
}

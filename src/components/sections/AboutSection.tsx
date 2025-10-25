"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
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
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={itemVariants} className="relative h-[500px] rounded-lg overflow-hidden">
            <Image
              src="/images/about.png"
              alt="Evangelist Mavis Opoku Ayemang"
              fill
              className="object-cover"
            />
          </motion.div>
          
          <div>
            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-white mb-6">
              About Evangelist Mavis
            </motion.h2>
            
            <motion.p variants={itemVariants} className="text-gray-300 mb-6">
              Evangelist Mavis Opoku Ayemang is a dedicated woman of God with a powerful 
              ministry focused on spreading the gospel and bringing hope to people around the world.
              Her journey in ministry began over [X] years ago when she received the divine calling
              to serve God's people and share His word.
            </motion.p>
            
            <motion.p variants={itemVariants} className="text-gray-300 mb-6">
              With a unique anointing for healing, deliverance, and prophetic ministry,
              Evangelist Mavis has been instrumental in transforming countless lives through
              her powerful sermons, prayer sessions, and outreach programs. Her ministry extends
              beyond Ghana to various parts of Africa and the world.
            </motion.p>
            
            <motion.p variants={itemVariants} className="text-gray-300 mb-8">
              She is known for her deep biblical insights, compassionate approach to ministry,
              and unwavering commitment to seeing lives transformed by the power of God's word.
              Through her ministry, many have experienced divine healing, deliverance, and spiritual
              breakthroughs.
            </motion.p>
            
            <motion.a
              variants={itemVariants}
              href="#ministry"
              className="inline-block bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors"
            >
              Discover Her Ministry
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

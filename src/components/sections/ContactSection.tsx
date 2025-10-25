"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebook, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: "",
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would normally send the form data to your backend
    // For now, we'll just simulate a successful submission
    
    setFormStatus({
      submitted: true,
      success: true,
      message: "Thank you for your message! We will get back to you soon.",
    });
    
    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };
  
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
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-12"
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-white mb-4">
            Contact Us
          </motion.h2>
          <motion.p variants={itemVariants} className="text-gray-400 max-w-2xl mx-auto">
            Reach out to us for ministry bookings, prayer requests, or any inquiries.
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="bg-white/10 p-3 rounded-full">
                <FaEnvelope className="text-white text-xl" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
                <p className="text-gray-400">
                  <a href="mailto:contact@evangelistmavis.com" className="hover:text-white transition-colors">
                    contact@evangelistmavis.com
                  </a>
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-white/10 p-3 rounded-full">
                <FaPhone className="text-white text-xl" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
                <p className="text-gray-400">
                  <a href="tel:+233XXXXXXXXX" className="hover:text-white transition-colors">
                    +233 XX XXX XXXX
                  </a>
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-white/10 p-3 rounded-full">
                <FaMapMarkerAlt className="text-white text-xl" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Office</h3>
                <p className="text-gray-400">
                  123 Ministry Street, Accra, Ghana
                </p>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-3 rounded-full text-white hover:bg-white/20 transition-colors">
                  <FaFacebook className="text-xl" />
                  <span className="sr-only">Facebook</span>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-3 rounded-full text-white hover:bg-white/20 transition-colors">
                  <FaInstagram className="text-xl" />
                  <span className="sr-only">Instagram</span>
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-3 rounded-full text-white hover:bg-white/20 transition-colors">
                  <FaYoutube className="text-xl" />
                  <span className="sr-only">YouTube</span>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-3 rounded-full text-white hover:bg-white/20 transition-colors">
                  <FaTwitter className="text-xl" />
                  <span className="sr-only">Twitter</span>
                </a>
              </div>
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <form onSubmit={handleSubmit} className="bg-black p-6 rounded-lg">
              {formStatus.submitted && (
                <div className={`p-4 mb-6 rounded-lg ${formStatus.success ? 'bg-green-900/50 text-green-200' : 'bg-red-900/50 text-red-200'}`}>
                  {formStatus.message}
                </div>
              )}
              
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-400 mb-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 text-white"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-400 mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 text-white"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="subject" className="block text-gray-400 mb-2">Subject</label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 text-white"
                >
                  <option value="">Select a subject</option>
                  <option value="Booking Request">Booking Request</option>
                  <option value="Prayer Request">Prayer Request</option>
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Testimonial">Testimonial</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-400 mb-2">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 text-white resize-none"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-white text-black py-3 rounded-full font-medium hover:bg-gray-100 transition-colors"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

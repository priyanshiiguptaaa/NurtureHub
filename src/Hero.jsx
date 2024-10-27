import React from "react";
import { motion } from "framer-motion";
import { Heart, Stars, Baby } from "lucide-react";

const Hero = () => (
  <section className="min-h-screen bg-gradient-to-b from-pink-50 to-white py-16 px-4">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
      {/* Left Content */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="md:w-1/2 space-y-6"
      >
        <div className="flex items-center gap-2 mb-4">
          <Heart className="text-pink-500 w-5 h-5" />
          <h2 className="text-pink-600 font-medium tracking-wider text-sm">
            EMBRACING MOTHERHOOD WITH LOVE AND CARE
          </h2>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight">
          <span className="text-teal-600">Beautiful</span> Beginnings for Your Little One
        </h1>
        
        <p className="text-gray-600 text-lg">
          Discover our carefully curated collection of premium baby essentials, designed to make your parenting journey magical and memorable.
        </p>

        <div className="flex gap-4 pt-4">
          <button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105">
            Shop Now
          </button>
          <button className="bg-pink-100 hover:bg-pink-200 text-pink-600 px-8 py-3 rounded-full font-medium transition-all duration-300">
            Learn More
          </button>
        </div>

        <div className="flex items-center gap-6 pt-8">
          <div className="flex items-center gap-2">
            <Stars className="text-yellow-400 w-5 h-5" />
            <span className="text-gray-700">Trusted by 10k+ Parents</span>
          </div>
          <div className="flex items-center gap-2">
            <Baby className="text-teal-600 w-5 h-5" />
            <span className="text-gray-700">Premium Quality</span>
          </div>
        </div>
      </motion.div>

      {/* Right Content */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="md:w-1/2 relative"
      >
        <div className="absolute -inset-4 bg-gradient-to-r from-pink-200 via-teal-200 to-purple-200 rounded-full blur-2xl opacity-30 animate-pulse" />
        <div className="relative">
          <div className="absolute -inset-2 bg-white rounded-full blur-sm" />
          <img 
            src="/api/placeholder/600/600" 
            alt="Happy baby with mother" 
            className="rounded-full relative z-10 w-full max-w-lg mx-auto shadow-2xl"
          />
          
          {/* Floating Elements */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute top-0 right-0 bg-pink-100 p-4 rounded-full shadow-lg z-20"
          >
            <Heart className="text-pink-500 w-6 h-6" />
          </motion.div>
          
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            className="absolute bottom-10 left-0 bg-teal-100 p-4 rounded-full shadow-lg z-20"
          >
            <Stars className="text-teal-500 w-6 h-6" />
          </motion.div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default Hero;
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Heart, Stars, Baby, X, Cloud, Sun, Moon } from "lucide-react";

// Custom Dialog Component
const Dialog = ({ open, onClose, children }) => {
  if (!open) return null;
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        onClick={e => e.stopPropagation()}
        className="bg-white rounded-3xl shadow-xl max-w-2xl w-full p-8 relative"
      >
        <motion.div 
          className="absolute -top-4 -right-4 bg-pink-100 rounded-full p-2 cursor-pointer hover:bg-pink-200 transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={onClose}
        >
          <X className="w-5 h-5 text-pink-500" />
        </motion.div>
        {children}
      </motion.div>
    </motion.div>
  );
};

const Hero = () => {
  const [showDialog, setShowDialog] = useState(false);

  // Sample team data - replace images with your actual team member baby photos
  const teamMembers = [
    { id: 1, name: "Aditya Popli",role: "Aadi" , image: "./Aditya.jpeg" },
    { id: 2, name: "Chahat Nihalani", role: "Cutayy", image: "./Chahat.jpeg" },
    { id: 3, name: "Priyanshi Gupta", role: "Pri", image: "./Pri1.png" },
    { id: 4, name: "Aditya Popli",role: "Aadi" , image: "./Aditya2.jpeg" },
    { id: 5, name: "Priyanshi Gupta", role: "Pri", image: "./Pri2.png" },
    { id: 6, name: "Arti Joshi", role: "Cute" , image: "./Arti.jpeg" },
    { id: 7, name: "Chahat Nihalani", role: "Cutayy", image: "./Chahat2.jpeg" },
    { id: 8, name: "Priyanshi Gupta", role: "Pri", image: "./Pri3.png" },
    { id: 9, name: "Aditya Popli",role: "Aadi" , image: "./Aditya3.png" }
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-blue-50 via-pink-50 to-white py-16 px-4 overflow-hidden">
      {/* Decorative Elements */}
      <motion.div
        animate={{ 
          x: [0, 20, 0],
          y: [0, -10, 0]
        }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute top-20 right-20"
      >
        <Cloud className="w-16 h-16 text-blue-100" />
      </motion.div>
      <motion.div
        animate={{ 
          x: [0, -20, 0],
          y: [0, 10, 0]
        }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute bottom-20 left-20"
      >
        <Moon className="w-12 h-12 text-purple-100" />
      </motion.div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 relative">
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-5/12 space-y-6"
        >
          <div className="flex items-center gap-2 mb-4">
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Heart className="text-pink-500 w-6 h-6" />
            </motion.div>
            <h2 className="text-pink-600 font-medium tracking-wider text-sm">
              EMBRACING MOTHERHOOD WITH LOVE
            </h2>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight">
            <span className="text-teal-600">Precious</span> Moments, 
            <span className="text-pink-500"> Tiny Hearts</span>
          </h1>
          
          <p className="text-gray-600 text-lg">
            Join us on this magical journey of parenthood, where every smile, giggle, and milestone becomes a treasured memory.
          </p>

          <div className="flex gap-4 pt-4">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-teal-400 to-teal-600 rounded-full blur opacity-30 group-hover:opacity-60 transition-opacity" />
              <div className="relative bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-full font-medium">
                Coming Soon
              </div>
            </motion.button>
            
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowDialog(true)}
              className="bg-pink-100 hover:bg-pink-200 text-pink-600 px-8 py-3 rounded-full font-medium transition-all duration-300"
            >
              Learn More
            </motion.button>
          </div>

          <div className="flex items-center gap-6 pt-8">
            <div className="flex items-center gap-2">
              <Stars className="text-yellow-400 w-5 h-5" />
              <span className="text-gray-700">Trusted by Parents</span>
            </div>
            <div className="flex items-center gap-2">
              <Baby className="text-teal-600 w-5 h-5" />
              <span className="text-gray-700">Premium Quality</span>
            </div>
          </div>
        </motion.div>

        {/* Right Content - Team Photo Collage */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="md:w-7/12 relative"
        >
          <div className="absolute -inset-4 bg-gradient-to-r from-pink-200 via-purple-200 to-blue-200 rounded-full blur-2xl opacity-30 animate-pulse" />
          <div className="relative grid grid-cols-3 gap-4 p-6">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="relative group"
              >
                <div className="absolute -inset-2 bg-white rounded-2xl blur-sm" />
                <div className="relative overflow-hidden rounded-2xl">
                  <div className="aspect-square">
                    <img 
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-3 text-white">
                        <p className="font-medium text-sm">{member.name}</p>
                        <p className="text-xs opacity-75">{member.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Decorative corner hearts */}
                <motion.div 
                  className="absolute -top-1 -right-1 text-pink-400 opacity-0 group-hover:opacity-100 transition-opacity"
                  animate={{ rotate: [0, 20, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Heart className="w-4 h-4" />
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Floating Elements */}
          <motion.div 
            animate={{ 
              y: [0, -10, 0],
              rotate: [0, 10, 0]
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute -top-4 right-4 bg-gradient-to-br from-pink-100 to-pink-200 p-4 rounded-2xl shadow-lg z-20"
          >
            <Heart className="text-pink-500 w-6 h-6" />
          </motion.div>
          
          <motion.div 
            animate={{ 
              y: [0, 10, 0],
              rotate: [0, -10, 0]
            }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -bottom-4 left-4 bg-gradient-to-br from-teal-100 to-teal-200 p-4 rounded-2xl shadow-lg z-20"
          >
            <Stars className="text-teal-500 w-6 h-6" />
          </motion.div>
        </motion.div>
      </div>

      {/* Custom Learn More Dialog */}
      <Dialog open={showDialog} onClose={() => setShowDialog(false)}>
        <div className="space-y-6">
          <div className="text-center">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-block"
            >
              <Heart className="w-12 h-12 text-pink-500 mx-auto mb-4" />
            </motion.div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Our Story</h2>
            <p className="text-gray-600">
              A journey filled with love, care, and endless cuddles
            </p>
          </div>
          
          <p className="text-gray-600 text-center">
            We are a passionate team dedicated to bringing joy and comfort to every parent's journey. Our story begins with our own experiences as parents and our desire to create something truly special for families everywhere.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-pink-50 to-pink-100 p-6 rounded-2xl"
            >
              <h3 className="font-medium text-pink-600 mb-2 flex items-center gap-2">
                <Heart className="w-5 h-5" />
                Our Vision
              </h3>
              <p className="text-gray-600">To revolutionize the way parents shop for their little ones by providing thoughtfully designed, high-quality products.</p>
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-teal-50 to-teal-100 p-6 rounded-2xl"
            >
              <h3 className="font-medium text-teal-600 mb-2 flex items-center gap-2">
                <Stars className="w-5 h-5" />
                Our Promise
              </h3>
              <p className="text-gray-600">Every product in our collection is carefully selected to ensure the highest standards of safety, comfort, and style.</p>
            </motion.div>
          </div>
        </div>
      </Dialog>
    </section>
  );
};

export default Hero;
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Community = () => {
  const [opinion, setOpinion] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle opinion submission here
    console.log('Submitted opinion:', opinion);
    setOpinion('');
  };

  const discoverLinks = [
    "12 Tips for Keeping Your Newborn Healthy",
    "Wiley Online Library: Pregnancy Study",
    "Better Health: Pregnancy Week-by-Week",
    "HealthyWomen: Pregnancy and Parenting",
    "Healthline: Pregnancy Dos and Don'ts",
    "BMC Medicine: Pregnancy Research",
    "American Journal of Obstetrics and Gynecology: Study",
    "BMC Pregnancy and Childbirth: Research Article",
    "Cleveland Clinic: Fetal Development"
  ];

  return (
    <div className="min-h-screen bg-[#e8e4d9]">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center py-16 px-4 bg-[#e8e4d9]"
      >
        <h1 className="text-4xl font-serif text-[#5C6B4C] mb-4">
          Welcome to the Community
        </h1>
        <p className="text-xl text-[#B36A5E]">
          Here you can explore various threads and discover new topics.
        </p>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Threads Section */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white/50 rounded-lg p-6"
          >
            <h2 className="text-2xl font-semibold mb-6 text-white bg-[#B36A5E] py-2 px-4 rounded-md text-center">
              Threads
            </h2>
            <div className="mb-6">
              <p className="text-[#8B4513] mb-4">
                Explore recent threads, discussions, and posts from the community.
              </p>
              <form onSubmit={handleSubmit}>
                <textarea
                  value={opinion}
                  onChange={(e) => setOpinion(e.target.value)}
                  placeholder="Share your opinion..."
                  className="w-full h-32 p-3 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-[#B36A5E]"
                />
                <button 
                  type="submit"
                  className="bg-[#5C6B4C] text-white px-6 py-2 rounded-md hover:bg-[#4a563d] transition-colors"
                >
                  Submit Opinion
                </button>
              </form>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-[#8B4513]">Opinions:</h3>
              <div className="space-y-4">
                {/* Add opinion components here */}
              </div>
            </div>
          </motion.div>

          {/* Discover Section */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white/50 rounded-lg p-6"
          >
            <h2 className="text-2xl font-semibold mb-6 text-white bg-[#B36A5E] py-2 px-4 rounded-md text-center">
              Discover
            </h2>
            <div className="mb-6">
              <input
                type="text"
                placeholder="Search topics..."
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B36A5E]"
              />
            </div>
            <div className="space-y-3">
              {discoverLinks.map((link, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-3 bg-white rounded-lg hover:bg-[#f5f2e8] transition-colors cursor-pointer"
                >
                  <a href="#" className="text-[#B36A5E] hover:text-[#8B4513] transition-colors">
                    {link}
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Community;
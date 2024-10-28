import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Search, Heart, Share2, Bookmark, Send } from 'lucide-react';

const Community = () => {
  const [opinion, setOpinion] = useState('');
  const [opinions, setOpinions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [notification, setNotification] = useState('');

  const resources = [
    { title: "12 Tips for Keeping Your Newborn Healthy", url: "https://www.itsmyhealthinsurance.com.au/advice/12-tips-for-keeping-your-newborn-healthy/" },
    { title: "Wiley Online Library: Pregnancy Study", url: "https://onlinelibrary.wiley.com/doi/10.1155/2020/3124847" },
    { title: "Better Health: Pregnancy Week-by-Week", url: "https://www.betterhealth.vic.gov.au/health/healthyliving/pregnancy-week-by-week" },
    { title: "HealthyWomen: Pregnancy and Parenting", url: "https://www.healthywomen.org/content/article/pregnancy-and-parenting-articles" },
    { title: "Healthline: Pregnancy Dos and Don'ts", url: "https://www.healthline.com/health/pregnancy/dos-and-donts#pregnancy-donts" },
    { title: "BMC Medicine: Pregnancy Research", url: "https://bmcmedicine.biomedcentral.com/articles/10.1186/s12916-022-02632-6" },
    { title: "American Journal of Obstetrics and Gynecology: Study", url: "https://www.ajog.org/article/S0002-9378(21)02728-9/fulltext" },
    { title: "BMC Pregnancy and Childbirth: Research Article", url: "https://bmcpregnancychildbirth.biomedcentral.com/articles/10.1186/s12884-018-2087-4" },
    { title: "Cleveland Clinic: Fetal Development", url: "https://my.clevelandclient.org/health/articles/7247-fetal-development-stages-of-growth" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (opinion.trim()) {
      const newOpinion = {
        id: Date.now(),
        text: opinion,
        likes: 0,
        isLiked: false,
        isBookmarked: false,
        timestamp: new Date().toLocaleString(),
      };
      setOpinions([newOpinion, ...opinions]);
      setOpinion('');
      showNotification('Opinion shared successfully!');
    }
  };

  const showNotification = (message) => {
    setNotification(message);
    setTimeout(() => setNotification(''), 3000);
  };

  const toggleLike = (id) => {
    setOpinions(opinions.map(opinion => {
      if (opinion.id === id) {
        return {
          ...opinion,
          likes: opinion.isLiked ? opinion.likes - 1 : opinion.likes + 1,
          isLiked: !opinion.isLiked
        };
      }
      return opinion;
    }));
  };

  const toggleBookmark = (id) => {
    setOpinions(opinions.map(opinion => {
      if (opinion.id === id) {
        return {
          ...opinion,
          isBookmarked: !opinion.isBookmarked
        };
      }
      return opinion;
    }));
  };

  const filteredResources = resources.filter(resource =>
    resource.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#e8e4d9] to-[#f5f2e8]">
      {/* Notification */}
      <AnimatePresence>
        {notification && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="fixed top-4 right-4 bg-[#5C6B4C] text-white px-6 py-3 rounded-lg shadow-lg z-50"
          >
            {notification}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center py-20 px-4 bg-gradient-to-r from-[#5C6B4C]/10 to-[#B36A5E]/10"
      >
        <motion.h1 
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          className="text-5xl font-serif text-[#5C6B4C] mb-6 tracking-wide"
        >
          Welcome to the Community
        </motion.h1>
        <motion.p 
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          className="text-2xl text-[#B36A5E] font-light"
        >
          Share experiences, discover insights, and connect with others
        </motion.p>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Threads Section */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-xl p-8 shadow-lg"
          >
            <h2 className="text-2xl font-semibold mb-6 text-white bg-gradient-to-r from-[#B36A5E] to-[#5C6B4C] py-3 px-6 rounded-lg text-center">
              Share Your Thoughts
            </h2>
            <div className="mb-8">
              <form onSubmit={handleSubmit} className="space-y-4">
                <textarea
                  value={opinion}
                  onChange={(e) => setOpinion(e.target.value)}
                  placeholder="Share your experience or ask a question..."
                  className="w-full h-32 p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B36A5E] bg-gray-50"
                />
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#5C6B4C] to-[#B36A5E] text-white px-8 py-3 rounded-lg font-medium shadow-md hover:shadow-lg transition-all flex items-center justify-center space-x-2"
                >
                  <Send size={20} />
                  <span>Share Opinion</span>
                </motion.button>
              </form>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-[#8B4513] text-xl">Community Opinions:</h3>
              <div className="space-y-6">
                <AnimatePresence>
                  {opinions.map((op) => (
                    <motion.div
                      key={op.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
                    >
                      <p className="text-gray-800 mb-4">{op.text}</p>
                      <div className="flex items-center justify-between text-sm text-gray-600">
                        <span>{op.timestamp}</span>
                        <div className="flex items-center space-x-4">
                          <button
                            onClick={() => toggleLike(op.id)}
                            className={`flex items-center space-x-1 ${op.isLiked ? 'text-red-500' : 'text-gray-500'}`}
                          >
                            <Heart size={18} fill={op.isLiked ? "currentColor" : "none"} />
                            <span>{op.likes}</span>
                          </button>
                          <button
                            onClick={() => toggleBookmark(op.id)}
                            className={`${op.isBookmarked ? 'text-[#5C6B4C]' : 'text-gray-500'}`}
                          >
                            <Bookmark size={18} fill={op.isBookmarked ? "currentColor" : "none"} />
                          </button>
                          <button className="text-gray-500">
                            <Share2 size={18} />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>

          {/* Discover Section */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-xl p-8 shadow-lg"
          >
            <h2 className="text-2xl font-semibold mb-6 text-white bg-gradient-to-r from-[#B36A5E] to-[#5C6B4C] py-3 px-6 rounded-lg text-center">
              Discover Resources
            </h2>
            <div className="mb-6 relative">
              <Search className="absolute left-3 top-3 text-gray-400" size={20} />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search resources..."
                className="w-full p-3 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B36A5E] bg-gray-50"
              />
            </div>
            <div className="space-y-3">
              <AnimatePresence>
                {filteredResources.map((resource, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ delay: index * 0.05 }}
                    className="p-4 bg-gray-50 rounded-lg hover:bg-[#f5f2e8] transition-all shadow-sm hover:shadow-md"
                  >
                    <a 
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#B36A5E] hover:text-[#8B4513] transition-colors flex items-center justify-between"
                    >
                      <span>{resource.title}</span>
                      <MessageCircle size={18} className="text-gray-400" />
                    </a>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Community;
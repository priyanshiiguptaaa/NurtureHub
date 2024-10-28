import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Heart, ArrowDown } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[80vh] bg-gradient-to-b from-white to-[#f0e6e6]">
        <div className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url('/homepg.jpeg')` }} />
        
        {/* Floating shapes for visual interest */}
        <motion.div 
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 10, 0]
          }}
          transition={{ 
            duration: 5,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="absolute top-20 right-20 w-20 h-20 bg-[#ffd7cc] rounded-full opacity-30"
        />
        <motion.div 
          animate={{ 
            y: [0, 20, 0],
            rotate: [0, -10, 0]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="absolute bottom-40 left-20 w-16 h-16 bg-[#8B4513] rounded-full opacity-20"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center z-10"
          >
            <h1 className="text-5xl md:text-7xl font-serif text-[#8B4513] mb-6">
              Welcome to <span className="text-[#d4956a]">Nurture</span> Hub
            </h1>
            <p className="text-xl md:text-2xl text-[#5c3d2e] max-w-3xl mx-auto mb-8">
              Your ultimate destination for fitness, health, and wellness.
              Join our community, share your journey, and achieve your goals!
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#8B4513] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#a05a2c] transition-colors flex items-center gap-2 mx-auto"
            >
              Start Your Journey <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-[#8B4513]"
        >
          <ArrowDown className="w-8 h-8" />
        </motion.div>
      </div>

      {/* Navigation Cards */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Community",
              icon: "👨‍👩‍👦",
              description: "Connect with other parents and share experiences",
              features: ["Group Discussions", "Expert Q&A", "Success Stories"]
            },
            {
              title: "Pregnancy",
              icon: "🤰",
              description: "Expert guidance for your pregnancy journey",
              features: ["Weekly Updates", "Diet Plans", "Exercise Guides"]
            },
            {
              title: "Baby",
              icon: "👶",
              description: "Essential tips and advice for baby care",
              features: ["Growth Tracking", "Feeding Tips", "Sleep Schedule"]
            }
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer group"
            >
              <div className="p-8 text-center">
                <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform" aria-label={item.title}>
                  {item.icon}
                </div>
                <h3 className="text-2xl font-semibold text-[#8B4513] mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-6">{item.description}</p>
                <ul className="space-y-2">
                  {item.features.map((feature) => (
                    <li key={feature} className="text-gray-500 flex items-center justify-center gap-2">
                      <Heart className="w-4 h-4 text-[#d4956a]" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Featured Section */}
      <div className="bg-[#f9f5f1] py-16">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-serif text-[#8B4513] mb-4">
              Why Choose Nurture Hub?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              We provide comprehensive support for your parenting journey.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Expert Resources",
                description: "Access verified information from healthcare professionals",
                image: "./home1.jpeg"
              },
              {
                title: "Supportive Community",
                description: "Connect with parents who understand your journey",
                image: "./home2.jpeg"
              },
              {
                title: "Personalized Care",
                description: "Get recommendations tailored to your needs",
                image: "./home3.jpeg"
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300"
              >
                <div className="h-56 relative group">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300" />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-semibold text-[#8B4513] mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-lg">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-[#f0e6e6] py-16"
      >
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif text-[#8B4513] mb-4">Stay Updated</h2>
          <p className="text-gray-600 mb-8">Subscribe to our newsletter for the latest parenting tips and updates</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-6 py-3 rounded-full w-full sm:w-96 focus:outline-none focus:ring-2 focus:ring-[#8B4513]"
            />
            <button className="bg-[#8B4513] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#a05a2c] transition-colors whitespace-nowrap">
              Subscribe Now
            </button>
          </div>
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-[#8B4513] text-white py-20 text-center relative overflow-hidden"
      >
        {/* Decorative elements */}
        <div className="absolute inset-0">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{ duration: 20, repeat: Infinity }}
            className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [360, 180, 0],
            }}
            transition={{ duration: 20, repeat: Infinity }}
            className="absolute bottom-0 left-0 w-64 h-64 bg-white opacity-5 rounded-full"
          />
        </div>

        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-serif mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-10 text-gray-200">Join our community today and get access to all our resources!</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-[#8B4513] px-10 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors flex items-center gap-2 mx-auto"
          >
            Sign Up Now <ArrowRight className="w-5 h-5" />
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
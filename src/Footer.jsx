import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  const services = [
    { name: 'Nutritional Counseling', link: '/nutrition' },
    { name: 'Mental Health Support', link: '/mental-health' },
    { name: 'Genetic Counseling', link: '/genetic' }
  ];

  const quickLinks = [
    { name: 'Home', link: '/' },
    { name: 'Community', link: '/community' },
    { name: 'Pregnancy', link: '/pregnancy' },
    { name: 'Baby', link: '/baby' }
  ];

  return (
    <footer className="bg-gradient-to-b from-[#F9F5F1] to-[#f0e6e6] pt-12 pb-6">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="flex flex-col items-center md:items-start">
            <img 
              src="/logo.jpeg" 
              alt="Nurture Hub Logo" 
              className="h-16 w-auto mb-4 rounded-lg shadow-md"
            />
            <p className="text-gray-600 text-sm text-center md:text-left">
              Your trusted companion in the beautiful journey of parenthood.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h3 className="text-[#8B4513] font-serif font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.link}
                    className="text-gray-600 hover:text-[#4A6741] transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="text-center md:text-left">
            <h3 className="text-[#8B4513] font-serif font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link 
                    to={service.link}
                    className="text-gray-600 hover:text-[#4A6741] transition-colors duration-300 text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media & Contact */}
          <div className="text-center md:text-left">
            <h3 className="text-[#8B4513] font-serif font-semibold mb-4">Connect With Us</h3>
            <div className="flex justify-center md:justify-start space-x-4 mb-4">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
              >
                <FaFacebook className="text-[#4A6741] w-5 h-5 hover:text-[#8B4513]" />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
              >
                <FaInstagram className="text-[#4A6741] w-5 h-5 hover:text-[#8B4513]" />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
              >
                <FaTwitter className="text-[#4A6741] w-5 h-5 hover:text-[#8B4513]" />
              </a>
            </div>
            <div className="text-gray-600 text-sm">
              <p>Contact us:</p>
              <a 
                href="mailto:support@nurturehub.co"
                className="hover:text-[#4A6741] transition-colors duration-300"
              >
                support@nurturehub.co
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 my-6"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Nurture Hub. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-[#4A6741] transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-[#4A6741] transition-colors duration-300">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
// Footer.jsx
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'; // Importing icons from react-icons

const Footer = () => (
  <footer className="bg-[#F9F5F1] py-8">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <img src="/placeholder.svg" alt="Aashira Logo" className="h-10 w-auto" />
        </div>
        <div className="mb-4 md:mb-0">
          <h3 className="font-semibold mb-2">Services</h3>
          <ul className="text-sm">
            <li>Nutritional Counseling</li>
            <li>Mental Health Support</li>
            <li>Genetic Counseling</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Social Media</h3>
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com" // Replace with your Facebook link
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://www.instagram.com" // Replace with your Instagram link
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-pink-600 transition-colors duration-300"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://www.twitter.com" // Replace with your Twitter link
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-400 transition-colors duration-300"
            >
              <FaTwitter size={24} />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center text-sm text-gray-500">
        All rights reserved @nurturehub.co
      </div>
    </div>
  </footer>
);

export default Footer; // Don't forget to export the component

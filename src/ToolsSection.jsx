import React from "react";
import { Link } from "react-router-dom";
import { FaSyringe, FaWeight, FaRegStar, FaUtensils } from 'react-icons/fa';

const ToolsSection = () => {
  const tools = [
    {
      icon: <FaSyringe className="w-8 h-8 text-blue-500" />,
      title: 'Vaccine Scheduler',
      description: "Stay on top of your baby's vaccination schedule with timely reminders and easy tracking.",
      path: "/vaccine-scheduler"
    },
    {
      icon: <FaWeight className="w-8 h-8 text-green-500" />,
      title: 'Growth Tracker',
      description: "Easily monitor your baby's growth milestones and health progress with our user-friendly tool.",
      path: "/growth-tracker"
    },
    {
      icon: <FaRegStar className="w-8 h-8 text-purple-500" />,
      title: 'Name Finder',
      description: 'Discover the perfect name for your little one, tailored to your style and heritage.',
      path: "/name-finder"
    },
    {
      icon: <FaUtensils className="w-8 h-8 text-pink-500" />,
      title: 'Baby Feeding',
      description: 'Track feeding times, amounts, and patterns to ensure your baby is well-nourished and healthy.',
      path: "/baby-feeder"
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Trusted Tools for Nurturing Your Baby
          </h2>
          <p className="text-lg text-gray-600">
            Empowering Your Baby Care Journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tools.map((tool, index) => (
            <Link
              key={index}
              to={tool.path}
              className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 p-3 rounded-full bg-gray-50 group-hover:scale-110 transition-transform duration-300">
                  {tool.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {tool.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {tool.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
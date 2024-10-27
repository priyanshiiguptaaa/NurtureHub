import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { FaSyringe, FaWeight, FaRegStar, FaUtensils } from 'react-icons/fa'; // Import icons

const ToolsSection = () => {
  const tools = [
    { icon: <FaSyringe />, title: 'Vaccine Scheduler', description: "Stay on top of your baby's vaccination schedule with timely reminders and easy tracking.", path: "/vaccine-scheduler" },
    { icon: <FaWeight />, title: 'Growth Tracker', description: "Easily monitor your baby's growth milestones and health progress with our user-friendly tool.", path: "/growth-tracker" },
    { icon: <FaRegStar />, title: 'Name Finder', description: 'Discover the perfect name for your little one, tailored to your style and heritage.', path: "/name-finder" },
    { icon: <FaUtensils />, title: 'Baby Feeding', description: 'Track feeding times, amounts, and patterns to ensure your baby is well-nourished and healthy.', path: "/baby-feeder" },
  ];

  return (
    <section className="my-16">
      <h2 className="text-3xl text-center text-aashira-green mb-2">Trusted Tools for Nurturing Your Baby</h2>
      <p className="text-center text-aashira-brown mb-8">Empowering Your Baby Care Journey.</p>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {tools.map((tool, index) => (
          <Link key={index} to={tool.path} className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-2xl mb-4">{tool.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{tool.title}</h3>
            <p className="text-gray-600">{tool.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ToolsSection;

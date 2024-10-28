import React from 'react';
import { Link } from 'react-router-dom';

const toolsList = [
  {
    name: "Pregnancy Checkup",
    description: "Find out what to expect during your pregnancy checkups.",
    link: "/pregnancy-checkup" // Ensure this matches the route in App.jsx
  },
  {
    name: "Ovulation Calculator",
    description: "Calculate your ovulation period for better family planning.",
    link: "/ovulation-calculator"
  },
  {
    name: "Routine Checkups",
    description: "Learn about the essential routine checkups during pregnancy.",
    link: "/routine-checkups"
  },
];

const Tools = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-4 text-[#2d3748]">Helpful Tools</h2>
      <ul className="space-y-4">
        {toolsList.map((tool, index) => (
          <li key={index} className="border p-4 rounded-md hover:bg-gray-100 transition">
            <h3 className="text-xl font-semibold">{tool.name}</h3>
            <p className="text-gray-600">{tool.description}</p>
            <Link to={tool.link} className="text-[#4A6741] font-bold hover:underline">
              Explore
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tools;

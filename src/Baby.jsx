// src/Baby.jsx
import React from "react";
import Hero from "./Hero"; // Import Hero component
import ToolsSection from "./ToolsSection"; // Import ToolsSection component
import Footer from "./Footer";
import ArticlesSection from "./ArticlesSection"; // Import ArticlesSection component

const Baby = () => {
  return (
    <div className="bg-[#F9F5F1] min-h-screen font-serif">
      <main className="container mx-auto px-4 py-8">
        <Hero /> {/* Add Hero section */}
        <ToolsSection /> {/* Add Tools section */}
        <ArticlesSection /> {/* Add Articles section */}
      </main>
    </div>
  );
};

export default Baby;

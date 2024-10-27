/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Hero from './Hero';
import ToolsSection from './ToolsSection';
import ArticlesSection from './ArticlesSection';
import Footer from './Footer';
import VaccineScheduler from './VaccineScheduler';
import GrowthTracker from './GrowthTracker';
import BabyFeeder from './BabyFeederTool'; // Ensure filename matches
import NameFinder from './NameFinder';

const App = () => (
  <Router>
    <div className="bg-[#F9F5F1] min-h-screen font-serif">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<><Hero /><ToolsSection /><ArticlesSection /></>} />
          <Route path="/vaccine-scheduler" element={<VaccineScheduler />} />
          <Route path="/growth-tracker" element={<GrowthTracker />} />
          <Route path="/name-finder" element={<NameFinder />} />
          <Route path="/baby-feeder" element={<BabyFeeder />} /> {/* Correct route for Baby Feeder */}
          {/* Additional routes can be added here */}
        </Routes>
      </main>
      <Footer />
    </div>
  </Router>
);

// Export the App component
export default App;

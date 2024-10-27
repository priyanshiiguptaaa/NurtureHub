import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Baby from './Baby';
import Pregnancy from './Pregnancy';
import Community from './Community';
import OvulationCalculator from './OvulationCalculator';
import VaccineScheduler from './VaccineScheduler';
import GrowthTracker from './GrowthTracker';
import NameFinder from './NameFinder';
import BabyFeeder from './BabyFeederTool';
import PregnatalCheckupTracker from './PregnatalCheckupTracker';
import Footer from './Footer';
import Login from './components/auth/Login';  // We'll create this
import Register from './components/auth/Register';  // We'll create this
import './styles.css';

const App = () => (
  <Router>
    <div className="app-container bg-[#F9F5F1] min-h-screen font-serif">
      <Header />
      <div className="content-wrapper">
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/baby" element={<Baby />} />
            <Route path="/pregnancy" element={<Pregnancy />} />
            <Route path="/community" element={<Community />} />
            <Route path="/ovulation-calculator" element={<OvulationCalculator />} />
            <Route path="/vaccine-scheduler" element={<VaccineScheduler />} />
            <Route path="/growth-tracker" element={<GrowthTracker />} />
            <Route path="/name-finder" element={<NameFinder />} />
            <Route path="/baby-feeder" element={<BabyFeeder />} />
            <Route path="/pregnancy-checkup" element={<PregnatalCheckupTracker />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Register />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </div>
  </Router>
);

export default App;
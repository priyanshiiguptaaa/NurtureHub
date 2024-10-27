import React, { useState } from 'react';
import { Calendar } from 'lucide-react';

const PregnatalCheckupTracker = () => {
  // State for form data
  const [formData, setFormData] = useState({
    lastPeriodDate: '',
    lastCheckupDate: '',
    pregnancyWeek: '',
    checkupType: 'routine'
  });

  // State for feedback message
  const [feedback, setFeedback] = useState({ message: '', type: '' });

  // Calculate next checkup date based on pregnancy week
  const calculateNextCheckup = (week) => {
    if (week <= 28) {
      return '4 weeks'; // Monthly visits until week 28
    } else if (week <= 36) {
      return '2 weeks'; // Bi-weekly visits from week 28-36
    } else {
      return '1 week';  // Weekly visits after week 36
    }
  };

  // Form validation
  const validateForm = () => {
    if (!formData.lastPeriodDate) {
      setFeedback({ message: 'Please enter your last period date', type: 'error' });
      return false;
    }
    if (!formData.pregnancyWeek) {
      setFeedback({ message: 'Please select your current pregnancy week', type: 'error' });
      return false;
    }
    return true;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    const nextVisit = calculateNextCheckup(Number(formData.pregnancyWeek));
    const message = `Based on your pregnancy week ${formData.pregnancyWeek}, 
                    schedule your next ${formData.checkupType} in ${nextVisit}.`;
    
    setFeedback({ message, type: 'success' });
  };

  return (
    // Center the component on the page
    <div className="min-h-screen flex items-center justify-center bg-aashira-bg py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <h1 className="text-3xl font-bold mb-6 text-center text-aashira-primary">
          Pregnancy Checkup Planner
        </h1>
        
        <div className="bg-white p-8 rounded-lg shadow-lg">
          {/* Feedback Message */}
          {feedback.message && (
            <div className={`mb-6 p-4 rounded-md ${
              feedback.type === 'error' 
                ? 'bg-red-50 text-red-700' 
                : 'bg-green-50 text-green-700'
            }`}>
              {feedback.message}
            </div>
          )}

          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Last Period Date */}
            <div className="space-y-2">
              <label className="text-sm text-aashira-text">
                When did your last period start?*
              </label>
              <div className="relative">
                <input
                  type="date"
                  value={formData.lastPeriodDate}
                  onChange={(e) => {
                    setFormData({...formData, lastPeriodDate: e.target.value});
                    setFeedback({ message: '', type: '' });
                  }}
                  className="w-full p-2 border border-aashira-textSecondary rounded-md bg-white pr-10 
                           focus:outline-none focus:ring-2 focus:ring-aashira-primary focus:border-transparent"
                />
                <Calendar className="absolute right-3 top-2.5 h-5 w-5 text-aashira-textSecondary" />
              </div>
            </div>

            {/* Last Checkup Date */}
            <div className="space-y-2">
              <label className="text-sm text-aashira-text">
                Date of your last checkup
              </label>
              <div className="relative">
                <input
                  type="date"
                  value={formData.lastCheckupDate}
                  onChange={(e) => setFormData({...formData, lastCheckupDate: e.target.value})}
                  className="w-full p-2 border border-aashira-textSecondary rounded-md bg-white pr-10 
                           focus:outline-none focus:ring-2 focus:ring-aashira-primary focus:border-transparent"
                />
                <Calendar className="absolute right-3 top-2.5 h-5 w-5 text-aashira-textSecondary" />
              </div>
            </div>

            {/* Pregnancy Week */}
            <div className="space-y-2">
              <label className="text-sm text-aashira-text">
                Current week of pregnancy*
              </label>
              <select
                value={formData.pregnancyWeek}
                onChange={(e) => {
                  setFormData({...formData, pregnancyWeek: e.target.value});
                  setFeedback({ message: '', type: '' });
                }}
                className="w-full p-2 border border-aashira-textSecondary rounded-md bg-white 
                         focus:outline-none focus:ring-2 focus:ring-aashira-primary focus:border-transparent"
              >
                <option value="">Select week</option>
                {[...Array(42)].map((_, i) => (
                  <option key={i} value={i + 1}>Week {i + 1}</option>
                ))}
              </select>
            </div>

            {/* Checkup Type */}
            <div className="space-y-2">
              <label className="text-sm text-aashira-text">
                Type of checkup
              </label>
              <select
                value={formData.checkupType}
                onChange={(e) => setFormData({...formData, checkupType: e.target.value})}
                className="w-full p-2 border border-aashira-textSecondary rounded-md bg-white 
                         focus:outline-none focus:ring-2 focus:ring-aashira-primary focus:border-transparent"
              >
                <option value="routine">Routine Prenatal Visit</option>
                <option value="ultrasound">Ultrasound Scan</option>
                <option value="blood">Blood Tests</option>
                <option value="glucose">Glucose Test</option>
                <option value="special">Specialist Consultation</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 rounded-md text-white bg-aashira-primary 
                       hover:bg-opacity-90 transition-colors focus:outline-none 
                       focus:ring-2 focus:ring-aashira-primary focus:ring-offset-2"
            >
              Schedule Next Checkup
            </button>
          </form>
        </div>

        <div className="mt-6 p-4 rounded-lg bg-aashira-accent">
          <h2 className="font-semibold mb-2 text-aashira-primary">Remember</h2>
          <p className="text-aashira-text">
            Regular checkups are essential for a healthy pregnancy. 
            Don't forget to keep track of your appointments!
          </p>
        </div>
      </div>
    </div>
  );
};

export default PregnatalCheckupTracker;
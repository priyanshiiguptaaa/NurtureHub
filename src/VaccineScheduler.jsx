import React, { useState } from 'react';
import { Calendar, Clock, User, Phone, Mail, Check, ChevronDown, ChevronUp, AlertCircle } from 'lucide-react';

const VaccineScheduler = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    date: '',
    email: '',
    phone: '',
    preferredTime: '',
    vaccineType: '',
  });
  const [message, setMessage] = useState('');
  const [showVaccines, setShowVaccines] = useState(false);
  const [selectedAgeGroup, setSelectedAgeGroup] = useState(null);

  const timeSlots = [
    '09:00 AM', '10:00 AM', '11:00 AM', 
    '02:00 PM', '03:00 PM', '04:00 PM'
  ];

  const vaccineInfo = {
    '0-1 month': {
      vaccines: 'Hepatitis B (1st dose)',
      description: 'Protects against serious liver infection.',
      importance: 'Critical first vaccine for newborns'
    },
    '2 months': {
      vaccines: 'DTP, Hib, IPV, PCV (1st doses)',
      description: 'Protects against diphtheria, tetanus, pertussis, hib disease, polio, and pneumonia.',
      importance: 'Builds initial immunity against multiple diseases'
    },
    '4 months': {
      vaccines: 'DTP, Hib, IPV, PCV (2nd doses)',
      description: 'Continues protection against the same diseases.',
      importance: 'Strengthens immune response'
    },
    '6 months': {
      vaccines: 'DTP, Hib, IPV (3rd doses)',
      description: 'Completes the initial vaccination series.',
      importance: 'Ensures long-term protection'
    },
    '12 months': {
      vaccines: 'MMR, Varicella, PCV (booster)',
      description: 'Protects against measles, mumps, rubella, and chickenpox.',
      importance: 'Critical for community immunity'
    },
    '15-18 months': {
      vaccines: 'DTP (booster)',
      description: 'Reinforces immunity against diphtheria, tetanus, and pertussis.',
      importance: 'Maintains protection levels'
    },
    '4-6 years': {
      vaccines: 'DTP, IPV, MMR (booster)',
      description: 'Prepares children for school entry with additional protection.',
      importance: 'Essential for school readiness'
    },
    '11-12 years': {
      vaccines: 'Tdap, HPV, Meningococcal',
      description: 'Protects against tetanus, diphtheria, pertussis, HPV infections, and meningococcal disease.',
      importance: 'Crucial for adolescent health'
    },
    '16 years': {
      vaccines: 'Meningococcal booster',
      description: 'Ensures continued protection against meningococcal disease.',
      importance: 'Important for teens entering college'
    },
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(`Appointment scheduled successfully! We'll see ${formData.name} on ${formData.date} at ${formData.preferredTime}.`);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (name === 'age') {
      const age = parseInt(value);
      let ageGroup = null;
      
      if (age < 1) ageGroup = '0-1 month';
      else if (age < 3) ageGroup = '2 months';
      else if (age < 5) ageGroup = '4 months';
      else if (age < 7) ageGroup = '6 months';
      else if (age < 15) ageGroup = '12 months';
      else if (age < 24) ageGroup = '15-18 months';
      else if (age < 7*12) ageGroup = '4-6 years';
      else if (age < 13*12) ageGroup = '11-12 years';
      else if (age < 17*12) ageGroup = '16 years';

      setSelectedAgeGroup(ageGroup);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-lg p-6">
        <div className="space-y-2 mb-6">
          <h1 className="text-3xl font-bold text-blue-800">Vaccine Scheduler</h1>
          <p className="text-gray-600">Schedule your vaccination appointment with ease</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium flex items-center gap-2">
                <User size={16} />
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none"
                placeholder="Enter your full name"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium flex items-center gap-2">Age (months for children)</label>
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleInputChange}
                required
                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none"
                placeholder="Enter age"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium flex items-center gap-2">
                <Mail size={16} />
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none"
                placeholder="your@email.com"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium flex items-center gap-2">
                <Phone size={16} />
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none"
                placeholder="Your phone number"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium flex items-center gap-2">
                <Calendar size={16} />
                Preferred Date
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                required
                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium flex items-center gap-2">
                <Clock size={16} />
                Preferred Time
              </label>
              <select
                name="preferredTime"
                value={formData.preferredTime}
                onChange={handleInputChange}
                required
                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none"
              >
                <option value="">Select time slot</option>
                {timeSlots.map(slot => (
                  <option key={slot} value={slot}>{slot}</option>
                ))}
              </select>
            </div>
          </div>

          {selectedAgeGroup && (
            <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg flex items-start gap-2">
              <AlertCircle className="h-5 w-5 text-blue-500 mt-0.5" />
              <div>
                <p className="text-blue-800">
                  Recommended vaccines for this age: <strong>{vaccineInfo[selectedAgeGroup].vaccines}</strong>
                </p>
              </div>
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
          >
            <Check size={20} />
            Schedule Appointment
          </button>
        </form>

        {message && (
          <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start gap-2">
            <Check className="h-5 w-5 text-green-600 mt-0.5" />
            <p className="text-green-800">{message}</p>
          </div>
        )}

        <div className="mt-8">
          <button
            onClick={() => setShowVaccines(!showVaccines)}
            className="flex items-center gap-2 text-lg font-semibold text-blue-800 hover:text-blue-600 transition-colors"
          >
            Vaccination Schedule
            {showVaccines ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>
          
          {showVaccines && (
            <div className="mt-4 grid md:grid-cols-2 gap-4">
              {Object.entries(vaccineInfo).map(([ageGroup, info], index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-sm border">
                  <h3 className="text-lg font-semibold text-blue-800 mb-2">{ageGroup}</h3>
                  <p className="font-medium text-gray-800">{info.vaccines}</p>
                  <p className="text-gray-600 text-sm mt-1">{info.description}</p>
                  <p className="text-blue-600 text-sm mt-2">{info.importance}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VaccineScheduler;
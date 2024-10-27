// VaccineScheduler.jsx
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

const VaccineScheduler = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [date, setDate] = useState('');
  const [message, setMessage] = useState('');
  const [showVaccines, setShowVaccines] = useState(false); // State to toggle vaccine info visibility

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(`Vaccine scheduled for ${name}, age ${age} on ${date}.`);
    // Additional logic for scheduling can be added here
  };

  // Vaccine information categorized by age
  const vaccineInfo = {
    '0-1 month': {
      vaccines: 'Hepatitis B (1st dose)',
      description: 'Protects against serious liver infection.'
    },
    '2 months': {
      vaccines: 'DTP, Hib, IPV, PCV (1st doses)',
      description: 'Protects against diphtheria, tetanus, pertussis, hib disease, polio, and pneumonia.'
    },
    '4 months': {
      vaccines: 'DTP, Hib, IPV, PCV (2nd doses)',
      description: 'Continues protection against the same diseases.'
    },
    '6 months': {
      vaccines: 'DTP, Hib, IPV (3rd doses)',
      description: 'Completes the initial vaccination series.'
    },
    '12 months': {
      vaccines: 'MMR, Varicella, PCV (booster)',
      description: 'Protects against measles, mumps, rubella, and chickenpox.'
    },
    '15-18 months': {
      vaccines: 'DTP (booster)',
      description: 'Reinforces immunity against diphtheria, tetanus, and pertussis.'
    },
    '4-6 years': {
      vaccines: 'DTP, IPV, MMR (booster)',
      description: 'Prepares children for school entry with additional protection.'
    },
    '11-12 years': {
      vaccines: 'Tdap, HPV, Meningococcal',
      description: 'Protects against tetanus, diphtheria, pertussis, HPV infections, and meningococcal disease.'
    },
    '16 years': {
      vaccines: 'Meningococcal booster',
      description: 'Ensures continued protection against meningococcal disease.'
    },
  };

  return (
    <div className="border rounded-lg p-4 bg-white shadow-md my-4">
      <h2 className="text-2xl text-aashira-brown font-bold mb-4">Vaccine Scheduler</h2>
      <form onSubmit={handleSubmit} className="flex flex-col mb-4">
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="border rounded-lg p-2 mb-2"
        />
        <input
          type="number"
          placeholder="Your Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
          className="border rounded-lg p-2 mb-2"
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
          className="border rounded-lg p-2 mb-2"
        />
        <button type="submit" className="bg-aashira-green text-white rounded-lg p-2">
          Schedule Vaccine
        </button>
      </form>
      {message && <p className="text-green-600 mt-4">{message}</p>}

      <div className="mt-6">
        <h3 className="text-xl font-semibold text-aashira-brown mb-2 cursor-pointer" onClick={() => setShowVaccines(!showVaccines)}>
          Vaccination Schedule
        </h3>
        {showVaccines && (
          <div className="border rounded-lg p-4 bg-gray-50">
            {Object.entries(vaccineInfo).map(([ageGroup, info], index) => (
              <div key={index} className="mb-4">
                <h4 className="font-semibold">{ageGroup}:</h4>
                <p>{info.vaccines}</p>
                <p className="text-gray-600">{info.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default VaccineScheduler;

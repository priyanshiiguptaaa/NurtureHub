/* eslint-disable no-unused-vars */
// src/GrowthTracker.jsx
import React, { useState } from 'react';

const GrowthTracker = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [growthData, setGrowthData] = useState([]);
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEntry = { 
      name, 
      age: parseFloat(age), // Convert to number
      height: parseFloat(height), // Convert to number
      weight: parseFloat(weight) // Convert to number
    };
    setGrowthData([...growthData, newEntry]);
    setMessage(`Growth data recorded for ${name}.`);
    setName('');
    setAge('');
    setHeight('');
    setWeight('');
  };

  return (
    <div className="border rounded-lg p-4 bg-white shadow-md my-4">
      <h2 className="text-2xl text-aashira-brown font-bold mb-4">Growth Tracker</h2>
      <form onSubmit={handleSubmit} className="flex flex-col mb-4">
        <input
          type="text"
          placeholder="Child's Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="border rounded-lg p-2 mb-2"
        />
        <input
          type="number"
          placeholder="Age (in years)"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
          className="border rounded-lg p-2 mb-2"
        />
        <input
          type="number"
          placeholder="Height (in cm)"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          required
          className="border rounded-lg p-2 mb-2"
        />
        <input
          type="number"
          placeholder="Weight (in kg)"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          required
          className="border rounded-lg p-2 mb-2"
        />
        <button type="submit" className="bg-aashira-green text-white rounded-lg p-2">
          Track Growth
        </button>
      </form>
      {message && <p className="text-green-600 mt-4">{message}</p>}
      {growthData.length > 0 && (
        <div>
          <h3 className="text-xl font-semibold mt-4">Recorded Growth Data:</h3>
          <ul className="list-disc pl-5">
            {growthData.map((data, index) => (
              <li key={index}>
                {data.name}, Age: {data.age}, Height: {data.height} cm, Weight: {data.weight} kg
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default GrowthTracker;

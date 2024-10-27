/* eslint-disable no-unused-vars */
// src/NameFinder.jsx
import React, { useState } from 'react';
import { FaSearch, FaTimes } from 'react-icons/fa';
import './NameFinder.css'; // Import custom styles

const NameFinder = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [selectedName, setSelectedName] = useState(null);

  const nameData = [
    { name: 'Aaryan', meaning: 'Jawan', origin: 'Sanskrit', popularity: 3 },
    { name: 'Brahma', meaning: 'Srijankarta', origin: 'Sanskrit', popularity: 5 },
    { name: 'Chetan', meaning: 'Sajeev', origin: 'Sanskrit', popularity: 7 },
    { name: 'Deepthi', meaning: 'Chamak', origin: 'Sanskrit', popularity: 6 },
    { name: 'Ekta', meaning: 'Unity', origin: 'Sanskrit', popularity: 4 },
    { name: 'Falak', meaning: 'Sky', origin: 'Arabic', popularity: 8 },
    { name: 'Gaurav', meaning: 'Pride', origin: 'Sanskrit', popularity: 9 },
    { name: 'Harit', meaning: 'Green', origin: 'Sanskrit', popularity: 10 },
    { name: 'Indra', meaning: 'King of Gods', origin: 'Sanskrit', popularity: 2 },
    { name: 'Jay', meaning: 'Victory', origin: 'Sanskrit', popularity: 1 },
    { name: 'Kriti', meaning: 'Creation', origin: 'Sanskrit', popularity: 12 },
    { name: 'Lavanya', meaning: 'Grace', origin: 'Sanskrit', popularity: 13 },
    { name: 'Mayur', meaning: 'Peacock', origin: 'Sanskrit', popularity: 14 },
    { name: 'Naina', meaning: 'Eyes', origin: 'Sanskrit', popularity: 15 },
    { name: 'Ojas', meaning: 'Energy', origin: 'Sanskrit', popularity: 16 },
    { name: 'Poonam', meaning: 'Full Moon', origin: 'Sanskrit', popularity: 17 },
    { name: 'Qudrat', meaning: 'Nature', origin: 'Arabic', popularity: 18 },
    { name: 'Radhika', meaning: 'Successful', origin: 'Sanskrit', popularity: 19 },
    { name: 'Siddharth', meaning: 'One who has attained his goals', origin: 'Sanskrit', popularity: 20 },
    { name: 'Tara', meaning: 'Star', origin: 'Sanskrit', popularity: 21 },
    { name: 'Uma', meaning: 'Goddess Parvati', origin: 'Sanskrit', popularity: 22 },
    { name: 'Vijay', meaning: 'Victory', origin: 'Sanskrit', popularity: 23 },
    { name: 'Yash', meaning: 'Fame', origin: 'Sanskrit', popularity: 24 },
    { name: 'Zain', meaning: 'Beauty', origin: 'Arabic', popularity: 25 }
  ];

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    if (term) {
      const filteredNames = nameData.filter(({ name }) =>
        name.toLowerCase().startsWith(term.toLowerCase())
      );
      setSuggestions(filteredNames);
    } else {
      setSuggestions([]);
      setSelectedName(null); // Clear selected name
    }
  };

  const handleSelectName = (name) => {
    setSearchTerm(name.name);
    setSelectedName(name);
    setSuggestions([]);
  };

  const clearSearch = () => {
    setSearchTerm('');
    setSuggestions([]);
    setSelectedName(null); // Clear selected name
  };

  return (
    <div className="border rounded-lg p-4 bg-white shadow-md my-4">
      <h2 className="text-2xl text-aashira-brown font-bold mb-4">Name Finder</h2>
      <div className="flex items-center mb-2">
        <FaSearch className="text-gray-500 mr-2" />
        <input
          type="text"
          placeholder="Search for a name..."
          value={searchTerm}
          onChange={handleSearch}
          className="border rounded-lg p-2 flex-grow"
        />
        {searchTerm && (
          <button onClick={clearSearch} className="ml-2 text-red-500">
            <FaTimes />
          </button>
        )}
      </div>
      {suggestions.length > 0 && (
        <ul className="list-disc pl-5">
          {suggestions.map((nameData, index) => (
            <li
              key={index}
              onClick={() => handleSelectName(nameData)}
              className="cursor-pointer hover:text-aashira-green mb-2 transition duration-200 transform hover:scale-105 animate-fade-in"
            >
              <span className="font-semibold">{nameData.name}</span>: <span className="text-gray-600">{nameData.meaning}</span>
            </li>
          ))}
        </ul>
      )}
      {searchTerm && !suggestions.length && (
        <p className="text-gray-600 mt-2">No suggestions found for &quot;{searchTerm}&quot;</p>
      )}
      {suggestions.length > 0 && (
        <p className="text-gray-500 mt-2">{suggestions.length} suggestion(s) found</p>
      )}
      
      {/* Display detailed view of the selected name */}
      {selectedName && (
        <div className="mt-4 p-4 border rounded bg-gray-100">
          <h3 className="text-xl font-semibold">{selectedName.name}</h3>
          <p><strong>Meaning:</strong> {selectedName.meaning}</p>
          <p><strong>Origin:</strong> {selectedName.origin}</p>
          <p><strong>Popularity Rank:</strong> {selectedName.popularity}</p>
        </div>
      )}
    </div>
  );
};

export default NameFinder;

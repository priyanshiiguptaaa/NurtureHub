import React, { useState } from 'react';
import { FaSearch, FaTimes } from 'react-icons/fa';
import './BabyFeederTool.css';

const BabyFeederTool = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [selectedFood, setSelectedFood] = useState(null);
  const [modalContent, setModalContent] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const foodData = [
    { food: 'Applesauce', age: '6+ months', nutrition: 'Vitamins A, C', texture: 'Smooth', image: '/images/applesauce.jpg' },
    { food: 'Banana', age: '6+ months', nutrition: 'Potassium, Fiber', texture: 'Soft', image: '/images/banana.jpg' },
    // Add more food items here
  ];

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    if (term) {
      const filteredFoods = foodData.filter(({ food }) =>
        food.toLowerCase().includes(term.toLowerCase())
      );
      setSuggestions(filteredFoods);
    } else {
      setSuggestions([]);
      setSelectedFood(null);
    }
  };

  const handleSelectFood = (food) => {
    setSearchTerm(food.food);
    setSelectedFood(food);
    setSuggestions([]);
  };

  const clearSearch = () => {
    setSearchTerm('');
    setSuggestions([]);
    setSelectedFood(null);
  };

  const openModal = (content) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent('');
  };

  return (
    <div className="border rounded-lg p-4 bg-white shadow-md my-4">
      <h2 className="text-2xl text-aashira-brown font-bold mb-4">Baby Feeder Tool</h2>
      <div className="flex items-center mb-2">
        <FaSearch className="text-gray-500 mr-2" />
        <input
          type="text"
          placeholder="Search for baby food..."
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
          {suggestions.map((foodItem, index) => (
            <li
              key={index}
              onClick={() => handleSelectFood(foodItem)}
              className="cursor-pointer hover:text-aashira-green mb-2 transition duration-200 transform hover:scale-105"
            >
              <div className="flex items-center mb-2">
                <img src={foodItem.image} alt={foodItem.food} className="w-16 h-16 rounded-full mr-2" />
                <span className="font-semibold">{foodItem.food}</span>
              </div>
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

      {/* Detailed view of the selected food */}
      {selectedFood && (
        <div className="mt-4 p-4 border rounded bg-gray-100">
          <h3 className="text-xl font-semibold">{selectedFood.food}</h3>
          <p><strong>Recommended Age:</strong> {selectedFood.age}</p>
          <p><strong>Nutrition:</strong> {selectedFood.nutrition}</p>
          <p><strong>Texture:</strong> {selectedFood.texture}</p>
        </div>
      )}

      {/* Feeding Information Section with Buttons */}
      <div className="mt-6">
        <h3 className="text-xl font-semibold mb-4">Feeding Information</h3>
        <div className="flex space-x-2">
          <button
            onClick={() => openModal('Breastfeeding: Provides essential nutrients and antibodies for the first six months, helping strengthen immunity and foster bonding.')}
            className="px-4 py-2 bg-aashira-green text-white rounded hover:scale-105 transition"
          >
            Breastfeeding
          </button>
          <button
            onClick={() => openModal('Formula Feeding: An alternative to breastfeeding, offering complete nutrition. Choose a formula based on your baby’s specific dietary needs.')}
            className="px-4 py-2 bg-aashira-green text-white rounded hover:scale-105 transition"
          >
            Formula Feeding
          </button>
          <button
            onClick={() => openModal('Combination Feeding: A flexible mix of breast milk and formula, suited for parents who need to balance breastfeeding with other feeding methods.')}
            className="px-4 py-2 bg-aashira-green text-white rounded hover:scale-105 transition"
          >
            Combination Feeding
          </button>
          <button
            onClick={() => openModal('Responsive Feeding: Focuses on the baby’s hunger and fullness cues, helping them develop healthy eating habits early.')}
            className="px-4 py-2 bg-aashira-green text-white rounded hover:scale-105 transition"
          >
            Responsive Feeding
          </button>
        </div>
      </div>

      {/* Modal for displaying feeding information */}
      {isModalOpen && (
        <div className="modal-overlay fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
          <div className="modal-content bg-white p-6 rounded shadow-md max-w-md w-full">
            <h3 className="text-xl font-semibold mb-2">Feeding Info</h3>
            <p>{modalContent}</p>
            <button
              onClick={closeModal}
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BabyFeederTool;

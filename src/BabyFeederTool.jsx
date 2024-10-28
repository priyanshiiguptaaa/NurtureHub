import React, { useState, useMemo } from 'react';
import { Search, X, Baby, Apple, Clock, Award, Leaf, AlertCircle, ChevronRight } from 'lucide-react';

const BabyFeederTool = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFood, setSelectedFood] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');
  const [ageFilter, setAgeFilter] = useState('all');
  const [textureFilter, setTextureFilter] = useState('all');

  const foodData = [
    { 
      food: 'Applesauce', 
      age: '6+ months', 
      nutrition: 'Vitamins A, C', 
      texture: 'Smooth',
      benefits: 'Easy to digest, good for developing taste',
      preparation: 'Steam and puree fresh apples, or use unsweetened store-bought version',
      tips: 'Start with small portions to test tolerance',
      allergyInfo: 'Generally low allergenic risk'
    },
    { 
      food: 'Banana', 
      age: '6+ months', 
      nutrition: 'Potassium, Fiber, Vitamin B6', 
      texture: 'Soft',
      benefits: 'Natural sweetness, easy to mash',
      preparation: 'Mash ripe banana with fork, no cooking needed',
      tips: 'Choose ripe bananas with brown spots',
      allergyInfo: 'Rarely allergenic'
    },
    { 
      food: 'Sweet Potato', 
      age: '6+ months', 
      nutrition: 'Beta Carotene, Vitamin C', 
      texture: 'Smooth',
      benefits: 'Rich in nutrients, naturally sweet',
      preparation: 'Bake or steam until soft, puree until smooth',
      tips: 'Can be mixed with breast milk for familiar taste',
      allergyInfo: 'Low allergy risk'
    },
    { 
      food: 'Avocado', 
      age: '6+ months', 
      nutrition: 'Healthy Fats, Vitamin E', 
      texture: 'Creamy',
      benefits: 'Healthy brain development',
      preparation: 'Mash ripe avocado, serve immediately',
      tips: 'Use ripe but not brown avocados',
      allergyInfo: 'Generally safe, watch for latex allergy'
    },
    { 
      food: 'Rice Cereal', 
      age: '4+ months', 
      nutrition: 'Iron, B Vitamins', 
      texture: 'Smooth',
      benefits: 'Fortified with iron, easy to digest',
      preparation: 'Mix with breast milk or formula',
      tips: 'Start with thin consistency',
      allergyInfo: 'Generally well tolerated'
    }
  ];

  const ages = useMemo(() => ['all', ...new Set(foodData.map(food => food.age))], [foodData]);
  const textures = useMemo(() => ['all', ...new Set(foodData.map(food => food.texture))], [foodData]);

  const filteredFoods = useMemo(() => {
    return foodData.filter(food => {
      const matchesSearch = food.food.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesAge = ageFilter === 'all' || food.age === ageFilter;
      const matchesTexture = textureFilter === 'all' || food.texture === textureFilter;
      return matchesSearch && matchesAge && matchesTexture;
    });
  }, [searchTerm, ageFilter, textureFilter, foodData]);

  const handleSelectFood = (food) => {
    setSelectedFood(food);
    setSearchTerm(food.food);
  };

  const clearSearch = () => {
    setSearchTerm('');
    setSelectedFood(null);
  };

  const openModal = (content) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  const feedingTypes = [
    {
      title: 'Breastfeeding',
      icon: <Baby className="w-5 h-5" />,
      content: 'Breastfeeding provides essential nutrients and antibodies for the first six months, helping strengthen immunity and foster bonding. Benefits include:\n- Perfect nutrition\n- Enhanced immunity\n- Better digestion\n- Emotional bonding'
    },
    {
      title: 'Formula Feeding',
      icon: <Apple className="w-5 h-5" />,
      content: 'Formula Feeding is a complete nutrition alternative to breastfeeding. Key points:\n- Scientifically designed nutrition\n- Consistent ingredients\n- Easier to measure intake\n- Flexible feeding schedule'
    },
    {
      title: 'Combination Feeding',
      icon: <Clock className="w-5 h-5" />,
      content: 'Combination Feeding offers flexibility by mixing breast milk and formula. Benefits:\n- Best of both methods\n- Increased flexibility\n- Shared feeding responsibility\n- Maintained milk supply'
    },
    {
      title: 'Responsive Feeding',
      icon: <Award className="w-5 h-5" />,
      content: 'Responsive Feeding focuses on baby\'s cues for hunger and fullness. Guidelines:\n- Watch for hunger signs\n- Respect fullness signals\n- No forced feeding\n- Regular feeding schedule'
    },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-purple-600">Baby Feeding Guide</h1>
        <p className="text-gray-600 mt-2">Find the perfect food for your little one</p>
      </div>

      {/* Search and Filters */}
      <div className="space-y-4">
        <div className="relative">
          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search for baby food..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-10 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none"
          />
          {searchTerm && (
            <button onClick={clearSearch} className="absolute right-3 top-3 text-gray-400 hover:text-gray-600">
              <X className="h-4 w-4" />
            </button>
          )}
        </div>

        <div className="flex gap-4">
          <select
            value={ageFilter}
            onChange={(e) => setAgeFilter(e.target.value)}
            className="flex-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none"
          >
            <option value="all">All Ages</option>
            {ages.filter(age => age !== 'all').map(age => (
              <option key={age} value={age}>{age}</option>
            ))}
          </select>
          <select
            value={textureFilter}
            onChange={(e) => setTextureFilter(e.target.value)}
            className="flex-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none"
          >
            <option value="all">All Textures</option>
            {textures.filter(texture => texture !== 'all').map(texture => (
              <option key={texture} value={texture}>{texture}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Food List */}
      <div className="mt-6">
        {filteredFoods.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredFoods.map((food) => (
              <div
                key={food.food}
                onClick={() => handleSelectFood(food)}
                className={`p-4 rounded-lg cursor-pointer transition-all duration-200 hover:shadow-md ${
                  selectedFood?.food === food.food
                    ? 'bg-purple-50 border-2 border-purple-500'
                    : 'bg-gray-50 border border-gray-200'
                }`}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-semibold text-purple-600">{food.food}</h3>
                    <p className="text-gray-600">{food.nutrition}</p>
                    <div className="flex items-center mt-2 text-sm text-gray-500">
                      <Clock className="w-4 h-4 mr-1" />
                      <span>{food.age}</span>
                      <Leaf className="w-4 h-4 ml-3 mr-1" />
                      <span>{food.texture}</span>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-500">No food items found.</div>
        )}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={() => setIsModalOpen(false)}>
          <div className="bg-white w-full max-w-md p-6 rounded-lg relative" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <X className="w-6 h-6" />
            </button>
            <h2 className="text-2xl font-semibold text-purple-600 mb-4">{selectedFood ? selectedFood.food : ''}</h2>
            <p className="text-gray-700">{modalContent}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default BabyFeederTool;

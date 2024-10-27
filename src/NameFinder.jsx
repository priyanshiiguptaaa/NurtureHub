import React, { useState, useMemo } from 'react';
import { Search, X, Filter, Globe2, TrendingUp } from 'lucide-react';
import "./NameFinder.css"
const NameFinder = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedName, setSelectedName] = useState(null);
  const [originFilter, setOriginFilter] = useState('all');
  const [sortBy, setSortBy] = useState('alphabetical');

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

  const origins = useMemo(() => 
    ['all', ...new Set(nameData.map(name => name.origin))],
    []
  );

  const filteredAndSortedNames = useMemo(() => {
    let filtered = nameData.filter(({ name, origin }) => {
      const matchesSearch = name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesOrigin = originFilter === 'all' || origin === originFilter;
      return matchesSearch && matchesOrigin;
    });

    return filtered.sort((a, b) => {
      if (sortBy === 'popularity') {
        return a.popularity - b.popularity;
      } else if (sortBy === 'alphabetical') {
        return a.name.localeCompare(b.name);
      }
      return 0;
    });
  }, [searchTerm, originFilter, sortBy]);

  const handleSelectName = (name) => {
    setSelectedName(name);
  };

  const clearSearch = () => {
    setSearchTerm('');
    setSelectedName(null);
  };

  return (
    <div className="w-full max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-6">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-indigo-600">Name Explorer</h1>
      </div>

      {/* Search and Filters Section */}
      <div className="space-y-4">
        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search for a name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-10 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
          />
          {searchTerm && (
            <button
              onClick={clearSearch}
              className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>

        {/* Filters */}
        <div className="flex gap-4">
          <select
            value={originFilter}
            onChange={(e) => setOriginFilter(e.target.value)}
            className="flex-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
          >
            {origins.map(origin => (
              <option key={origin} value={origin}>
                {origin.charAt(0).toUpperCase() + origin.slice(1)}
              </option>
            ))}
          </select>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="flex-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
          >
            <option value="alphabetical">Alphabetical</option>
            <option value="popularity">Popularity</option>
          </select>
        </div>
      </div>

      {/* Results Section */}
      <div className="mt-6">
        {filteredAndSortedNames.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredAndSortedNames.map((nameInfo) => (
              <div
                key={nameInfo.name}
                onClick={() => handleSelectName(nameInfo)}
                className={`p-4 rounded-lg cursor-pointer transition-all duration-200 hover:shadow-md ${
                  selectedName?.name === nameInfo.name
                    ? 'bg-indigo-50 border-2 border-indigo-500'
                    : 'bg-gray-50 border border-gray-200'
                }`}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-semibold text-indigo-600">
                      {nameInfo.name}
                    </h3>
                    <p className="text-gray-600">{nameInfo.meaning}</p>
                  </div>
                  <div className="flex items-center">
                    <Globe2 className="h-4 w-4 text-gray-400 mr-1" />
                    <span className="text-sm text-gray-500">{nameInfo.origin}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8">
            <p className="text-gray-500">No names found matching your criteria</p>
          </div>
        )}
      </div>

      {/* Selected Name Details */}
      {selectedName && (
        <div className="mt-6 p-6 bg-white rounded-lg border-2 border-indigo-100 shadow-lg">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-2xl font-bold text-indigo-600">{selectedName.name}</h2>
              <p className="text-lg text-gray-700 mt-2">{selectedName.meaning}</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <Globe2 className="h-5 w-5 text-gray-400 mr-2" />
                <span className="text-gray-600">{selectedName.origin}</span>
              </div>
              <div className="flex items-center">
                <TrendingUp className="h-5 w-5 text-gray-400 mr-2" />
                <span className="text-gray-600">Rank #{selectedName.popularity}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NameFinder;
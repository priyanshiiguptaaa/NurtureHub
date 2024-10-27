import React, { useState, useMemo } from 'react';
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer 
} from 'recharts';
import { Ruler, Weight, Calendar, User, Trash2, Activity, ChevronDown, ChevronUp, AlertCircle } from 'lucide-react';

const GrowthTracker = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    height: '',
    weight: '',
    date: new Date().toISOString().split('T')[0]
  });
  const [growthData, setGrowthData] = useState([]);
  const [message, setMessage] = useState('');
  const [showDetails, setShowDetails] = useState(false);

  // WHO Growth Standards (simplified approximation)
  const heightPercentiles = {
    male: {
      p5: (age) => 76.0 + (age * 6),
      p50: (age) => 77.0 + (age * 7),
      p95: (age) => 78.0 + (age * 8)
    },
    female: {
      p5: (age) => 75.0 + (age * 5.8),
      p50: (age) => 76.0 + (age * 6.8),
      p95: (age) => 77.0 + (age * 7.8)
    }
  };

  const calculateBMI = (weight, height) => {
    const heightInMeters = height / 100;
    return (weight / (heightInMeters * heightInMeters)).toFixed(1);
  };

  const getBMICategory = (bmi, age) => {
    if (age < 20) {
      if (bmi < 15) return { category: 'Underweight', color: 'text-yellow-600' };
      if (bmi < 21) return { category: 'Normal', color: 'text-green-600' };
      if (bmi < 25) return { category: 'Overweight', color: 'text-yellow-600' };
      return { category: 'Obese', color: 'text-red-600' };
    } else {
      if (bmi < 18.5) return { category: 'Underweight', color: 'text-yellow-600' };
      if (bmi < 25) return { category: 'Normal', color: 'text-green-600' };
      if (bmi < 30) return { category: 'Overweight', color: 'text-yellow-600' };
      return { category: 'Obese', color: 'text-red-600' };
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEntry = {
      ...formData,
      age: parseFloat(formData.age),
      height: parseFloat(formData.height),
      weight: parseFloat(formData.weight),
      bmi: calculateBMI(parseFloat(formData.weight), parseFloat(formData.height)),
      date: formData.date
    };
    setGrowthData([...growthData, newEntry]);
    setMessage(`Growth data recorded for ${formData.name}`);
    
    // Reset form except name
    setFormData(prev => ({
      ...prev,
      age: '',
      height: '',
      weight: '',
      date: new Date().toISOString().split('T')[0]
    }));
  };

  const deleteEntry = (index) => {
    setGrowthData(prev => prev.filter((_, i) => i !== index));
    setMessage('Entry deleted successfully');
  };

  const sortedData = useMemo(() => {
    return [...growthData].sort((a, b) => new Date(a.date) - new Date(b.date));
  }, [growthData]);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-gradient-to-br from-purple-50 to-white rounded-xl shadow-lg p-6">
        <div className="space-y-2 mb-6">
          <h1 className="text-3xl font-bold text-purple-800">Growth Tracker</h1>
          <p className="text-gray-600">Monitor your child's growth and development</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium flex items-center gap-2">
                <User size={16} />
                Child's Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-purple-400 focus:border-purple-400 outline-none"
                placeholder="Enter child's name"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium flex items-center gap-2">
                <Calendar size={16} />
                Age (years)
              </label>
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleInputChange}
                required
                step="0.1"
                min="0"
                max="18"
                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-purple-400 focus:border-purple-400 outline-none"
                placeholder="Enter age"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium flex items-center gap-2">
                <Ruler size={16} />
                Height (cm)
              </label>
              <input
                type="number"
                name="height"
                value={formData.height}
                onChange={handleInputChange}
                required
                step="0.1"
                min="30"
                max="220"
                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-purple-400 focus:border-purple-400 outline-none"
                placeholder="Enter height"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium flex items-center gap-2">
                <Weight size={16} />
                Weight (kg)
              </label>
              <input
                type="number"
                name="weight"
                value={formData.weight}
                onChange={handleInputChange}
                required
                step="0.1"
                min="2"
                max="150"
                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-purple-400 focus:border-purple-400 outline-none"
                placeholder="Enter weight"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium flex items-center gap-2">
                <Calendar size={16} />
                Date
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                required
                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-purple-400 focus:border-purple-400 outline-none"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center gap-2"
          >
            <Activity size={20} />
            Record Growth Data
          </button>
        </form>

        {message && (
          <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start gap-2">
            <Activity className="h-5 w-5 text-green-600 mt-0.5" />
            <p className="text-green-800">{message}</p>
          </div>
        )}

        {growthData.length > 0 && (
          <div className="mt-8 space-y-6">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-purple-800 mb-4">Growth Charts</h3>
              <div className="h-64 w-full">
                <ResponsiveContainer>
                  <LineChart data={sortedData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis yAxisId="height" orientation="left" label={{ value: 'Height (cm)', angle: -90, position: 'insideLeft' }} />
                    <YAxis yAxisId="weight" orientation="right" label={{ value: 'Weight (kg)', angle: 90, position: 'insideRight' }} />
                    <Tooltip />
                    <Legend />
                    <Line yAxisId="height" type="monotone" dataKey="height" stroke="#8884d8" name="Height" />
                    <Line yAxisId="weight" type="monotone" dataKey="weight" stroke="#82ca9d" name="Weight" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            <button
              onClick={() => setShowDetails(!showDetails)}
              className="flex items-center gap-2 text-lg font-semibold text-purple-800 hover:text-purple-600 transition-colors"
            >
              Detailed Records
              {showDetails ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>

            {showDetails && (
              <div className="space-y-4">
                {sortedData.map((data, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg shadow-sm border flex items-start justify-between">
                    <div>
                      <h4 className="font-semibold text-purple-800">{data.name}</h4>
                      <p className="text-gray-600">Date: {new Date(data.date).toLocaleDateString()}</p>
                      <div className="grid grid-cols-2 gap-4 mt-2">
                        <p className="text-gray-600">Age: {data.age} years</p>
                        <p className="text-gray-600">Height: {data.height} cm</p>
                        <p className="text-gray-600">Weight: {data.weight} kg</p>
                        <p className={`font-medium ${getBMICategory(data.bmi, data.age).color}`}>
                          BMI: {data.bmi} ({getBMICategory(data.bmi, data.age).category})
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => deleteEntry(index)}
                      className="text-red-500 hover:text-red-700 transition-colors"
                    >
                      <Trash2 size={20} />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default GrowthTracker;
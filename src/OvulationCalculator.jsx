import React, { useState } from 'react';
import './OvulationCalculator.css'; // Make sure this path is correct

const OvulationCalculator = () => {
  const [cycleLength, setCycleLength] = useState(28); // Default cycle length
  const [lastPeriodDate, setLastPeriodDate] = useState('');
  const [ovulationDate, setOvulationDate] = useState(null);

  const calculateOvulation = () => {
    if (lastPeriodDate) {
      const lastDate = new Date(lastPeriodDate);
      const ovulationDay = new Date(lastDate);
      ovulationDay.setDate(lastDate.getDate() + cycleLength - 14); // Approximate ovulation day
      setOvulationDate(ovulationDay.toLocaleDateString());
    }
  };

  return (
    <div className="calculator-container">
      <h2>Calculate Your Ovulation</h2>
      <label htmlFor="lastPeriod">Last Period Date:</label>
      <input
        id="lastPeriod"
        type="date"
        value={lastPeriodDate}
        onChange={(e) => setLastPeriodDate(e.target.value)}
      />
      <label htmlFor="cycleLength">Cycle Length (days):</label>
      <input
        id="cycleLength"
        type="number"
        value={cycleLength}
        onChange={(e) => setCycleLength(e.target.value)}
      />
      <button onClick={calculateOvulation}>Calculate Ovulation Date</button>
      {ovulationDate && <p className="result">Your ovulation date is approximately: {ovulationDate}</p>}
    </div>
  );
};

export default OvulationCalculator;

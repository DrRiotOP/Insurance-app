import React, { useState } from 'react';
import { InsuranceService } from '../../Services/InsuranceService';
import DetailsModal from './DetailsModal';

function Calculator() {
  const [year, setYear] = useState('');
  const [vehicleValue, setVehicleValue] = useState('');
  const [premium, setPremium] = useState(null);
  const [modelType, setModelType] = useState('');
  const [isModalOpen, setModalOpen] = useState(false);

  function updateInput(ev){
      setModelType({})
  }
  const modAmount = 2000;
  // let years={year};
  const handleAddonChange = (value) => {
    switch (value) {
      case "mod1": modAmount = 2000; break;
      case "mod2": modAmount = 2000 * 3; break;
      case "mod3": modAmount = 2000 * 4; break;
      case "mod4": modAmount = 2000 * 5; break;
      default: break;
    }
  }

  const calculatePremium = () => {
    // Simplified premium calculation formula (for demonstration)
    // Premium = (Age * 10) + (Vehicle Value / 100)
    const yearPremium = (2023 - year) * 100;
    const vehicleValuePremium = vehicleValue / 100;
    const totalPremium = yearPremium + vehicleValuePremium + modAmount;
    setPremium(totalPremium.toFixed(2)); // Round to two decimal places
    setModalOpen(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    calculatePremium();
    InsuranceService.updateVehicle(0, year);
    // alert(year);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  }

  return (
    <div className='carinsurance'>
      <div className="calculator">
        <h1 className="title"> Car Insurance Premium</h1>
        <br />
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="year">Year of purchase:</label>
            <input type="number" id="year" value={year} onChange={(e) => setYear(e.target.value)} min={2000} max={2023} required />
          </div>
          <hr />
          <div>
            <label htmlFor="vehicleValue">Vehicle Value (Rs.):</label>
            <input type="number" id="vehicleValue" value={vehicleValue} onChange={(e) => setVehicleValue(e.target.value)} required />
          </div>
          <hr />
          <div>
            <label htmlFor="models">Select the Model:</label>
            <select multiple id="models" value={modelType} onChange={handleAddonChange()}>
              <option value="mod1">Hatch Back</option>
              <option value="mod2">Sedan</option>
              <option value="mod3">SUV</option>
              <option value="mod4">MUV</option>
            </select>
          </div>
          <hr />
          <button type="submit">Calculate Premium</button>
          <hr />
        </form>
        {premium !== null && (
          <DetailsModal
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            details={{ year, vehicleValue, modelType }}
            premium={premium}
            isBikeCalculator={false}

          />
        )}
      </div>
    </div>
  );
}
export default Calculator;
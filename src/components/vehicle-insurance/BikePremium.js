import React, { useState } from 'react';
import { InsuranceService } from '../../Services/InsuranceService';
import DetailsModal from './DetailsModal';
import './bikepremium.scss';

function BikeCalculator() {
  const [year, setYear] = useState('');
  const [vehicleValue, setVehicleValue] = useState('');
  const [premium, setPremium] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);


  const calculatePremium = () => {
    const yearPremium = (2023-year) * 100;
    const vehicleValuePremium = vehicleValue / 100;
    const totalPremium = yearPremium + vehicleValuePremium;
    setPremium(totalPremium.toFixed(2));
    setModalOpen(true);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    InsuranceService.updateVehicle(0,year);
    calculatePremium();
  };

  const handleCloseModal = (e) => {
    setModalOpen(false);
  }

  return (
    <div className='bikepremium'>
    <div className="calculator">
    <h1 className="title"> Bike Insurance Premium</h1>
    <br/>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="year">Year of purchase:</label>
          <input type="number" id="year" value={year} onChange={(e) => setYear(e.target.value)} min={2000} max={2023}required/>
        </div>
        <hr/>
        <div>
          <label htmlFor="vehicleValue">Vehicle Value (Rs.):</label>
          <input type="number" id="vehicleValue" value={vehicleValue} onChange={(e) => setVehicleValue(e.target.value)} required/>
        </div>
        <hr/>
        <button type="submit">Calculate Premium</button>
        <hr/>
      </form>
      {premium !== null && (
        <DetailsModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        details={{year, vehicleValue}}
        premium={premium}
        isBikeCalculator={true}
        />
      )}
    </div>
    </div>
  );
}
export default BikeCalculator;
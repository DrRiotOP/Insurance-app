import React from 'react';
import Footer from "./components/footer/Footer";

import Home from "./pages/home/Home";
import In from './pages/home/in/In';
import Up from './pages/home/up/Up';
import "bootstrap/dist/css/bootstrap.min.css";
import "./scss/main.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';

import Vehicle from './pages/home/vehicle/Vehicle';
import Bike from './pages/bike/Bike';
import Car from './pages/car/Car'
import CarQuotePage from './components/vehicle-insurance/CarQuotePage';
import Carpremium from './pages/carpremium/Carpremium';
import Bikepremium from './pages/bikepremium/Bikepremium';
import DependentList from './components/health-insurance/DependentList';
import AddDependent from './components/health-insurance/AddDependent';





const App = () => {
  return (
    <div>
      <Router>
        
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/SignInPage' element={<In />} />
          <Route path='/SignUpPage' element={<Up />} />
          {/* <Route path='/health-insurance' element={<health-insurance />} /> */}
          <Route path='/vehicle-insurance' element={<Vehicle />} />
          <Route path='/bike-quote' element={<Bike/>} />
          <Route path='/car-quote' element={<Car/>} />
          <Route path='/bike-premium' element={<Bikepremium/>} />
          <Route path='/car-premium' element={<Carpremium/>} />
          <Route path='/dependent-list' element={<DependentList/>} />
          <Route path='/add-dependent' element={<AddDependent/>} />


          

          
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

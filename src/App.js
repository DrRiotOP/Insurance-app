import React from 'react';
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import In from './pages/home/in/In';
import Up from './pages/home/up/Up';
import "bootstrap/dist/css/bootstrap.min.css";
import "./scss/main.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Banner from './components/banner/Banner';




const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/SignInPage' element={<In/>}/>
          <Route path='/SignUpPage' element={<Up/>}/>
          {/* <Route path='/health-insurance' element={<health-insurance />} />
          <Route path='/vehicle-insurance' element={<vehicle-insurance />} /> */}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

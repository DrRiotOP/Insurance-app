import React, { useState,useEffect } from 'react';
import { InsuranceService } from '../../Services/InsuranceService';

import { useNavigate} from 'react-router-dom';
import "./bikequote.scss";

const CarQuotePage = () => {
  const[state,setState]=useState({
    vehicle:{
        "RegistrationNumber":"",
        "Model":"",
        "Year":0,
        "Type":"FourWheeler",
        "UserId":0
    }
});

const navigate=useNavigate();


let {vehicle}=state;
// let navigate=useNavigate();

function updateInput(ev){
    debugger;
    setState({
        ...state,vehicle:{
            ...state.vehicle,[ev.target.name]:ev.target.value
        }
    })
}


  const [userState,setUser]=useState({
    users:[]
})

useEffect(()=>{
    async function getData(){
        const res=await InsuranceService.getAllUsers();
        setUser({  
            ...userState,users:res.data
        })
    }
    getData();  
},[]);
let {users}=userState;

function onSubmit(ev){
   
    // alert("Hello")
    users.map((e)=>{
        if(e.Flag==3)
        {
            vehicle.UserId=e.UserId;
        }      
    })
     ev.preventDefault();
    InsuranceService.addVehicle(vehicle).then((res)=>{
        alert("Vehicle added successfully");
        navigate('/car-premium');
    })
    // alert(vehicle.RegistrationNumber);
  }

  return (
    <div className="carinsurance">
      <h1 className="title"> Car Insurance Quote</h1>
      <br/>
      <form onSubmit={onSubmit}>
        <label>
          Registration Number:
          <input
            type="text"
            name="RegistrationNumber"
            value={vehicle.RegistrationNumber}
            onChange={updateInput}
            required
          />
        </label>
        <hr />

        {/* <label>
          Vehicle Type:
          <select
            name="vehicleType"
            value={formData.vehicleType}
            onChange={handleInputChange}
            required
          >
            <option value="hatchback">Hatchback</option>
            <option value="sedan">Sedan</option>
            <option value="suv">SUV</option>
            <option value="muv">MUV</option>
          </select>
        </label>
        <br /> */}

        <label>
          Vehicle Model Name:
          <input
            type="text"
            name="Model"
            value={vehicle.Model}
            onChange={updateInput}
            required
          />
        </label>
        <hr />

        {/* <label>
          Purchase Date:
          <input
            type="date"
            name="purchaseDate"
            value={formData.purchaseDate}
            onChange={handleInputChange}
            required
          />
        </label>
        <br /> */}

        {/* <label>
          Owner Contact Number:
          <input
            type="tel"
            name="ownerContactNumber"
            pattern="\d*"
            maxLength="10"
            value={formData.ownerContactNumber}
            onChange={handleInputChange}
            required
          />
        </label> */}
        <hr />
        <button type="submit">Get Car Quote</button>
        <hr/>
      </form>
    </div>
  );
};

export default CarQuotePage;

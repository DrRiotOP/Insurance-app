
import React, { useState,useEffect } from 'react';
import { useNavigate} from 'react-router-dom';
import "./bikequote.scss";
import { InsuranceService } from '../../Services/InsuranceService';

const BikeQuotePage = () => {
  const[state,setState]=useState({
    vehicle:{
      "RegistrationNumber":"",
      "Model":"",
      "Year":0,
      "Type":"TwoWheeler",
      "UserId":0,
      "VehiclePremium":0
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
        // alert("Vehicle added successfully");
        navigate('/bike-premium');
    })
    // alert(vehicle.Regi
  }
  return (
    <div className="bikeinsurance">
      <h1 className="title"> Bike Insurance Quote</h1>
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
        <hr/>
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
        <hr/>
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
{/* 
        <label>
          Owner Contact Number:
          <input
            type="tel" // Use type "tel" for telephone numbers
            name="ownerContactNumber"
            pattern="\d*" // Allow only digits
            maxLength="10" // Set maximum length to 10
            value={formData.ownerContactNumber}
            onChange={handleInputChange}
            required
          />
        </label> */}
        
        <button type="submit">Get Bike Quote</button>
        <hr/>
      </form>
    </div>
  );
};

export default BikeQuotePage;
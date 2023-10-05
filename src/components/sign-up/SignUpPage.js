import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import "./signUpPage.scss";
import { InsuranceService } from "../../Services/InsuranceService";




const SignUpPage = () => {
  const[state,setState]=useState({
    user:{
        "UserName":"",
        "Email":"",
        "Password":"",
        "Age":0,
        "Flag":0,

    }
});

let {user}=state;
let navigate=useNavigate();

function updateInput(ev){
    debugger;
    setState({
        ...state,user:{
            ...state.user,[ev.target.name]:ev.target.value
        }
    })
}

function onSubmit(ev){
    ev.preventDefault();
    alert(user.UserName+" "+user.Flag+" "+user.Email+" "+user.Password);
    InsuranceService.addUser(user).then((res)=>{
        alert("User added successfully");
        navigate('/');
    })
  }

  return (
    <div className="sign-up-page">
      <h1 className="title">Register</h1>

      <form onSubmit={onSubmit}>
        <div className="input-container">

        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="UserName"
          value={user.UserName}
          onChange={updateInput}
        />
        </div>
       
       
        <div className="input-container">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="Email"
          value={user.Email}
          onChange={updateInput}
        />
        </div>

        <div className="input-container">
        <label htmlFor="age">Age</label>
        <input
          type="number"
          id="age"
          name="Age"
          value={user.Age}
          onChange={updateInput}
        />
        </div>
       
        
        <div className="input-container">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="Password"
          value={user.Password}
          onChange={updateInput}
        />
        </div>
      
        
        <div className="button-container"><button type="submit"  >Sign Up</button></div>
        
      </form>

      <p>
        Already have an account? <Link to="/SignInPage">Sign in</Link>
      </p>
    </div>
  );
};

export default SignUpPage;
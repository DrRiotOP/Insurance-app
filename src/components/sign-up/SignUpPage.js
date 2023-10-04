import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./signUpPage.scss";




const SignUpPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();   
  };

  return (
    <div className="sign-up-page">
      <h1 className="title">Register</h1>

      <form onSubmit={handleSubmit}>
        <div className="input-container">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        </div>
       
       
        <div className="input-container">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        </div>
       
        
        <div className="input-container">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        </div>
      
        
        <div className="button-container"><button type="submit" >Sign Up</button></div>
        
      </form>

      <p>
        Already have an account? <Link to="/SignInPage">Sign in</Link>
      </p>
    </div>
  );
};

export default SignUpPage;
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./signInPage.scss";




const SignInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();


  };

  return (
    <div className="sign-in-page">
      <h1 className="title"> Sign In</h1>
      <form onSubmit={handleSubmit}>
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
        
        <div className="button-container">
        <button type="btn">Sign In</button>
        </div>
        
      </form>

      <p>
        Don't have an account? <Link to="/SignUpPage">Sign up</Link>
      </p>
    </div>
  );
};

export default SignInPage;
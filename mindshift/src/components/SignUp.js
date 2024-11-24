import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

const SignUp = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1>Sign-up</h1>
      <form className="form">
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <input type="password" placeholder="Confirm Password" required />
        <button onClick={() => navigate("/mood-check")} className="btn">Sign Up</button>
        <div className="divider">Or With</div>
        <button className="social-btn">Sign up with Facebook</button>
        <button className="social-btn">Sign up with Google</button>
      </form>
    </div>
  );
};

export default SignUp;

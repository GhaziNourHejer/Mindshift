import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

const MoodCheck = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1>How are you today?</h1>
      <textarea placeholder="Type here..." rows="4"></textarea>
      <button onClick={() => navigate("/doctor-selection")} className="btn">Continue</button>
    </div>
  );
};

export default MoodCheck;

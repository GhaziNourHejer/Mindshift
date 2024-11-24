import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

const DoctorSelection = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1>Select</h1>
      <div className="options">
        <label>
          <input type="radio" name="session" value="Individual" /> Individual
        </label>
        <label>
          <input type="radio" name="session" value="Group" /> Group
        </label>
        <button onClick={() => navigate("/available-doctors")} className="btn">Confirm</button>
      </div>
    </div>
  );
};

export default DoctorSelection;

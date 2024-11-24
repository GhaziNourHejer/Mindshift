import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

const AvailableDoctors = () => {
  const doctors = [
    { id: 1, name: "Dr. John Smith", details: "Therapist", rating: 4.8 },
    { id: 2, name: "Dr. Emily Rose", details: "Psychiatrist", rating: 4.6 },
  ];

  const navigate = useNavigate();

  return (
    <div className="container">
      <h1>Available Doctors</h1>
      <ul className="doctor-list">
        {doctors.map((doctor) => (
          <li key={doctor.id} onClick={() => navigate(`/doctor/${doctor.id}`)}>
            <h3>{doctor.name}</h3>
            <p>{doctor.details}</p>
            <p>Rating: {doctor.rating}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AvailableDoctors;

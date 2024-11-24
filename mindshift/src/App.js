import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./components/SignUp";
import MoodCheck from "./components/MoodCheck";
import DoctorSelection from "./components/DoctorSelection";
import AvailableDoctors from "./components/AvailableDoctors";
import Notes from "./components/Notes";
import Community from "./components/Community";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/mood-check" element={<MoodCheck />} />
        <Route path="/doctor-selection" element={<DoctorSelection />} />
        <Route path="/available-doctors" element={<AvailableDoctors />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/community" element={<Community />} />
      </Routes>
    </Router>
  );
}

export default App;

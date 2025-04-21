import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";
import BMI from "./components/BMI";
import MedicineGuide from "./components/MedicineGuide";
import HealthRiskChecker from "./components/HealthRiskChecker";
import DoctorBot from "./components/DoctorBot";
import UploadDocs from "./components/UploadDocs";
import "./App.css";

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      {user ? (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/bmi" element={<BMI />} />
            <Route path="/medicine" element={<MedicineGuide />} />
            <Route path="/risk" element={<HealthRiskChecker />} />
            <Route path="/bot" element={<DoctorBot />} />
            <Route path="/upload" element={<UploadDocs />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </>
      ) : (
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      )}
    </div>
  );
}

export default App;

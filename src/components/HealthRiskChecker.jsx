import React, { useState } from "react";
import "./HealthRisk.css";

const HealthRisk = () => {
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [smoking, setSmoking] = useState("No");
  const [medicalCondition, setMedicalCondition] = useState("None");
  const [riskLevel, setRiskLevel] = useState(null);

  const calculateRisk = () => {
    let riskScore = 0;

    // Age factor
    if (age >= 50) riskScore += 2;
    else if (age >= 30) riskScore += 1;

    // BMI calculation
    const bmi = weight / ((height / 100) * (height / 100));
    if (bmi >= 30) riskScore += 2; // Obese
    else if (bmi >= 25) riskScore += 1; // Overweight

    // Smoking factor
    if (smoking === "Yes") riskScore += 2;

    // Medical conditions
    if (medicalCondition !== "None") riskScore += 3;

    // Determine risk level
    if (riskScore >= 5) {
      setRiskLevel("High Risk ⚠️");
    } else if (riskScore >= 3) {
      setRiskLevel("Moderate Risk ⚠️");
    } else {
      setRiskLevel("Low Risk ✅");
    }
  };

  return (
    <div className="health-risk">
      <h2>Health Risk Checker</h2>

      <label>Age:</label>
      <input
        type="number"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        placeholder="Enter your age"
      />

      <label>Weight (kg):</label>
      <input
        type="number"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
        placeholder="Enter weight"
      />

      <label>Height (cm):</label>
      <input
        type="number"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
        placeholder="Enter height"
      />

      <label>Do you smoke?</label>
      <select value={smoking} onChange={(e) => setSmoking(e.target.value)}>
        <option value="No">No</option>
        <option value="Yes">Yes</option>
      </select>

      <label>Medical Conditions:</label>
      <select
        value={medicalCondition}
        onChange={(e) => setMedicalCondition(e.target.value)}
      >
        <option value="None">None</option>
        <option value="Diabetes">Diabetes</option>
        <option value="Heart Disease">Heart Disease</option>
        <option value="Hypertension">Hypertension</option>
      </select>

      <button onClick={calculateRisk}>Check Risk</button>

      {riskLevel && <p className="risk-result">Health Risk: {riskLevel}</p>}
    </div>
  );
};

export default HealthRisk;

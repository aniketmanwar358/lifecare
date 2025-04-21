import React, { useState } from "react";
import "./BMI.css";

const BMI = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [status, setStatus] = useState("");
  const [statusColor, setStatusColor] = useState("black");

  const calculateBMI = () => {
    const weightNum = parseFloat(weight);
    const heightNum = parseFloat(height);

    // Convert height from cm to meters if needed
    const heightInMeters = heightNum >= 100 ? heightNum / 100 : heightNum;

    if (weightNum > 0 && heightInMeters > 0) {
      const bmiValue = (weightNum / heightInMeters ** 2).toFixed(2);
      setBmi(bmiValue);

      // Determine BMI Category
      if (bmiValue < 18.5) {
        setStatus("Underweight");
        setStatusColor("blue");
      } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
        setStatus("Normal weight");
        setStatusColor("green");
      } else if (bmiValue >= 25 && bmiValue < 29.9) {
        setStatus("Overweight");
        setStatusColor("orange");
      } else {
        setStatus("Obese");
        setStatusColor("red");
      }
    } else {
      setBmi(null);
      setStatus("Please enter valid values!");
      setStatusColor("black");
    }
  };

  return (
    <div className="bmi">
      <h2>BMI Calculator</h2>
      <div className="input-group">
        <input
          type="number"
          placeholder="Weight (kg)"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
        <input
          type="number"
          placeholder="Height (cm or m)"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
      </div>
      <button onClick={calculateBMI}>Calculate BMI</button>

      {bmi && (
        <div className="result" style={{ color: statusColor }}>
          <p>
            Your BMI: <strong>{bmi}</strong> ({status})
          </p>
          <div className="bmi-info">
            <p>
              <strong>BMI Categories:</strong>
              <ul>
                <li><span style={{ color: "blue" }}>Underweight</span>: less than 18.5</li>
                <li><span style={{ color: "green" }}>Normal weight</span>: 18.5–24.9</li>
                <li><span style={{ color: "orange" }}>Overweight</span>: 25–29.9</li>
                <li><span style={{ color: "red" }}>Obese</span>: 30 or more</li>
              </ul>
            </p>
            <p>
              <strong>Health Advice:</strong>
              {status === "Underweight" && " You might need to consult a healthcare professional to improve your nutrition."}
              {status === "Normal weight" && " Keep maintaining a healthy lifestyle!"}
              {status === "Overweight" && " Consider adjusting your diet and exercise for a healthier weight."}
              {status === "Obese" && " It's recommended to consult with a healthcare provider for a personalized health plan."}
            </p>
          </div>
        </div>
      )}

    </div>
  );
};

export default BMI;

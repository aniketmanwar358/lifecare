import React, { useState } from "react";
import "./MedicineGuide.css";

const MedicineGuide = () => {
  const [query, setQuery] = useState("");
  const [medicine, setMedicine] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const searchMedicine = async () => {
    if (!query) {
      setError("Please enter a medicine name.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        `https://api.fda.gov/drug/label.json?search=active_ingredient:${query}`
      );
      const data = await response.json();

      if (data.results && data.results.length > 0) {
        setMedicine(data.results[0]);
      } else {
        setMedicine(null);
        setError("Medicine not found.");
      }
    } catch (err) {
      setError("Error fetching data. Please try again later.");
      setMedicine(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="medicine-guide">
      <h2 className="medicine-guide-title">Medicine Guide</h2>

      {/* Search Box */}
      <div className="medicine-search">
        <input
          type="text"
          className="medicine-search-input"
          placeholder="Enter medicine name"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="medicine-search-button" onClick={searchMedicine}>
          Search
        </button>
      </div>

      {/* Loading State */}
      {loading && <p className="medicine-loading">Loading...</p>}

      {/* Error Message */}
      {error && <p className="medicine-error">{error}</p>}

      {/* Medicine Details */}
      {medicine && (
        <div className="medicine-card">
          <h3 className="medicine-name">{medicine.brand_name?.[0]}</h3>
          <p className="medicine-purpose">
            <strong>Purpose:</strong> {medicine.purpose?.[0] || "N/A"}
          </p>
          <p className="medicine-ingredients">
            <strong>Active Ingredients:</strong> {medicine.active_ingredient?.join(", ") || "N/A"}
          </p>
          <p className="medicine-dosage">
            <strong>Dosage Information:</strong> {medicine.dosage_and_administration?.[0] || "N/A"}
          </p>
          <p className="medicine-side-effects">
            <strong>Side Effects:</strong> {medicine.side_effects?.[0] || "N/A"}
          </p>
          <p className="medicine-warning">
            <strong>Warnings:</strong> {medicine.warnings?.[0] || "N/A"}
          </p>
        </div>
      )}
    </div>
  );
};

export default MedicineGuide;

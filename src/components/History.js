import React, { useState } from "react";
import "./history.css"; // Import your CSS file

function History() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSection, setSelectedSection] = useState("assurance");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSectionChange = (section) => {
    setSelectedSection(section);
  };

  return (
    <div>
      <header className="header">
        <div className="logo">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/41/CASH_Assurances_Logo.svg"
            alt="CASH Assurances"
            height="40px"
            width="100px"
          />
        </div>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Rechercher..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="search-input"
          />
        </div>
      </header>
      <div className="history-container">
        <div className="history-header">
          <h1 className="history-heading">Historique</h1>
        </div>
        <div className="history-sections">
          <button
            className={`section-button ${
              selectedSection === "assurance" ? "active" : ""
            }`}
            onClick={() => handleSectionChange("assurance")}
          >
            Les Polices d'assurance
          </button>
          <button
            className={`section-button ${
              selectedSection === "sinistre" ? "active" : ""
            }`}
            onClick={() => handleSectionChange("sinistre")}
          >
            Déclaration de Sinistre
          </button>
        </div>
        {/* Display history items based on selected section and search query */}
      </div>
    </div>
  );
}

export default History;

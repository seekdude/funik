import React from "react";

const NearbySearch = ({ performNearbySearch }) => {
  const handleSearch = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userLocation = [position.coords.longitude, position.coords.latitude];
          const type = document.getElementById("place-type").value;
          performNearbySearch(userLocation, type);
        },
        (error) => alert("Could not retrieve location: " + error.message)
      );
    } else {
      alert("Geolocation not supported by your browser.");
    }
  };

  return (
    <div id="nearby-search-container" style={containerStyle}>
      <select id="place-type" style={selectStyle}>
        <option value="Hospital">Hospital</option>
        <option value="School">School</option>
        <option value="Eat">Restaurant</option>
        <option value="Transport">Transport</option>
        <option value="Shopping">Shopping</option>
        <option value="Children">Children's Activities</option>
      </select>
      <button onClick={handleSearch} style={buttonStyle}>
        Search Nearby
      </button>
    </div>
  );
};

const containerStyle = {
  position: "absolute",
  top: "80px",
  left: "10px",
  zIndex: 10,
  backgroundColor: "white",
  padding: "10px",
  borderRadius: "5px",
  boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
};

const selectStyle = {
  marginRight: "10px",
  padding: "5px",
  fontSize: "14px",
};

const buttonStyle = {
  padding: "5px 10px",
  backgroundColor: "#007bff",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};

export default NearbySearch;

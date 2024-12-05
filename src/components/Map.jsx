import React, { useEffect } from "react";
import maplibregl from "maplibre-gl";

const Map = () => {
  useEffect(() => {
    // Initialize map
    const map = new maplibregl.Map({
      container: "map-container",
      style: "https://api.baato.io/api/v1/styles/breeze?key=bpk.iFfsd6-dNyJV9BhF1pb_FHpRu0aFU2miSLu9wYiCifqk",
      center: [85.3185, 27.7017], // Default starting position [lng, lat]
      zoom: 14,
    });

    // Add navigation controls
    map.addControl(new maplibregl.NavigationControl(), "top-right");

    // Fly to the user's location
    const flyToCurrentLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const userLocation = [position.coords.longitude, position.coords.latitude];
            map.flyTo({ center: userLocation, zoom: 14, essential: true });

            new maplibregl.Marker({ color: "blue" })
              .setLngLat(userLocation)
              .setPopup(new maplibregl.Popup().setHTML("<b>You are here!</b>"))
              .addTo(map);
          },
          (error) => alert("Could not retrieve location: " + error.message)
        );
      } else {
        alert("Geolocation not supported by your browser.");
      }
    };

    // Add event listener for the Fly button
    document.getElementById("fly-button").addEventListener("click", flyToCurrentLocation);
  }, []);

  return (
    <div>
      <div id="map-container" style={{ width: "100vw", height: "100vh" }}></div>
      <button id="fly-button" style={buttonStyle}>
        Fly to My Location
      </button>
    </div>
  );
};

const buttonStyle = {
  position: "absolute",
  top: "10px",
  left: "10px",
  zIndex: 10,
  padding: "10px 20px",
  backgroundColor: "#007bff",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};

export default Map;

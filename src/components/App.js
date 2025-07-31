import React, { useState } from "react";
import "./../styles/App.css";

const App = () => {
  // 1. Hardcoded weather data
  const [weather] = useState({ temperature: 25, conditions: "Sunny" });

  // 2. Set color based on temperature condition
  const tempColor = weather.temperature > 20 ? "red" : "blue";

  return (
    <div>
      {/* Do not remove the main div */}
      <p>
        Temperature:{" "}
        <span style={{ color: tempColor }}>{weather.temperature}</span>
      </p>
      <p>Conditions: {weather.conditions}</p>
    </div>
  );
};

export default App;

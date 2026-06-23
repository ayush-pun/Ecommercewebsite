import React, { useState, useEffect } from "react";

/* ================= CLOCK COMPONENT ================= */
function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    console.log("✅ Clock mounted");

    const interval = setInterval(() => {
      console.log("⏰ Interval running in background...");
      setTime(new Date());
    }, 1000);

    return () => {

      clearInterval(interval);
    };
  }, []);

  return (
    <div style={{ border: "1px solid gray", padding: "20px", marginTop: "20px" }}>
      <h2>Digital Clock</h2>
      <h3>{time.toLocaleTimeString()}</h3>
      <p>{time.toLocaleDateString()}</p>
    </div>
  );
}

/* ================= APP COMPONENT ================= */
export default function App() {
  const [showClock, setShowClock] = useState(true);

  return (
    <div style={{ padding: "20px" }}>
      <h1>useEffect Background Task Demo</h1>

      <button onClick={() => setShowClock(!showClock)}>
        {showClock ? "Hide Clock" : "Show Clock"}
      </button>

      {showClock && <Clock />}
    </div>
  );
}
import wajahat from "./wajahat";
import React, { useEffect, useState } from "react";
//exam
function wajahat() {
  const initialTime = 30;

  const [isLight, setIsLight] = useState(false);
  const [timeLeft, setTimeLeft] = useState(initialTime);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;

    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    }

    if (timeLeft === 0 && isRunning) {
      setIsRunning(false);
      setIsLight((prev) => !prev);
      
    }

    return () => clearInterval(interval);
  }, [isRunning, timeLeft]);

  const handleThemeToggle = () => {
    setIsLight((prev) => !prev);
  };

  const handleStart = () => {
    if (timeLeft > 0) {
      setIsRunning(true);
    }
  };

  const handleReset = () => {
    setIsRunning(false);
    setTimeLeft(initialTime);
  };

  const progressPercent = ((initialTime - timeLeft) / initialTime) * 100;

  const appStyle = {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: isLight ? "#f4f4f4" : "#1e1e2f",
    color: isLight ? "#111" : "#fff",
    transition: "all 0.4s ease",
    fontFamily: "Arial, sans-serif",
  };

  const cardStyle = {
    width: "400px",
    padding: "30px",
    borderRadius: "20px",
    background: isLight ? "#ffffff" : "#2a2a40",
    boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
    textAlign: "center",
    transition: "all 0.4s ease",
  };

  const progressBarContainer = {
    width: "100%",
    height: "15px",
    background: isLight ? "#ddd" : "#444",
    borderRadius: "10px",
    overflow: "hidden",
    marginTop: "20px",
    marginBottom: "20px",
  };

  const progressBarFill = {
    width: `${progressPercent}%`,
    height: "100%",
    background: isLight ? "#4caf50" : "#00c2ff",
    transition: "width 1s linear",
  };

  const buttonStyle = {
    padding: "10px 18px",
    margin: "8px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "16px",
  };

  return (
    <div style={appStyle}>
      <div style={cardStyle}>
        <h1>Countdown & Light Switch</h1>

        <button
          onClick={handleThemeToggle}
          style={{
            ...buttonStyle,
            background: isLight ? "#222" : "#f4f4f4",
            color: isLight ? "#fff" : "#111",
          }}
        >
          Toggle Theme
        </button>

        <h2 style={{ marginTop: "20px" }}>
          {timeLeft > 0 ? `${timeLeft}s` : "Time's Up!"}
        </h2>

        <div style={progressBarContainer}>
          <div style={progressBarFill}></div>
        </div>

        <button
          onClick={handleStart}
          style={{
            ...buttonStyle,
            background: "#4caf50",
            color: "#fff",
          }}
        >
          Start Timer
        </button>

        <button
          onClick={handleReset}
          style={{
            ...buttonStyle,
            background: "#f44336",
            color: "#fff",
          }}
        >
          Reset Timer
        </button>
      </div>
    </div>
  );
}

export default wajahat;
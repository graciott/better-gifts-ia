import React from "react";
import { useNavigate } from "react-router-dom";

interface WelcomeScreenProps {
  onStart: () => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = () => {
  const navigate = useNavigate();

  const handleStartClick = () => {
    navigate("/form-wizard");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Welcome to the Gift Wizard</h1>
      <p>Click the button below to get started!</p>
      <button onClick={handleStartClick}>Ok, começar</button>
    </div>
  );
};

export default WelcomeScreen;

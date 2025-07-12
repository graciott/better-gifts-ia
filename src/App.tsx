import React, { useState } from "react";
import WelcomeScreen from "./presentation/pages/WelcomeScreen";
import FormWizard from "./presentation/components/FormWizard";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App: React.FC = () => {
  const [isStarted, setIsStarted] = useState(false);

  const handleStart = () => {
    setIsStarted(true);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomeScreen onStart={handleStart} />} />
        <Route path="/form-wizard" element={<FormWizard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

import React, { useState } from "react";
import WelcomeScreen from "./presentation/pages/WelcomeScreen";
import FormWizard from "./presentation/pages/FormWizardScreen";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomeScreen />} />
        <Route path="/form-wizard" element={<FormWizard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

import React from "react";
import WelcomeScreen from "./presentation/pages/WelcomeScreen";
import FormWizard from "./presentation/pages/FormWizardScreen";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ChatScreen from "./presentation/pages/Chat/ChatScreen";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomeScreen />} />
        <Route path="/form-wizard" element={<FormWizard />} />
        <Route path="/chat-screen" element={<ChatScreen />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

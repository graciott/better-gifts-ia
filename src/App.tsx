import React from "react";
import WelcomeScreen from "./presentation/pages/WelcomeScreen";
import FormWizard from "./presentation/pages/FormWizardScreen";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ChatScreen from "./presentation/pages/Chat/ChatScreen";
import ShoppingAiScreen from "./presentation/pages/ShoppingAiScreen/ShoppingAiScreen";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomeScreen />} />
        <Route path="/form-wizard" element={<FormWizard />} />
        <Route path="/chat-screen" element={<ShoppingAiScreen />} />
        {/* <Route path="/shop-ia" element={<ShoppingAiScreen />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;

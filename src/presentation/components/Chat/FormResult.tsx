import React from "react";
import styles from "./FormResult.module.css";
import SendMessageWithContextUseCase from "../../../domain/usecases/SendMessageWithContextUseCase";
import { useNavigate } from "react-router-dom";

interface FormResultProps {
  formData: any;
  prevStep: () => void;
}

const useCase = new SendMessageWithContextUseCase();

const FormResult: React.FC<FormResultProps> = ({ formData, prevStep }) => {
  const navigate = useNavigate();

  const sendMessage = async () => {
    try {
      const response = await useCase.execute([
        { role: "user", content: JSON.stringify(formData) },
      ]);
      navigate("/chat-screen", {
        state: { message: response },
      });
    } catch (e) {
      console.error(e);
      alert("Erro ao enviar mensagem.");
    }
  };

  return (
    <div className={styles.resultContainer}>
      <h1>Results Summary</h1>
      <h2>Your Selections:</h2>
      <ul>
        <li>Name: {formData.name}</li>
        <li>Age: {formData.age}</li>
        <li>Gender: {formData.gender}</li>
        <li>Hobbies: {(formData.hobbies || []).join(", ")}</li>
        <li>Gift Type: {formData.giftType}</li>
        <li>Specific Requests: {formData.specificRequests}</li>
        <li>Budget: {formData.budget}</li>
        <li>Gift Preferences: {(formData.giftPreferences || []).join(", ")}</li>
        <li>Avoid Gifts: {formData.avoidGifts}</li>
      </ul>
      <button onClick={prevStep} className={styles.backButton}>
        Back
      </button>
      <button className={styles.submitButton} onClick={sendMessage}>
        Submit
      </button>
    </div>
  );
};

export default FormResult;

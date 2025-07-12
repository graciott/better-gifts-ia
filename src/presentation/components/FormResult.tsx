import React from "react";
import styles from "./FormResult.module.css";

interface FormResultProps {
  formData: any;
  prevStep: () => void;
}

const FormResult: React.FC<FormResultProps> = ({ formData, prevStep }) => {
  console.log("FormResult rendered", formData);
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
    </div>
  );
};

export default FormResult;

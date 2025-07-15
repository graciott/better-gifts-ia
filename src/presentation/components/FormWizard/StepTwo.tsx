import React from "react";
import styles from "./StepTwo.module.css";

const StepTwo: React.FC<{
  formData: any;
  setFormData: React.Dispatch<React.SetStateAction<any>>;
  nextStep: (data: any) => void;
  prevStep: () => void;
}> = ({ formData, setFormData, nextStep, prevStep }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData({ ...formData, [name]: checked });
  };

  return (
    <form
      className={styles.formContainer}
      onSubmit={(e) => {
        e.preventDefault();
        nextStep(formData);
      }}
    >
      <h2>Step Two: Gift Preferences</h2>

      <div className={styles.formGroup}>
        <label>Type of Gift:</label>
        <div className={styles.radioGroup}>
          <label>
            <input
              type="radio"
              name="giftType"
              value="emotional"
              checked={formData.giftType === "emotional"}
              onChange={handleChange}
            />
            Emotional
          </label>
          <label>
            <input
              type="radio"
              name="giftType"
              value="practical"
              checked={formData.giftType === "practical"}
              onChange={handleChange}
            />
            Practical
          </label>
        </div>
      </div>

      <div className={styles.formGroup}>
        <label>Specific Requests:</label>
        <input
          type="text"
          name="specificRequests"
          value={formData.specificRequests}
          onChange={handleChange}
        />
      </div>

      <div className={styles.formGroup}>
        <label>Budget:</label>
        <input
          type="number"
          name="budget"
          value={formData.budget}
          onChange={handleChange}
        />
      </div>

      <div className={styles.formGroup}>
        <label>Gift Preferences:</label>
        <div className={styles.checkboxGroup}>
          <label>
            <input
              type="checkbox"
              name="preference1"
              checked={formData.preference1}
              onChange={handleCheckboxChange}
            />
            Preference 1
          </label>
          <label>
            <input
              type="checkbox"
              name="preference2"
              checked={formData.preference2}
              onChange={handleCheckboxChange}
            />
            Preference 2
          </label>
        </div>
      </div>

      <div className={styles.formGroup}>
        <label>Avoid Specific Gifts:</label>
        <input
          type="text"
          name="avoidGifts"
          value={formData.avoidGifts}
          onChange={handleChange}
        />
      </div>

      <div className={styles.buttonGroup}>
        <button type="button" onClick={prevStep}>
          Back
        </button>
        <button type="submit">Next</button>
      </div>
    </form>
  );
};

export default StepTwo;

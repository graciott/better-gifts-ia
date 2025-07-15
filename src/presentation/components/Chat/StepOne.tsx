import React from "react";
import styles from "./StepOne.module.css";

const StepOne: React.FC<{ onNext: (data: any) => void }> = ({ onNext }) => {
  const [formData, setFormData] = React.useState({
    name: "",
    age: "",
    gender: "",
    hobbies: [] as string[],
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    if (name === "hobbies") {
      setFormData((prev) => ({
        ...prev,
        hobbies: prev.hobbies.includes(value)
          ? prev.hobbies.filter((hobby) => hobby !== value)
          : [...prev.hobbies, value],
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext(formData);
  };

  return (
    <form className={styles.formContainer} onSubmit={handleSubmit}>
      <div className={styles.formGroup}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className={styles.formGroup}>
        <label>Age:</label>
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
          required
        />
      </div>
      <div className={styles.formGroup}>
        <label>Gender:</label>
        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          required
        >
          <option value="">Select</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div className={styles.formGroup}>
        <label>Hobbies:</label>
        <div className={styles.hobbiesGroup}>
          <label>
            <input
              type="checkbox"
              name="hobbies"
              value="reading"
              onChange={handleChange}
            />
            Reading
          </label>
          <label>
            <input
              type="checkbox"
              name="hobbies"
              value="traveling"
              onChange={handleChange}
            />
            Traveling
          </label>
          <label>
            <input
              type="checkbox"
              name="hobbies"
              value="gaming"
              onChange={handleChange}
            />
            Gaming
          </label>
        </div>
      </div>
      <button type="submit">Next</button>
    </form>
  );
};

export default StepOne;

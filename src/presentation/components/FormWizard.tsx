import React, { useState } from "react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";

const FormWizard: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});

  console.log("FormWizard rendered", formData, step);

  const nextStep = (data: any) => {
    setFormData({ ...formData, ...data });
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  return (
    <div>
      {step === 1 && <StepOne onNext={nextStep} />}
      {step === 2 && (
        <StepTwo
          formData={formData}
          setFormData={setFormData}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      )}
    </div>
  );
};

export default FormWizard;

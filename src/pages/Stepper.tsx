import React, { FC, useState } from "react";
import StepperContent from "../components/Stepper/StepperContent";
import StepperButtons from "../components/Stepper/StepperButtons";
import StepperProcess from "../components/Stepper/StepperProcess";

const Stepper: FC = (): JSX.Element => {
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = (step: number): void => {
    const newStep = step + 1;
    setCurrentStep(newStep);
  };

  const prevStep = (step: number): void => {
    const newStep = step - 1;
    setCurrentStep(newStep);
  };

  const handleNextStep = (): void => {
    nextStep(currentStep);
  };

  const handlePrevStep = (): void => {
    prevStep(currentStep);
  };

  return (
    <div className="stepper">
      <StepperProcess />
      <StepperContent
        currentStep={currentStep}
        handleNextStep={handleNextStep}
      />
      {currentStep !== 1 && (
        <StepperButtons
          handleNextStep={handleNextStep}
          handlePrevStep={handlePrevStep}
        />
      )}
    </div>
  );
};

export default Stepper;

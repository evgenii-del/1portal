import React, { FC, useState } from "react";
import StepperContent from "../components/Stepper/StepperContent";
import StepperButtons from "../components/Stepper/StepperButtons";
import StepperProcess from "../components/Stepper/StepperProcess";

const Stepper: FC = (): JSX.Element => {
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = (step: number): void => {
    setCurrentStep(step);
  };

  const prevStep = (step: number): void => {
    setCurrentStep(step);
  };

  const handleNextStep = (): void => {
    nextStep(2);
  };

  const handlePrevStep = (): void => {
    prevStep(1);
  };

  return (
    <div>
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

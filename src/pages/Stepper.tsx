import React, { FC, useState } from "react";
import StepperContent from "../components/Stepper/StepperContent";
import StepperButtons from "../components/Stepper/StepperButtons";
import StepperProcess from "../components/Stepper/StepperProcess";

interface StepInterface {
  title: string;
  id: number;
}

const steps = [
  {
    title: "First step",
    id: 1,
  },
  {
    title: "Second step",
    id: 2,
  },
  {
    title: "Third step",
    id: 3,
  },
  {
    title: "Fourth step",
    id: 4,
  },
];

const Stepper: FC = (): JSX.Element => {
  const [currentStep, setCurrentStep] = useState({
    title: "First step",
    id: 1,
  });

  const nextStep = (step: StepInterface): void => {
    setCurrentStep(step);
  };

  const prevStep = (step: StepInterface): void => {
    setCurrentStep(step);
  };

  const handleNextStep = (): void => {
    const nextOne = steps.find((step) => step.id === currentStep.id + 1);
    if (nextOne !== undefined) {
      nextStep(nextOne);
    }
  };

  const handlePrevStep = (): void => {
    const prevOne = steps.find((step) => step.id === currentStep.id - 1);
    if (prevOne !== undefined) {
      prevStep(prevOne);
    }
  };

  return (
    <div className="stepper">
      <StepperProcess currentStep={currentStep} />
      <StepperContent
        currentStep={currentStep}
        handleNextStep={handleNextStep}
      />
      {currentStep.id !== 1 && (
        <StepperButtons
          handleNextStep={handleNextStep}
          handlePrevStep={handlePrevStep}
        />
      )}
    </div>
  );
};

export default Stepper;

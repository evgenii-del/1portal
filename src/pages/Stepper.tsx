import React, { FC, useState } from "react";
import CarDetailsStep from "../components/CarDetailsStep";
import CarNumberStep from "../components/CarNumberStep";

const Stepper: FC = (): JSX.Element => {
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = (step: number): void => {
    setCurrentStep(step);
  };

  const prevStep = (step: number): void => {
    setCurrentStep(step);
  };

  switch (currentStep) {
    case 1:
      return <CarNumberStep nextStep={nextStep} />;
    case 2:
      return <CarDetailsStep nextStep={nextStep} prevStep={prevStep} />;
    default:
      return <div>default</div>;
  }
};

export default Stepper;

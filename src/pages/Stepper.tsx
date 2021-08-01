import React, { FC, useState } from "react";
import CarDetailsStep from "../components/CarDetailsStep";
import CarNumberStep from "../components/CarNumberStep";

const Stepper: FC = (): JSX.Element => {
  const [currentStep, setCurrentStep] = useState(2);

  const nextStep = (step: number): void => {
    setCurrentStep(step);
  };

  const prevStep = (step: number): void => {
    setCurrentStep(step);
  };

  switch (currentStep) {
    case 1:
      return <CarNumberStep />;
    case 2:
      return <CarDetailsStep />;
    default:
      return <div>default</div>;
  }
};

export default Stepper;

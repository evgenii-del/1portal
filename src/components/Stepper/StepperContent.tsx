import React, { FC } from "react";
import CarNumberStep from "../Steps/CarNumberStep";
import CarDetailsStep from "../Steps/CarDetailsStep";
import CustomerDetailsStep from "../Steps/CustomerDetailsStep";

interface StepInterface {
  title: string;
  id: number;
}

interface StepperContentProp {
  currentStep: StepInterface;
  handleNextStep(): void;
}

const StepperContent: FC<StepperContentProp> = (
  props: StepperContentProp
): JSX.Element => {
  switch (props.currentStep.id) {
    case 1:
      return <CarNumberStep handleNextStep={props.handleNextStep} />;
    case 2:
      return <CarDetailsStep />;
    case 3:
      return <CustomerDetailsStep />;
    default:
      return <div>default</div>;
  }
};

export default StepperContent;

import React, { FC } from "react";
import CarNumberStep from "../Steps/CarNumberStep";
import CarDetailsStep from "../Steps/CarDetailsStep";
import CustomerDetailsStep from "../Steps/CustomerDetailsStep";

interface StepperContentProp {
  currentStep: number;
  handleNextStep(): void;
}

const StepperContent: FC<StepperContentProp> = (
  props: StepperContentProp
): JSX.Element => {
  switch (props.currentStep) {
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

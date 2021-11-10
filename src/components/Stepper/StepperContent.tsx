import React, { FC } from "react";
import CarNumberStep from "../Steps/CarNumberStep";
import CarDetailsStep from "../Steps/CarDetailsStep";
import CustomerDetailsStep from "../Steps/CustomerDetailsStep";
import ConfirmationStep from "../Steps/ConfirmationStep";

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
    case 4:
      return <ConfirmationStep />;
    default:
      return <div>default</div>;
  }
};

export default StepperContent;

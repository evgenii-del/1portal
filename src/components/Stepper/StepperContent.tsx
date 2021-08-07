import React, { FC } from "react";
import CarNumberStep from "../CarNumberStep";
import CarDetailsStep from "../CarDetailsStep";

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
    default:
      return <div>default</div>;
  }
};

export default StepperContent;

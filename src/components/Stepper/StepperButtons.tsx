import React, { FC } from "react";

interface StepperButtonsProp {
  handleNextStep(): void;
  handlePrevStep(): void;
}

const StepperButtons: FC<StepperButtonsProp> = (
  props: StepperButtonsProp
): JSX.Element => {
  const { handleNextStep, handlePrevStep } = props;
  return (
    <div className="stepper-buttons">
      <button
        className="stepper-buttons__back"
        type="button"
        onClick={handlePrevStep}
      >
        Назад
      </button>
      <button
        className="stepper-buttons__continue"
        type="button"
        onClick={handleNextStep}
      >
        Продолжить
      </button>
    </div>
  );
};

export default StepperButtons;

import React, { FC } from "react";

const StepperButtons: FC = (): JSX.Element => {
  return (
    <div className="stepper-buttons">
      <button className="stepper-buttons__back" type="button">
        Назад
      </button>
      <button className="stepper-buttons__continue" type="button">
        Продолжить
      </button>
    </div>
  );
};

export default StepperButtons;

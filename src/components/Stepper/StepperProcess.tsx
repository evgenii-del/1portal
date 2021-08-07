import React, { FC } from "react";

const StepperProcess: FC = (): JSX.Element => {
  return (
    <div className="stepper-process">
      <h1 className="stepper-process__title">Данные для расчета</h1>
      <div className="stepper-process__list">
        <div className="stepper-process__list-item stepper-process__list-item_active">
          <span className="stepper-process__list-item-text">Первый</span>
          <svg
            className="stepper-process__list-item-icon"
            xmlns="http://www.w3.org/2000/svg"
            width="5"
            height="9"
            viewBox="0 0 5 9"
          >
            <path
              fill="none"
              fillRule="evenodd"
              stroke="#8c8c8c"
              d="M4.5 9l-4-4.5 4-4.5"
            />
          </svg>
        </div>
        <div className="stepper-process__list-item">
          <span className="stepper-process__list-item-text">Второй</span>
          <svg
            className="stepper-process__list-item-icon"
            xmlns="http://www.w3.org/2000/svg"
            width="5"
            height="9"
            viewBox="0 0 5 9"
          >
            <path
              fill="none"
              fillRule="evenodd"
              stroke="#8c8c8c"
              d="M4.5 9l-4-4.5 4-4.5"
            />
          </svg>
        </div>
        <div className="stepper-process__list-item">
          <span className="stepper-process__list-item-text">Третий</span>
          <svg
            className="stepper-process__list-item-icon"
            xmlns="http://www.w3.org/2000/svg"
            width="5"
            height="9"
            viewBox="0 0 5 9"
          >
            <path
              fill="none"
              fillRule="evenodd"
              stroke="#8c8c8c"
              d="M4.5 9l-4-4.5 4-4.5"
            />
          </svg>
        </div>
        <div className="stepper-process__list-item">
          <span className="stepper-process__list-item-text">Четвертый</span>
        </div>
      </div>
    </div>
  );
};

export default StepperProcess;

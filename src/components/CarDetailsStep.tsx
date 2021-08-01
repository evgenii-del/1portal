import React, { FC } from "react";
import CustomTextInput from "./CustomTextInput";
import StepperButtons from "./StepperButtons";

const CarDetailsStep: FC = (): JSX.Element => {
  return (
    <div className="car-details">
      <h1 className="car-details__title">Данные для расчета</h1>
      <div className="car-details__car-data">
        <h2 className="car-details__car-data-title">Данные автомобиля</h2>
        <div className="car-details__car-data-container">
          <div className="car-details__car-data-row">
            <CustomTextInput />
            <CustomTextInput />
          </div>
          <div className="car-details__car-data-row">
            <CustomTextInput />
            <CustomTextInput />
            <CustomTextInput />
          </div>
        </div>
      </div>
      <div className="car-details__taxi-confirmation">
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor="">
          <input type="checkbox" />
          <span>Авто не используется в такси</span>
        </label>
      </div>
      <div className="car-details__period">
        <h2 className="car-details__period-title">Период действия полиса</h2>
        <div className="car-details__period-container">
          <CustomTextInput />
          <CustomTextInput />
        </div>
      </div>
      <StepperButtons />
    </div>
  );
};

export default CarDetailsStep;

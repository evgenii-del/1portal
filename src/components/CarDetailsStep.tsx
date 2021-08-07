import React, { FC } from "react";
import CustomTextInput from "./CustomTextInput";
import CarTaxiConfirmation from "./CarTaxiConfirmation";

const CarDetailsStep: FC = (): JSX.Element => {
  return (
    <>
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
      <CarTaxiConfirmation />
      <div className="car-details__period">
        <h2 className="car-details__period-title">Период действия полиса</h2>
        <div className="car-details__period-container">
          <CustomTextInput />
          <CustomTextInput />
        </div>
      </div>
    </>
  );
};

export default CarDetailsStep;

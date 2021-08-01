import React, { FC } from "react";
import CustomTextInput from "./CustomTextInput";
import StepperButtons from "./StepperButtons";
import StepperProcess from "./StepperProcess";
import CarTaxiConfirmation from "./CarTaxiConfirmation";

interface CarDetailsStepProp {
  nextStep: (step: number) => void;
  prevStep: (step: number) => void;
}

const CarDetailsStep: FC<CarDetailsStepProp> = (
  props: CarDetailsStepProp
): JSX.Element => {
  const handleNextStep = (): void => {
    props.nextStep(2);
  };

  const handlePrevStep = (): void => {
    props.prevStep(1);
  };
  return (
    <div className="car-details">
      <h1 className="car-details__title">Данные для расчета</h1>
      <StepperProcess />
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
      <StepperButtons
        handleNextStep={handleNextStep}
        handlePrevStep={handlePrevStep}
      />
    </div>
  );
};

export default CarDetailsStep;

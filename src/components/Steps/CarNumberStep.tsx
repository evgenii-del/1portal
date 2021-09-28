import React, { ChangeEvent, FC, useState } from "react";
import Loader from "../Common/Loader";
import { stateNumberValidation } from "../../utils/validations";

interface CarNumberStepProp {
  handleNextStep(): void;
}

const CarNumberStep: FC<CarNumberStepProp> = ({
  handleNextStep,
}: CarNumberStepProp): JSX.Element => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [stateNumber, setStateNumber] = useState("");

  const goNextPage = () => {
    setIsLoaded(true);
    setTimeout(() => {
      setIsLoaded(false);
      handleNextStep();
    }, 3000);
  };

  const handleStateNumber = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toUpperCase();
    if (stateNumberValidation(value)) {
      setStateNumber(value);
    }
  };

  return (
    <div className="car-number__container">
      <p className="car-number__container-description">
        Введите номер автомобиля, и часть данных мы заполним за вас
      </p>
      <div className="car-number__container-row">
        <input
          className="car-number__container-input"
          type="text"
          placeholder="Державний номер"
          value={stateNumber}
          onChange={handleStateNumber}
        />
        <button
          className="car-number__container-button"
          type="button"
          onClick={goNextPage}
          disabled={isLoaded}
        >
          {isLoaded ? <Loader /> : "Продолжить"}
        </button>
      </div>
      {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions,jsx-a11y/click-events-have-key-events */}
      <span className="car-number__container-link" onClick={handleNextStep}>
        Рассчитать без номера
      </span>
    </div>
  );
};

export default CarNumberStep;

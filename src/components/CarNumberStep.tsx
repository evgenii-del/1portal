import React, { FC } from "react";

interface CarNumberStepProp {
  handleNextStep(): void;
}

const CarNumberStep: FC<CarNumberStepProp> = ({
  handleNextStep,
}: CarNumberStepProp): JSX.Element => {
  return (
    <div className="car-number__container">
      <p className="car-number__container-description">
        Введите номер автомобиля, и часть данных мы заполним за вас
      </p>
      <div className="car-number__container-row">
        <input
          className="car-number__container-input"
          type="text"
          placeholder="Введите гос. номер"
        />
        <button
          className="car-number__container-button"
          type="button"
          onClick={handleNextStep}
        >
          Продолжить
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

import React, { FC } from "react";

const CarNumberStep: FC = (): JSX.Element => {
  return (
    <div className="car-number">
      <h1 className="car-details__title">Данные для расчета</h1>
      <div className="car-number__container">
        <p className="car-number__description">
          Введите номер автомобиля, и часть данных мы заполним за вас
        </p>
        <div className="car-number__row">
          <input className="car-number__input" type="text" />
          <button className="car-number__button" type="button">
            Продолжить
          </button>
        </div>
        <span className="car-number__link">Рассчитать без номера</span>
      </div>
    </div>
  );
};

export default CarNumberStep;

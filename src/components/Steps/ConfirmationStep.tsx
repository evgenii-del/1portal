import React, { FC } from "react";
import { useSelector } from "react-redux";
import ConfirmationItem from "../Common/ConfirmationItem";
import CarTaxiConfirmation from "../CarTaxiConfirmation";

const ConfirmationStep: FC = (): JSX.Element => {
  const { carDetails, customerDetails } = useSelector(
    (state: any) => state.contractReducer
  );
  const { stateNumber, selectedYear, make, model, bodyNumber, startDate } =
    carDetails;
  const {
    firstName,
    lastName,
    parentName,
    birthdayDate,
    individualNumber,
    city,
    street,
    house,
    apartment,
    phone,
    email,
  } = customerDetails;
  const insuranceType = 1;

  return (
    <>
      <div className="grid">
        <h2 className="grid__title">Данные автомобиля</h2>
        <div className="grid__row">
          <ConfirmationItem title="Державний номер" data={stateNumber} />
          <ConfirmationItem title="Рік випуску" data={selectedYear} />
        </div>
        <div className="grid__row">
          <ConfirmationItem title="Марка" data={make} />
          <ConfirmationItem title="Модель" data={model} />
          <ConfirmationItem title="Номер кузова" data={bodyNumber} />
        </div>
      </div>
      <CarTaxiConfirmation />
      <div className="grid">
        <h2 className="grid__title">Период действия полиса</h2>
        <div className="grid__row">
          <ConfirmationItem title="Тип страхування" data={insuranceType} />
          <ConfirmationItem
            title="Дата початку дії поліса: Джерело"
            data={startDate}
          />
        </div>
      </div>
      <div className="grid">
        <h2 className="grid__title">Данные пользователя</h2>
        <div className="grid__row">
          <ConfirmationItem title="Прізвище" data={firstName} />
          <ConfirmationItem title="Ім'я" data={lastName} />
          <ConfirmationItem title="По батькові" data={parentName} />
        </div>
        <div className="grid__row">
          <ConfirmationItem title="Дата народження" data={birthdayDate} />
          <ConfirmationItem title="ІПН" data={individualNumber} />
        </div>
        <div className="grid__row">
          <ConfirmationItem title="Місто" data={city} />
          <ConfirmationItem title="Вулиця" data={street} />
          <div className="grid__row-address">
            <ConfirmationItem title="Дім" data={house} />
            <ConfirmationItem title="Квартира" data={apartment} />
          </div>
        </div>
        <div className="grid__row">
          <ConfirmationItem title="Телефон" data={phone} />
          <ConfirmationItem title="Пошта (email)" data={email} />
        </div>
      </div>
    </>
  );
};

export default ConfirmationStep;

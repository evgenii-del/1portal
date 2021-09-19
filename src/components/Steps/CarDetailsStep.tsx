import React, { ChangeEvent, FC, useState } from "react";
import CustomTextInput from "../Common/CustomTextInput";
import CarTaxiConfirmation from "../CarTaxiConfirmation";
import CustomSelect from "../Common/CustomSelect";
import { stateNumberValidation } from "../../utils/validations";

const years = [
  { label: "1", value: 1 },
  { label: "2", value: 2 },
];
const insuranceTypeArr = [{ label: "1 рік", value: 1 }];
const makeArr = [{ label: "1", value: 1 }];
const modelArr = [{ label: "1", value: 1 }];

const CarDetailsStep: FC = (): JSX.Element => {
  const [stateNumber, setStateNumber] = useState("");
  const [selectedYear, setSelectedYear] = useState(0);
  const [make, setMake] = useState(0);
  const [model, setModel] = useState(0);
  const [bodyNumber, setBodyNumber] = useState("");
  const insuranceType = 1;
  const [startDate, setStartDate] = useState(0);

  const handleStateNumber = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toUpperCase();
    if (stateNumberValidation(value)) {
      setStateNumber(value);
    }
  };

  const handleSelectedYear = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedYear(+e.target.value);
  };

  const handleMake = (e: ChangeEvent<HTMLSelectElement>) => {
    setMake(+e.target.value);
  };

  const handleModel = (e: ChangeEvent<HTMLSelectElement>) => {
    setModel(+e.target.value);
  };

  const handleBodyNumber = (e: ChangeEvent<HTMLInputElement>) => {
    setBodyNumber(e.target.value);
  };

  const handleStartDate = (e: ChangeEvent<any>) => {
    setStartDate(e.target.value);
  };

  return (
    <>
      <div className="car-details__car-data">
        <h2 className="car-details__car-data-title">Данные автомобиля</h2>
        <div className="car-details__car-data-container">
          <div className="car-details__car-data-row">
            <CustomTextInput
              label="Державний номер"
              placeholder="Державний номер"
              value={stateNumber}
              onChange={handleStateNumber}
            />
            <CustomSelect
              label="Рік випуску"
              selectedOption={selectedYear}
              options={years}
              onChange={handleSelectedYear}
            />
          </div>
          <div className="car-details__car-data-row">
            <CustomSelect
              label="Марка"
              selectedOption={make}
              options={makeArr}
              onChange={handleMake}
            />
            <CustomSelect
              label="Модель"
              selectedOption={model}
              options={modelArr}
              onChange={handleModel}
            />
            <CustomTextInput
              label="Номер кузова"
              placeholder="Номер кузова"
              value={bodyNumber}
              onChange={handleBodyNumber}
            />
          </div>
        </div>
      </div>
      <CarTaxiConfirmation />
      <div className="car-details__period">
        <h2 className="car-details__period-title">Период действия полиса</h2>
        <div className="car-details__period-container">
          <CustomSelect
            label="Тип страхування"
            options={insuranceTypeArr}
            selectedOption={insuranceType}
            onChange={() => {}}
            disabled
          />
          <div className="custom-text-input">
            <label className="custom-text-input__label" htmlFor="startDate">
              Дата початку дії поліса: Джерело
            </label>
            <div>
              <input
                className="custom-text-input__input"
                type="date"
                id="startDate"
                value={startDate}
                onChange={handleStartDate}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarDetailsStep;

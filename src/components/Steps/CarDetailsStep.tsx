import React, { ChangeEvent, FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CustomTextInput from "../Common/CustomTextInput";
import CarTaxiConfirmation from "../CarTaxiConfirmation";
import CustomSelect from "../Common/CustomSelect";
import {
  stateNumberValidation,
  isStateNumberValid,
  bodyNumberValidation,
} from "../../utils/validations";
import {
  insuranceTypeArr,
  makeArr,
  modelArr,
  years,
} from "../../utils/constants";
import { updateCarDetails } from "../../redux/actions/contract";

const CarDetailsStep: FC = (): JSX.Element => {
  const carDetails = useSelector(
    (state: any) => state.contractReducer.carDetails
  );
  const { stateNumber, selectedYear, make, model, bodyNumber, startDate } =
    carDetails;
  const dispatch = useDispatch();

  const nextDay = new Date(Date.now() + 1000 * 60 * 60 * 24)
    .toISOString()
    .split("T")[0];
  const [stateNumberError, setStateNumberError] = useState("");
  const [bodyNumberError, setBodyNumberError] = useState("");
  const insuranceType = 1;

  const handleStateNumber = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toUpperCase();
    if (stateNumberValidation(value)) {
      dispatch(
        updateCarDetails({
          ...carDetails,
          stateNumber: value,
        })
      );
      if (!isStateNumberValid(value)) {
        setStateNumberError("В форматі XX0000XX або 000000XX");
      } else {
        setStateNumberError("");
      }
    }
  };

  const handleSelectedYear = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch(
      updateCarDetails({
        ...carDetails,
        selectedYear: +e.target.value,
      })
    );
  };

  const handleMake = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch(
      updateCarDetails({
        ...carDetails,
        make: +e.target.value,
      })
    );
  };

  const handleModel = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch(
      updateCarDetails({
        ...carDetails,
        model: +e.target.value,
      })
    );
  };

  const handleBodyNumber = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toUpperCase();
    dispatch(
      updateCarDetails({
        ...carDetails,
        bodyNumber: value,
      })
    );
    if (!bodyNumberValidation(value)) {
      setBodyNumberError("Поле має містити лише цифри та латинські літери");
    } else {
      setBodyNumberError("");
    }
  };

  const handleStartDate = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(
      updateCarDetails({
        ...carDetails,
        startDate: e.target.value,
      })
    );
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
              errorMessage={stateNumberError}
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
              errorMessage={bodyNumberError}
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
                max={nextDay}
                value={startDate}
                onChange={handleStartDate}
                onKeyDown={(e) => e.preventDefault()}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarDetailsStep;

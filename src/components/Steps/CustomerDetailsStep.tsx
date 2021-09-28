import React, { ChangeEvent, FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CustomTextInput from "../Common/CustomTextInput";
import CustomSelect from "../Common/CustomSelect";
import CustomTextMask from "../Common/CustomTextMask";
import {
  dateValidation,
  isEmailValid,
  isPhoneValid,
  lengthValidation,
  mandatoryValidation,
} from "../../utils/validations";
import { years } from "../../utils/constants";
import { updateCustomerDetails } from "../../redux/actions/contract";
import CustomerDocuments from "../CustomerDocuments";

const CustomerDetailsStep: FC = (): JSX.Element => {
  const customerDetails = useSelector(
    (state: any) => state.contractReducer.customerDetails
  );
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
  const dispatch = useDispatch();

  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [parentNameError, setParentNameError] = useState("");
  const [birthdayDateError, setBirthdayDateError] = useState("");
  const [individualNumberError, setIndividualNumberError] = useState("");
  const [streetError, setStreetError] = useState("");
  const [houseError, setHouseError] = useState("");
  const [apartmentError, setApartmentError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [emailError, setEmailError] = useState("");

  const validateNameValue = (name: string) => {
    let errorMessage = "";
    if (!lengthValidation(name)) {
      errorMessage = "Поле є обов'язковим";
    } else if (!name || !new RegExp(/(^[А-Яа-яІіЇїЄє]+$)/).test(name)) {
      errorMessage = "Поле має містити тільки літери кирилиці";
    }
    return errorMessage;
  };

  const handleFirstName = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(
      updateCustomerDetails({
        ...customerDetails,
        firstName: e.target.value,
      })
    );
    const errorMessage = validateNameValue(e.target.value);
    if (errorMessage && errorMessage.length !== 0) {
      setFirstNameError(errorMessage);
    } else {
      setFirstNameError("");
    }
  };

  const handleLastName = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(
      updateCustomerDetails({
        ...customerDetails,
        lastName: e.target.value,
      })
    );
    const errorMessage = validateNameValue(e.target.value);
    if (errorMessage && errorMessage.length !== 0) {
      setLastNameError(errorMessage);
    } else {
      setLastNameError("");
    }
  };

  const handleParentName = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(
      updateCustomerDetails({
        ...customerDetails,
        parentName: e.target.value,
      })
    );
    const errorMessage = validateNameValue(e.target.value);
    if (errorMessage && errorMessage.length !== 0) {
      setParentNameError(errorMessage);
    } else {
      setParentNameError("");
    }
  };

  const handleBirthdayDate = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(
      updateCustomerDetails({
        ...customerDetails,
        birthdayDate: e.target.value,
      })
    );
    if (!dateValidation(e.target.value)) {
      setBirthdayDateError("Введіть дату в форматі дд.мм.рррр");
    } else {
      setBirthdayDateError("");
    }
  };

  const handleIndividualNumber = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(
      updateCustomerDetails({
        ...customerDetails,
        individualNumber: e.target.value,
      })
    );
    if (e.target.value.replace(/[_]/g, "").length !== 10) {
      setIndividualNumberError("Поле є обов'язковим");
    } else {
      setIndividualNumberError("");
    }
  };

  const handleCity = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch(
      updateCustomerDetails({
        ...customerDetails,
        city: e.target.value,
      })
    );
  };

  const handleStreet = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(
      updateCustomerDetails({
        ...customerDetails,
        street: e.target.value,
      })
    );
    if (!mandatoryValidation(e.target.value)) {
      setStreetError("Поле є обов'язковим");
    } else {
      setStreetError("");
    }
  };

  const handleHouse = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(
      updateCustomerDetails({
        ...customerDetails,
        house: e.target.value,
      })
    );
    if (!mandatoryValidation(e.target.value)) {
      setHouseError("Поле є обов'язковим");
    } else {
      setHouseError("");
    }
  };

  const handleApartment = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(
      updateCustomerDetails({
        ...customerDetails,
        apartment: e.target.value,
      })
    );
    if (!mandatoryValidation(e.target.value)) {
      setApartmentError("Поле є обов'язковим");
    } else {
      setApartmentError("");
    }
  };

  const handlePhone = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(
      updateCustomerDetails({
        ...customerDetails,
        phone: e.target.value,
      })
    );
    if (!isPhoneValid(e.target.value)) {
      setPhoneError("Поле є обов'язковим");
    } else {
      setPhoneError("");
    }
  };

  const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(
      updateCustomerDetails({
        ...customerDetails,
        email: e.target.value,
      })
    );
    if (!isEmailValid(e.target.value)) {
      setEmailError("Поле має містити коректну email адресу");
    } else {
      setEmailError("");
    }
  };

  return (
    <>
      <div className="grid">
        <h2 className="grid__title">Данные пользователя</h2>
        <div>
          <div className="grid__row">
            <CustomTextInput
              label="Прізвище"
              placeholder="Прізвище"
              value={firstName}
              onChange={handleFirstName}
              errorMessage={firstNameError}
            />
            <CustomTextInput
              label="Ім'я"
              placeholder="Ім'я"
              value={lastName}
              onChange={handleLastName}
              errorMessage={lastNameError}
            />
            <CustomTextInput
              label="По батькові"
              placeholder="По батькові"
              value={parentName}
              onChange={handleParentName}
              errorMessage={parentNameError}
            />
          </div>
          <div className="grid__row">
            <CustomTextMask
              label="Дата народження"
              placeholder="__.__.____"
              value={birthdayDate}
              onChange={handleBirthdayDate}
              mask="99.99.9999"
              errorMessage={birthdayDateError}
            />
            <CustomTextMask
              label="ІПН"
              placeholder="__________"
              value={individualNumber}
              onChange={handleIndividualNumber}
              mask="9999999999"
              errorMessage={individualNumberError}
            />
          </div>
          <div className="grid__row">
            <CustomSelect
              label="Місто"
              selectedOption={city}
              options={years}
              onChange={handleCity}
            />
            <CustomTextInput
              label="Вулиця"
              placeholder="Вулиця"
              value={street}
              onChange={handleStreet}
              errorMessage={streetError}
            />
            <div className="grid__row-address">
              <CustomTextInput
                label="Дім"
                placeholder="Дім"
                value={house}
                onChange={handleHouse}
                errorMessage={houseError}
              />
              <CustomTextInput
                label="Квартира"
                placeholder="Квартира"
                value={apartment}
                onChange={handleApartment}
                errorMessage={apartmentError}
              />
            </div>
          </div>
          <div className="grid__row">
            <CustomTextMask
              label="Телефон"
              placeholder="+380 (__) ___-__-__"
              value={phone}
              onChange={handlePhone}
              mask="+380 (99) 999-99-99"
              errorMessage={phoneError}
            />
            <CustomTextInput
              label="Пошта (email)"
              placeholder="Пошта (email)"
              value={email}
              onChange={handleEmail}
              errorMessage={emailError}
            />
          </div>
        </div>
      </div>
      <CustomerDocuments />
    </>
  );
};

export default CustomerDetailsStep;

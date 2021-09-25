import React, { ChangeEvent, FC, useState } from "react";
import CustomTextInput from "../Common/CustomTextInput";
import CustomSelect from "../Common/CustomSelect";
import CustomTextMask from "../Common/CustomTextMask";
import {
  dateValidation,
  mandatoryValidation,
  seriesAndNumberDriverValidation,
  seriesAndNumberPassportValidation,
} from "../../utils/validations";

const documentOptions = [
  { value: 1, label: "Паспорт" },
  { value: 2, label: "ID Картка" },
  { value: 3, label: "Водійське посвідчення" },
];
const years = [
  { label: "1", value: 1 },
  { label: "2", value: 2 },
];

const CustomerDetailsStep: FC = (): JSX.Element => {
  const [firstName, setFirstName] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastName, setLastName] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [parentName, setParentName] = useState("");
  const [parentNameError, setParentNameError] = useState("");
  const [birthdayDate, setBirthdayDate] = useState("");
  const [birthdayDateError, setBirthdayDateError] = useState("");
  const [individualNumber, setIndividualNumber] = useState("");
  const [individualNumberError, setIndividualNumberError] = useState("");
  const [city, setCity] = useState(0);
  const [street, setStreet] = useState("");
  const [streetError, setStreetError] = useState("");
  const [house, setHouse] = useState("");
  const [houseError, setHouseError] = useState("");
  const [apartment, setApartment] = useState("");
  const [apartmentError, setApartmentError] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [seriesAndNumberPassport, setSeriesAndNumberPassport] = useState("");
  const [seriesAndNumberPassportError, setSeriesAndNumberPassportError] =
    useState("");
  const [seriesAndNumberDriver, setSeriesAndNumberDriver] = useState("");
  const [seriesAndNumberDriverError, setSeriesAndNumberDriverError] =
    useState("");
  const [issueDate, setIssueDate] = useState("");
  const [issueDateError, setIssueDateError] = useState("");
  const [issuedBy, setIssuedBy] = useState("");
  const [issuedByError, setIssuedByError] = useState("");
  const [number, setNumber] = useState("");
  const [numberError, setNumberError] = useState("");
  const [record, setRecord] = useState("");
  const [recordError, setRecordError] = useState("");
  const [validUntil, setValidUntil] = useState("");
  const [validUntilError, setValidUntilError] = useState("");

  const lengthValidation = (param: string) => {
    if (param && param.length !== 0) {
      return true;
    }
    return false;
  };

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
    setFirstName(e.target.value);
    const errorMessage = validateNameValue(e.target.value);
    if (errorMessage && errorMessage.length !== 0) {
      setFirstNameError(errorMessage);
    } else {
      setFirstNameError("");
    }
  };

  const handleLastName = (e: ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value);
    const errorMessage = validateNameValue(e.target.value);
    if (errorMessage && errorMessage.length !== 0) {
      setLastNameError(errorMessage);
    } else {
      setLastNameError("");
    }
  };

  const handleParentName = (e: ChangeEvent<HTMLInputElement>) => {
    setParentName(e.target.value);
    const errorMessage = validateNameValue(e.target.value);
    if (errorMessage && errorMessage.length !== 0) {
      setParentNameError(errorMessage);
    } else {
      setParentNameError("");
    }
  };

  const handleBirthdayDate = (e: ChangeEvent<HTMLInputElement>) => {
    setBirthdayDate(e.target.value);
    if (!dateValidation(e.target.value)) {
      setBirthdayDateError("Введіть дату в форматі дд.мм.рррр");
    } else {
      setBirthdayDateError("");
    }
  };

  const handleIndividualNumber = (e: ChangeEvent<HTMLInputElement>) => {
    setIndividualNumber(e.target.value);
    if (e.target.value.replace(/[_]/g, "").length !== 10) {
      setIndividualNumberError("Поле є обов'язковим");
    } else {
      setIndividualNumberError("");
    }
  };

  const handleCity = (e: ChangeEvent<HTMLSelectElement>) => {
    setCity(+e.target.value);
  };

  const handleStreet = (e: ChangeEvent<HTMLInputElement>) => {
    setStreet(e.target.value);
    if (!mandatoryValidation(e.target.value)) {
      setStreetError("Поле є обов'язковим");
    } else {
      setStreetError("");
    }
  };

  const handleHouse = (e: ChangeEvent<HTMLInputElement>) => {
    setHouse(e.target.value);
    if (!mandatoryValidation(e.target.value)) {
      setHouseError("Поле є обов'язковим");
    } else {
      setHouseError("");
    }
  };

  const handleApartment = (e: ChangeEvent<HTMLInputElement>) => {
    setApartment(e.target.value);
    if (!mandatoryValidation(e.target.value)) {
      setApartmentError("Поле є обов'язковим");
    } else {
      setApartmentError("");
    }
  };

  const isPhoneValid = (phoneStr: string) => {
    return phoneStr.replace(/[{()}\s+-._]/g, "").length === 12;
  };

  const handlePhone = (e: ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
    if (!isPhoneValid(e.target.value)) {
      setPhoneError("Поле є обов'язковим");
    } else {
      setPhoneError("");
    }
  };

  const isEmailValid = (emailStr: string) => {
    const re =
      /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(emailStr.toLowerCase());
  };

  const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (!isEmailValid(e.target.value)) {
      setEmailError("Поле має містити коректну email адресу");
    } else {
      setEmailError("");
    }
  };

  const isSeriesPassportValid = (series: string) => {
    return (
      series &&
      new RegExp(/(^([А-Яа-яІіЇїЄє]){2}([\s])([0-9]){6}$)/).test(series)
    );
  };

  const handleSeriesAndNumberPassport = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toUpperCase();
    if (seriesAndNumberPassportValidation(value)) {
      setSeriesAndNumberPassport(value);
      if (!isSeriesPassportValid(value)) {
        setSeriesAndNumberPassportError(
          "Поле має містити 2 букви кирилиці і 6 цифр"
        );
      } else {
        setSeriesAndNumberPassportError("");
      }
    }
  };

  const isSeriesDriverValid = (series: string) => {
    return (
      series &&
      new RegExp(/(^([А-Яа-яІіЇїЄє]){3}([\s])([0-9]){6}$)/).test(series)
    );
  };

  const handleSeriesAndNumberDriver = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toUpperCase();
    if (seriesAndNumberDriverValidation(value)) {
      setSeriesAndNumberDriver(value);
      if (!isSeriesDriverValid(value)) {
        setSeriesAndNumberDriverError(
          "Поле має містити 3 букви кирилиці і 6 цифр"
        );
      } else {
        setSeriesAndNumberDriverError("");
      }
    }
  };

  const handleIssueDate = (e: ChangeEvent<HTMLInputElement>) => {
    setIssueDate(e.target.value);
    if (!dateValidation(e.target.value)) {
      setIssueDateError("Введіть дату в форматі дд.мм.рррр");
    } else {
      setIssueDateError("");
    }
  };

  const handleIssuedBy = (e: ChangeEvent<HTMLInputElement>) => {
    setIssuedBy(e.target.value);
    if (!mandatoryValidation(e.target.value)) {
      setIssuedByError("Поле є обов'язковим");
    } else {
      setIssuedByError("");
    }
  };

  const isNumberValid = (numberValue: string) => {
    return numberValue && numberValue.length === 6;
  };

  const handleNumber = (e: ChangeEvent<HTMLInputElement>) => {
    setNumber(e.target.value);
    if (!isNumberValid(e.target.value)) {
      setNumberError("Поле є обов'язковим");
    } else {
      setIssuedByError("");
    }
  };

  const recordValidation = (recordValue: string) => {
    return recordValue && recordValue.length === 13;
  };

  const handleRecord = (e: ChangeEvent<HTMLInputElement>) => {
    setRecord(e.target.value);
    if (!recordValidation(e.target.value)) {
      setRecordError("Поле є обов'язковим");
    } else {
      setRecordError("");
    }
  };

  const handleValidUntil = (e: ChangeEvent<HTMLInputElement>) => {
    setValidUntil(e.target.value);
    if (!dateValidation(e.target.value)) {
      setValidUntilError("Введіть дату в форматі дд.мм.рррр");
    } else {
      setValidUntilError("");
    }
  };

  const [selectedDocument, setSelectedDocument] = useState(1);

  const handleChangeDocument = (
    event: ChangeEvent<HTMLSelectElement>
  ): void => {
    const documentValue = +event.target.value;
    setSelectedDocument(documentValue);
  };

  return (
    <>
      <div className="customer-details__info">
        <h2 className="customer-details__info-title">Данные пользователя</h2>
        <div className="customer-details__info-container">
          <div className="customer-details__info-row">
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
          <div className="customer-details__info-row">
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
              placeholder="ІПН"
              value={individualNumber}
              onChange={handleIndividualNumber}
              mask="9999999999"
              errorMessage={individualNumberError}
            />
          </div>
          <div className="customer-details__info-row">
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
            <div className="customer-details__info-address">
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
          <div className="customer-details__info-row">
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
      <div className="customer-details__documents">
        {selectedDocument === 1 && (
          <div className="customer-details__documents-passport">
            <div className="customer-details__documents-row">
              <CustomSelect
                label="Документ"
                options={documentOptions}
                selectedOption={selectedDocument}
                onChange={handleChangeDocument}
              />
              <CustomTextInput
                label="Серія і номер"
                placeholder="Серія і номер"
                value={seriesAndNumberPassport}
                onChange={handleSeriesAndNumberPassport}
                errorMessage={seriesAndNumberPassportError}
              />
              <CustomTextMask
                label="Дата видачі"
                placeholder="__.__.____"
                value={issueDate}
                onChange={handleIssueDate}
                mask="99.99.9999"
                errorMessage={issueDateError}
              />
            </div>
            <div className="customer-details__documents-row">
              <CustomTextInput
                label="Ким виданий"
                placeholder="Ким виданий"
                value={issuedBy}
                onChange={handleIssuedBy}
                errorMessage={issuedByError}
              />
            </div>
          </div>
        )}
        {selectedDocument === 2 && (
          <div className="customer-details__documents-id-card">
            <div className="customer-details__documents-row">
              <CustomSelect
                label="Документ"
                options={documentOptions}
                selectedOption={selectedDocument}
                onChange={handleChangeDocument}
              />
              <CustomTextMask
                label="Номер"
                placeholder="_________"
                value={number}
                onChange={handleNumber}
                mask="999999999"
                errorMessage={numberError}
              />
              <CustomTextMask
                label="Запис"
                placeholder="________-_____"
                value={record}
                onChange={handleRecord}
                mask="99999999-99999"
                errorMessage={recordError}
              />
            </div>
            <div className="customer-details__documents-row">
              <CustomTextInput
                label="Ким видана"
                placeholder="Ким видана"
                value={issuedBy}
                onChange={handleIssuedBy}
                errorMessage={issuedByError}
              />
              <CustomTextMask
                label="Дата видачі"
                placeholder="__.__.____"
                value={issueDate}
                onChange={handleIssueDate}
                mask="99.99.9999"
                errorMessage={issueDateError}
              />
            </div>
          </div>
        )}
        {selectedDocument === 3 && (
          <div className="customer-details__documents-driver-license">
            <div className="customer-details__documents-row">
              <CustomSelect
                label="Документ"
                options={documentOptions}
                selectedOption={selectedDocument}
                onChange={handleChangeDocument}
              />
              <CustomTextInput
                label="Серія і номер"
                placeholder="Серія і номер"
                value={seriesAndNumberDriver}
                onChange={handleSeriesAndNumberDriver}
                errorMessage={seriesAndNumberDriverError}
              />
              <CustomTextMask
                label="Дата видачі"
                placeholder="__.__.____"
                value={issueDate}
                onChange={handleIssueDate}
                mask="99.99.9999"
                errorMessage={issueDateError}
              />
            </div>
            <div className="customer-details__documents-row">
              <CustomTextInput
                label="Ким виданий"
                placeholder="Ким виданий"
                value={issuedBy}
                onChange={handleIssuedBy}
                errorMessage={issuedByError}
              />
              <CustomTextMask
                label="Дійсний до"
                placeholder="Дійсний до"
                value={validUntil}
                onChange={handleValidUntil}
                mask="99.99.9999"
                errorMessage={validUntilError}
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CustomerDetailsStep;

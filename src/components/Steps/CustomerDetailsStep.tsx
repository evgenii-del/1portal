import React, { ChangeEvent, FC, useState } from "react";
import CustomTextInput from "../Common/CustomTextInput";
import CustomSelect from "../Common/CustomSelect";

const documentOptions = [
  { value: 1, label: "Passport" },
  { value: 2, label: "ID Card" },
  { value: 3, label: "Driver license" },
];
const years = [
  { label: "1", value: 1 },
  { label: "2", value: 2 },
];

const CustomerDetailsStep: FC = (): JSX.Element => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [parentName, setParentName] = useState("");
  const [birthdayDate, setBirthdayDate] = useState(0);
  const [individualNumber, setIndividualNumber] = useState("");
  const [city, setCity] = useState(0);
  const [street, setStreet] = useState("");
  const [house, setHouse] = useState("");
  const [apartment, setApartment] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [seriesAndNumber, setSeriesAndNumber] = useState("");
  const [issueDate, setIssueDate] = useState("");
  const [issuedBy, setIssuedBy] = useState("");
  const [number, setNumber] = useState("");
  const [record, setRecord] = useState("");
  const [validUntil, setValidUntil] = useState("");

  const handleFirstName = (e: ChangeEvent<HTMLInputElement>) => {
    setFirstName(e.target.value);
  };

  const handleLastName = (e: ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value);
  };

  const handleParentName = (e: ChangeEvent<HTMLInputElement>) => {
    setParentName(e.target.value);
  };

  const handleBirthdayDate = (e: ChangeEvent<HTMLSelectElement>) => {
    setBirthdayDate(+e.target.value);
  };

  const handleIndividualNumber = (e: ChangeEvent<HTMLInputElement>) => {
    setIndividualNumber(e.target.value);
  };

  const handleCity = (e: ChangeEvent<HTMLSelectElement>) => {
    setCity(+e.target.value);
  };

  const handleStreet = (e: ChangeEvent<HTMLInputElement>) => {
    setStreet(e.target.value);
  };

  const handleHouse = (e: ChangeEvent<HTMLInputElement>) => {
    setHouse(e.target.value);
  };

  const handleApartment = (e: ChangeEvent<HTMLInputElement>) => {
    setApartment(e.target.value);
  };

  const handlePhone = (e: ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
  };

  const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSeriesAndNumber = (e: ChangeEvent<HTMLInputElement>) => {
    setSeriesAndNumber(e.target.value);
  };

  const handleIssueDate = (e: ChangeEvent<HTMLInputElement>) => {
    setIssueDate(e.target.value);
  };

  const handleIssuedBy = (e: ChangeEvent<HTMLInputElement>) => {
    setIssuedBy(e.target.value);
  };

  const handleNumber = (e: ChangeEvent<HTMLInputElement>) => {
    setNumber(e.target.value);
  };

  const handleRecord = (e: ChangeEvent<HTMLInputElement>) => {
    setRecord(e.target.value);
  };

  const handleValidUntil = (e: ChangeEvent<HTMLInputElement>) => {
    setValidUntil(e.target.value);
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
            />
            <CustomTextInput
              label="Ім'я"
              placeholder="Ім'я"
              value={lastName}
              onChange={handleLastName}
            />
            <CustomTextInput
              label="По батькові"
              placeholder="По батькові"
              value={parentName}
              onChange={handleParentName}
            />
          </div>
          <div className="customer-details__info-row">
            <CustomSelect
              label="Рік народження"
              selectedOption={birthdayDate}
              options={years}
              onChange={handleBirthdayDate}
            />
            <CustomTextInput
              label="ІПН"
              placeholder="ІПН"
              value={individualNumber}
              onChange={handleIndividualNumber}
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
            />
            <div className="customer-details__info-address">
              <CustomTextInput
                label="Дім"
                placeholder="Дім"
                value={house}
                onChange={handleHouse}
              />
              <CustomTextInput
                label="Квартира"
                placeholder="Квартира"
                value={apartment}
                onChange={handleApartment}
              />
            </div>
          </div>
          <div className="customer-details__info-row">
            <CustomTextInput
              label="Телефон"
              placeholder="Телефон"
              value={phone}
              onChange={handlePhone}
            />
            <CustomTextInput
              label="Пошта (email)"
              placeholder="Пошта (email)"
              value={email}
              onChange={handleEmail}
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
                value={seriesAndNumber}
                onChange={handleSeriesAndNumber}
              />
              <CustomTextInput
                label="Дата видачі"
                placeholder="Дата видачі"
                value={issueDate}
                onChange={handleIssueDate}
              />
            </div>
            <div className="customer-details__documents-row">
              <CustomTextInput
                label="Ким виданий"
                placeholder="Ким виданий"
                value={issuedBy}
                onChange={handleIssuedBy}
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
              <CustomTextInput
                label="Номер"
                placeholder="Номер"
                value={number}
                onChange={handleNumber}
              />
              <CustomTextInput
                label="Запис"
                placeholder="Запис"
                value={record}
                onChange={handleRecord}
              />
            </div>
            <div className="customer-details__documents-row">
              <CustomTextInput
                label="Ким видана"
                placeholder="Ким видана"
                value={issuedBy}
                onChange={handleIssuedBy}
              />
              <CustomTextInput
                label="Дата видачі"
                placeholder="Дата видачі"
                value={issueDate}
                onChange={handleIssueDate}
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
                value={seriesAndNumber}
                onChange={handleSeriesAndNumber}
              />
              <CustomTextInput
                label="Дата видачі"
                placeholder="Дата видачі"
                value={issueDate}
                onChange={handleIssueDate}
              />
            </div>
            <div className="customer-details__documents-row">
              <CustomTextInput
                label="Ким виданий"
                placeholder="Ким виданий"
                value={issuedBy}
                onChange={handleIssuedBy}
              />
              <CustomTextInput
                label="Дійсний до"
                placeholder="Дійсний до"
                value={validUntil}
                onChange={handleValidUntil}
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CustomerDetailsStep;

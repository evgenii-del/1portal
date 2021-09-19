import React, { ChangeEvent, FC, useState } from "react";
import CustomTextInput from "../Common/CustomTextInput";
import CustomSelect from "../Common/CustomSelect";
import CustomTextMask from "../Common/CustomTextMask";

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
  const [birthdayDate, setBirthdayDate] = useState("");
  const [individualNumber, setIndividualNumber] = useState("");
  const [city, setCity] = useState(0);
  const [street, setStreet] = useState("");
  const [house, setHouse] = useState("");
  const [apartment, setApartment] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [seriesAndNumberPassport, setSeriesAndNumberPassport] = useState("");
  const [seriesAndNumberDriver, setSeriesAndNumberDriver] = useState("");
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

  const handleBirthdayDate = (e: ChangeEvent<HTMLInputElement>) => {
    setBirthdayDate(e.target.value);
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

  const handleSeriesAndNumberPassport = (e: ChangeEvent<HTMLInputElement>) => {
    setSeriesAndNumberPassport(e.target.value);
  };

  const handleSeriesAndNumberDriver = (e: ChangeEvent<HTMLInputElement>) => {
    setSeriesAndNumberDriver(e.target.value);
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
            <CustomTextMask
              label="Рік народження"
              placeholder="__.__.____"
              value={birthdayDate}
              onChange={handleBirthdayDate}
              mask="99.99.9999"
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
            <CustomTextMask
              label="Телефон"
              placeholder="+380 (__) ___-__-__"
              value={phone}
              onChange={handlePhone}
              mask="+380 (99) 999-99-99"
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
                value={seriesAndNumberPassport}
                onChange={handleSeriesAndNumberPassport}
              />
              <CustomTextMask
                label="Дата видачі"
                placeholder="__.__.____"
                value={issueDate}
                onChange={handleIssueDate}
                mask="99.99.9999"
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
              <CustomTextMask
                label="Номер"
                placeholder="_________"
                value={number}
                onChange={handleNumber}
                mask="999999999"
              />
              <CustomTextMask
                label="Запис"
                placeholder="________-_____"
                value={record}
                onChange={handleRecord}
                mask="99999999-99999"
              />
            </div>
            <div className="customer-details__documents-row">
              <CustomTextInput
                label="Ким видана"
                placeholder="Ким видана"
                value={issuedBy}
                onChange={handleIssuedBy}
              />
              <CustomTextMask
                label="Дата видачі"
                placeholder="__.__.____"
                value={issueDate}
                onChange={handleIssueDate}
                mask="99.99.9999"
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
              />
              <CustomTextMask
                label="Дата видачі"
                placeholder="__.__.____"
                value={issueDate}
                onChange={handleIssueDate}
                mask="99.99.9999"
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

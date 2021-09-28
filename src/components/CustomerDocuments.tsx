import React, { ChangeEvent, FC, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  dateValidation,
  isNumberValid,
  isSeriesDriverValid,
  isSeriesPassportValid,
  mandatoryValidation,
  recordValidation,
  seriesAndNumberDriverValidation,
  seriesAndNumberPassportValidation,
} from "../utils/validations";
import { documentOptions } from "../utils/constants";
import CustomSelect from "./Common/CustomSelect";
import CustomTextInput from "./Common/CustomTextInput";
import CustomTextMask from "./Common/CustomTextMask";
import { updateCustomerDocuments } from "../redux/actions/contract";

const CustomerDocuments: FC = (): JSX.Element => {
  const customerDetails = useSelector(
    (state: any) => state.contractReducer.customerDetails.customerDocuments
  );
  const { passport, card, driver } = customerDetails;
  const dispatch = useDispatch();
  const [selectedDocument, setSelectedDocument] = useState(1);

  // Passport
  const [seriesAndNumberPassportError, setSeriesAndNumberPassportError] =
    useState("");
  const [issuedByPassportError, setIssuedByPassportError] = useState("");
  const [issueDatePassportError, setIssueDatePassportError] = useState("");

  // ID Card
  const [numberCardError, setNumberCardError] = useState("");
  const [recordCardError, setRecordCardError] = useState("");
  const [issuedByCardError, setIssuedByCardError] = useState("");
  const [issueDateCardError, setIssueDateCardError] = useState("");

  // Driver
  const [seriesAndNumberDriverError, setSeriesAndNumberDriverError] =
    useState("");
  const [issuedByDriverError, setIssuedByDriverError] = useState("");
  const [issueDateDriverError, setIssueDateDriverError] = useState("");
  const [validUntilDriverError, setValidUntilDriverError] = useState("");

  const handleSeriesAndNumberPassport = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toUpperCase();
    if (seriesAndNumberPassportValidation(value)) {
      dispatch(
        updateCustomerDocuments({
          card,
          driver,
          passport: {
            ...passport,
            seriesAndNumber: value,
          },
        })
      );
      if (!isSeriesPassportValid(value)) {
        setSeriesAndNumberPassportError(
          "Поле має містити 2 букви кирилиці і 6 цифр"
        );
      } else {
        setSeriesAndNumberPassportError("");
      }
    }
  };

  const handleIssueDatePassport = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(
      updateCustomerDocuments({
        card,
        driver,
        passport: {
          ...passport,
          issueDate: e.target.value,
        },
      })
    );
    if (!dateValidation(e.target.value)) {
      setIssueDatePassportError("Введіть дату в форматі дд.мм.рррр");
    } else {
      setIssueDatePassportError("");
    }
  };

  const handleIssuedByPassport = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(
      updateCustomerDocuments({
        card,
        driver,
        passport: {
          ...passport,
          issuedBy: e.target.value,
        },
      })
    );
    if (!mandatoryValidation(e.target.value)) {
      setIssuedByPassportError("Поле є обов'язковим");
    } else {
      setIssuedByPassportError("");
    }
  };

  const handleNumberCard = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(
      updateCustomerDocuments({
        passport,
        driver,
        card: {
          ...card,
          number: e.target.value,
        },
      })
    );
    if (!isNumberValid(e.target.value)) {
      setNumberCardError("Поле є обов'язковим");
    } else {
      setNumberCardError("");
    }
  };

  const handleRecordCard = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(
      updateCustomerDocuments({
        passport,
        driver,
        card: {
          ...card,
          record: e.target.value,
        },
      })
    );
    if (!recordValidation(e.target.value)) {
      setRecordCardError("Поле є обов'язковим");
    } else {
      setRecordCardError("");
    }
  };

  const handleIssueDateCard = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(
      updateCustomerDocuments({
        passport,
        driver,
        card: {
          ...card,
          issueDate: e.target.value,
        },
      })
    );
    if (!dateValidation(e.target.value)) {
      setIssueDateCardError("Введіть дату в форматі дд.мм.рррр");
    } else {
      setIssueDateCardError("");
    }
  };

  const handleIssuedByCard = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(
      updateCustomerDocuments({
        passport,
        driver,
        card: {
          ...card,
          issuedBy: e.target.value,
        },
      })
    );
    if (!mandatoryValidation(e.target.value)) {
      setIssuedByCardError("Поле є обов'язковим");
    } else {
      setIssuedByCardError("");
    }
  };

  const handleValidUntilDriver = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(
      updateCustomerDocuments({
        passport,
        card,
        driver: {
          ...driver,
          validUntil: e.target.value,
        },
      })
    );
    if (!dateValidation(e.target.value)) {
      setValidUntilDriverError("Введіть дату в форматі дд.мм.рррр");
    } else {
      setValidUntilDriverError("");
    }
  };

  const handleSeriesAndNumberDriver = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toUpperCase();
    if (seriesAndNumberDriverValidation(value)) {
      dispatch(
        updateCustomerDocuments({
          passport,
          card,
          driver: {
            ...driver,
            seriesAndNumber: value,
          },
        })
      );
      if (!isSeriesDriverValid(value)) {
        setSeriesAndNumberDriverError(
          "Поле має містити 3 букви кирилиці і 6 цифр"
        );
      } else {
        setSeriesAndNumberDriverError("");
      }
    }
  };

  const handleIssueDateDriver = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(
      updateCustomerDocuments({
        passport,
        card,
        driver: {
          ...driver,
          issueDate: e.target.value,
        },
      })
    );
    if (!dateValidation(e.target.value)) {
      setIssueDateDriverError("Введіть дату в форматі дд.мм.рррр");
    } else {
      setIssueDateDriverError("");
    }
  };

  const handleIssuedByDriver = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(
      updateCustomerDocuments({
        passport,
        card,
        driver: {
          ...driver,
          issuedBy: e.target.value,
        },
      })
    );
    if (!mandatoryValidation(e.target.value)) {
      setIssuedByDriverError("Поле є обов'язковим");
    } else {
      setIssuedByDriverError("");
    }
  };

  const handleChangeDocument = (
    event: ChangeEvent<HTMLSelectElement>
  ): void => {
    const documentValue = +event.target.value;
    setSelectedDocument(documentValue);
  };

  return (
    <div className="grid documents">
      {selectedDocument === 1 && (
        <div>
          <div className="grid__row">
            <CustomSelect
              label="Документ"
              options={documentOptions}
              selectedOption={selectedDocument}
              onChange={handleChangeDocument}
            />
            <CustomTextInput
              label="Серія і номер"
              placeholder="Серія і номер"
              value={passport.seriesAndNumber}
              onChange={handleSeriesAndNumberPassport}
              errorMessage={seriesAndNumberPassportError}
            />
            <CustomTextMask
              label="Дата видачі"
              placeholder="__.__.____"
              value={passport.issueDate}
              onChange={handleIssueDatePassport}
              mask="99.99.9999"
              errorMessage={issueDatePassportError}
            />
          </div>
          <div className="grid__row">
            <CustomTextInput
              label="Ким виданий"
              placeholder="Ким виданий"
              value={passport.issuedBy}
              onChange={handleIssuedByPassport}
              errorMessage={issuedByPassportError}
            />
          </div>
        </div>
      )}
      {selectedDocument === 2 && (
        <div>
          <div className="grid__row">
            <CustomSelect
              label="Документ"
              options={documentOptions}
              selectedOption={selectedDocument}
              onChange={handleChangeDocument}
            />
            <CustomTextMask
              label="Номер"
              placeholder="_________"
              value={card.number}
              onChange={handleNumberCard}
              mask="999999999"
              errorMessage={numberCardError}
            />
            <CustomTextMask
              label="Запис"
              placeholder="________-_____"
              value={card.record}
              onChange={handleRecordCard}
              mask="99999999-99999"
              errorMessage={recordCardError}
            />
          </div>
          <div className="grid__row">
            <CustomTextInput
              label="Ким видана"
              placeholder="Ким видана"
              value={card.issuedBy}
              onChange={handleIssuedByCard}
              errorMessage={issuedByCardError}
            />
            <CustomTextMask
              label="Дата видачі"
              placeholder="__.__.____"
              value={card.issueDate}
              onChange={handleIssueDateCard}
              mask="99.99.9999"
              errorMessage={issueDateCardError}
            />
          </div>
        </div>
      )}
      {selectedDocument === 3 && (
        <div>
          <div className="grid__row">
            <CustomSelect
              label="Документ"
              options={documentOptions}
              selectedOption={selectedDocument}
              onChange={handleChangeDocument}
            />
            <CustomTextInput
              label="Серія і номер"
              placeholder="Серія і номер"
              value={driver.seriesAndNumber}
              onChange={handleSeriesAndNumberDriver}
              errorMessage={seriesAndNumberDriverError}
            />
            <CustomTextMask
              label="Дата видачі"
              placeholder="__.__.____"
              value={driver.issueDate}
              onChange={handleIssueDateDriver}
              mask="99.99.9999"
              errorMessage={issueDateDriverError}
            />
          </div>
          <div className="grid__row">
            <CustomTextInput
              label="Ким виданий"
              placeholder="Ким виданий"
              value={driver.issuedBy}
              onChange={handleIssuedByDriver}
              errorMessage={issuedByDriverError}
            />
            <CustomTextMask
              label="Дійсний до"
              placeholder="__.__.____"
              value={driver.validUntil}
              onChange={handleValidUntilDriver}
              mask="99.99.9999"
              errorMessage={validUntilDriverError}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomerDocuments;

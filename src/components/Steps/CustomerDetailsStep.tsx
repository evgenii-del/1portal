import React, { ChangeEvent, FC, useState } from "react";
import CustomTextInput from "../Common/CustomTextInput";
import CustomSelect from "../Common/CustomSelect";

const documentOptions = [
  { value: 1, label: "Passport" },
  { value: 2, label: "ID Card" },
  { value: 3, label: "Driver license" },
];

const CustomerDetailsStep: FC = (): JSX.Element => {
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
            <CustomTextInput />
            <CustomTextInput />
            <CustomTextInput />
          </div>
          <div className="customer-details__info-row">
            <CustomTextInput />
            <CustomTextInput />
          </div>
          <div className="customer-details__info-row">
            <CustomTextInput />
            <CustomTextInput />
            <div className="customer-details__info-address">
              <CustomTextInput />
              <CustomTextInput />
            </div>
          </div>
          <div className="customer-details__info-row">
            <CustomTextInput />
            <CustomTextInput />
          </div>
        </div>
      </div>
      <div className="customer-details__documents">
        {selectedDocument === 1 && (
          <div className="customer-details__documents-passport">
            <div className="customer-details__documents-row">
              <CustomSelect
                options={documentOptions}
                selectedOption={selectedDocument}
                onChange={handleChangeDocument}
              />
              <CustomTextInput />
              <CustomTextInput />
            </div>
          </div>
        )}
        {selectedDocument === 2 && (
          <div className="customer-details__documents-id-card">
            <div className="customer-details__documents-row">
              <CustomSelect
                options={documentOptions}
                selectedOption={selectedDocument}
                onChange={handleChangeDocument}
              />
              <CustomTextInput />
              <CustomTextInput />
            </div>
            <div className="customer-details__documents-row">
              <CustomTextInput />
            </div>
          </div>
        )}
        {selectedDocument === 3 && (
          <div className="customer-details__documents-driver-license">
            <div className="customer-details__documents-row">
              <CustomSelect
                options={documentOptions}
                selectedOption={selectedDocument}
                onChange={handleChangeDocument}
              />
              <CustomTextInput />
              <CustomTextInput />
            </div>
            <div className="customer-details__documents-row">
              <CustomTextInput />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CustomerDetailsStep;

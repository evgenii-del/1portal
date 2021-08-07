import React, { FC } from "react";
import CustomTextInput from "../Common/CustomTextInput";

const CustomerDetailsStep: FC = (): JSX.Element => {
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
            <CustomTextInput />
          </div>
          <div className="customer-details__info-row">
            <CustomTextInput />
            <CustomTextInput />
          </div>
        </div>
      </div>
      <div className="customer-details__documents" />
    </>
  );
};

export default CustomerDetailsStep;

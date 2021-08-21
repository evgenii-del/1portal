import React, { FC, useState } from "react";
// eslint-disable-next-line import/no-named-as-default,import/no-named-as-default-member
import CustomTextInput from "../Common/CustomTextInput";
import CarTaxiConfirmation from "../CarTaxiConfirmation";

const CarDetailsStep: FC = (): JSX.Element => {
  const [email, setEmail] = useState("email");
  const [emailError, setEmailError] = useState("Ошибочка");

  const emailHandler = (e: any) => {
    setEmail(e.target.value);
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(email).toLowerCase())) {
      setEmailError("Ошибочка");
    } else {
      setEmailError("");
    }
  };

  return (
    <>
      <div className="car-details__car-data">
        <h2 className="car-details__car-data-title">Данные автомобиля</h2>
        <div className="car-details__car-data-container">
          <div className="car-details__car-data-row">
            <CustomTextInput
              label="test label"
              placeholder="test placeholder"
              value={email}
              errorMessage={emailError}
              onChange={emailHandler}
            />
            <CustomTextInput />
          </div>
          <div className="car-details__car-data-row">
            <CustomTextInput />
            <CustomTextInput />
            <CustomTextInput />
          </div>
        </div>
      </div>
      <CarTaxiConfirmation />
      <div className="car-details__period">
        <h2 className="car-details__period-title">Период действия полиса</h2>
        <div className="car-details__period-container">
          <CustomTextInput />
          <CustomTextInput />
        </div>
      </div>
    </>
  );
};

export default CarDetailsStep;

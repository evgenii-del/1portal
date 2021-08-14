import React, { FC } from "react";

const CarTaxiConfirmation: FC = (): JSX.Element => {
  return (
    <div className="taxi-confirmation">
      <div className="checkbox">
        <input
          className="checkbox__input"
          type="checkbox"
          name="checkbox_1"
          id="checkbox_1"
        />
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label className="checkbox__label" htmlFor="checkbox_1">
          Ты согласен?
        </label>
      </div>
    </div>
  );
};

export default CarTaxiConfirmation;

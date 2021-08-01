import React, { FC } from "react";

const CarTaxiConfirmation: FC = (): JSX.Element => {
  return (
    <div className="taxi-confirmation">
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label>
        <input type="checkbox" />
        <span>Авто не используется в такси</span>
      </label>
    </div>
  );
};

export default CarTaxiConfirmation;

import React, { FC } from "react";

const CustomTextInput: FC = () => {
  return (
    <div className="custom-text-input">
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label className="custom-text-input__label" htmlFor="field">
        Label
      </label>
      <div className="">
        <input
          className="custom-text-input__input"
          type="text"
          name="field"
          id="field"
        />
      </div>
    </div>
  );
};

export default CustomTextInput;

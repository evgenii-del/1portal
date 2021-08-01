import React, { FC } from "react";

const CustomTextInput: FC = (): JSX.Element => {
  return (
    <div className="custom-text-input">
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label className="custom-text-input__label">Label</label>
      <div>
        <input className="custom-text-input__input" type="text" />
      </div>
    </div>
  );
};

export default CustomTextInput;

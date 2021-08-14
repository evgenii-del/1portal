import React, { FC } from "react";

interface CustomTextInputInterface {
  placeholder?: string;
  label?: string;
}

const CustomTextInput: FC<CustomTextInputInterface> = ({
  placeholder,
  label,
}: CustomTextInputInterface): JSX.Element => {
  return (
    <div className="custom-text-input">
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label className="custom-text-input__label">{label}</label>
      <div>
        <input
          className="custom-text-input__input"
          type="text"
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

CustomTextInput.defaultProps = {
  placeholder: "placeholder",
  label: "label",
};

export default CustomTextInput;

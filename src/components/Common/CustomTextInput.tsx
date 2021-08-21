import React, { FC, useState } from "react";

interface CustomTextInputInterface {
  placeholder?: string;
  label?: string;
  value?: string;
  errorMessage?: string;

  // eslint-disable-next-line react/require-default-props
  onChange?(e: any): void;
}

const CustomTextInput: FC<CustomTextInputInterface> = ({
  placeholder,
  label,
  value,
  onChange,
  errorMessage,
}: CustomTextInputInterface): JSX.Element => {
  const [inputDirty, setInputDirty] = useState(false);

  const onBlur = () => {
    setInputDirty(true);
  };

  return (
    <div className="custom-text-input">
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label
        className={
          inputDirty && errorMessage
            ? "custom-text-input__label custom-text-input__label_error"
            : "custom-text-input__label"
        }
      >
        {label}
      </label>
      <div>
        <input
          className={
            inputDirty && errorMessage
              ? "custom-text-input__input custom-text-input__input_error"
              : "custom-text-input__input"
          }
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        />
      </div>
      {inputDirty && errorMessage && (
        <span className="custom-text-input__error-message">{errorMessage}</span>
      )}
    </div>
  );
};

CustomTextInput.defaultProps = {
  placeholder: "placeholder",
  label: "label",
  value: "value",
  errorMessage: "errorMessage",
};

export default CustomTextInput;

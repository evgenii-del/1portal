import React, { ChangeEvent, FC, useState } from "react";
import InputMask from "react-input-mask";

interface CustomTextMaskInterface {
  placeholder?: string;
  label?: string;
  value?: string;
  errorMessage?: string;
  onChange(e: ChangeEvent<HTMLInputElement>): void;
  mask: string;
}

const CustomTextMask: FC<CustomTextMaskInterface> = ({
  label,
  placeholder,
  value,
  onChange,
  errorMessage,
  mask,
}: CustomTextMaskInterface): JSX.Element => {
  const [inputDirty, setInputDirty] = useState(false);

  const onBlur = () => {
    setInputDirty(true);
  };

  return (
    <div className="custom-text-input">
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control,jsx-a11y/label-has-for */}
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
        <InputMask
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
          mask={mask}
        />
      </div>
      {inputDirty && errorMessage && (
        <span className="custom-text-input__error-message">{errorMessage}</span>
      )}
    </div>
  );
};

CustomTextMask.defaultProps = {
  placeholder: "placeholder",
  label: "label",
  value: "value",
  errorMessage: "errorMessage",
};

export default CustomTextMask;

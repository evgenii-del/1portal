import React, { ChangeEvent, FC } from "react";

interface OptionInterface {
  label: string;
  value: number;
}

interface CustomSelectProp {
  label: string;
  options: OptionInterface[];
  selectedOption: number | undefined;
  onChange(e: ChangeEvent<HTMLSelectElement>): void;
  disabled?: boolean;
}

const CustomSelect: FC<CustomSelectProp> = ({
  label,
  selectedOption,
  options,
  onChange,
  disabled,
}: CustomSelectProp): JSX.Element => {
  return (
    <div className="custom-text-input">
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label className="custom-text-input__label">{label}</label>
      <div>
        <select
          className="custom-text-input__input"
          defaultValue={selectedOption}
          onChange={(e: ChangeEvent<HTMLSelectElement>) => onChange(e)}
          disabled={disabled}
        >
          <option value={0} disabled hidden>
            Оберіть
          </option>
          {options.map(({ value: optionValue, label: optionLabel }) => (
            <option value={optionValue} key={optionValue}>
              {optionLabel}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

CustomSelect.defaultProps = {
  disabled: false,
};

export default CustomSelect;

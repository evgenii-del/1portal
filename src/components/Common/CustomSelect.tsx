import React, { ChangeEvent, FC } from "react";
import Arrow from "./Arrow";

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
    <div className="custom-select">
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control,jsx-a11y/label-has-for */}
      <label className="custom-select__label">{label}</label>
      <div className="custom-select__container">
        <select
          className="custom-select__input"
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
        <Arrow />
      </div>
    </div>
  );
};

CustomSelect.defaultProps = {
  disabled: false,
};

export default CustomSelect;

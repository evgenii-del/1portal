import React, { ChangeEvent, FC } from "react";

interface OptionInterface {
  label: string;
  value: number;
}

interface CustomSelectProp {
  options: OptionInterface[];
  selectedOption: number;
  onChange(e: ChangeEvent<HTMLSelectElement>): void;
}

const CustomSelect: FC<CustomSelectProp> = ({
  selectedOption,
  options,
  onChange,
}: CustomSelectProp): JSX.Element => {
  return (
    <div className="custom-text-input">
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label className="custom-text-input__label">Label</label>
      <div>
        <select
          className="custom-text-input__input"
          value={selectedOption}
          onChange={(e: ChangeEvent<HTMLSelectElement>) => onChange(e)}
        >
          {options.map(({ value, label }) => (
            <option value={value} key={value}>
              {label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default CustomSelect;

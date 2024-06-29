import React from "react";

interface SelectComponentProps {
  options: string[];
  icon: React.ReactNode;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SelectComponent: React.FC<SelectComponentProps> = ({
  options,
  icon,
  value,
  onChange,
}) => {
  return (
    <div className="relative group rounded-lg w-full overflow-hidden flex items-center border gap-4 px-4 bg-neutral-700">
      <select
        className="select w-full select-bordered focus:outline-none py-4 appearance-none"
        value={value}
        onChange={onChange}
      >
        {options.map((option, index) => (
          <option key={index} className="">
            {option}
          </option>
        ))}
      </select>
      <div className="p-2">{icon}</div>
    </div>
  );
};

export default SelectComponent;

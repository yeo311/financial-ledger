import { ChangeEvent } from 'react';

export type Option = {
  value: string | number;
  name: string;
};

interface Props {
  curValue?: string | number;
  options: Option[];
  onChange: (value: string | number) => void;
}

export default function InputSelect({ curValue, options, onChange }: Props) {
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value);
  };

  return (
    <select
      className="focus:outline-none"
      onChange={handleChange}
      value={curValue}
    >
      {options?.map(({ value, name }) => (
        <option key={value} value={value}>
          {name}
        </option>
      ))}
    </select>
  );
}

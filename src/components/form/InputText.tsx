import { ChangeEvent } from 'react';

interface Props {
  placeholder?: string;
  value?: string;
  onChange: (v: string) => void;
}

export default function InputText({ placeholder, value, onChange }: Props) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };
  return (
    <input
      type="text"
      className="focus:outline-none flex-auto text-right"
      value={value}
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
}

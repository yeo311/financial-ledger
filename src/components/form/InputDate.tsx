import { ChangeEvent } from 'react';

interface Props {
  value?: string;
  onChange: (v: string) => void;
}

export default function InputDate({ value, onChange }: Props) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <input
      type="date"
      value={value}
      onChange={handleChange}
      className="focus:outline-none"
    />
  );
}

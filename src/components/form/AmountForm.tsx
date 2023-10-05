import { ChangeEvent } from 'react';

interface Props {
  value?: number;
  onChange: (value: number) => void;
}

export default function AmountForm({ value, onChange }: Props) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(Number(e.target.value));
  };

  return (
    <div className="flex text-2xl mb-4 justify-end">
      <input
        className="focus:outline-none border-b border-white focus:border-lime-500 flex-auto text-right px-1"
        type="number"
        placeholder="0"
        onChange={handleChange}
        value={value === 0 ? '' : value}
      />{' '}
      원
    </div>
  );
}

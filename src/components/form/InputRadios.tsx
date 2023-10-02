import { ChangeEvent, Fragment } from 'react';

export interface RadioItem {
  id: string;
  groupName: string;
  name: string;
  value: string | number;
}

interface Props {
  curValue: string | number;
  onChange: (v: string | number) => void;
  items: RadioItem[];
}

export default function InputRadios({ curValue, onChange, items }: Props) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className="flex gap-x-1">
      {items.map(({ id, name, groupName, value }) => (
        <Fragment key={id}>
          <input
            className="hidden"
            type="radio"
            id={id}
            name={groupName}
            value={value}
            checked={value === curValue}
            onChange={handleChange}
          />
          <label
            className="cursor-pointer flex justify-center items-center border px-2 py-1 rounded-sm text-lim transition-all"
            style={
              value === curValue
                ? {
                    borderColor: 'green',
                    color: 'green',
                  }
                : {}
            }
            htmlFor={id}
          >
            {name}
          </label>
        </Fragment>
      ))}
    </div>
  );
}

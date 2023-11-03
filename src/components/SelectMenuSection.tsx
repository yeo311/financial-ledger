'use client';

import { menuIndexAtom } from '@/atoms/menuIndex';
import { useAtom } from 'jotai';
import cn from 'classnames';

const buttons = [
  { id: 1, name: '목록' },
  { id: 2, name: '통계' },
];

const SelectMenuSection = () => {
  const [menuIndex, setMenuIndex] = useAtom(menuIndexAtom);

  return (
    <section className="flex justify-between gap-1 py-2">
      {buttons.map((button) => {
        const isActive = menuIndex === button.id;
        return (
          <button
            key={button.id}
            className={cn('w-full', 'py-2', 'rounded', {
              'bg-slate-100': !isActive,
              'bg-lime-300': isActive,
            })}
            onClick={() => setMenuIndex(button.id)}
          >
            {button.name}
          </button>
        );
      })}
    </section>
  );
};

export default SelectMenuSection;

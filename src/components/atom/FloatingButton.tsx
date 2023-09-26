'use client';

import { MouseEventHandler, PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  color?: string;
}

export default function FloatingButton({
  onClick,
  children,
  color = 'blue',
}: Props) {
  return (
    <button
      onClick={onClick}
      className={`fixed right-5 bottom-5 flex justify-center items-center p-0 w-10 h-10 bg-${color}-600 rounded-full hover:bg-${color}-700 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none`}
    >
      {children}
    </button>
  );
}

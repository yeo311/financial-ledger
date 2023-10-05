'use client';

import { MouseEventHandler, PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export default function FloatingButton({ onClick, children }: Props) {
  return (
    <button
      onClick={onClick}
      className={`fixed right-5 flex justify-center items-center p-0 w-10 h-10 bg-blue-600 rounded-full hover:bg-blue-700 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none`}
      style={{ bottom: 'calc(env(safe-area-inset-bottom, 0px) + 1.25rem)' }}
    >
      {children}
    </button>
  );
}

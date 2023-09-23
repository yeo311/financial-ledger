'use client';

import { MouseEventHandler, PropsWithChildren } from 'react';

interface ButtonProps extends PropsWithChildren {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
}

export default function Button({ children, onClick, className }: ButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`p-1 ${className || ''}`}
    >
      {children}
    </button>
  );
}

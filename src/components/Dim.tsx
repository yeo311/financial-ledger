'use client';

import React, { useEffect, useRef, useState } from 'react';

interface Props {
  isShow: boolean;
  onClick: React.MouseEventHandler<HTMLDivElement>;
}

export default function Dim({ isShow, onClick }: Props) {
  const [initialOpen, setInitialOpen] = useState(false);
  const scrollY = useRef<number>(0);

  useEffect(() => {
    if (isShow) setInitialOpen(true);
  }, [isShow]);

  useEffect(() => {
    const body = document.querySelector('body')!;
    if (isShow) {
      scrollY.current = document.documentElement.scrollTop;
      body.style.cssText = 'overflow: hidden';
    } else {
      body.style.cssText = '';
      if (scrollY.current) document.documentElement.scrollTop = scrollY.current;
    }
  }, [isShow]);

  if (!initialOpen) return null;

  return (
    <div
      className={`fixed w-full h-0 left-0 top-0 bg-black opacity-40 -z-10 ${
        isShow ? 'animate-fadein' : 'animate-fadeout'
      }`}
      onClick={onClick}
    />
  );
}

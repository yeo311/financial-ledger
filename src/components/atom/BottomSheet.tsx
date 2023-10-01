'use client';

import { PropsWithChildren, useRef, useState } from 'react';
import Dim from './Dim';

interface Props extends PropsWithChildren {
  isOpen?: boolean;
  onClose?: () => void;
}

export default function BottomSheet({
  isOpen = false,
  onClose,
  children,
}: Props) {
  const [dragging, setDragging] = useState(false);
  const [containerHeight, setContainerHeight] = useState('auto');

  const touchStartPoint = useRef<number>(0);

  const handleClose = () => {
    onClose && onClose();
    setTimeout(() => {
      setContainerHeight('auto');
    }, 400);
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLElement>) => {
    touchStartPoint.current = e.targetTouches[0].clientY;
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLElement>) => {
    setDragging(true);
    const { clientY } = e.changedTouches[0];
    setContainerHeight(`${window.innerHeight - clientY}px`);
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLElement>) => {
    const { clientY } = e.changedTouches[0];
    setDragging(false);
    if (touchStartPoint.current < clientY) {
      handleClose();
    } else {
      setContainerHeight(`${window.innerHeight - 100}px`);
    }
    touchStartPoint.current = 0;
  };

  const containerStyle: React.CSSProperties = {
    height: containerHeight,
    transform: isOpen ? 'translate(50%, 0)' : 'translate(50%, 100%)',
    transition: dragging
      ? 'none'
      : isOpen
      ? 'all 400ms cubic-bezier(0.33, 0.45, 0, 1)'
      : 'all 300ms cubic-bezier(0.3, 0, 0.7, 0.4)',
  };

  const contentStyle: React.CSSProperties = dragging
    ? {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        top: '2.25rem',
      }
    : {
        maxHeight: '404px',
      };

  return (
    <>
      <section
        className="w-full max-w-screen-sm overflow-hidden fixed right-1/2 bottom-0 pb-0 z-50 pt-9 rounded-t-2xl translate-x-1/2 bg-white"
        style={containerStyle}
      >
        <div className="overflow-y-auto" style={contentStyle}>
          <div>{children}</div>
        </div>

        <span
          className="block absolute left-0 right-0 top-0 h-[36px] before:content-[''] before:block before:w-[32px] before:h-[4px] before:bg-gray-700 before:opacity-40 before:rounded-[100px] before:absolute before:right-1/2 before:bottom-1/2 before:translate-x-1/2 before:translate-y-1/2"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        />
      </section>
      <Dim isShow={isOpen} onClick={handleClose} />
    </>
  );
}

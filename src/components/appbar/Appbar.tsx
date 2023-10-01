import { PropsWithChildren } from 'react';

export default function Appbar({ children }: PropsWithChildren) {
  return (
    <header className="h-[50px]">
      <div className="h-[50px] fixed left-0 right-0 top-0 bg-white flex px-2 z-50 justify-center items-center">
        {children}
      </div>
    </header>
  );
}

import { PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {
  bgColor: string;
}

export default function Avatar({ bgColor, children }: Props) {
  return (
    <div className="flex w-10 h-10 bg-gray-200 rounded-full">{children}</div>
  );
}

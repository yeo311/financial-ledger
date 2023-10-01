import { PropsWithChildren } from 'react';

export default function FormRow({ children }: PropsWithChildren) {
  return (
    <div className="flex justify-between items-center py-4">{children}</div>
  );
}

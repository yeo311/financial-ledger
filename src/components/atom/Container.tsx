import { PropsWithChildren } from 'react';

export default function Container({ children }: PropsWithChildren) {
  return <section className="p-5">{children}</section>;
}

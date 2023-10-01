import { PropsWithChildren } from 'react';

export default function FormContainer({ children }: PropsWithChildren) {
  return <form className="flex flex-col divide-y">{children}</form>;
}

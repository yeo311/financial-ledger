import { MouseEventHandler } from 'react';
import FloatingButton from './atom/FloatingButton';
import { LuPlus } from 'react-icons/lu';

interface Props {
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export default function AddItemButton({ onClick }: Props) {
  return (
    <FloatingButton onClick={onClick}>
      <LuPlus className="text-2xl text-white" />
    </FloatingButton>
  );
}

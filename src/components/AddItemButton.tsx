'use client';

import FloatingButton from './atom/FloatingButton';
import { LuPlus } from 'react-icons/lu';
import { useRouter } from 'next/navigation';

export default function AddItemButton() {
  const router = useRouter();
  const handleClick = () => {
    router.push('/create');
  };

  return (
    <FloatingButton onClick={handleClick}>
      <LuPlus className="text-2xl text-white" />
    </FloatingButton>
  );
}

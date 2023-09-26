import FloatingButton from './atom/FloatingButton';
import { LuPlus } from 'react-icons/lu';

export default function AddItemButton() {
  return (
    <FloatingButton>
      <LuPlus className="text-2xl" />
    </FloatingButton>
  );
}

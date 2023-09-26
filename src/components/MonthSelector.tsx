'use client';

import { BsFillCaretLeftFill, BsFillCaretRightFill } from 'react-icons/bs';
import Button from './atom/Button';
import { useRouter } from 'next/navigation';
import { addMonth } from '@/utils/date';

interface Props {
  year: string | number;
  month: string | number;
}

export default function MonthSelector({ year, month }: Props) {
  const router = useRouter();

  const navigateMonth = (add: number) => {
    const date = new Date(`${year}-${month}`);
    const newDate = addMonth(date, add);
    router.push(`/${newDate.getFullYear()}/${newDate.getMonth() + 1}`);
  };

  const handleClickLeftButton = () => navigateMonth(-1);
  const handleClickRightButton = () => navigateMonth(1);

  return (
    <div className="flex">
      <Button onClick={handleClickLeftButton}>
        <BsFillCaretLeftFill />
      </Button>
      <Button className="text-lg">{month}월</Button>
      <Button onClick={handleClickRightButton}>
        <BsFillCaretRightFill />
      </Button>
    </div>
  );
}

import { BsFillCaretLeftFill, BsFillCaretRightFill } from 'react-icons/bs';
import Button from './atom/Button';
import { addMonth } from '@/utils/date';
import Link from 'next/link';

interface Props {
  year: string | number;
  month: string | number;
}

function MonthNavigationButton({
  path,
  children,
}: {
  path: string;
  children: React.ReactNode;
}) {
  return (
    <Link href={path} className="flex justify-center items-center w-7">
      {children}
    </Link>
  );
}

export default function MonthSelector({ year, month }: Props) {
  const navigateMonth = (add: number) => {
    const date = new Date(Number(year), Number(month) - 1);
    const newDate = addMonth(date, add);
    return `/${newDate.getFullYear()}/${newDate.getMonth() + 1}`;
  };

  const prevPath = navigateMonth(-1);
  const nextPath = navigateMonth(1);

  return (
    <div className="flex">
      <MonthNavigationButton path={prevPath}>
        <BsFillCaretLeftFill />
      </MonthNavigationButton>
      <Button className="text-lg">{month}월</Button>
      <MonthNavigationButton path={nextPath}>
        <BsFillCaretRightFill />
      </MonthNavigationButton>
    </div>
  );
}

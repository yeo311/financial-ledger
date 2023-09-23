import { BsFillCaretLeftFill, BsFillCaretRightFill } from 'react-icons/bs';
import Button from './atom/Button';

export default function MonthSelector() {
  return (
    <div className="flex">
      <Button>
        <BsFillCaretLeftFill />
      </Button>
      <Button className="text-lg">9월</Button>
      <Button>
        <BsFillCaretRightFill />
      </Button>
    </div>
  );
}

import { BsFillCaretLeftFill, BsFillCaretRightFill } from 'react-icons/bs';

export default function MonthSelector() {
  return (
    <section>
      <button type="button">
        <BsFillCaretLeftFill />
      </button>
      <button type="button">9월</button>
      <button type="button">
        <BsFillCaretRightFill />
      </button>
    </section>
  );
}

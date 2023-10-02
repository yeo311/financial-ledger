import { ItemsByDate } from '@/libs/postgres';
import ItemRow from './ItemRow';

interface Props {
  list: ItemsByDate;
}

export default function ItemSection({ list }: Props) {
  const dayTotal = list.list.reduce(
    (prev, cur) => {
      return cur.isincome
        ? { ...prev, income: prev.income + cur.amount }
        : { ...prev, expendure: prev.expendure + cur.amount };
    },
    { income: 0, expendure: 0 },
  );

  return (
    <section>
      <div className="flex border-b justify-between py-1 my-2 text-sm">
        <h3 className="text-gray-600">{Number(list.date)}일</h3>
        <div className="flex gap-2">
          <span className="text-lime-600">
            +{dayTotal.income.toLocaleString()}원
          </span>
          <span className="text-gray-600">
            -{dayTotal.expendure.toLocaleString()}원
          </span>
        </div>
      </div>
      <ul className="overflow-x-hidden">
        {list.list.map((item) => (
          <ItemRow key={item.id} item={item} />
        ))}
      </ul>
    </section>
  );
}

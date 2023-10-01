import { Item } from '@/libs/postgres';
import Avatar from '../atom/Avatar';

interface Props {
  item: Item;
}

export default function ItemRow({ item }: Props) {
  return (
    <li className="py-2 flex w-full items-center gap-1.5">
      <Avatar bgColor=""></Avatar>
      <div className="flex flex-col">
        <h3>{item.title}</h3>
        <span className="text-xs text-gray-600">{item.category_name}</span>
      </div>
      <div className="flex-auto flex justify-end">
        <p>
          {!item.isincome && '-'}
          {item.amount.toLocaleString()}
        </p>
      </div>
    </li>
  );
}

'use client';

import API from '@/api/api';
import { useQuery } from '@tanstack/react-query';

export default function ItemList() {
  const { data } = useQuery({
    queryKey: ['items'],
    queryFn: API.getItems,
  });

  return (
    <div className="flex">
      <div>
        <h2>ssr</h2>
        <ul>
          {data?.map((item) => (
            <li key={item.id}>
              {item.title} {item.date} {item.amount}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

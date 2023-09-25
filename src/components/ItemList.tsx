'use client';

import client from '@/libs/axios/client';
import { useQuery } from '@tanstack/react-query';
import type { Item } from '@/libs/postgres';

export default function ItemList() {
  const { data } = useQuery({
    queryKey: ['items'],
    queryFn: async () => {
      const { data } = await client.post<{ data: Item[] }>('/api/item');
      return data.data;
    },
  });

  return (
    <div className="flex">
      <div>
        <ul>
          {data?.map((item) => (
            <li key={item.id}>
              {item.title} {item.formatted_day} {item.amount}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

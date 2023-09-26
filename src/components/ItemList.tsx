'use client';

import client from '@/libs/axios/client';
import { useQuery } from '@tanstack/react-query';
import type { Item } from '@/libs/postgres';

interface Props {
  year: string | number;
  month: string | number;
}

export default function ItemList({ year, month }: Props) {
  const { data } = useQuery({
    queryKey: ['items', year, month],
    queryFn: async () => {
      const { data } = await client.get<{ data: Item[] }>(
        `/api/item?year=${year}&month=${month}`,
      );
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

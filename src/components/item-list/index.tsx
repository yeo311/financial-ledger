'use client';

import client from '@/libs/axios/client';
import { useQuery } from '@tanstack/react-query';
import type { ItemsByDate } from '@/libs/postgres';
import ItemSection from './ItemSection';

interface Props {
  year: string;
  month: string;
}

export default function ItemList({ year, month }: Props) {
  const { data } = useQuery({
    queryKey: ['items', year, month],
    queryFn: async () => {
      const { data } = await client.get<{ data: ItemsByDate[] }>(
        `/api/item?year=${year}&month=${month}`,
      );
      return data.data;
    },
    suspense: true,
  });

  return (
    <div className="flex w-full mt-3">
      <div className="w-full">
        {data?.map((itemListsByDate) => (
          <ItemSection key={itemListsByDate.date} list={itemListsByDate} />
        ))}
      </div>
    </div>
  );
}

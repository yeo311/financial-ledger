'use client';

import client from '@/libs/axios/client';
import { Total } from '@/libs/postgres';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';

interface InformationProps {
  title: string;
  amount?: number;
  color?: string;
}
function Information({
  title,
  amount,
  color = 'text-gray-900',
}: InformationProps) {
  return (
    <div className="flex items-center">
      <span className="text-lg">{title}</span>
      <span className={`ml-1.5 text-xl font-bold ${color}`}>
        {amount?.toLocaleString()}원
      </span>
    </div>
  );
}

export default function TotalInformation() {
  const { year, month } = useParams<{ year: string; month: string }>();

  const { data } = useQuery({
    queryKey: ['total', year, month],
    queryFn: async () => {
      const { data } = await client.get<{ data: Total }>(
        `/api/item/total?year=${year}&month=${month}`,
      );
      return data.data;
    },
  });

  return (
    <div>
      <Information title="지출" amount={data?.total_expense} />
      <Information
        title="수입"
        amount={data?.total_income}
        color="text-lime-600"
      />
    </div>
  );
}

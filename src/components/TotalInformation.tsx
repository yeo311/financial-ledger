'use client';

import client from '@/libs/axios/client';
import { Total } from '@/libs/postgres';
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import { LuPlus } from 'react-icons/lu';

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

type Props = {
  year: string;
  month: string;
};

export default function TotalInformation({ year, month }: Props) {
  const { data } = useQuery({
    queryKey: ['total', year, month],
    queryFn: async () => {
      const { data } = await client.get<{ data: Total }>(
        `/api/item/total?year=${year}&month=${month}`,
      );
      return data.data;
    },
    suspense: true,
  });

  return (
    <section className="flex justify-between items-center">
      <div>
        <Information title="지출" amount={data?.total_expense} />
        <Information
          title="수입"
          amount={data?.total_income}
          color="text-lime-600"
        />
      </div>
      <div>
        <Link
          href="/create"
          className="flex justify-center items-center p-2 bg-lime-300 active:shadow-lg rounded-sm"
        >
          <LuPlus className="text-sm" />
          추가
        </Link>
      </div>
    </section>
  );
}

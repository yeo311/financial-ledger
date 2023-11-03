'use client';

import client from '@/libs/axios/client';
import type {
  StatisticsByCategory,
  StatisticsByPaymentMethodRow,
} from '@/libs/postgres';
import { useQuery } from '@tanstack/react-query';
import StatisticsTitle from './StatisticsTitle';

type Props = {
  year: string;
  month: string;
};

const StatisticsList = ({ year, month }: Props) => {
  const { data: categoryData } = useQuery({
    queryKey: ['statistics-category', year, month],
    queryFn: async () => {
      const { data } = await client.get<{ data: StatisticsByCategory[] }>(
        `/api/statistics/category?year=${year}&month=${month}`,
      );
      return data.data;
    },
  });

  const { data: paymentMethodData } = useQuery({
    queryKey: ['statistics-payment-method', year, month],
    queryFn: async () => {
      const { data } = await client.get<{
        data: StatisticsByPaymentMethodRow[];
      }>(`/api/statistics/payment-method?year=${year}&month=${month}`);
      return data.data;
    },
  });

  console.log({ categoryData, paymentMethodData });

  return (
    <section className="flex flex-col mt-3 w-full">
      <StatisticsTitle>카테고리별 통계</StatisticsTitle>
      <ul>
        {categoryData?.map((data, i) => (
          <li key={i}>
            {data.category_name} : {Number(data.total_amount).toLocaleString()}
            원
          </li>
        ))}
      </ul>
      <div className="h-6"></div>
      <StatisticsTitle>결제수단별 통계</StatisticsTitle>
      <ul>
        {paymentMethodData?.map((data, i) => (
          <li key={i}>
            {data.payment_method_name} :{' '}
            {Number(data.total_amount).toLocaleString()}원
          </li>
        ))}
      </ul>
    </section>
  );
};

export default StatisticsList;

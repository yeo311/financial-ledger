'use client';

import client from '@/libs/axios/client';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import ItemForm, { type ItemParams } from './ItemForm';
import { Item } from '@/libs/postgres';
import { formatNumber } from '@/utils/date';

type ItemResponse = Item & {
  day: Date | string;
};

interface Props {
  id: string;
}

export default function UpdateForm({ id }: Props) {
  const router = useRouter();
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (params: ItemParams) => {
      return client.put(`/api/item/${id}`, params);
    },
    onSuccess: (_, value) => {
      const date = new Date(value.day);
      const year = String(date.getFullYear());
      const month = formatNumber(date.getMonth() + 1);
      queryClient.invalidateQueries({
        queryKey: ['items', year, month],
      });
      queryClient.invalidateQueries({
        queryKey: ['total', year, month],
      });
      queryClient.invalidateQueries({ queryKey: ['itemById', id] });
      router.push(`/${year}/${month}`);
    },
  });

  const { data } = useQuery({
    queryKey: ['itemById', id],
    queryFn: async () => {
      const { data } = await client.get<{ data: ItemResponse }>(
        `/api/item/${id}`,
      );
      return data.data;
    },
  });

  if (!data) return null;

  const date = typeof data.day === 'string' ? new Date(data.day) : data.day;

  const day = `${date.getFullYear()}-${formatNumber(
    date.getMonth() + 1,
  )}-${formatNumber(date.getDate())}`;

  const initialValue = {
    title: data.title,
    amount: data.amount,
    isincome: data.isincome,
    category: data.category,
    payment_method_id: data.payment_method_id,
    day,
  };

  const onSubmit = (itemParams: ItemParams) => {
    try {
      mutation.mutate(itemParams);
    } catch (err) {
      console.error(err);
      window.alert('모든 항목을 입력해주세요');
    }
  };

  return (
    <ItemForm
      submitButtonText="수정"
      onSubmit={onSubmit}
      initialValue={initialValue}
    />
  );
}

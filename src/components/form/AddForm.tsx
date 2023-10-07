'use client';

import client from '@/libs/axios/client';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import ItemForm, { type ItemParams } from './ItemForm';
import { formatNumber } from '@/utils/date';

export default function AddForm() {
  const router = useRouter();
  const today = new Date();
  const initialValue = {
    title: '',
    amount: 0,
    isincome: false,
    category: 1,
    payment_method_id: null,
    day: `${today.getFullYear()}-${today.getMonth() + 1}-${
      today.getDate() < 10 ? `0${today.getDate()}` : today.getDate()
    }`,
  };

  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (params: ItemParams) => {
      return client.post('/api/item/create', params);
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
      router.push(`/${year}/${month}`);
    },
  });

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
      submitButtonText="저장"
      onSubmit={onSubmit}
      initialValue={initialValue}
    />
  );
}

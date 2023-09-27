'use client';

import { FormEvent, useState } from 'react';
import BottomSheet from './atom/BottomSheet';
import AddItemButton from './AddItemButton';
import AddForm from './AddForm';
import { Item } from '@/libs/postgres';
import { z } from 'zod';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import client from '@/libs/axios/client';
import { useParams } from 'next/navigation';

const ItemParams = z.object({
  title: z.string().min(1),
  amount: z.number().min(1),
  isIncome: z.boolean(),
  category: z.number().min(1),
  day: z.string().min(1),
});

type ItemParams = z.infer<typeof ItemParams>;

export default function Bottoms() {
  const [isAddFormOpen, setIsAddFormOpen] = useState(false);
  const params = useParams();

  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (params: ItemParams) => {
      return client.post('/api/item/create', params);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['items', params.year, params.month],
      });
      setIsAddFormOpen(false);
    },
  });

  const handleAddItemButtonClick = () => {
    setIsAddFormOpen(true);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { title, amount, isIncome, category, day } =
      e.target as typeof e.target & Record<keyof Item, { value: string }>;

    const params = {
      title: title.value,
      amount: Number(amount.value),
      isIncome: isIncome.value === 'true',
      category: Number(category.value),
      day: day.value,
    };

    try {
      ItemParams.parse(params);
      mutation.mutate(params);
    } catch (e) {
      window.alert('모든 항목을 입력해주세요');
    }
  };

  return (
    <>
      <AddItemButton onClick={handleAddItemButtonClick} />
      <BottomSheet
        isOpen={isAddFormOpen}
        onClose={() => setIsAddFormOpen(false)}
      >
        <AddForm onSubmit={handleSubmit} />
      </BottomSheet>
    </>
  );
}

'use client';

import client from '@/libs/axios/client';
import type { Category, Item } from '@/libs/postgres';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { FormEvent } from 'react';
import { z } from 'zod';

const ItemParams = z.object({
  title: z.string().min(1),
  amount: z.number().min(1),
  isincome: z.boolean(),
  category: z.number().min(1),
  day: z.string().min(1),
});

type ItemParams = z.infer<typeof ItemParams>;

export default function AddForm() {
  const router = useRouter();
  const { data: categoryData } = useQuery({
    queryKey: ['category'],
    queryFn: async () => {
      const { data } = await client.get<{ data: Category[] }>('/api/category');
      return data.data;
    },
  });

  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (params: ItemParams) => {
      return client.post('/api/item/create', params);
    },
    onSuccess: (_, value) => {
      const date = new Date(value.day);
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      queryClient.invalidateQueries({
        queryKey: ['items', year, month],
      });
      queryClient.invalidateQueries({
        queryKey: ['total', year, month],
      });
      router.push(`/${year}/${month}`);
    },
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { title, amount, isincome, category, day } =
      e.target as typeof e.target & Record<keyof Item, { value: string }>;

    const params = {
      title: title.value,
      amount: Number(amount.value),
      isincome: isincome.value === 'true',
      category: Number(category.value),
      day: day.value,
    };

    try {
      ItemParams.parse(params);
      mutation.mutate(params);
    } catch (err) {
      console.error(err);
      window.alert('모든 항목을 입력해주세요');
    }
  };

  return (
    <form className="flex flex-col text-lg" onSubmit={handleSubmit}>
      <div className="flex justify-between text-2xl mb-4">
        <label htmlFor="amount">금액</label>
        <input
          className="focus:outline-none flex-auto text-right px-1"
          type="number"
          name="amount"
          id="amount"
          placeholder="0"
        />{' '}
        원
      </div>
      <div className="flex justify-between mb-2">
        <label htmlFor="isincome">분류</label>
        <span className="flex gap-x-1">
          <input
            className="hidden peer/income"
            type="radio"
            id="income"
            name="isincome"
            value="true"
          />
          <label
            className="cursor-pointer flex justify-center items-center peer-checked/income:bg-slate-100 peer-checked/income:text-blue-500"
            htmlFor="income"
          >
            수입
          </label>
          <input
            className="hidden peer/expenditure"
            type="radio"
            id="expenditure"
            name="isincome"
            value="false"
            defaultChecked
          />
          <label
            className="cursor-pointer flex justify-center items-center peer-checked/expenditure:bg-slate-100 peer-checked/expenditure:text-blue-500"
            htmlFor="expenditure"
          >
            지출
          </label>
        </span>
      </div>
      <div className="flex justify-between mb-2">
        <label htmlFor="category">카테고리</label>
        <select name="category" id="category" className="focus:outline-none">
          {categoryData?.map(({ id, name }) => (
            <option key={id} value={id}>
              {name}
            </option>
          ))}
        </select>
      </div>
      <div className="flex justify-between mb-2">
        <label htmlFor="title">제목</label>
        <input
          type="text"
          name="title"
          id="title"
          className="focus:outline-none flex-auto text-right"
        />
      </div>
      <div className="flex justify-between mb-2">
        <label htmlFor="day">날짜</label>
        <input type="date" name="day" id="day" className="focus:outline-none" />
      </div>
      <button
        type="submit"
        className="bg-gray-300 p-3 rounded active:bg-gray-400"
      >
        저장
      </button>
    </form>
  );
}

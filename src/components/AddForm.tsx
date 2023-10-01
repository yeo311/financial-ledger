'use client';

import client from '@/libs/axios/client';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { z } from 'zod';
import AmountForm from './form/AmountForm';
import FormContainer from './form/FormContainer';
import FormRow from './form/FormRow';
import FormLabel from './form/FormLabel';
import InputRadios, { RadioItem } from './form/InputRadios';
import InputText from './form/InputText';
import InputDate from './form/InputDate';
import CategorySelect from './form/CategorySelect';

const ItemParams = z.object({
  title: z.string().min(1),
  amount: z.number().min(1),
  isincome: z.boolean(),
  category: z.number().min(1),
  day: z.string().min(1),
});

type ItemParams = z.infer<typeof ItemParams>;

const ISINCOME_ITEMS: RadioItem[] = [
  {
    id: 'income',
    name: '수입',
    value: 'true',
    groupName: 'isincome',
  },
  {
    id: 'expenditure',
    name: '지출',
    value: 'false',
    groupName: 'isincome',
  },
];

export default function AddForm() {
  const router = useRouter();
  const [itemParams, setItemParams] = useState<ItemParams>({
    title: '',
    amount: 0,
    isincome: false,
    category: 1,
    day: '',
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

  const handleSubmit = () => {
    try {
      ItemParams.parse(itemParams);
      mutation.mutate(itemParams);
    } catch (err) {
      console.error(err);
      window.alert('모든 항목을 입력해주세요');
    }
  };

  const validate = ItemParams.safeParse(itemParams);

  return (
    <>
      <AmountForm
        value={itemParams.amount}
        onChange={(v) => setItemParams((prev) => ({ ...prev, amount: v }))}
      />
      <FormContainer>
        <FormRow>
          <FormLabel name="분류" />
          <InputRadios
            curValue={String(itemParams.isincome)}
            onChange={(v) =>
              setItemParams((prev) => ({ ...prev, isincome: v === 'true' }))
            }
            items={ISINCOME_ITEMS}
          />
        </FormRow>

        <FormRow>
          <FormLabel name="카테고리" />
          <CategorySelect
            curValue={itemParams.category}
            onChange={(v) =>
              setItemParams((prev) => ({ ...prev, category: Number(v) }))
            }
          />
        </FormRow>

        <FormRow>
          <FormLabel name="제목" />
          <InputText
            value={itemParams.title}
            onChange={(v) => setItemParams((prev) => ({ ...prev, title: v }))}
            placeholder="수입/지출 내용을 입력하세요"
          />
        </FormRow>

        <FormRow>
          <FormLabel name="날짜" />
          <InputDate
            value={itemParams.day}
            onChange={(v) => setItemParams((prev) => ({ ...prev, day: v }))}
          />
        </FormRow>
      </FormContainer>
      <div className="h-16 fixed bottom-0 left-0 right-0 p-2">
        <button
          type="button"
          className="bg-green-500 text-black p-3 rounded h-full w-full active:bg-green-600 disabled:text-white disabled:bg-gray-300"
          disabled={!validate.success}
          onClick={handleSubmit}
        >
          저장
        </button>
      </div>
    </>
  );
}

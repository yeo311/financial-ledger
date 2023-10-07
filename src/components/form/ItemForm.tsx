'use client';

import { useState } from 'react';
import { z } from 'zod';
import AmountForm from './AmountForm';
import FormContainer from './FormContainer';
import FormRow from './FormRow';
import FormLabel from './FormLabel';
import InputRadios, { RadioItem } from './InputRadios';
import InputText from './InputText';
import InputDate from './InputDate';
import CategorySelect from './CategorySelect';

const ItemParams = z.object({
  title: z.string().min(1),
  amount: z.number().min(1),
  isincome: z.boolean(),
  category: z.number().min(1),
  day: z.string().min(1),
});

export type ItemParams = z.infer<typeof ItemParams>;

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

interface Props {
  submitButtonText: string;
  onSubmit: (itemParams: ItemParams) => void;
  initialValue: ItemParams;
}

export default function ItemForm({
  submitButtonText,
  onSubmit,
  initialValue,
}: Props) {
  const [itemParams, setItemParams] = useState<ItemParams>(initialValue);

  const handleSubmit = () => {
    try {
      ItemParams.parse(itemParams);
      onSubmit(itemParams);
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
      <div className="h-16 py-2">
        <button
          type="button"
          className="bg-green-500 text-black py-3 rounded h-full w-full active:bg-green-600 disabled:text-white disabled:bg-gray-300"
          disabled={!validate.success}
          onClick={handleSubmit}
        >
          {submitButtonText}
        </button>
      </div>
    </>
  );
}

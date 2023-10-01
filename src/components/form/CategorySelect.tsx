import { useQuery } from '@tanstack/react-query';
import InputSelect from './InputSelect';
import client from '@/libs/axios/client';
import { Category } from '@/libs/postgres';

interface Props {
  curValue?: string | number;
  onChange: (v: string | number) => void;
}

export default function CategorySelect({ curValue, onChange }: Props) {
  const { data: categoryData } = useQuery({
    queryKey: ['category'],
    queryFn: async () => {
      const { data } = await client.get<{ data: Category[] }>('/api/category');
      return data.data;
    },
  });

  return (
    <InputSelect
      curValue={curValue}
      options={categoryData?.map(({ id, name }) => ({ value: id, name })) || []}
      onChange={onChange}
    />
  );
}

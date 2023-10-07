import { useQuery } from '@tanstack/react-query';
import InputSelect from './InputSelect';
import client from '@/libs/axios/client';
import { PaymentMethod } from '@/libs/postgres/paymentMethod';

interface Props {
  curValue?: string | number;
  onChange: (v: string | number) => void;
}

export default function PaymentMethodSelect({ curValue, onChange }: Props) {
  const { data } = useQuery({
    queryKey: ['payment-methods'],
    queryFn: async () => {
      const { data } = await client.get<{ data: PaymentMethod[] }>(
        '/api/payment-method',
      );

      return data.data || [];
    },
  });

  return (
    <InputSelect
      curValue={curValue}
      options={data?.map(({ id, name }) => ({ value: id, name })) || []}
      onChange={onChange}
    />
  );
}

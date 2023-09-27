import ItemList from '@/components/ItemList';
import MonthSelector from '@/components/MonthSelector';
import TotalInformation from '@/components/TotalInformation';
import { getItems } from '@/libs/postgres';
import getQueryClient from '@/libs/query/getQueryClient';
import { Hydrate, dehydrate } from '@tanstack/react-query';
import Bottoms from '@/components/Bottoms';

interface Props {
  params: {
    year: string;
    month: string;
  };
}

export default async function ListPage({ params: { year, month } }: Props) {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(['items', year, month], async () =>
    getItems(year, month),
  );
  const dehydrateState = dehydrate(queryClient);

  return (
    <>
      <section className="p-5">
        <Hydrate state={dehydrateState}>
          <section className="flex mb-3">
            <MonthSelector year={year} month={month} />
          </section>
          <section className="flex">
            <TotalInformation />
          </section>
          <section className="flex">
            <ItemList year={year} month={month} />
          </section>
        </Hydrate>
      </section>
      <Bottoms />
    </>
  );
}

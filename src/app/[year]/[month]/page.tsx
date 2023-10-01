import MonthSelector from '@/components/MonthSelector';
import TotalInformation from '@/components/TotalInformation';
import { getCategories, getItemsByDay, getTotal } from '@/libs/postgres';
import getQueryClient from '@/libs/query/getQueryClient';
import { Hydrate, dehydrate } from '@tanstack/react-query';
import ItemList from '@/components/item-list';
import AddItemButton from '@/components/AddItemButton';

interface Props {
  params: {
    year: string;
    month: string;
  };
}

export const revalidate = 0;

export default async function ListPage({ params: { year, month } }: Props) {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(['items', year, month], async () =>
    getItemsByDay(year, month),
  );
  await queryClient.prefetchQuery(['total', year, month], async () =>
    getTotal(year, month),
  );
  await queryClient.prefetchQuery(['category'], getCategories);
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
      <AddItemButton />
    </>
  );
}

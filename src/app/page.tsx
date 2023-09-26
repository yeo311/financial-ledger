import ItemList from '@/components/ItemList';
import MonthSelector from '@/components/MonthSelector';
import TotalInformation from '@/components/TotalInformation';
import AddItemButton from '@/components/addItemButton';
import { getItems } from '@/libs/postgres';
import getQueryClient from '@/libs/query/getQueryClient';
import { Hydrate, dehydrate } from '@tanstack/react-query';

export default async function Home() {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(['items', year, month], async () =>
    getItems(year, month),
  );
  const dehydrateState = dehydrate(queryClient);

  return (
    <>
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
      <AddItemButton />
    </>
  );
}

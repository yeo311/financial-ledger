import ItemList from '@/components/ItemList';
import MonthSelector from '@/components/MonthSelector';
import TotalInformation from '@/components/TotalInformation';
import { getItems } from '@/libs/postgres';
import getQueryClient from '@/libs/query/getQueryClient';
import { Hydrate, dehydrate } from '@tanstack/react-query';

export default async function Home() {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(['items'], getItems);
  const dehydrateState = dehydrate(queryClient);

  return (
    <>
      <Hydrate state={dehydrateState}>
        <section className="flex mb-3">
          <MonthSelector />
        </section>
        <section className="flex">
          <TotalInformation />
        </section>
        <section className="flex">
          <ItemList />
        </section>
      </Hydrate>
    </>
  );
}

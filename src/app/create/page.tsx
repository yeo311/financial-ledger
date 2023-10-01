import AddForm from '@/components/AddForm';
import Appbar from '@/components/appbar/Appbar';
import AppbarBackButton from '@/components/appbar/AppbarBackButton';
import AppbarTitle from '@/components/appbar/AppbarTitle';
import { getCategories } from '@/libs/postgres';
import getQueryClient from '@/libs/query/getQueryClient';
import { Hydrate, dehydrate } from '@tanstack/react-query';

export default async function CreateItemPage() {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(['category'], getCategories);
  const dehydrateState = dehydrate(queryClient);

  return (
    <>
      <Appbar>
        <AppbarBackButton />
        <AppbarTitle title="추가" />
      </Appbar>
      <section className="p-5">
        <Hydrate state={dehydrateState}>
          <AddForm />
        </Hydrate>
      </section>
    </>
  );
}

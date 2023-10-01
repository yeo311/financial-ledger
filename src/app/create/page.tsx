import AddForm from '@/components/AddForm';
import { getCategories } from '@/libs/postgres';
import getQueryClient from '@/libs/query/getQueryClient';
import { Hydrate, dehydrate } from '@tanstack/react-query';

export default async function CreateItemPage() {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(['category'], getCategories);
  const dehydrateState = dehydrate(queryClient);

  return (
    <Hydrate state={dehydrateState}>
      <AddForm />
    </Hydrate>
  );
}

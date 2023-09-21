import { getFinancialLedgerItems } from '../libs/notion/getFinancialLedgerItems';
import CreateButton from '@/components/CreateButton';

export default async function Home() {
  const data = await getFinancialLedgerItems();

  return (
    <>
      {data.map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
      <CreateButton />
    </>
  );
}

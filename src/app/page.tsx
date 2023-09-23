import ItemList from '@/components/ItemList';
import MonthSelector from '@/components/MonthSelector';
import TotalInformation from '@/components/TotalInformation';

export default async function Home() {
  return (
    <>
      <section className="flex mb-3">
        <MonthSelector />
      </section>
      <section className="flex">
        <TotalInformation />
      </section>
      <section className="flex">
        <ItemList />
      </section>
    </>
  );
}

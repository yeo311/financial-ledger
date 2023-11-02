import MonthSelector from '@/components/MonthSelector';
import TotalInformation from '@/components/TotalInformation';
import Container from '@/components/atom/Container';
import ItemList from '@/components/item-list';

export default async function Home() {
  const today = new Date();
  const year = today.getFullYear().toString();
  const month = (today.getMonth() + 1).toString();

  return (
    <Container>
      <section className="flex mb-3">
        <MonthSelector year={year} month={month} />
      </section>
      <TotalInformation year={year} month={month} />
      <section className="flex">
        <ItemList year={year} month={month} />
      </section>
    </Container>
  );
}

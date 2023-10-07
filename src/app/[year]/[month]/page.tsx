import TotalInformation from '@/components/TotalInformation';
import ItemList from '@/components/item-list';

interface Props {
  params: {
    year: string;
    month: string;
  };
}

export default function ListPage({ params: { year, month } }: Props) {
  return (
    <>
      <TotalInformation />
      <section className="flex">
        <ItemList year={year} month={month} />
      </section>
    </>
  );
}

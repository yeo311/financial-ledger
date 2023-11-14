import ContentsSection from '@/components/ContentsSection';
import SelectMenuSection from '@/components/SelectMenuSection';
import TotalInformation from '@/components/TotalInformation';

interface Props {
  params: {
    year: string;
    month: string;
  };
}

export const revalidate = 0;

export default function ListPage({ params: { year, month } }: Props) {
  return (
    <>
      <TotalInformation year={year} month={month} />
      <SelectMenuSection />
      <ContentsSection year={year} month={month} />
    </>
  );
}

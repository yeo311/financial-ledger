import ContentsSection from '@/components/ContentsSection';
import MonthSelector from '@/components/MonthSelector';
import SelectMenuSection from '@/components/SelectMenuSection';
import TotalInformation from '@/components/TotalInformation';
import Container from '@/components/atom/Container';
import Spinner from '@/components/atom/Spinner';
import { Suspense } from 'react';

export default async function Home() {
  const today = new Date();
  const year = today.getFullYear().toString();
  const month = (today.getMonth() + 1).toString();

  return (
    <Container>
      <section className="flex mb-3">
        <MonthSelector year={year} month={month} />
      </section>
      <Suspense fallback={<Spinner />}>
        <TotalInformation year={year} month={month} />
        <SelectMenuSection />
        <ContentsSection year={year} month={month} />
      </Suspense>
    </Container>
  );
}

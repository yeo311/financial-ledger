import MonthSelector from '@/components/MonthSelector';
import Container from '@/components/atom/Container';

export default function ListPageLayout({
  children,
  params: { year, month },
}: {
  children: React.ReactNode;
  params: { year: string; month: string };
}) {
  return (
    <>
      <Container>
        <section className="flex mb-3">
          <MonthSelector year={year} month={month} />
        </section>
        {children}
      </Container>
    </>
  );
}

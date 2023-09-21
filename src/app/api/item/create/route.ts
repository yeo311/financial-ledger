import { createFinancialLedgerItem } from '@/libs/notion/createFinancialLedgerItem';

export async function POST() {
  try {
    await createFinancialLedgerItem({
      title: '생성테스트',
      date: '2020-09-18',
      category: '951c4216-7683-41ae-9c31-5b2575ca49df',
      amount: 2000,
      isIncome: true,
    });
    return new Response(null, { status: 200 });
  } catch (err) {
    return new Response(null, { status: 500 });
  }
}

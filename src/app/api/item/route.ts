import { getFinancialLedgerItems } from '@/libs/notion/getFinancialLedgerItems';
import { NextResponse } from 'next/server';

export async function POST() {
  try {
    const data = await getFinancialLedgerItems();
    return NextResponse.json({ data });
  } catch (err) {
    return new Response(null, { status: 500 });
  }
}

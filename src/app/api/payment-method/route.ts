import { getPaymentMethods } from '@/libs/postgres/paymentMethod';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const data = await getPaymentMethods();
    return NextResponse.json({ data });
  } catch (e) {
    return new Response(null, { status: 500 });
  }
}

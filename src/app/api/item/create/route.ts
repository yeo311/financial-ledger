import { insertItems } from '@/libs/postgres';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { title, amount, category, day, isincome, payment_method_id } =
      await request.json();
    await insertItems(
      title,
      amount,
      day,
      category,
      isincome,
      payment_method_id,
    );

    return NextResponse.json({ success: true });
  } catch (err) {
    return new Response(null, { status: 500 });
  }
}

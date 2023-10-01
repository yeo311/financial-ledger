import insertItems from '@/libs/postgres/insertItems';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { title, amount, category, day, isincome } = await request.json();
    await insertItems(title, amount, day, category, isincome);

    return NextResponse.json({ success: true });
  } catch (err) {
    return new Response(null, { status: 500 });
  }
}

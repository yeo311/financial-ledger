import { getItems } from '@/libs/postgres';
import { NextResponse } from 'next/server';

export async function POST() {
  try {
    const data = await getItems();
    return NextResponse.json({ data });
  } catch (err) {
    return new Response(null, { status: 500 });
  }
}

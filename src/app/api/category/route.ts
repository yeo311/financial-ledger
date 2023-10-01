import { getCategories } from '@/libs/postgres';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const data = await getCategories();
    return NextResponse.json({ data });
  } catch (e) {
    return new Response(null, { status: 500 });
  }
}

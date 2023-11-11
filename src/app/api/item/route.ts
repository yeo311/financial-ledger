import { getItemsByDay } from '@/libs/postgres';
import { type NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const year = searchParams.get('year');
  const month = searchParams.get('month');

  if (!year || !month) return new Response(null, { status: 400 });

  try {
    const data = await getItemsByDay(year, month);
    return NextResponse.json({ data });
  } catch (err) {
    return new Response(null, { status: 500 });
  }
}

export const revalidate = 60;

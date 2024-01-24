import { getParkings } from '@/libs/postgres/parkings';
import { type NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const data = await getParkings();
    return NextResponse.json({ data });
  } catch (err) {
    return new Response(null, { status: 500 });
  }
}

export const revalidate = 0;

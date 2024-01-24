import { insertParkings } from '@/libs/postgres/parkings';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { title, day } = await request.json();
    await insertParkings({ title, day });

    return NextResponse.json({ success: true });
  } catch (err) {
    return new Response(null, { status: 500 });
  }
}

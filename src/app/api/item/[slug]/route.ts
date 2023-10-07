import { deleteItem, getItemById, updateItem } from '@/libs/postgres';
import { NextResponse } from 'next/server';

export async function GET(
  _: Request,
  { params: { slug } }: { params: { slug: string } },
) {
  try {
    const data = await getItemById(slug);
    return NextResponse.json({ data });
  } catch (e) {
    return new Response(null, { status: 500 });
  }
}

export async function DELETE(
  _: Request,
  { params }: { params: { slug: string } },
) {
  try {
    await deleteItem(params.slug);
    return new Response(null, { status: 200 });
  } catch {
    return new Response(null, { status: 500 });
  }
}

export async function PUT(
  request: Request,
  { params }: { params: { slug: string } },
) {
  try {
    const { title, amount, category, day, isincome, payment_method_id } =
      await request.json();
    await updateItem(
      params.slug,
      title,
      amount,
      day,
      category,
      isincome,
      payment_method_id,
    );
    return new Response(null, { status: 200 });
  } catch {
    return new Response(null, { status: 500 });
  }
}

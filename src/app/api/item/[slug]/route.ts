import { deleteFinancialLedgerItem } from '@/libs/notion/deleteFinancialLedgerItem';
import { updateFinancialLedgerItem } from '@/libs/notion/updateFinancialLedgerItem';

export async function DELETE(
  _: Request,
  { params }: { params: { slug: string } },
) {
  try {
    await deleteFinancialLedgerItem(params.slug);
    return new Response('Deleted', { status: 200 });
  } catch {
    return new Response(null, { status: 500 });
  }
}

export async function PUT(
  _: Request,
  { params }: { params: { slug: string } },
) {
  try {
    await updateFinancialLedgerItem(params.slug, {
      date: '2023-09-19',
    });
    return new Response(null, { status: 200 });
  } catch {
    return new Response(null, { status: 500 });
  }
}

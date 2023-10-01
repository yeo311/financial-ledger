export async function DELETE(
  _: Request,
  { params }: { params: { slug: string } },
) {
  try {
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
    return new Response(null, { status: 200 });
  } catch {
    return new Response(null, { status: 500 });
  }
}

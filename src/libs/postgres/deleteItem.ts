import { sql } from '@vercel/postgres';

export async function deleteItem(id: string | number) {
  try {
    await sql`DELETE FROM items WHERE id = ${id}`;
  } catch (e) {
    throw e;
  }
}

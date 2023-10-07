import { sql } from '@vercel/postgres';

export async function updateItem(
  id: string | number,
  title: string,
  amount: number,
  day: string,
  category: number,
  isincome: boolean,
) {
  try {
    await sql`UPDATE items SET title = ${title}, amount = ${amount}, day = ${day}, category = ${category}, isincome = ${isincome} WHERE id = ${id}`;
  } catch (e) {
    throw e;
  }
}

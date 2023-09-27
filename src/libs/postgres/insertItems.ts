import { sql } from '@vercel/postgres';

export default async function insertItems(
  title: string,
  amount: number,
  day: string,
  category: number,
  isincome: boolean,
) {
  try {
    const result =
      await sql`INSERT INTO items (title, amount, day, category, isincome) VALUES (${title}, ${amount}, ${day}, ${category}, ${isincome})`;
    return result;
  } catch (e) {
    throw e;
  }
}

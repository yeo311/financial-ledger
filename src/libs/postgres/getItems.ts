import { sql } from '@vercel/postgres';

export type Item = {
  id: number;
  title: string;
  amount: number;
  day: Date;
  formatted_day: string;
  category: number;
  category_name: string;
};

export async function getItems() {
  try {
    const { rows } =
      await sql<Item>`SELECT items.*, TO_CHAR(items.day, 'DD') AS formatted_day, categories.name AS category_name
          FROM items
          JOIN categories ON items.category = categories.id;`;
    return rows;
  } catch (e) {
    throw e;
  }
}

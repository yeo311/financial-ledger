import { sql } from '@vercel/postgres';

export type Item = {
  id: number;
  title: string;
  amount: number;
  day: Date;
  formatted_day: string;
  category: number;
  category_name: string;
  isIncome: boolean;
};

export async function getItems(year: string | number, month: string | number) {
  try {
    const { rows } =
      await sql<Item>`SELECT items.*, TO_CHAR(items.day, 'DD') AS formatted_day, categories.name AS category_name
          FROM items
          JOIN categories ON items.category = categories.id
          WHERE EXTRACT(YEAR FROM items.day) = ${year}
          AND EXTRACT(MONTH FROM items.day) = ${month};`;
    return rows;
  } catch (e) {
    throw e;
  }
}

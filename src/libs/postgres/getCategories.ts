import { sql } from '@vercel/postgres';

export type Category = {
  id: number;
  name: string;
};

export async function getCategories() {
  try {
    const { rows } =
      await sql<Category>`SELECT * FROM categories ORDER BY id ASC`;
    return rows;
  } catch (e) {
    throw e;
  }
}

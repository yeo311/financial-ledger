import { sql } from '@vercel/postgres';

export type Category = {
  id: number;
  name: string;
};

export const getCategories = async () => {
  try {
    const { rows } =
      await sql<Category>`SELECT * FROM categories ORDER BY id ASC`;
    return rows;
  } catch (e) {
    throw e;
  }
};

export const addCategory = async (name: string) => {
  try {
    await sql`INSERT INTO categories (name) VALUES (${name})`;
  } catch (e) {
    throw e;
  }
};

export const updateCategory = async (id: number, name: string) => {
  try {
    await sql`UPDATE categories SET name = ${name} WHERE id = ${id}`;
  } catch (e) {
    throw e;
  }
};

export const deleteCategory = async (id: number) => {
  try {
    await sql`DELETE FROM categories WHERE id = ${id}`;
  } catch (e) {
    throw e;
  }
};

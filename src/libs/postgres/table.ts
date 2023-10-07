import { sql } from '@vercel/postgres';

export async function createItemTable() {
  try {
    const result =
      await sql`CREATE TABLE items ( id SERIAL PRIMARY KEY, title varchar(255), amount INT, day date, category INT REFERENCES categories(id) );`;
    return result;
  } catch (e) {
    throw e;
  }
}

export async function createCategoryTable() {
  try {
    const result =
      await sql`CREATE TABLE categories ( id SERIAL PRIMARY KEY, name varchar(255) );`;
    return result;
  } catch (e) {
    throw e;
  }
}

export async function createTables() {
  try {
    await createCategoryTable();
    await createItemTable();
  } catch (e) {
    throw e;
  }
}

export async function checkTable() {
  try {
    const result =
      await sql`SELECT COUNT(*) FROM pg_class WHERE relname = 'items';`;

    return result.rows.at(0)?.count > 0 || false;
  } catch (e) {
    throw e;
  }
}

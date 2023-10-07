import { sql } from '@vercel/postgres';

export type Item = {
  id: number;
  title: string;
  amount: number;
  day: Date;
  formatted_day: string;
  category: number;
  category_name: string;
  isincome: boolean;
  payment_method_id: number | null;
  payment_method_name: string | null;
};

export type Total = {
  total_income: number;
  total_expense: number;
};

export type ItemsByDate = {
  date: string;
  list: Item[];
};

export async function getItems(year: string | number, month: string | number) {
  try {
    const { rows } = await sql<Item>`SELECT
      items.*, 
      TO_CHAR(items.day, 'YYYY-MM-DD') AS formatted_day,
      categories.name AS category_name,
      payment_method.name AS payment_method_name
      FROM items
      JOIN categories ON items.category = categories.id
      LEFT JOIN payment_method ON items.payment_method_id = payment_method.id
      WHERE EXTRACT(YEAR FROM items.day) = ${year}
        AND EXTRACT(MONTH FROM items.day) = ${month}
      ORDER BY items.day DESC, items.id DESC;`;
    return rows;
  } catch (e) {
    throw e;
  }
}

export async function getItemsByDay(
  year: string | number,
  month: string | number,
) {
  const items = await getItems(year, month);
  const byDate = items.reduce<ItemsByDate[]>((prev, cur) => {
    const sameDateIndex = prev.findIndex(
      (item) => item.date === cur.formatted_day,
    );
    if (sameDateIndex > -1) {
      prev[sameDateIndex].list = [...prev[sameDateIndex].list, cur];
      return prev;
    }
    return [
      ...prev,
      {
        date: cur.formatted_day,
        list: [cur],
      },
    ];
  }, []);
  return byDate;
}

export async function getTotal(year: string | number, month: string | number) {
  try {
    const { rows } = await sql<Total>`SELECT
      SUM(CASE WHEN isIncome = true THEN amount ELSE 0 END) AS total_income,
      SUM(CASE WHEN isIncome = false THEN amount ELSE 0 END) AS total_expense
      FROM items
      WHERE EXTRACT(YEAR FROM day) = ${year}
      AND EXTRACT(MONTH FROM day) = ${month};`;
    if (!rows.length) return { total_income: 0, total_expense: 0 };
    return {
      total_income: Number(rows[0].total_income),
      total_expense: Number(rows[0].total_expense),
    };
  } catch (e) {
    throw e;
  }
}

export async function getItemById(id: string | number) {
  try {
    const { rows } =
      await sql<Item>`SELECT items.*, TO_CHAR(items.day, 'DD') AS formatted_day, categories.name AS category_name
    FROM items
    JOIN categories ON items.category = categories.id
    WHERE items.id = ${id}`;
    if (!rows.length) throw new Error('no items');
    return rows[0];
  } catch (e) {
    throw e;
  }
}

export async function insertItems(
  title: string,
  amount: number,
  day: string,
  category: number,
  isincome: boolean,
  payment_method_id: number | null,
) {
  try {
    const result =
      await sql`INSERT INTO items (title, amount, day, category, isincome, payment_method_id) VALUES (${title}, ${amount}, ${day}, ${category}, ${isincome}, ${payment_method_id})`;
    return result;
  } catch (e) {
    throw e;
  }
}

export async function updateItem(
  id: string | number,
  title: string,
  amount: number,
  day: string,
  category: number,
  isincome: boolean,
  payment_method_id: number | null,
) {
  try {
    await sql`UPDATE items SET 
      title = ${title}, 
      amount = ${amount}, 
      day = ${day}, 
      category = ${category}, 
      isincome = ${isincome}, 
      payment_method_id = ${payment_method_id} 
      WHERE id = ${id}`;
  } catch (e) {
    throw e;
  }
}

export async function deleteItem(id: string | number) {
  try {
    await sql`DELETE FROM items WHERE id = ${id}`;
  } catch (e) {
    throw e;
  }
}

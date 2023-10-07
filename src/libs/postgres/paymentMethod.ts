import { sql } from '@vercel/postgres';

export type PaymentMethod = {
  id: number;
  name: string;
};

export const getPaymentMethods = async () => {
  try {
    const { rows } =
      await sql<PaymentMethod>`SELECT * FROM payment_method ORDER BY id ASC`;
    return rows;
  } catch (e) {
    throw e;
  }
};

export const addPaymentMethod = async (name: string) => {
  try {
    await sql`INSERT INTO payment_method (name) VALUES (${name})`;
  } catch (e) {
    throw e;
  }
};

export const updatePaymentMethod = async (id: number, name: string) => {
  try {
    await sql`UPDATE payment_method SET name = ${name} WHERE id = ${id}`;
  } catch (e) {
    throw e;
  }
};

export const deletePaymentMethod = async (id: number) => {
  try {
    await sql`DELETE FROM payment_method WHERE id = ${id}`;
  } catch (e) {
    throw e;
  }
};

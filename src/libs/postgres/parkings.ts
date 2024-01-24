import { sql } from '@vercel/postgres';

export type Parking = {
  id: number;
  title: string;
  day: string;
};

export type AddParkingParams = Omit<Parking, 'id'>;

export async function insertParkings({ title, day }: AddParkingParams) {
  try {
    const result =
      await sql`INSERT INTO parkings (title, day) VALUES (${title}, ${day})`;
    return result;
  } catch (e) {
    throw e;
  }
}

export async function getParkings() {
  try {
    const { rows } =
      await sql<Parking>`SELECT * FROM parkings ORDER BY id DESC limit 5`;
    return rows;
  } catch (e) {
    throw e;
  }
}

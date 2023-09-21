import client from './client';
import { ItemProperties } from './type';

export async function createFinancialLedgerItem({
  title,
  date,
  category,
  amount,
  isIncome,
}: ItemProperties) {
  try {
    const response = await client.pages.create({
      parent: {
        type: 'database_id',
        database_id: '1e80a5aa-4cc6-4a7e-9d29-c20a2a849755',
      },
      properties: {
        title: {
          title: [
            {
              text: {
                content: title,
              },
            },
          ],
        },
        date: {
          date: {
            start: date,
          },
        },
        category: {
          relation: [{ id: category }],
        },
        amount: {
          number: amount,
        },
        isIncome: {
          checkbox: isIncome,
        },
      },
    });
    return response;
  } catch (err) {
    throw err;
  }
}

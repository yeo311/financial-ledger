import { QueryDatabaseResponse } from '@notionhq/client/build/src/api-endpoints';
import client from './client';
import { DatabaseItem, FinancialLedgerItem } from './type';

const extractFinancialLedgerItems = async (response: QueryDatabaseResponse) => {
  const databaseItems: DatabaseItem[] = response.results.map(
    (result) => result as DatabaseItem,
  );

  const financialLedgerItems: FinancialLedgerItem[] = databaseItems.map(
    (item) => {
      return {
        id: item.id,
        title:
          item.properties.title.title.find((v) => v.plain_text)?.plain_text ||
          '',
        date: item.properties.date.date?.start || '',
        category: item.properties.category.relation[0].id,
        amount: item.properties.amount.number || 0,
        isIncome: item.properties.isIncome.checkbox,
      };
    },
  );
  return financialLedgerItems;
};

export async function getFinancialLedgerItems() {
  try {
    const response = await client.databases.query({
      database_id: '1e80a5aa-4cc6-4a7e-9d29-c20a2a849755',
    });
    return extractFinancialLedgerItems(response);
  } catch (error) {
    // if ((error as QueryError).code === APIErrorCode.ObjectNotFound) {
    //   return [];
    // }
    throw error;
  }
}

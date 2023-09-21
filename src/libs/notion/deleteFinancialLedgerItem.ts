import client from './client';

export async function deleteFinancialLedgerItem(pageId: string) {
  try {
    const response = await client.pages.update({
      page_id: pageId,
      archived: true,
    });
    return response;
  } catch (e) {
    throw e;
  }
}

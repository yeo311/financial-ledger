import { UpdatePageParameters } from '@notionhq/client/build/src/api-endpoints';
import client from './client';
import { ItemProperties } from './type';

type UpdateProperties = Partial<ItemProperties>;

type UpdatePageBodyParameters = UpdatePageParameters['properties'];

function setProperties({
  isIncome,
  amount,
  category,
  date,
  title,
}: UpdateProperties): UpdatePageBodyParameters {
  const properties: UpdatePageBodyParameters = {};
  if (isIncome) {
    properties['isIncome'] = {
      checkbox: isIncome,
    };
  }
  if (amount) {
    properties['amount'] = {
      number: amount,
    };
  }
  if (category) {
    properties['category'] = {
      relation: [{ id: category }],
    };
  }
  if (date) {
    properties['date'] = {
      date: {
        start: date,
      },
    };
  }
  if (title) {
    properties['title'] = {
      title: [
        {
          text: {
            content: title,
          },
        },
      ],
    };
  }

  return properties;
}

export async function updateFinancialLedgerItem(
  pageId: string,
  updateProperties: UpdateProperties,
) {
  const properties = setProperties(updateProperties);
  try {
    const response = await client.pages.update({
      page_id: pageId,
      properties,
    });
    return response;
  } catch (e) {
    throw e;
  }
}

import { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints';

type DatabaseResult = PageObjectResponse;

type PropertyValueMap = DatabaseResult['properties'];

type PropertyValue = PropertyValueMap[string];

type PropertyValueType = PropertyValue['type'];

type ExtractedPropertyValue<T extends PropertyValueType> = Extract<
  PropertyValue,
  { type: T }
>;

type PropertyValueTitle = ExtractedPropertyValue<'title'>;
type PropertyValueNumber = ExtractedPropertyValue<'number'>;
type PropertyValueDate = ExtractedPropertyValue<'date'>;
type PropertyValueCheckbox = ExtractedPropertyValue<'checkbox'>;
type PropertyValueRelation = ExtractedPropertyValue<'relation'>;

export type DatabaseItem = DatabaseResult & {
  properties: {
    title: PropertyValueTitle;
    date: PropertyValueDate;
    category: PropertyValueRelation;
    amount: PropertyValueNumber;
    isIncome: PropertyValueCheckbox;
  };
};

export interface ItemProperties {
  title: string;
  date: string;
  category: string;
  amount: number;
  isIncome: boolean;
}

export type FinancialLedgerItem = {
  id: string;
} & ItemProperties;

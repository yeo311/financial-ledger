import { FinancialLedgerItem } from '@/libs/notion/type';
import axios from 'axios';

const instance = axios.create();

const API = {
  getItems: async () => {
    const { data } = await instance.post<{ data: FinancialLedgerItem[] }>(
      '/api/item',
    );
    return data.data;
  },
};

export default API;

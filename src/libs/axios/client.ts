import axios from 'axios';

const client = axios.create({
  baseURL:
    process.env.NODE_ENV === 'development'
      ? 'http://dev.side.com:3000'
      : 'https://financial-ledger.vercel.app/',
});

export default client;

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://book-catalog-server-orpin.vercel.app/api/v1/books',
  }),
  tagTypes: ['book'],

  endpoints: () => ({}),
});

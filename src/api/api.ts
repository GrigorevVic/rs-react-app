import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

//const baseUrl = 'https://swapi.dev/api/people';
//const baseUrl = 'https://swapi.tech/api/people';
//const baseUrl = 'https://swapi-server.vercel.app/people';
const baseUrl = 'https://swapi-server.vercel.app/starships';
//const baseUrl = 'https://swapi-server.vercel.app/vehicles ';
//const baseUrl = 'https://swapi-server.vercel.app/transport';
//const baseUrl = 'https://swapi-server.vercel.app/species';

/*
export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (build) => ({
    getCharacters: build.query({
      query: ({ page = 1, search }) => {
        const queryString = search
          ? `search=${search}&page=${String(page)}`
          : `page=${String(page)}`;
        return `?${queryString}`;
      },
    }),
    getCharacterById: build.query({
      query: ({ id }) => `${id}`,
    }),
  }),
});
*/

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (build) => ({
    getCharacters: build.query({
      query: () => ``,
    }),
    getCharacterById: build.query({
      query: ({ id }) => `${id}`,
    }),
  }),
});

export const { useGetCharactersQuery, useGetCharacterByIdQuery } = api;

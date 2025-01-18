import { ApiResponse, People } from '../types/types';

//const url = 'https://swapi.py4e.com/api';
const url = 'https://swapi.dev/api';

export const getSearchData = async (search: string): Promise<ApiResponse> => {
  const queryString = search ? `?search=${search}` : '';
  const response = await fetch(`${url}/people/${queryString}`);
  if (!response.ok) {
    throw new Error('Error fetching data');
  }
  const result = await response.json();
  return result;
};

export const getCharacterListData = async (
  page: number
): Promise<ApiResponse> => {
  const response = await fetch(`${url}/people/?page=${String(page)}`);
  if (!response.ok) {
    throw new Error('Error fetching data');
  }
  const result = await response.json();
  return result;
};

export const getDataById = async (id: string): Promise<People> => {
  const response = await fetch(`${url}/people/${id}`);
  if (!response.ok) {
    throw new Error('Error fetching data');
  }
  const result = await response.json();
  return result;
};

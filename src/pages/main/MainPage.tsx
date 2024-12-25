import './styles.css';
import { SearchForm } from '../../components/searchForm/SearchForm';
import { CardList } from '../../components/cardList/CardList';
import { getSearchData, getCharacterListData } from '../../api/api';
import { useState, useEffect } from 'react';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { Pagination } from '../../components/pagination/Pagination';
import { ApiResponse, PaginationState } from '../../types/types';

export function MainPage() {
  const [response, setResponse] = useState<ApiResponse>();
  const [paginationState, setPaginationState] = useState<PaginationState>({
    previous: null,
    next: '2',
  });
  const [{ isLoading }, setLoading] = useState({ isLoading: true });
  const [{ errorMsg }, setErrorMsg] = useState({ errorMsg: '' });

  const handleSearch = async (search: string) => {
    try {
      setLoading({ isLoading: true });
      const response = await getSearchData(search);
      setResponse(response);
    } catch (e) {
      setErrorMsg({ errorMsg: (e as Error).message });
    } finally {
      setLoading({ isLoading: false });
    }
  };

  const handlePagination = async (page: number) => {
    try {
      setLoading({ isLoading: true });
      const response = await getCharacterListData(page);
      setResponse(response);
      setPaginationState({ previous: response.previous, next: response.next });
    } catch (e) {
      setErrorMsg({ errorMsg: (e as Error).message });
    } finally {
      setLoading({ isLoading: false });
    }
  };

  const [savedSearch] = useLocalStorage();
  useEffect(() => {
    handleSearch(savedSearch);
  }, [savedSearch]);

  if (errorMsg) {
    return <p className="error">Error:{errorMsg}</p>;
  }
  return (
    <main className="main">
      <SearchForm handleSearch={handleSearch} />
      <Pagination
        handlePagination={handlePagination}
        paginationState={paginationState}
      />

      {isLoading ? (
        <div className="loader-container">
          <div className="loader" />
        </div>
      ) : (
        <CardList peopleList={response?.results} />
      )}
    </main>
  );
}

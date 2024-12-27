import './styles.css';
import { SearchForm } from '../../components/searchForm/SearchForm';
import { CardList } from '../../components/cardList/CardList';
import { getSearchData, getCharacterListData } from '../../api/api';
import { useState, useEffect } from 'react';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { Pagination } from '../../components/pagination/Pagination';
import { ApiResponse, PaginationState } from '../../types/types';
import { useNavigate } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';

export function MainPage() {
  const navigate = useNavigate();
  const [response, setResponse] = useState<ApiResponse>();
  const [searchParams] = useSearchParams();
  const currentPage = searchParams.get('page') ?? '1';
  const [paginationState, setPaginationState] = useState<PaginationState>({
    previous: null,
    next: '2',
    currentPage: currentPage,
  });
  const [{ isLoading }, setLoading] = useState({ isLoading: true });
  const [{ errorMsg }, setErrorMsg] = useState({ errorMsg: '' });

  const handleSearch = async (search: string) => {
    try {
      setLoading({ isLoading: true });
      const response = await getSearchData(search);
      setResponse(response);
      navigate(`?page=${currentPage}`, { replace: true });
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
      setPaginationState({
        previous: response.previous,
        next: response.next,
        currentPage: paginationState.currentPage,
      });
      navigate(`?page=${page}`, { replace: true });
    } catch (e) {
      setErrorMsg({ errorMsg: (e as Error).message });
    } finally {
      setLoading({ isLoading: false });
    }
  };

  const [savedSearch] = useLocalStorage();
  useEffect(() => {
    if (searchParams.get('search')) {
      handleSearch(savedSearch);
    }
    if (searchParams.get('page') !== null) {
      handlePagination(Number(searchParams.get('page')));
    }
  });

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

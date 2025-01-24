import './styles.css';
import { SearchForm } from '../../components/searchForm/SearchForm';
import { CardList } from '../../components/cardList/CardList';
import { getData } from '../../api/api';
import { useState, useEffect } from 'react';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { Pagination } from '../../components/pagination/Pagination';
import { ApiResponse } from '../../types/types';
import { useSearchParams, Outlet } from 'react-router-dom';
import { Loader } from '../../components/loader/Loader';
import { Header } from '../../components/header/Header';
import { Footer } from '../../components/footer/Footer';

export function MainPage() {
  const [response, setResponse] = useState<ApiResponse>();
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [{ errorMsg }, setErrorMsg] = useState({ errorMsg: '' });
  const [savedSearch, setSavedSearch] = useLocalStorage();

  const fetchCards = async (currentPage: number, savedSearch: string) => {
    setLoading(false);
    try {
      const response = await getData(currentPage, savedSearch);
      setResponse(response);
    } catch (e) {
      setErrorMsg({ errorMsg: (e as Error).message });
    } finally {
      if (!savedSearch) {
        setSearchParams(`?page=${currentPage}`);
      } else {
        setSearchParams(`?search=${savedSearch}`);
      }
      setLoading(true);
    }
  };

  useEffect(() => {
    fetchCards(currentPage, savedSearch);
  }, [currentPage, savedSearch]);

  const handleSearch = (term: string) => {
    setSavedSearch(term);
  };

  if (errorMsg) {
    return <p className="error">Error:{errorMsg}</p>;
  }

  const params = Boolean(searchParams.get('details'));

  return (
    <>
      <Header />
      <main className="main">
        <SearchForm handleSearch={handleSearch} />
        {isLoading ? (
          <>
            <Pagination
              onPageChange={setCurrentPage}
              currentPage={currentPage}
              response={response}
            />
            <div className="wrapper">
              <CardList peopleList={response?.results} />
              {params && <Outlet />}
            </div>
          </>
        ) : (
          <Loader />
        )}
      </main>
      <Footer />
    </>
  );
}

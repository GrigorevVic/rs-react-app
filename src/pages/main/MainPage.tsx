import './styles.css';
import { SearchForm } from '../../components/searchForm/SearchForm';
import { CardList } from '../../components/cardList/CardList';
import { getSearchData, getCharacterListData } from '../../api/api';
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
  const [searchParams, setSearchParams] = useSearchParams();
  const [{ errorMsg }, setErrorMsg] = useState({ errorMsg: '' });

  const handleSearch = async (search: string) => {
    const queryString = search ? `?search=${search}` : `?page=1`;
    setSearchParams(queryString);
    try {
      const response = await getSearchData(search);
      setResponse(response);
    } catch (e) {
      setErrorMsg({ errorMsg: (e as Error).message });
    }
  };

  const handlePagination = async (page: number) => {
    try {
      const response = await getCharacterListData(page);
      setResponse(response);
      setSearchParams(`?page=${page}`);
    } catch (e) {
      setErrorMsg({ errorMsg: (e as Error).message });
    }
  };

  const [savedSearch] = useLocalStorage();

  useEffect(() => {
    const search = searchParams.get('search');
    const page = searchParams.get('page');
    if (search) {
      handleSearch(search);
    } else if (page) {
      handlePagination(Number(page));
    } else {
      handleSearch(savedSearch);
    }
  }, [savedSearch]);

  if (errorMsg) {
    return <p className="error">Error:{errorMsg}</p>;
  }

  const params = Boolean(searchParams.get('details'));

  return (
    <>
      <Header />
      <main className="main">
        <SearchForm handleSearch={handleSearch} />
        {response ? (
          <>
            <Pagination
              handlePagination={handlePagination}
              response={response}
            />
            <div className="wrapper">
              <CardList peopleList={response.results} />
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

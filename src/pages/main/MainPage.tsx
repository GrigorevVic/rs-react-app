import './styles.css';
import { SearchForm } from '../../components/searchForm/SearchForm';
import { CardList } from '../../components/cardList/CardList';
import { useState, useEffect } from 'react';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { Pagination } from '../../components/pagination/Pagination';
import { useSearchParams, Outlet } from 'react-router-dom';
import { Loader } from '../../components/loader/Loader';
import { Header } from '../../components/header/Header';
import { Footer } from '../../components/footer/Footer';
import { useGetCharactersQuery } from '../../api/api';

export function MainPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();
  const [savedSearch, setSavedSearch] = useLocalStorage();
  const { data, isLoading, isError } = useGetCharactersQuery({
    search: savedSearch,
    page: currentPage,
  });

  const isDetails = Boolean(searchParams.get('details'));

  useEffect(() => {
    if (!isDetails) {
      if (savedSearch) {
        setSearchParams(`?search=${savedSearch}`);
      } else {
        setSearchParams(`?page=${currentPage}`);
      }
    }
  }, [currentPage, savedSearch, setSearchParams, isDetails]);

  const handleSearch = (term: string) => {
    setSavedSearch(term);
  };

  const handlerThemeToggler = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const currentTheme = document.body.className;
    if (currentTheme === 'dark-theme') {
      document.body.classList.remove('dark-theme');
    } else {
      document.body.classList.add('dark-theme');
      console.log(event);
    }
  };

  if (isError) {
    return <p className="error">Error</p>;
  }

  return (
    <>
      <Header />
      <main className="main">
        <input
          type="checkbox"
          className="checkbox"
          onChange={handlerThemeToggler}
        />
        <SearchForm handleSearch={handleSearch} />
        {!isLoading ? (
          <>
            <Pagination
              onPageChange={setCurrentPage}
              currentPage={currentPage}
              response={data}
            />
            <div className="wrapper">
              <CardList peopleList={data?.results} />
              {isDetails && <Outlet />}
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

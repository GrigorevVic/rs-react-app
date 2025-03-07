import styles from './Main.module.css';
import { SearchForm } from '../searchForm/SearchForm';
import { CardList } from '../cardList/CardList';
import { useState, useEffect } from 'react';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { Pagination } from '../pagination/Pagination';
import { Loader } from '../loader/Loader';
import { useGetCharactersQuery } from '../../api/api';
import { useRouter } from 'next/router';
import { Details } from '../details/Details';

export function Main() {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const [savedSearch, setSavedSearch] = useLocalStorage();
  const { data, isError, isFetching } = useGetCharactersQuery({
    search: savedSearch,
    page: currentPage,
  });

  useEffect(() => {
    const queryString = savedSearch
      ? { search: savedSearch, page: currentPage }
      : { page: currentPage };
    router.replace({
      pathname: router.pathname,
      query: queryString,
    });
  }, [savedSearch, currentPage, isFetching]);

  const handleSearch = (term: string) => {
    setSavedSearch(term);
    setCurrentPage(1);
  };

  if (isError) {
    return <p className="error">Error</p>;
  }
  const { details } = router.query;

  const isDetails = Boolean(details);

  return (
    <>
      {<SearchForm handleSearch={handleSearch} />}
      {!isFetching ? (
        <>
          <Pagination
            onPageChange={setCurrentPage}
            currentPage={currentPage}
            response={data}
          />
          <div className={styles.wrapper}>
            <CardList peopleList={data?.results} />
            {isDetails && <Details id={router.query.details} />}
          </div>
        </>
      ) : (
        <Loader />
      )}
    </>
  );
}

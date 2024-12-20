import { SearchForm } from '../../components/searchForm/SearchForm';
import { CardList } from '../../components/cardList/CardList';
import { getData } from '../../api/api';
import { useState, useEffect } from 'react';
import { useLocalStorage } from '../../hooks/useLocalStorage';

export function MainPage() {
  const [results, setResults] = useState([]);
  const [{ isLoading }, setLoading] = useState({ isLoading: true });
  const [{ errorMsg }, setErrorMsg] = useState({ errorMsg: '' });
  const handleSearch = async (search: string) => {
    try {
      setLoading({ isLoading: true });
      const response = await getData(search);
      setResults(response);
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

  const isResults = results.length === 0 ? false : true;

  if (errorMsg) {
    return <p className="error">Error:{errorMsg}</p>;
  }
  return (
    <main className="main">
      <SearchForm handleSearch={handleSearch} />
      {isLoading ? (
        <div className="loader-container">
          <div className="loader" />
        </div>
      ) : isResults ? (
        <CardList peopleList={results} />
      ) : (
        <p className="no-results">Nothing found for your request</p>
      )}
    </main>
  );
}

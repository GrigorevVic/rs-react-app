import './styles.css';
import { useState } from 'react';

interface SearchProps {
  handleSearch: (search: string) => void;
}

export function SearchForm(props: SearchProps) {
  const savedSearch = localStorage.getItem('searchString') || '';
  const [search, setSearch] = useState({ search: savedSearch });
  const [hasError, setError] = useState({ hasError: false });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSearch({ search: event.target.value.trim() });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    localStorage.setItem('searchString', search.search);
    props.handleSearch(search.search);
  };

  const getError = () => {
    setError({ hasError: true });
  };

  if (hasError.hasError) {
    throw new Error('An error has occurred');
  }
  return (
    <form onSubmit={handleSubmit} className="search-form" name="form">
      <input
        className="search-input"
        type="text"
        placeholder="Enter a character name..."
        value={search.search}
        onChange={handleChange}
      />
      <button type="submit" className="search-button">
        Search
      </button>
      <button type="submit" className="error-button" onClick={getError}>
        Error
      </button>
    </form>
  );
}

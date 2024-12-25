import './styles.css';
import { useState } from 'react';
import { useLocalStorage } from '../../hooks/useLocalStorage';

interface SearchProps {
  handleSearch: (search: string) => void;
}

export function SearchForm(props: SearchProps) {
  const [savedSearch, setSavedSearch] = useLocalStorage();
  const [hasError, setError] = useState({ hasError: false });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSavedSearch(event.target.value.trim());
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    setSavedSearch(savedSearch);
    props.handleSearch(savedSearch);
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
        value={savedSearch}
        onChange={handleChange}
      />
      <button type="submit" className="btn">
        Search
      </button>
      <button type="submit" className="btn" onClick={getError}>
        Error
      </button>
    </form>
  );
}

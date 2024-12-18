import './styles.css';
import { Component } from 'react';

interface SearchState {
  search: string;
  hasError: boolean;
}

interface SearchProps {
  handleSearch: (search: string) => void;
}

export class SearchForm extends Component<SearchProps, SearchState> {
  constructor(props: SearchProps) {
    super(props);
    const savedSearch = localStorage.getItem('searchString') || '';
    this.state = {
      search: savedSearch,
      hasError: false,
    };
    this.props.handleSearch(this.state.search);
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({ search: event.target.value.trim() });
  };

  handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    localStorage.setItem('searchString', this.state.search);
    this.props.handleSearch(this.state.search);
  };

  getError = () => {
    this.setState({ hasError: true });
  };

  render() {
    const { hasError } = this.state;
    if (hasError) {
      throw new Error('An error has occurred');
    }
    return (
      <form onSubmit={this.handleSubmit} className="search-form" name="form">
        <input
          className="search-input"
          type="text"
          placeholder="Enter a character name..."
          value={this.state.search}
          onChange={this.handleChange}
        />
        <button type="submit" className="search-button">
          Search
        </button>
        <button type="submit" className="error-button" onClick={this.getError}>
          Error
        </button>
      </form>
    );
  }
}

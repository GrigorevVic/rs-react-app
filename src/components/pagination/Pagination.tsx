import { useState } from 'react';
import { PaginationState } from '../../types/types';

interface handlePaginationProps {
  handlePagination: (page: number) => void;
  paginationState: PaginationState;
}

export function Pagination(props: handlePaginationProps) {
  const previousPage = props.paginationState.previous;
  const nextPage = props.paginationState.next;
  const [currentPage, setCurrentPage] = useState(
    Number(props.paginationState.currentPage)
  );
  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
    props.handlePagination(Number(nextPage?.slice(-1)));
  };

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
    props.handlePagination(Number(previousPage?.slice(-1)));
  };

  return (
    <div className="btn-container">
      <button className="btn" onClick={handlePrevPage} disabled={!previousPage}>
        Prev
      </button>
      <div>Page: {currentPage}</div>
      <button className="btn" onClick={handleNextPage} disabled={!nextPage}>
        Next
      </button>
    </div>
  );
}

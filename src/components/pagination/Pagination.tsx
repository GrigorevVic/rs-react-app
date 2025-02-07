import { ApiResponse } from '../../types/types';

interface handlePaginationProps {
  handlePagination: (page: number) => void;
  response: ApiResponse | undefined;
}

export function Pagination(props: handlePaginationProps) {
  const { previous, next } = props.response as ApiResponse;
  const currentPage = next
    ? Number(next?.slice(-1)) - 1
    : Number(previous?.slice(-1)) + 1;
  const handleNextPage = () => {
    props.handlePagination(Number(next?.slice(-1)));
  };

  const handlePrevPage = () => {
    props.handlePagination(Number(previous?.slice(-1)));
  };

  return (
    <div className="btn-container">
      <button className="btn" onClick={handlePrevPage} disabled={!previous}>
        Prev
      </button>
      {(previous || next) && <div>Page: {currentPage}</div>}
      <button className="btn" onClick={handleNextPage} disabled={!next}>
        Next
      </button>
    </div>
  );
}

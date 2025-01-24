import { ApiResponse } from '../../types/types';

interface PaginationProps {
  currentPage: number;
  onPageChange: (arg: number) => void;
  response?: ApiResponse;
}

export const Pagination = ({
  currentPage,
  onPageChange,
  response,
}: PaginationProps) => {
  const { previous, next } = response as ApiResponse;

  const handlePrevious = () => {
    onPageChange(currentPage - 1);
  };

  const handleNext = () => {
    onPageChange(currentPage + 1);
  };
  return (
    <div className="btn-container">
      <button className="btn" onClick={handlePrevious} disabled={!previous}>
        Prev
      </button>
      <span>Page: {currentPage}</span>
      <button className="btn" onClick={handleNext} disabled={!next}>
        Next
      </button>
    </div>
  );
};

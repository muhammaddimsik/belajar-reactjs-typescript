import React from "react";
import { Pagination } from "../../Model";

interface Props {
  pagination: Pagination;
  onPageChange: (page: number) => void;
}

const PaginationComponent: React.FC<Props> = ({ pagination, onPageChange }) => {
  const { current_page, last_page, next_page_url, prev_page_url } = pagination;

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= last_page; i++) {
      pageNumbers.push(i);
    }

    return pageNumbers.map((pageNumber) => (
      <button
        key={pageNumber}
        onClick={() => onPageChange(pageNumber)}
        className={`btn-number ${pageNumber === current_page ? "active" : ""}`}
      >
        {pageNumber}
      </button>
    ));
  };

  return (
    <div className="pagination">
      <button
        onClick={() => onPageChange(current_page - 1)}
        disabled={current_page === 1 || !prev_page_url}
        className={`btn-prev ${current_page === 1 && "text-gray-500"}`}
      >
        Previous
      </button>

      {renderPageNumbers()}

      <button
        onClick={() => onPageChange(current_page + 1)}
        disabled={current_page === last_page || !next_page_url}
        className={`btn-next ${current_page === last_page && "text-gray-500"}`}
      >
        Next
      </button>
    </div>
  );
};

export default PaginationComponent;

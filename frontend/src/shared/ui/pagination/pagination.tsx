import "./pagination.css";

type PaginationProps = {
  page: number;
  totalPages: number;
  currentLimit: number;
  isLoading: boolean;
  handlePageChange(page: number): void;
  handleChangeLimit(limit: number): void;
};

export const Pagination = ({
  page,
  totalPages,
  currentLimit,
  isLoading,
  handlePageChange,
  handleChangeLimit,
}: PaginationProps) => {
  const isActivePagination = totalPages > 1;

  return (
    totalPages !== 0 && (
      <div className="pagination">
        {isActivePagination && (
          <button
            className="pagination-prev"
            disabled={isLoading || page === 1}
            onClick={() => handlePageChange(page - 1)}
            type="button"
          >
            Пред.
          </button>
        )}
        <div className="pagination-wrapper">
          <span className="pagination-text">Страница {page}</span>
          {totalPages > 1 && (
            <span className="pagination-total">из {totalPages}</span>
          )}
        </div>
        {isActivePagination && (
          <button
            className="pagination-next"
            onClick={() => handlePageChange(page + 1)}
            disabled={isLoading || page === totalPages}
            type="button"
          >
            След.
          </button>
        )}
        <select
          className="pagination-select"
          value={currentLimit}
          onChange={(e) => handleChangeLimit(Number(e.target.value))}
          disabled={isLoading}
          aria-label="Документов на странице"
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
        </select>
      </div>
    )
  );
};

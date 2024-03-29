import { Dispatch, SetStateAction } from "react";

type PaginationProps = {
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
  numOfPages: number;
};

export const Pagination = ({ page, setPage, numOfPages }: PaginationProps) => {
  const pages = Array.from({ length: numOfPages }, (_, index) => {
    return index + 1;
  });

  const prevPage = () => {
    let newPage = page - 1;
    if (newPage < 1) {
      newPage = 1;
    }
    setPage(newPage);
  };

  const nextPage = () => {
    let newPage = page + 1;
    if (newPage > numOfPages) {
      newPage = 1;
    }
    setPage(newPage);
  };

  return (
    <div className="mt-8 gap-2 flex items-center justify-center">
      <button
        disabled={page <= 1}
        className={page <= 1 ? "disabled" : "primary"}
        onClick={prevPage}
      >
        prev
      </button>
      <div className="flex gap-2">
        {pages?.map((pageNumber) => {
          return (
            <button
              onClick={() => setPage(pageNumber)}
              className={pageNumber === page ? "disabled" : "primary"}
              key={pageNumber}
              disabled={pageNumber === page}
            >
              {pageNumber}
            </button>
          );
        })}
      </div>
      <button
        disabled={page >= numOfPages}
        className={page >= numOfPages ? "disabled" : "primary"}
        onClick={nextPage}
      >
        next
      </button>
    </div>
  );
};

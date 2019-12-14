import React from "react";

import styles from "./pagination.module.css";
const Pagination = ({
  currentPage,
  paginationRange,
  setPagination,
  totalPages
}) => (
  <div className={styles.pagination}>
    <button onClick={() => setPagination(1, totalPages)}>First</button>
    <button onClick={() => setPagination(currentPage - 1, totalPages)}>
      Prev
    </button>
    {paginationRange.map(number => (
      <button
        key={number}
        className={
          number === currentPage ? styles.pagination_button_active : null
        }
        onClick={() => setPagination(number, totalPages)}
      >
        {number}
      </button>
    ))}
    <button onClick={() => setPagination(currentPage + 1, totalPages)}>
      Next
    </button>
    <button onClick={() => setPagination(totalPages, totalPages)}>Last</button>
  </div>
);
export default Pagination;

import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { createStructuredSelector } from "reselect";
// IMPORTING RESELECTS
import {
  selectCurrentPage,
  selectPaginationRange
} from "../../redux/appConfig/appConfig.selector";
// IMPORTING REDUX ACTIONS
import { setPaginationStart } from "../../redux/appConfig/appConfig.action";

import styles from "./pagination.module.css";
const Pagination = ({
  currentPage,
  paginationRange,
  setPagination,
  totalPages,
  history,
  match
}) => (
  <div className={styles.pagination}>
    <button onClick={() => setPagination(1, totalPages)}>First</button>
    <button
      onClick={() => setPagination(parseInt(currentPage) - 1, totalPages)}
    >
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
    <button
      onClick={() => {
        setPagination(parseInt(currentPage) + 1, totalPages);
      }}
    >
      Next
    </button>
    <button
      onClick={() => {
        setPagination(totalPages, totalPages);
      }}
    >
      Last
    </button>
  </div>
);
const mapStateToProps = createStructuredSelector({
  // PAGINATION
  currentPage: selectCurrentPage,
  paginationRange: selectPaginationRange
});
const mapDispatchToProps = dispatch => ({
  setPagination: (number, total) => dispatch(setPaginationStart(number, total))
});
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter
)(Pagination);

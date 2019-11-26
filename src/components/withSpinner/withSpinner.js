import React from "react";

import styles from "./withSpinner.module.css";

const WithSpinner = WrappedComponent => ({ isFetching, ...otherProps }) => {
  return isFetching ? (
    <div className={styles.withSpinner_container}></div>
  ) : (
    <WrappedComponent {...otherProps} />
  );
};

export default WithSpinner;

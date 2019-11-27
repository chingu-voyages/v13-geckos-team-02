import React from "react";

import styles from "./withSpinner.module.css";

const WithSpinner = WrappedComponent => ({
  isFetching = true,
  ...otherProps
}) => {
  return isFetching ? (
    <div className={styles.withSpinner_container}>
      <div className={styles.withSpinner}></div>
    </div>
  ) : (
    <WrappedComponent {...otherProps} />
  );
};

export default WithSpinner;

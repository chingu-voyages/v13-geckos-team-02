import React from "react";

import styles from "./errorBoundary.module.css";
// IMPORTING IMAGE
import ErrorImage from "../../assets/images/error-boundary-image.JPG";

class ErrorBoundary extends React.Component {
  constructor() {
    super();

    this.state = {
      hasErrored: false
    };
  }

  static getDerivedStateFromError(error) {
    // Process the error
    return { hasErrored: true };
  }

  componentDidCatch(error, info) {
    console.log(error);
  }

  render() {
    if (this.state.hasErrored) {
      return (
        <div className={styles.errorBoundary}>
          <div className={styles.errorBoundaryImage__container}>
            <img src={ErrorImage} alt="Error boundary" />
          </div>
          <div className={styles.errorBoundaryText__container}>
            Sorry this page is broken
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

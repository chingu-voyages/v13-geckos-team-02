import React from "react";
import { Link, withRouter } from "react-router-dom";

import styles from "./errorBoundary.module.css";
// IMPORTING IMAGE
import ErrorImage from "../../assets/images/error-boundary.png";

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
            <p>Sorry this Page is not found</p>
            <p>
              <button onClick={() => this.props.history.goBack()}>
                take me back one step
              </button>
            </p>
            <p>
              <button onClick={() => this.props.history.push("/")}>
                take me home
              </button>
            </p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default withRouter(ErrorBoundary);

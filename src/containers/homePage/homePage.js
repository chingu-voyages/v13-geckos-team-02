import React from "react";

import styles from "./homePage.module.css";

class HomePage extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className={styles.homePage}>
        <h1>Welcome To Home page</h1>
        <p>Changes to be made</p>
      </div>
    );
  }
}

export default HomePage;

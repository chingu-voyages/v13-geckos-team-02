import React from "react";

import styles from "./homePage.module.css";
import LandingPage from "../../components/landingPage/landingPage";

import SmallCard from "../../components/smallCard/smallCard.js";

class HomePage extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className={styles.homePage}>
        <LandingPage
          imageUrl={`https://images.unsplash.com/photo-1568896597888-d674b61e7067?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1355&q=80`}
        ></LandingPage>
      </div>
    );
  }
}

export default HomePage;

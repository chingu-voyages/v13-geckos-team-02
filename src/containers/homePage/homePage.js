import React from "react";

import LandingSection from "../../components/landingSection/landingSection";
import CategorySection from "../../components/categorySection/categorySection";

class HomePage extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <LandingSection />
        <CategorySection heading={"Latest Series"} count={40} />
        <CategorySection heading={"Movies by popularity"} count={39} />
      </div>
    );
  }
}

export default HomePage;

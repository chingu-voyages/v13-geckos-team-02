import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
// IMPORTING RESELECT
import {
  selectGettingOnAirSeries,
  selectOnAirSeries
} from "../../redux/series/series.selector";
// IMPORTING COMPONENTS
import LandingSection from "../../components/landingSection/landingSection";
import CategorySection from "../../components/categorySection/categorySection";

class HomePage extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { isFetching, onAirSeries } = this.props;
    return (
      <div>
        <LandingSection />
        <CategorySection
          heading={"On Air Series"}
          values={onAirSeries.results}
          count={40}
          isFetching={isFetching}
        />
        <CategorySection heading={"On Air Series"} count={39} />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isFetching: selectGettingOnAirSeries,
  onAirSeries: selectOnAirSeries
});

export default connect(mapStateToProps)(HomePage);

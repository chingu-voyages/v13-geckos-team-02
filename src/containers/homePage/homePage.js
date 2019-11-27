import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
// IMPORTING RESELECT
import {
  selectGettingTrendingMovies,
  selectTrendingMovies
} from "../../redux/movies/movies.selector";
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
    const {
      gettingOnAirSeries,
      onAirSeries,
      gettingTrendingMovies,
      trendingMovies
    } = this.props;
    return (
      <div>
        <LandingSection />
        <CategorySection
          heading={"On Air Series"}
          values={onAirSeries.results}
          isFetching={gettingOnAirSeries}
        />
        <CategorySection
          heading={"Trending Movies"}
          values={trendingMovies.results}
          isFetching={gettingTrendingMovies}
        />
        <CategorySection
          heading={"Trending Series"}
          values={trendingMovies.results}
          isFetching={gettingTrendingMovies}
        />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  gettingOnAirSeries: selectGettingOnAirSeries,
  onAirSeries: selectOnAirSeries,
  gettingTrendingMovies: selectGettingTrendingMovies,
  trendingMovies: selectTrendingMovies
});

export default connect(mapStateToProps)(HomePage);

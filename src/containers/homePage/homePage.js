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
  selectOnAirSeries,
  selectGettingTrendingSeries,
  selectTrendingSeries
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
      trendingMovies,
      gettingTrendingSeries,
      trendingSeries
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
          values={trendingSeries.results}
          isFetching={gettingTrendingSeries}
        />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  // On Air Series
  gettingOnAirSeries: selectGettingOnAirSeries,
  onAirSeries: selectOnAirSeries,
  // Trending Movies
  gettingTrendingMovies: selectGettingTrendingMovies,
  trendingMovies: selectTrendingMovies,
  // Trending Series
  gettingTrendingSeries: selectGettingTrendingSeries,
  trendingSeries: selectTrendingSeries
});

export default connect(mapStateToProps)(HomePage);

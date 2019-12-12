import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
// IMPORTING REDUX ACTIONS
import {
  getNowPlayingStart,
  getTrendingMoviesStart
} from "../../redux/movies/movies.action";
import {
  getOnAirSeriesStart,
  getTrendingSeriesStart
} from "../../redux/series/series.action";
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
  componentDidMount() {
    const {
      getNowPlayingStart,
      getOnAirSeries,
      getTrendingMovies,
      getTrendingSeries,
      movies,
      series
    } = this.props;
    if (!movies) {
      getNowPlayingStart();
      getTrendingMovies();
    }
    if (!series) {
      getOnAirSeries();
      getTrendingSeries();
    }
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
          toPage={"series"}
        />
        <CategorySection
          heading={"Trending Movies"}
          values={trendingMovies.results}
          isFetching={gettingTrendingMovies}
          toPage={"movie"}
        />
        <CategorySection
          heading={"Trending Series"}
          values={trendingSeries.results}
          isFetching={gettingTrendingSeries}
          toPage={"series"}
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

const mapDispatchToProps = dispatch => ({
  getNowPlayingStart: () => dispatch(getNowPlayingStart()),
  getOnAirSeries: () => dispatch(getOnAirSeriesStart()),
  getTrendingMovies: () => dispatch(getTrendingMoviesStart()),
  getTrendingSeries: () => dispatch(getTrendingSeriesStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
// IMPORTING REDUX ACTIONS
import {
  getNowPlayingStart,
  getTrendingMoviesStart
} from "../../redux/movies/movies.action";
import {
  getOnTheAirSeriesStart,
  getTrendingSeriesStart
} from "../../redux/series/series.action";
// IMPORTING RESELECT
import {
  selectGettingTrendingMovies,
  selectTrendingMovies
} from "../../redux/movies/movies.selector";
import {
  selectGettingOnTheAirSeries,
  selectOnTheAirSeries,
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
      getOnTheAirSeries,
      getTrendingMovies,
      getTrendingSeries,
      movies
    } = this.props;
    if (!movies) {
      getNowPlayingStart();
      getTrendingMovies();
    }
    getOnTheAirSeries();
    getTrendingSeries();
  }

  render() {
    const {
      gettingOnTheAirSeries,
      onTheAirSeries,
      gettingTrendingMovies,
      trendingMovies,
      gettingTrendingSeries,
      trendingSeries
    } = this.props;
    console.log(gettingOnTheAirSeries);
    return (
      <div>
        <LandingSection />
        {onTheAirSeries ? (
          <CategorySection
            heading={"On Air Series"}
            values={onTheAirSeries.results}
            isFetching={gettingOnTheAirSeries}
            toPage={"series"}
          />
        ) : null}
        {trendingMovies ? (
          <CategorySection
            heading={"Trending Movies"}
            values={trendingMovies.results}
            isFetching={gettingTrendingMovies}
            toPage={"movie"}
          />
        ) : null}
        {trendingSeries ? (
          <CategorySection
            heading={"Trending Series"}
            values={trendingSeries.results}
            isFetching={gettingTrendingSeries}
            toPage={"series"}
          />
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  // On Air Series
  gettingOnTheAirSeries: selectGettingOnTheAirSeries,
  onTheAirSeries: selectOnTheAirSeries,
  // Trending Movies
  gettingTrendingMovies: selectGettingTrendingMovies,
  trendingMovies: selectTrendingMovies,
  // Trending Series
  gettingTrendingSeries: selectGettingTrendingSeries,
  trendingSeries: selectTrendingSeries
});

const mapDispatchToProps = dispatch => ({
  getNowPlayingStart: () => dispatch(getNowPlayingStart()),
  getOnTheAirSeries: page => dispatch(getOnTheAirSeriesStart(page)),
  getTrendingMovies: () => dispatch(getTrendingMoviesStart()),
  getTrendingSeries: page => dispatch(getTrendingSeriesStart(page))
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

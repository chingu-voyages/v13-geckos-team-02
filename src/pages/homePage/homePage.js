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
import PortraitCard from "../../components/portraitCard/portraitCard";

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
    document.title = `AmetBox`;
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
    return (
      <div>
        <LandingSection />
        {onTheAirSeries ? (
          <CategorySection
            heading={"On Air Series"}
            data={onTheAirSeries.results}
            isFetching={gettingOnTheAirSeries}
            toPageForCard={"series/details"}
            toPageForButton={"series/on_the_air"}
          >
            {onTheAirSeries.results
              .filter((idx, item) => item < 10)
              .map(tv => (
                <PortraitCard
                  key={tv.id}
                  id={tv.id}
                  title={tv.original_name}
                  posterPath={tv.poster_path}
                  toPage={"series/details"}
                />
              ))}
          </CategorySection>
        ) : null}
        {trendingMovies ? (
          <CategorySection
            heading={"Trending Movies"}
            data={trendingMovies.results}
            isFetching={gettingTrendingMovies}
            toPageForCard={"movie"}
            toPageForButton={"movies/trending"}
          >
            {trendingMovies.results
              .filter((idx, item) => item < 10)
              .map(movie => (
                <PortraitCard
                  key={movie.id}
                  id={movie.id}
                  title={movie.original_title}
                  posterPath={movie.poster_path}
                  toPage={"series/details"}
                />
              ))}
          </CategorySection>
        ) : null}
        {trendingSeries ? (
          <CategorySection
            heading={"Trending Series"}
            data={trendingSeries.results}
            isFetching={gettingTrendingSeries}
            toPageForCard={"series/details"}
            toPageForButton={"series/trending"}
          >
            {trendingSeries.results
              .filter((idx, item) => item < 10)
              .map(tv => (
                <PortraitCard
                  key={tv.id}
                  id={tv.id}
                  title={tv.original_name}
                  posterPath={tv.poster_path}
                  toPage={"series/details"}
                />
              ))}
          </CategorySection>
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

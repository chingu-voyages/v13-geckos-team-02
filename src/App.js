import React from "react";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";
import "./App.css";
// IMPORTING REDUX ACTIONS
import { getImageConfigStart } from "./redux/appConfig/appConfig.action";
import { getMoviesGenresStart } from "./redux/genre/genre.action";
import {
  getNowPlayingStart,
  getTrendingMoviesStart
} from "./redux/movies/movies.action";
import {
  getOnAirSeriesStart,
  getTrendingSeriesStart
} from "./redux/series/series.action";

// IMPORTING COMPONENTS
import Header from "./components/header/header";
import HomePage from "./containers/homePage/homePage";
import MoviesPage from "./containers/moviesPage/moviesPage";
import MoviePage from "./containers/moviePage/moviePage";

class App extends React.Component {
  componentDidMount() {
    const {
      getmoviesGenresStart,
      getNowPlayingStart,
      getImageConfigStart,
      getOnAirSeries,
      getTrendingMovies,
      getTrendingSeries,
      configs,
      movies,
      genres,
      series
    } = this.props;
    if (!configs) getImageConfigStart();
    if (!movies) {
      getNowPlayingStart();
      getTrendingMovies();
    }
    if (!genres) {
      getmoviesGenresStart();
    }
    if (!series) {
      getOnAirSeries();
      getTrendingSeries();
    }
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/movies" component={MoviesPage} />
          <Route path="/movie/:movie_id" component={MoviePage} />
        </Switch>
      </div>
    );
  }
}
const mapStateToProps = ({ configs, movies, genres, series }) => ({
  configs,
  movies: movies.nowPlayingMovies,
  genres: genres,
  series: series
});
const mapDispatchToProps = dispatch => ({
  getmoviesGenresStart: () => dispatch(getMoviesGenresStart()),
  getNowPlayingStart: () => dispatch(getNowPlayingStart()),
  getImageConfigStart: () => dispatch(getImageConfigStart()),
  getOnAirSeries: () => dispatch(getOnAirSeriesStart()),
  getTrendingMovies: () => dispatch(getTrendingMoviesStart()),
  getTrendingSeries: () => dispatch(getTrendingSeriesStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

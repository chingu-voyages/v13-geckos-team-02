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
import HomePage from "./pages/homePage/homePage";
import MoviesPage from "./pages/moviesPage/moviesPage";
import MoviePage from "./pages/moviePage/moviePage";

class App extends React.Component {
  componentDidMount() {
    const {
      getmoviesGenresStart,
      getImageConfigStart,
      configs,
      genres
    } = this.props;
    // if (!configs)
    getImageConfigStart();
    if (!genres) {
      getmoviesGenresStart();
    }
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/movies/:type_path" component={MoviesPage} />
          <Route path="/movie/:movie_id" component={MoviePage} />
        </Switch>
      </div>
    );
  }
}
const mapStateToProps = ({ configs, genres }) => ({
  configs,
  genres: genres
});
const mapDispatchToProps = dispatch => ({
  getmoviesGenresStart: () => dispatch(getMoviesGenresStart()),
  getImageConfigStart: () => dispatch(getImageConfigStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

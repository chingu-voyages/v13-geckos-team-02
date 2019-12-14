import React from "react";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";
import "./App.css";
// IMPORTING REDUX ACTIONS
import { getImageConfigStart } from "./redux/appConfig/appConfig.action";
import { getMoviesGenresStart } from "./redux/genre/genre.action";

// IMPORTING COMPONENTS
import Header from "./components/header/header";
import HomePage from "./pages/homePage/homePage";
// movies
import MoviesPage from "./pages/moviesPage/moviesPage";
import MoviePage from "./pages/moviePage/moviePage";
// series
import SeriesPage from "./pages/seriesPage/seriesPage";
import SingleSeriesPage from "./pages/singleSeriesPage/singleSeriesPage";
import TeamModalWindow from "./components/teamModelWindow/teamModalWindow";
import ErrorBoundary from "./components/errorBoundary/errorBoundary";

class App extends React.Component {
  componentDidMount() {
    const { getmoviesGenresStart, getImageConfigStart, genres } = this.props;
    getImageConfigStart();
    if (!genres) {
      getmoviesGenresStart();
    }
  }
  render() {
    return (
      <div className="App">
        <Header />
        <ErrorBoundary>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/movies/:category" component={MoviesPage} />
            <Route path="/movie/:movie_id" component={MoviePage} />
            <Route exact path="/series/:category" component={SeriesPage} />
            <Route
              exact
              path="/series/details/:series_id"
              component={SingleSeriesPage}
            />
          </Switch>
          {this.props.toggleModalWindow ? <TeamModalWindow /> : null}
        </ErrorBoundary>
      </div>
    );
  }
}
const mapStateToProps = ({ configs, genres, person }) => ({
  configs,
  genres: genres,
  toggleModalWindow: person.toggleModalWindow
});
const mapDispatchToProps = dispatch => ({
  getmoviesGenresStart: () => dispatch(getMoviesGenresStart()),
  getImageConfigStart: () => dispatch(getImageConfigStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

import React, { Suspense } from "react";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";
import "./App.css";
// IMPORTING REDUX ACTIONS
import { getImageConfigStart } from "./redux/appConfig/appConfig.action";
import { getMoviesGenresStart } from "./redux/genre/genre.action";

// IMPORTING COMPONENTS
import Header from "./components/header/header";
// import Footer from "./components/footer/footer";
import WithSpinner from "./components/withSpinner/withSpinner";
import ErrorBoundary from "./components/errorBoundary/errorBoundary";
const Footer = React.lazy(() => import("./components/footer/footer"));
const HomePage = React.lazy(() => import("./pages/homePage/homePage"));
// movies
const MoviesPage = React.lazy(() => import("./pages/moviesPage/moviesPage"));
const MoviePage = React.lazy(() => import("./pages/moviePage/moviePage"));
// series
const SeriesPage = React.lazy(() => import("./pages/seriesPage/seriesPage"));
const SingleSeriesPage = React.lazy(() =>
  import("./pages/singleSeriesPage/singleSeriesPage")
);
const TeamModalWindow = React.lazy(() =>
  import("./components/teamModelWindow/teamModalWindow")
);

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
        <Switch>
          <ErrorBoundary>
            <Suspense fallback={<WithSpinner />}>
              <Route exact path="/" component={HomePage} />
              <Route path="/movies/:category" component={MoviesPage} />
              <Route path="/movie/:movie_id" component={MoviePage} />
              <Route exact path="/series/:category" component={SeriesPage} />
              <Route
                exact
                path="/series/details/:series_id"
                component={SingleSeriesPage}
              />
              {this.props.toggleModalWindow ? <TeamModalWindow /> : null}
              <Footer />
            </Suspense>
          </ErrorBoundary>
        </Switch>
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

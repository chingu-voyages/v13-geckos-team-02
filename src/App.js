import React from "react";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";
import "./App.css";
// IMPORTING REDUX ACTIONS
import { getMoviesGenresStart } from "./redux/genre/genre.action";

// IMPORTING COMPONENTS
import Header from "./components/header/header";
import HomePage from "./containers/homePage/homePage";
import MoviesPage from "./containers/moviesPage/moviesPage";
import MoviePage from "./containers/moviePage/moviePage";

class App extends React.Component {
  componentDidMount() {
    const { getmoviesGenresStart } = this.props;
    getmoviesGenresStart();
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/movies" component={MoviesPage} />
          <Route path="/movie" component={MoviePage} />
        </Switch>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  getmoviesGenresStart: () => dispatch(getMoviesGenresStart())
});

export default connect(null, mapDispatchToProps)(App);

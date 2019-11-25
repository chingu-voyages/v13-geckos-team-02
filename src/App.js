import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import Header from "./components/header/header";
import HomePage from "./containers/homePage/homePage";
import MoviesPage from "./containers/moviesPage/moviesPage";
import MoviePage from "./containers/moviePage/moviePage";

function App() {
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

export default App;

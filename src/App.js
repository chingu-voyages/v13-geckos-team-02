import React from "react";
import "./App.css";

import Header from "./components/header/header";
import HomePage from "./containers/homePage/homePage";
import MoviesPage from "./containers/moviesPage/moviesPage";

function App() {
  return (
    <div className="App">
      <Header />
      <HomePage />
      <MoviesPage />
    </div>
  );
}

export default App;

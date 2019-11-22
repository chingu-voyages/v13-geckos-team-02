import React from "react";
import "./App.css";

import Header from "./components/header/header";
import HomePage from "./containers/homePage/homePage";

function App() {
  return (
    <div className="App">
      <Header />
      <HomePage />
    </div>
  );
}

export default App;

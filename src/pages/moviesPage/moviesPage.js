import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

// IMPORTING RESELECTS
import { selectGettingConfigs } from "../../redux/appConfig/appConfig.selector";
import {
  selectMoviesGenres,
  selectGettingMoviesGenres
} from "../../redux/genre/genre.selector";
import {
  selectGettingNowPlaying,
  selectNowPlayingMovies
} from "../../redux/movies/movies.selector";
// IMPORTING STYLES
import styles from "./moviesPage.module.css";
// IMPORTING COMPONENTS
import PortraitCard from "../../components/portraitCard/portraitCard";
import ToggleButton from "../../components/toggleButton/toggleButton";
import withSpinner from "../../components/withSpinner/withSpinner";

class MoviesPage extends React.Component {
  render() {
    const range = [1, 2, 3, 4, 5, 5, 6, 61, 2, 2, 3, 3, 3];
    const { nowPlayingMovies } = this.props;
    return (
      <div className={styles.moviesPage_container}>
        <h1>Latest movies</h1>
        <div className={styles.moviesPage_genrebar}>
          <ToggleButton name={"Action"} active />
          <ToggleButton name={"comedy"} />
          <ToggleButton name={"documentry"} active />
          <ToggleButton name={"thriller"} />
          <ToggleButton name={"drama"} />
        </div>
        <div className={styles.moviesPage_body}>
          {nowPlayingMovies.results.map(movie => (
            <PortraitCard key={movie.id} movie={movie} toPage={"movie"} />
          ))}
        </div>
        <div className={styles.moviesPage_footer}>
          <button>Prev</button>
          <button className={styles.moviesPage_footer_button_active}>1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
          <button>5</button>
          <button>Next</button>
        </div>
      </div>
    );
  }
}
const mapStateToProps = createStructuredSelector({
  nowPlayingMovies: selectNowPlayingMovies,
  isFetching:
    selectGettingNowPlaying ||
    selectGettingMoviesGenres ||
    selectGettingConfigs,
  movieGenre: selectMoviesGenres
});

export default connect(mapStateToProps)(withSpinner(MoviesPage));

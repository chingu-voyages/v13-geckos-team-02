import React from "react";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
// IMPORTING RESELECTS
import { selectCurrentPage } from "../../redux/appConfig/appConfig.selector";
import { selectMoviesGenres } from "../../redux/genre/genre.selector";
import { selectMovies } from "../../redux/movies/movies.selector";
// IMPORTING REDUX ACTIONS
import {
  getNowPlayingStart,
  getTrendingMoviesStart,
  getTopRatedMoviesStart,
  getPopularMoviesStart,
  getUpcomingMoviesStart
} from "../../redux/movies/movies.action";
// IMPORTING STYLES
import styles from "./moviesPage.module.css";
// IMPORTING COMPONENTS
import PortraitCard from "../../components/portraitCard/portraitCard";
import Pagination from "../../components/pagination/pagination";

class MoviesPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      moviesCategoryTitle: "Now Playing Movies",
      moviesCategory: "nowPlayingMovies",
      url: this.props.match.params.category,
      page: this.props.currentPage
    };
  }
  componentDidMount() {
    this.handleDataFetching();
  }
  async shouldComponentUpdate(nextProps, nextState) {
    const { match, currentPage } = await nextProps;
    const { url, page } = await nextState;
    if (match.params.category !== url || page !== currentPage) {
      await this.setState({ url: match.params.category });
      await this.setState({ page: currentPage });
      await this.handleDataFetching();
      return await true;
    } else {
      return await false;
    }
  }
  handleDataFetching = () => {
    const {
      match,
      currentPage,
      fetchNowPlayingMovies,
      fetchTrendingMovies,
      fetchPopularMovies,
      fetchTopRatedMovies,
      fetchUpcomingMovies
    } = this.props;
    const { category } = match.params;
    switch (category) {
      case "now_playing":
        fetchNowPlayingMovies(currentPage);
        this.setState({
          moviesCategoryTitle: "Now Playing Movies",
          moviesCategory: "nowPlayingMovies"
        });
        break;
      case "trending":
        fetchTrendingMovies(currentPage);
        this.setState({
          moviesCategoryTitle: "Trending Movies",
          moviesCategory: "trendingMovies"
        });
        break;
      case "popular":
        fetchPopularMovies(currentPage);
        this.setState({
          moviesCategoryTitle: "Popular Movies",
          moviesCategory: "popularMovies"
        });
        break;
      case "top_rated":
        fetchTopRatedMovies(currentPage);
        this.setState({
          moviesCategoryTitle: "Top Rated Movies",
          moviesCategory: "topRatedMovies"
        });
        break;
      case "upcoming":
        fetchUpcomingMovies(currentPage);
        this.setState({
          moviesCategoryTitle: "Upcoming Movies",
          moviesCategory: "upcomingMovies"
        });
        break;
      default:
        return;
    }
    document.title = `${this.state.moviesCategoryTitle} - AmetBox`;
  };
  render() {
    const newMovies = this.props.movies[this.state.moviesCategory]
      ? this.props.movies[this.state.moviesCategory]
      : [];
    const { moviesCategoryTitle } = this.state;
    return newMovies ? (
      <div className={styles.moviesPage_container}>
        <h1>{moviesCategoryTitle}</h1>
        <Pagination totalPages={newMovies.total_pages} />
        <div className={styles.moviesPage_body}>
          {newMovies.length !== 0
            ? newMovies.results.map(movie => (
                <PortraitCard key={movie.id} movie={movie} toPage={"movie"} />
              ))
            : null}
        </div>
        <Pagination totalPages={newMovies.total_pages} />
      </div>
    ) : null;
  }
}
const mapStateToProps = createStructuredSelector({
  movies: selectMovies,
  movieGenre: selectMoviesGenres,
  // PAGINATION
  currentPage: selectCurrentPage
});

const mapDispatchToProps = dispatch => ({
  fetchNowPlayingMovies: page => dispatch(getNowPlayingStart(page)),
  fetchTrendingMovies: page => dispatch(getTrendingMoviesStart(page)),
  fetchTopRatedMovies: page => dispatch(getTopRatedMoviesStart(page)),
  fetchPopularMovies: page => dispatch(getPopularMoviesStart(page)),
  fetchUpcomingMovies: page => dispatch(getUpcomingMoviesStart(page))
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter
)(MoviesPage);

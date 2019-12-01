import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

// IMPORTING STYLES AND SVGS
import styles from "./moviePage.module.css";
import { ReactComponent as NotWatchListed } from "../../assets/icons/watchlist-icon-empty.svg";
import { ReactComponent as WatchListed } from "../../assets/icons/watchlist-icon-like.svg";
// IMPORTING REDUX ACTION
import { getMovieDetailsStart } from "../../redux/movies/movies.action";
// IMPORT SELECTORS
import { selectImagePath } from "../../redux/appConfig/appConfig.selector";
import {
  selectGettingMoiveDetails,
  selectMovieDetails,
  selectmo
} from "../../redux/movies/movies.selector";
import { selectMoviesGenres } from "../../redux/genre/genre.selector";
// COMPONENTS
import Overview from "../../components/overview/overview";
import SmallCard from "../../components/smallCard/smallCard";
import SideBarMovieInfo from "../../components/sideBarMoreInfo/sideBarMoreInfo";
import Team from "../../components/team/team";
import ProductionCompany from "../../components/productionCompany/productionCompany";
const director = "ridley mark";
const writers = ["john doe", "jane hunt"];
const watchlisted = true;
const list = [
  {
    realName: "done right",
    actingName: "mark song",
    imageUrl:
      "https://images.unsplash.com/photo-1568896597888-d674b61e7067?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1355&q=80"
  },
  {
    realName: "done right",
    actingName: "mark song",
    imageUrl:
      "https://images.unsplash.com/photo-1568896597888-d674b61e7067?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1355&q=80"
  },
  {
    realName: "done right",
    actingName: "mark song",
    imageUrl:
      "https://images.unsplash.com/photo-1568896597888-d674b61e7067?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1355&q=80"
  },
  {
    realName: "done right",
    actingName: "mark song",
    imageUrl:
      "https://images.unsplash.com/photo-1568896597888-d674b61e7067?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1355&q=80"
  },
  {
    realName: "done right",
    actingName: "mark song",
    imageUrl:
      "https://images.unsplash.com/photo-1568896597888-d674b61e7067?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1355&q=80"
  },
  {
    realName: "done right",
    actingName: "mark song",
    imageUrl:
      "https://images.unsplash.com/photo-1568896597888-d674b61e7067?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1355&q=80"
  },
  {
    realName: "done right",
    actingName: "mark song",
    imageUrl:
      "https://images.unsplash.com/photo-1568896597888-d674b61e7067?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1355&q=80"
  },
  {
    realName: "done right",
    actingName: "mark song",
    imageUrl:
      "https://images.unsplash.com/photo-1568896597888-d674b61e7067?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1355&q=80"
  }
];

class MoviePage extends React.Component {
  componentDidMount() {
    const { getMovieDetailsStart, movieDetails } = this.props;
    if (!movieDetails) getMovieDetailsStart({ movie_id: "330457" });
    getMovieDetailsStart({ movie_id: "330457", extra: "credits" });
  }
  render() {
    const { imagePath, movieDetails } = this.props;
    const filterMovieGenres = movieDetails.genres.map(genre => genre.name);
    return (
      <div>
        <div className={styles.moviePage}>
          <div className={styles.moviePage_sideBar_container}>
            {/* Container holding more infomations to movies */}
            <div className={styles.sideBar_content_container}>
              {/* Movie Poster */}
              <SmallCard
                imageUrl={`${imagePath}/${movieDetails.backdrop_path}`}
                height={"150px"}
              />
              {/* Movie Name */}
              <h2 className={styles.movieName}>
                {movieDetails.original_title}
              </h2>
              {/* More Movie Info */}
              <SideBarMovieInfo
                categories={filterMovieGenres}
                director={director}
                writers={writers}
                length={movieDetails.runtime}
                releaseDate={movieDetails.release_date}
              />
              {/* Footer section with watchlist button */}
              <div className={styles.sideBar_footer}>
                <div className={styles.sideBar_footer_watchlist_container}>
                  {watchlisted ? (
                    <WatchListed className={styles.sideBar_footer_icon} />
                  ) : (
                    <NotWatchListed className={styles.sideBar_footer_icon} />
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className={styles.moviePage_content_container}>
            <Overview content={movieDetails.overview} />
            <Team heading={"the cast"} list={list} />
            <Team heading={"the crew"} list={list} />
            <Team heading={"created by"} list={list} />
            {/* <ProductionCompany list={movieDetails.production_companies} /> */}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  imagePath: selectImagePath,
  movieGenres: selectMoviesGenres,
  // MOVIE DETAILS
  isFetching: selectGettingMoiveDetails,
  movieDetails: selectMovieDetails
});
const mapDispatchToProps = disaptch => ({
  getMovieDetailsStart: params => disaptch(getMovieDetailsStart(params))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(MoviePage));

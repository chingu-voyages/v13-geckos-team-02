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
  selectMovieCast,
  selectMovieCrew
} from "../../redux/movies/movies.selector";
// COMPONENTS
import Overview from "../../components/overview/overview";
import SmallCard from "../../components/smallCard/smallCard";
import SideBarMovieInfo from "../../components/sideBarMoreInfo/sideBarMoreInfo";
import Team from "../../components/team/team";
import ProductionCompany from "../../components/productionCompany/productionCompany";
const watchlisted = true;

class MoviePage extends React.Component {
  componentDidMount() {
    const { getMovieDetailsStart, movieDetails } = this.props;
    if (!movieDetails) getMovieDetailsStart({ movie_id: "330457" });
    // getMovieDetailsStart({ movie_id: "330457", extra: "credits" });
  }
  render() {
    const { imagePath, movieDetails, movieCast, movieCrew } = this.props;
    const directors = movieCrew.filter(crew =>
      crew.department.toLowerCase().includes("directing")
    );
    const writers = movieCrew.filter(crew =>
      crew.department.toLowerCase().includes("writing")
    );
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
                categories={movieDetails.genres}
                directors={directors}
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
            <div className={styles.team_container}>
              <h1>The Cast</h1>
              <div className={styles.team_member_card_container}>
                {movieCast.map(cast => (
                  <Team
                    key={cast.credit_id}
                    imageUrl={`${imagePath}/${cast.profile_path}`}
                    name={cast.name}
                    job={cast.character}
                  />
                ))}
              </div>
            </div>
            {/* CREW */}
            <div className={styles.team_container}>
              <h1>The Crew</h1>
              <div className={styles.team_member_card_container}>
                {movieCrew.map(crew => (
                  <Team
                    key={crew.credit_id}
                    imageUrl={`${imagePath}/${crew.profile_path}`}
                    name={crew.name}
                    job={crew.job}
                  />
                ))}
              </div>
            </div>
            {/* PRODUCTION COMPANY */}
            <div className={styles.productionCompany}>
              <h2 className={styles.productionCompany_heading}>
                The Production Company
              </h2>
              <ul className={styles.company_list_box}>
                {movieDetails.production_companies.map(company => (
                  <li key={company.key} className={styles.company_list}>
                    <img
                      className={styles.company_logo}
                      src={`${imagePath}/${company.logo_path}`}
                      alt={company.name}
                    />
                    <h6>{company.name}</h6>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  imagePath: selectImagePath,
  // MOVIE DETAILS
  isFetching: selectGettingMoiveDetails,
  movieDetails: selectMovieDetails,
  // MOVIE CAST AND CREW
  movieCast: selectMovieCast,
  movieCrew: selectMovieCrew
});
const mapDispatchToProps = disaptch => ({
  getMovieDetailsStart: params => disaptch(getMovieDetailsStart(params))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(MoviePage));

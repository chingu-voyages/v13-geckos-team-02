import React, { useEffect } from "react";
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
  selectMovieCrew,
  selectSimilarMovies,
  selectGettingSimilarMovies
} from "../../redux/movies/movies.selector";
import { selectToggleModalWindow } from "../../redux/person/person.selector";
// COMPONENTS
import Overview from "../../components/overview/overview";
import SmallCard from "../../components/smallCard/smallCard";
import SideBarMovieInfo from "../../components/sideBarMoreInfo/sideBarMoreInfo";
import Team from "../../components/team/team";
import CategorySection from "../../components/categorySection/categorySection";
import TeamModalWindow from "../../components/teamModelWindow/teamModalWindow";
const watchlisted = true;

const MoviePage = ({
  getMovieDetailsStart,
  match: { params },
  imagePath,
  movieDetails,
  movieCast,
  movieCrew,
  similarMovies,
  isGettingSimilarMovies,
  toggleModalWindow
}) => {
  useEffect(() => {
    // if (!movieDetails)
    getMovieDetailsStart({ movie_id: params.movie_id });
    getMovieDetailsStart({ movie_id: params.movie_id, extra: "credits" });
    getMovieDetailsStart({ movie_id: params.movie_id, extra: "similar" });
  }, [params.movie_id, getMovieDetailsStart]);
  const directors = movieCrew.filter(crew =>
    crew.department.toLowerCase().includes("directing")
  );
  const writers = movieCrew.filter(crew =>
    crew.department.toLowerCase().includes("writing")
  );
  return (
    <div className={styles.moviePage}>
      <div className={styles.moviePage_sideBar_container}>
        {/* Container holding more infomations to movies */}
        <div className={styles.sideBar_content_container}>
          {/* Movie Poster */}
          <SmallCard
            imageUrl={`${imagePath}/${movieDetails.backdrop_path}`}
            height={"150px"}
            backgroundSize={"cover"}
          />
          {/* Movie Name */}
          <h2 className={styles.movieName}>{movieDetails.original_title}</h2>
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
          <h2>The Cast</h2>
          <div className={styles.team_member_card_container}>
            {movieCast.map(cast => (
              <Team
                key={cast.credit_id}
                id={cast.id}
                imageUrl={`${imagePath}/${cast.profile_path}`}
                name={cast.name}
                job={cast.character}
              />
            ))}
          </div>
        </div>
        {/* CREW */}
        <div className={styles.team_container}>
          <h2>The Crew</h2>
          <div className={styles.team_member_card_container}>
            {movieCrew.map(crew => (
              <Team
                key={crew.credit_id}
                id={crew.id}
                imageUrl={`${imagePath}/${crew.profile_path}`}
                name={crew.name}
                job={crew.job}
                as={false}
              />
            ))}
          </div>
        </div>
        {/* PRODUCTION COMPANY */}
        {movieDetails.production_companies.length !== 0 ? (
          <div className={styles.productionCompany}>
            <h2 className={styles.productionCompany_heading}>
              The Production Company
            </h2>
            <ul className={styles.company_list_box}>
              {movieDetails.production_companies.map(company => (
                <li key={company.id} className={styles.company_list}>
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
        ) : null}
        {/* SIMILAR TO MOVIES */}
        {similarMovies.total_results !== 0 ? (
          <div className={styles.team_container}>
            <CategorySection
              heading={`Related To ${movieDetails.original_title}`}
              values={similarMovies.results}
              isFetching={isGettingSimilarMovies}
              toPage={"movie"}
            />
          </div>
        ) : null}
      </div>
      {toggleModalWindow ? <TeamModalWindow /> : null}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  imagePath: selectImagePath,
  // MOVIE DETAILS
  isFetching: selectGettingMoiveDetails,
  movieDetails: selectMovieDetails,
  // MOVIE CAST AND CREW
  movieCast: selectMovieCast,
  movieCrew: selectMovieCrew,
  // SIMILAR MOVIES
  similarMovies: selectSimilarMovies,
  isGettingSimilarMovies: selectGettingSimilarMovies,
  // MODAL WINDOW
  toggleModalWindow: selectToggleModalWindow
});
const mapDispatchToProps = disaptch => ({
  getMovieDetailsStart: params => disaptch(getMovieDetailsStart(params))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(MoviePage));

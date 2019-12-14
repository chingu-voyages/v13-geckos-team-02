import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
// IMPORTING STYLES
import styles from "./singleSeriesPage.module.css";
// IMPORTING REDUX ACTION
import {
  getSeriesDetailsStart,
  getSeriesCreditsStart,
  getSimilarSeriesStart
} from "../../redux/series/series.action";
// IMPORT SELECTORS
import { selectImagePath } from "../../redux/appConfig/appConfig.selector";
import {
  selectGettingSeriesDetails,
  selectSeriesDetails,
  selectGettingSeriesCredits,
  selectSeriesCast,
  selectSeriesCrew,
  selectGettingSimilarSeries,
  selectSimilarSeries
} from "../../redux/series/series.selector";
import { selectToggleModalWindow } from "../../redux/person/person.selector";
// COMPONENTS
import Overview from "../../components/overview/overview";
import SideBarMovieInfo from "../../components/sideBarMoreInfo/sideBarMoreInfo";
import Team from "../../components/team/team";
import CategorySection from "../../components/categorySection/categorySection";
import BigCard from "../../components/bigCard/bigCard";

const SingleSeries = ({
  fetchSeriesDetails,
  fetchSeriesCredits,
  fetchSimilarSeries,
  imagePath,
  seriesDetails,
  isGettingSimilarSeries,
  similarSeries,
  gettingSeriesCredits,
  seriesCast,
  seriesCrew,
  match: { params }
}) => {
  useEffect(() => {
    fetchSeriesDetails(params.series_id);
    fetchSeriesCredits(params.series_id);
    fetchSimilarSeries(params.series_id);
  }, [
    params.series_id,
    fetchSeriesDetails,
    fetchSeriesCredits,
    fetchSimilarSeries
  ]);
  const directors = seriesCrew.filter(crew =>
    crew.department.toLowerCase().includes("directing")
  );
  const writers = seriesCrew.filter(crew =>
    crew.department.toLowerCase().includes("writing")
  );
  return seriesDetails ? (
    <div style={{ display: "block" }}>
      {/* LANDING POSTER SECTION */}
      <div className={styles.landingSection}>
        <BigCard
          name={seriesDetails.name}
          imageUrl={`${imagePath}/${seriesDetails.backdrop_path}`}
          backgroundPosition={"top"}
          usedBySeries={true}
          width={"95%"}
        />
        <div className={styles.seriesLandingCover}></div>
      </div>
      {/* PAGE CONTENTS */}
      <div className={styles.seriesPage}>
        <div className={styles.seriesPage_sideBar_container}>
          {/* Container holding more infomations to movies */}
          <div className={styles.sideBar_content_container}>
            {/* More Movie Info */}
            <SideBarMovieInfo
              height={100}
              categories={seriesDetails.genres}
              directors={directors}
              writers={writers}
              episodeLength={seriesDetails.episode_run_time[0]}
              firstAirDate={seriesDetails.first_air_date}
              lastAirDate={seriesDetails.last_air_date}
              episodes={seriesDetails.number_of_episodes}
              season={seriesDetails.number_of_seasons}
              // newtworkLogo={`${imagePath}/${seriesDetails.networks[1].logo_path}`}
              linkToWatch={seriesDetails.homepage}
            />
          </div>
        </div>
        <div className={styles.seriesPage_content_container}>
          <Overview content={seriesDetails.overview} />
          <div className={styles.team_container}>
            <h2>The Cast</h2>
            <div className={styles.team_member_card_container}>
              {seriesCast.map(cast => (
                <Team
                  key={cast.credit_id}
                  id={cast.id}
                  imageUrl={`${imagePath}/${cast.profile_path}`}
                  name={cast.name}
                  job={cast.character}
                  isFetching={gettingSeriesCredits}
                />
              ))}
            </div>
          </div>
          {/* CREW */}
          {seriesCrew.length !== 0 ? (
            <div className={styles.team_container}>
              <h2>The Crew</h2>
              <div className={styles.team_member_card_container}>
                {seriesCrew.map(crew => (
                  <Team
                    key={crew.credit_id}
                    id={crew.id}
                    imageUrl={`${imagePath}/${crew.profile_path}`}
                    name={crew.name}
                    job={crew.job}
                    as={false}
                    isFetching={gettingSeriesCredits}
                  />
                ))}
              </div>
            </div>
          ) : null}
          {/* CREATORS*/}
          <div className={styles.team_container}>
            <h2>Created By</h2>
            <div className={styles.team_member_card_container}>
              {seriesDetails.created_by.map(crew => (
                <Team
                  key={crew.credit_id}
                  id={crew.id}
                  imageUrl={`${imagePath}/${crew.profile_path}`}
                  name={crew.name}
                  as={false}
                  isFetching={gettingSeriesCredits}
                />
              ))}
            </div>
          </div>
          {/* PRODUCTION COMPANY */}
          {seriesDetails.production_companies.length !== 0 ? (
            <div className={styles.productionCompany}>
              <h2 className={styles.productionCompany_heading}>
                The Production Company
              </h2>
              <ul className={styles.company_list_box}>
                {seriesDetails.production_companies.map(company => (
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
          {similarSeries.total_results !== 0 ? (
            <div className={styles.team_container}>
              <CategorySection
                heading={`Related To ${seriesDetails.original_name}`}
                values={similarSeries.results}
                isFetching={isGettingSimilarSeries}
                toPage={"movie"}
              />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  ) : null;
};
const mapStateToProps = createStructuredSelector({
  imagePath: selectImagePath,
  // SERIES DETAILS
  isFetching: selectGettingSeriesDetails,
  seriesDetails: selectSeriesDetails,
  // SEREIS CREDITS
  gettingSeriesCredits: selectGettingSeriesCredits,
  seriesCast: selectSeriesCast,
  seriesCrew: selectSeriesCrew,
  // SIMILAR MOVIES
  isGettingSimilarSeries: selectGettingSimilarSeries,
  similarSeries: selectSimilarSeries,
  // MODAL WINDOW
  toggleModalWindow: selectToggleModalWindow
});
const mapDispatchToProps = disaptch => ({
  fetchSeriesDetails: id => disaptch(getSeriesDetailsStart(id)),
  fetchSeriesCredits: id => disaptch(getSeriesCreditsStart(id)),
  fetchSimilarSeries: id => disaptch(getSimilarSeriesStart(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(SingleSeries));

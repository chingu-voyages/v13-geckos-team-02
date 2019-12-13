import React, { useEffect, useState } from "react";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
// IMPORTING REDUX ACTIONS
import {
  getSeriesAiringTodayStart,
  getOnTheAirSeriesStart,
  getTopRatedSeriesStart,
  getTrendingSeriesStart,
  getPopularSeriesStart
} from "../../redux/series/series.action";
// IMPORTING SELECTORS
import { selectSeries } from "../../redux/series/series.selector";
import { selectCurrentPage } from "../../redux/appConfig/appConfig.selector";
// IMPORTING COMPONENTS
import PortraitCard from "../../components/portraitCard/portraitCard";
// import ToggleButton from "../../components/toggleButton/toggleButton";
// import withSpinner from "../../components/withSpinner/withSpinner";
import Pagination from "../../components/pagination/pagination";
// IMPORTING STYLES
import styles from "./seriesPage.module.css";

class SeriesPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seriesCategoryTitle: "Now Playing Movies",
      seriesCategory: "airingTodaySeries",
      url: this.props.match.params.category
    };
  }
  componentDidMount() {
    this.handleDataFetching();
  }
  async shouldComponentUpdate(nextProps, nextState) {
    const {
      match: {
        params: { category }
      }
    } = await nextProps;
    const { url } = await nextState;
    if (category !== url) {
      await this.setState({ url: category });
      await this.handleDataFetching();
      return await true;
    } else {
      return await false;
    }
  }
  handleDataFetching = () => {
    const {
      history,
      fetchSeriesAiringToday,
      fetchOnTheAirSeries,
      fetchTopRatedSeries,
      fetchTrendingSeries,
      fetchPopularSeries,
      match: { params },
      currentPage
    } = this.props;
    // history.push(`/${match.url}/${currentPage}`);
    console.log(currentPage);

    switch (params.category) {
      case "airing_today":
        fetchSeriesAiringToday();
        this.setState({
          seriesCategoryTitle: "Series Airing Today",
          seriesCategory: "airingTodaySeries"
        });
        break;
      case "on_the_air":
        fetchOnTheAirSeries();
        this.setState({
          seriesCategoryTitle: "Series On The Air",
          seriesCategory: "onTheAirSeries"
        });
        break;
      case "top_rated":
        fetchTopRatedSeries();
        this.setState({
          seriesCategoryTitle: "Top Rated Series",
          seriesCategory: "topRatedSeries"
        });
        break;
      case "trending":
        fetchTrendingSeries();
        this.setState({
          seriesCategoryTitle: "Trending Series",
          seriesCategory: "trendingSeries"
        });
        break;
      case "popular":
        fetchPopularSeries();
        this.setState({
          seriesCategoryTitle: "Popular Series",
          seriesCategory: "popularSeries"
        });
        break;
      default:
        return;
    }
  };
  render() {
    const newSeries = this.props.series[this.state.seriesCategory]
      ? this.props.series[this.state.seriesCategory]
      : [];
    const { currentPage, paginationRange, setPagination } = this.props;
    const { seriesCategoryTitle } = this.state;
    return (
      <div className={styles.seriesPage_container}>
        <h1>{seriesCategoryTitle}</h1>
        <Pagination
          currentPage={currentPage}
          paginationRange={paginationRange}
          totalPages={newSeries.total_pages}
          setPagination={setPagination}
        />
        <div className={styles.seriesPage_body}>
          {newSeries.length !== 0
            ? newSeries.results.map(movie => (
                <PortraitCard key={movie.id} movie={movie} toPage={"series"} />
              ))
            : null}
        </div>
        <Pagination
          currentPage={currentPage}
          paginationRange={paginationRange}
          totalPages={newSeries.total_pages}
        />
      </div>
    );
  }
}
const mapStateToProps = createStructuredSelector({
  series: selectSeries,
  currentPage: selectCurrentPage
});
const mapDispatchToProps = dispatch => ({
  fetchSeriesAiringToday: page => dispatch(getSeriesAiringTodayStart(page)),
  fetchOnTheAirSeries: page => dispatch(getOnTheAirSeriesStart(page)),
  fetchTopRatedSeries: page => dispatch(getTopRatedSeriesStart(page)),
  fetchTrendingSeries: page => dispatch(getTrendingSeriesStart(page)),
  fetchPopularSeries: page => dispatch(getPopularSeriesStart(page))
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter
)(SeriesPage);

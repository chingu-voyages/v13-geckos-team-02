import { createSelector } from "reselect";

export const selectSeries = state => state.series;

// AIRING TODAY SERIES SELECTOR
export const selectGettingAiringTodaySeries = createSelector(
  selectSeries,
  series => series.gettingAiringTodaySeries
);
export const selectAiringTodaySeries = createSelector(
  selectSeries,
  series => series.airingTodaySeries
);

// ON THE AIR SERIES SELECTOR
export const selectGettingOnTheAirSeries = createSelector(
  selectSeries,
  series => series.gettingOnTheAirSeries
);
export const selectOnTheAirSeries = createSelector(
  selectSeries,
  series => series.onTheAirSeries
);

// TOP RATED SERIES SELECTOR
export const selectGettingTopRatedSeries = createSelector(
  selectSeries,
  series => series.gettingTopRatedSeries
);
export const selectTopRatedSeries = createSelector(
  selectSeries,
  series => series.topRatedSeries
);

// TRENDING SERIES SELECTOR
export const selectGettingTrendingSeries = createSelector(
  selectSeries,
  series => series.gettingTrendingSeries
);
export const selectTrendingSeries = createSelector(
  selectSeries,
  series => series.trendingSeries
);

// POPULAR SERIES SELECTOR
export const selectGettingPopularSeries = createSelector(
  selectSeries,
  series => series.GettingPopularSeries
);
export const selectPopularSeries = createSelector(
  selectSeries,
  series => series.popularSeries
);

// SERIES DETAILS SELECTOR
export const selectGettingSeriesDetails = createSelector(
  selectSeries,
  series => series.gettingSeriesDetails
);
export const selectSeriesDetails = createSelector(
  selectSeries,
  series => series.seriesDetails
);

// SERIES CREDITS SELECTOR
export const selectGettingSeriesCredits = createSelector(
  selectSeries,
  series => series.gettingSeriesCredits
);
export const selectSeriesCast = createSelector(
  selectSeries,
  series => series.seriesCredits.cast
);
export const selectSeriesCrew = createSelector(
  selectSeries,
  series => series.seriesCredits.crew
);

// SIMILAR SERIES SELECTOR
export const selectGettingSimilarSeries = createSelector(
  selectSeries,
  series => series.gettingSimilarSeries
);
export const selectSimilarSeries = createSelector(
  selectSeries,
  series => series.similarSeries
);

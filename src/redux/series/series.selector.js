import { createSelector } from "reselect";

export const selectSeries = state => state.series;

export const selectOnAirSeries = createSelector(
  selectSeries,
  series => series.onAirSeries
);
export const selectGettingOnAirSeries = createSelector(
  selectSeries,
  series => series.gettingOnAirSeries
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

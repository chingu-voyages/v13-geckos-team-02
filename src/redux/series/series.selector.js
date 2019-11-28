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

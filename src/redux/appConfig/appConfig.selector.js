import { createSelector } from "reselect";

export const selectConfigs = state => state.configs;

export const selectGettingConfigs = createSelector(
  selectConfigs,
  configs => configs.gettingConfigs
);

// EXPORT IMAGE SET PATH TO IMAGES ON API
export const selectImagePath = createSelector(selectConfigs, configs => {
  const { secure_base_url, backdrop_sizes } = configs.imageConfig;
  const imagePath = `${secure_base_url}${backdrop_sizes[3]}`;
  return imagePath;
});
// PAGINATION
export const selectCurrentPage = createSelector(
  selectConfigs,
  configs => configs.currentPage
);
export const selectPaginationRange = createSelector(
  selectConfigs,
  configs => configs.paginationRange
);

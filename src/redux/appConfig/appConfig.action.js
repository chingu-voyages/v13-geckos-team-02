import AppConfigTypes from "./appConfig.types";

// GETTING CONFIGURATIONS FOR IMAGE URL
export const getImageConfigStart = () => ({
  type: AppConfigTypes.GET_IMAGE_CONFIG_START
});
export const getImageConfigSuccess = configs => ({
  type: AppConfigTypes.GET_IMAGE_CONFIG_SUCCESS,
  payload: configs
});
export const getImageConfigFailure = error => ({
  type: AppConfigTypes.GET_IMAGE_CONFIG_FAILURE,
  payload: error
});
// GET PAGINATION
export const setPaginationStart = (currentPage, totalPage) => ({
  type: AppConfigTypes.SET_PAGINATION_START,
  payload: { currentPage, totalPage }
});
export const setPaginationSuccess = (currentPage, range) => ({
  type: AppConfigTypes.SET_PAGINATION_SUCCESS,
  payload: { currentPage, range }
});

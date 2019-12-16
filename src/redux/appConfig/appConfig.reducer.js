import AppConfigTypes from "./appConfig.types";

const INITIAL_STATE = {
  // PAGINATION
  currentPage: 1,
  paginationRange: [1, 2, 3, 4, 5],
  gettingConfigs: false,
  error: null,
  imageConfig: {
    base_url: "http://image.tmdb.org/t/p/",
    secure_base_url: "https://image.tmdb.org/t/p/",
    backdrop_sizes: ["w300", "w780", "w1280", "original"]
  }
};

const appConfigReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AppConfigTypes.GET_IMAGE_CONFIG_START:
      return {
        ...state,
        gettingConfigs: true
      };
    case AppConfigTypes.GET_IMAGE_CONFIG_SUCCESS:
      return {
        ...state,
        imageConfig: action.payload,
        gettingConfigs: false
      };
    case AppConfigTypes.GET_IMAGE_CONFIG_FAILURE:
      return {
        ...state,
        error: action.payload,
        gettingConfigs: false
      };
    // PAGGINATION
    case AppConfigTypes.SET_PAGINATION_SUCCESS:
      return {
        ...state,
        currentPage: action.payload.currentPage,
        paginationRange: action.payload.range
      };

    default:
      return state;
  }
};

export default appConfigReducer;

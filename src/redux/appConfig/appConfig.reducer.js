import AppConfigTypes from "./appConfig.types";

const INITIAL_STATE = {
  // PAGINATION
  paginationStart: 1,
  paginationStop: 5,
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
    case AppConfigTypes.SET_PAGINATION:
      if (action.payload.currentPage <= 1) {
        return {
          ...state,
          currentPage: 1
        };
      } else if (action.payload.currentPage >= action.payload.totalPage) {
        return {
          ...state,
          currentPage: action.payload.totalPage
        };
      } else {
        if (action.payload.currentPage % 5 === 0) {
          state.paginationStart = state.paginationStop;
          state.paginationStop = state.paginationStop + 5;
        }
        state.paginationRange = [];
        for (
          let i = state.paginationStart;
          i <= action.payload.totalPage;
          i++
        ) {
          state.paginationRange.push(i);
          if (i === state.paginationStop) break;
        }
        return {
          ...state,
          currentPage: action.payload.currentPage
        };
      }

    default:
      return state;
  }
};

export default appConfigReducer;

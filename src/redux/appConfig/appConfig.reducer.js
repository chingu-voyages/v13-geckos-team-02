import AppConfigTypes from "./appConfig.types";

const INITIAL_STATE = {
  gettingConfigs: false,
  error: null,
  imageConfig: null
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

    default:
      return state;
  }
};

export default appConfigReducer;

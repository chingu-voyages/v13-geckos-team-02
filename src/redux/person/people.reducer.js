import PersonTypes from "./person.types";

const INITIAL_STATE = {
  gettingPerson: false,
  personDetails: null,
  error: null,
  toggleModalWindow: false
};

const personReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PersonTypes.TOGGLE_MODAL_WINDOW:
      return {
        ...state,
        toggleModalWindow: !state.toggleModalWindow
      };
    case PersonTypes.FETCH_PERSON_DETAILS_START:
      return {
        ...state,
        gettingPerson: true
      };
    case PersonTypes.FETCH_PERSON_DETAILS_SUCCESS:
      return {
        ...state,
        personDetails: action.payload,
        gettingPerson: false,
        error: null
      };
    case PersonTypes.FETCH_PERSON_DETAILS_FAILURE:
      return {
        ...state,
        error: action.payload,
        gettingPerson: false
      };

    default:
      return state;
  }
};

export default personReducer;

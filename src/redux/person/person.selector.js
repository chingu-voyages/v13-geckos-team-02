import { createSelector } from "reselect";

export const selectPerson = state => state.person;

export const selectGettingPerson = createSelector(
  selectPerson,
  person => person.gettingPerson
);
export const selectPersonDetails = createSelector(
  selectPerson,
  person => person.personDetails
);
export const selectToggleModalWindow = createSelector(
  selectPerson,
  person => person.toggleModalWindow
);

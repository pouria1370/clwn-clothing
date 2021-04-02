import { createSelector } from "reselect";

const stateUser = (state) => state.user;

export const currentUserSelector = createSelector(
  [stateUser],
  (user) => user.currentuser
);

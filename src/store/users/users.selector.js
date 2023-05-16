import { createSelector } from "reselect";
export const selectsUsers = (state) => state.users;

export const selectUserList = createSelector(
  [selectsUsers],
  (usersSlice) => usersSlice.usersList
);

export const selectSingleUser = createSelector(
  [selectsUsers],
  (user) => user.singleUser
);

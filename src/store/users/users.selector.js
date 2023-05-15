import { createSelector } from "reselect";
export const selectsUsers = (state) => state.users;

export const selectUserList = createSelector([selectsUsers], (usersSlice) => {
  return usersSlice.usersList;
});

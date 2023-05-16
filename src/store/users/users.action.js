import { USERS_ACTION_TYPES } from "./users.type";
import { createAction } from "../../utils/reducer/reducer.utils";

export const getUsers = () => createAction(USERS_ACTION_TYPES.GET_USERS);

export const setUsers = (userList) =>
  createAction(USERS_ACTION_TYPES.SET_USERS, userList);

export const setSingleUser = (user) =>
  createAction(USERS_ACTION_TYPES.GET_SINGLE_USER, user);

export const DeleteUser = ({ user, id }) =>
  createAction(USERS_ACTION_TYPES.DELETE_USER, { user, id });

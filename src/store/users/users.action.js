import { USERS_ACTION_TYPES } from "./users.type";
import { createAction } from "../../utils/reducer/reducer.utils";

export const getUsers = () => createAction(USERS_ACTION_TYPES.GET_USERS);

export const setUsers = (userList) =>
  createAction(USERS_ACTION_TYPES.SET_USERS, userList);

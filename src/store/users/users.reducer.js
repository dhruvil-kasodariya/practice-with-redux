import { USERS_ACTION_TYPES } from "./users.type";

export const USERS_INITIAL_STATE = {
  usersList: [],
};

export const usersReducer = (state = USERS_INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case USERS_ACTION_TYPES.SET_USERS:
      return {
        ...state,
        usersList: payload,
      };
    default:
      return state;
  }
};

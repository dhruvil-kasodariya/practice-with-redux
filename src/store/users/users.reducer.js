import { USERS_ACTION_TYPES } from "./users.type";

export const USERS_INITIAL_STATE = {
  usersList: [],
  singleUser: {},
};

export const usersReducer = (state = USERS_INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case USERS_ACTION_TYPES.SET_USERS:
      return {
        ...state,
        usersList: payload,
      };
    case USERS_ACTION_TYPES.GET_SINGLE_USER:
      return {
        ...state,
        singleUser: payload,
      };
    case USERS_ACTION_TYPES.DELETE_USER:
      state.usersList.splice(payload, 1);

      return {
        ...state,
        usersList: state.usersList,
      };
    default:
      return state;
  }
};

import { combineReducers } from "redux";
import { usersReducer } from "./users/users.reducer";
export const rootReducers = combineReducers({
  users: usersReducer,
});

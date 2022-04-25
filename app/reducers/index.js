import { combineReducers } from "redux";
import { locationsReducer } from "./locationsReducer";
import { usersReducer } from "./usersReducer";

export const reducers = combineReducers({
    locations: locationsReducer,
    user: usersReducer,
});

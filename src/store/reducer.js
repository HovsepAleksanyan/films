import { combineReducers } from "redux";

import { filmsReducer } from "./films/films.reducer";
import { usersReducer } from "./users/users.reducer";

export const reducer = combineReducers({
    filmsReducer,
    usersReducer
});
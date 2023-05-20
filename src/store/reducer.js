import { combineReducers } from "redux";

import { filmsReducer } from "./films/films.reducer";
import { usersReducer } from "./users/users.reducer";
import { adminReducer } from "./admin/admin.reducer";

export const reducer = combineReducers({
    filmsReducer,
    usersReducer,
    adminReducer
});
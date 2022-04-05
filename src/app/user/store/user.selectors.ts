import { createSelector } from "@ngrx/store";
import { State } from "src/app/store";

export const selectName = createSelector(
    (state: State) => state.currentUserReducer,
    state => state.name
)

export const selectisAdmin = createSelector(
    (state: State) => state.currentUserReducer,
    state => state.isAdmin
)
import { createReducer, on } from "@ngrx/store"
import { requestCurrentUserSuccess } from "./user.actions"

export interface UserState {
    isAdmin: boolean,
    name: string
}

export const initialState: UserState = {
    isAdmin: false,
    name: ''
}

export const currentUserReducer = createReducer(
    initialState,
    on(requestCurrentUserSuccess, (state, {name, isAdmin}) => ({
        ...state,
        name: name, isAdmin: isAdmin
    }))
);


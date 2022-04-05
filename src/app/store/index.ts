import { ActionReducerMap } from "@ngrx/store";
import { getUserEffects } from "../user/store/user.effects";
import { currentUserReducer, UserState } from "../user/store/user.reducer";

export interface State {
    currentUserReducer: UserState
}

export const reducers: ActionReducerMap<State> = { currentUserReducer };

export const effects: any = [getUserEffects];
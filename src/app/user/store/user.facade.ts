import { Injectable } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { State } from "src/app/store";
import { requestCurrentUser } from "./user.actions";
import { selectisAdmin, selectName } from "./user.selectors";

@Injectable()
export class UserStateFacade {
    name$ = this.store.pipe(select(selectName));
    isAdmin$ = this.store.pipe(select(selectisAdmin));

    constructor(private store: Store<State>) {}

    getCurrentUser() {
        this.store.dispatch(requestCurrentUser());
    }
}
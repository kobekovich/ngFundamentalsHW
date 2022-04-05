import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, map, switchMap } from "rxjs/operators";
import { UserService } from "../services/user.service";
import { requestCurrentUser, requestCurrentUserFail, requestCurrentUserSuccess } from "./user.actions";

@Injectable()
export class getUserEffects {
    constructor(
        private actions: Actions,
        private userService: UserService
    ){ }

    getCurrentUser$ = createEffect(() => 
        this.actions
            .pipe(
                ofType(requestCurrentUser),
                switchMap(
                    () => this.userService.getUser().pipe(
                        map((data) => requestCurrentUserSuccess({name: data.result.name, isAdmin: data.result.role === "admin"}),
                        catchError(() => of(requestCurrentUserFail()))
                    )
                )
            )                
        )
    )
}
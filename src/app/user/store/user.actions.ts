import { createAction, props } from "@ngrx/store";

export const requestCurrentUser = createAction(
    '[Courses Page] Request User'
);

export const requestCurrentUserSuccess = createAction(
    '[Courses Page] Success responce',
    props<{name: string, isAdmin: boolean}>()
);

export const requestCurrentUserFail = createAction(
    '[Courses Page] Fail responce'
);

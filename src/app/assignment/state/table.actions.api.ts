import { createAction, props } from "@ngrx/store";
import { FakeData } from "src/app/fakeData";

export const loadAPI = createAction(
    '[Table API] Load',
);

export const successAPI = createAction(
    '[Table API] Success', 
    props<{fakeData: FakeData[]}>()
);

export const failureAPI = createAction('[Table API] Failure');

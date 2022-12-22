import { createFeatureSelector, createSelector } from "@ngrx/store";
import { FakeData } from "src/app/fakeData";

/* export interface AppState {
    feature: TableState
} */

export const getFakeDataState = createFeatureSelector<TableState>('table')

export interface TableState {
    fakeData: FakeData[];
}

export const getFakeData = createSelector(
    getFakeDataState,
    (state: TableState) => state.fakeData
);
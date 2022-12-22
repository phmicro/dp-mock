import { createFeatureSelector, createSelector } from "@ngrx/store";

export interface CounterState {
    counter: number
}

export const getCounterState = createFeatureSelector('counter')
/* 
export const getCounter = createSelector(
    getCounterState,
    (state) => state.fakeData
); */
import { createReducer, on } from "@ngrx/store";
import { FAKE_DATA } from "src/app/fakeData";
import { ApiActions, ComponentActions } from './index';
import { TableState } from "./table.selector";

export const initialState: TableState = {fakeData: FAKE_DATA}

const emptyState: TableState = {fakeData: []}



export const tableReducer = createReducer<TableState>(
    initialState,
    on(ComponentActions.restoreTable, (state) => initialState),
    on(ComponentActions.resetTable, (state) => emptyState),
    on(ApiActions.successAPI, (state, action): TableState => {
        console.log("reducer",state, action);
        return {       
          ...state,
          fakeData: action.fakeData
        };
      })
  );
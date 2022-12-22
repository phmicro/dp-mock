import { createAction, props } from "@ngrx/store";
import { FakeData } from "src/app/fakeData";


export const resetTable = createAction('[Table Component] Reset');

export const restoreTable = createAction('[Table Component] Restore');

export const createEntry = createAction(
    '[Table Component] Create Entry',
    props<{ fakeData: FakeData }>()
  );
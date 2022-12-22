import { TableState } from "./assignment/state/table.selector";
import { CounterState } from "./state/counter.selector";

export interface AppState {
    feature: TableState,
    counter: CounterState
}
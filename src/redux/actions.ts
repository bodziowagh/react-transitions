import { ExampleActionTypes } from "./example/actions";

type ActionTypes = ExampleActionTypes;

export interface Action<T> {
    type: ActionTypes;
    payload: T;
}

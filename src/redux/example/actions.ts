import { Action } from "../actions";

export const SET_EXAMPLE_ACTION = "SET_EXAMPLE_ACTION";

type SetExampleActionPayload = string;

export function exampleAction(payload: SetExampleActionPayload): Action<SetExampleActionPayload> {
    return {
        type: SET_EXAMPLE_ACTION,
        payload
    };
};

export type ExamplePayload = SetExampleActionPayload;

export type ExampleActionTypes = typeof SET_EXAMPLE_ACTION;

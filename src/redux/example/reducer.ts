import { Action } from "../actions";
import { ExamplePayload, SET_EXAMPLE_ACTION } from "./actions";
import { LOCALE_LABELS } from "../../locale/labels/index";

export interface ExampleStateShape {
    exampleText: string;
}

const initialState = {
    exampleText: LOCALE_LABELS.EXAMPLE_LABEL
};

export function reducer(state: ExampleStateShape = initialState, action: Action<ExamplePayload>): ExampleStateShape {
    switch (action.type) {

    case SET_EXAMPLE_ACTION:
        return {
            ...state,
            exampleText: action.payload
        }
    }

    return state;
}

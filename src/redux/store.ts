import { combineReducers, createStore } from "redux";
import { ExampleStateShape, reducer as example } from "./example/reducer";
import { intlReducer } from "react-intl-redux";
import { getInitialLocale } from "../locale/index";

export type StateShape = {
    example: ExampleStateShape
};

const initialState = {
    intl: getInitialLocale()
};

const reducers = combineReducers({
    example,
    intl: intlReducer
});

export const store = createStore(reducers, initialState);

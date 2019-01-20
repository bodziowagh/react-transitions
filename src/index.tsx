import * as React from "react";
import * as ReactDOM from "react-dom";
import { addLocaleData } from "react-intl";
import { IntlProvider } from "react-intl-redux";

import "./styles/main.scss";

import { App } from "./script/App";
import { locales } from "./locale/index";
import { Provider } from "react-redux";
import { store } from "./redux/store";

addLocaleData(locales);

ReactDOM.render(
    <Provider store={ store }>
        <IntlProvider>
            <App />
        </IntlProvider>
    </Provider>,
    document.getElementById("app")
);

import * as React from "react";
import { ReactNode } from "react";
import { getInitialLocale, Locale } from "../../src/locale";
import { IntlProvider, intlShape } from "react-intl";
import { render } from "enzyme";

const defaultLocale = getInitialLocale();

export function renderWithIntl(node: any, locale: Locale = defaultLocale) {
    const intlProvider = new IntlProvider(locale, {});
    const { intl } = intlProvider.getChildContext();

    return render(React.cloneElement(node, { intl }), {
        context: { intl },
        childContextTypes: { intl: intlShape }
    });
}

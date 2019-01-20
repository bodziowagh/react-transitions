import * as React from "react";
import { Example } from "../../src/script/components/example";
import { renderWithIntl } from "../utils/intl";
import { LOCALE_LABELS } from "../../src/locale/labels";

describe("Example", () => {

    it("should render correctly with default props", () => {
		const component = renderWithIntl(<Example />);

		expect(component).toMatchSnapshot();
	});

    it("should render correctly with default props", () => {
        const component = renderWithIntl(<Example  exampleTextId={ LOCALE_LABELS.ANOTHER_EXAMPLE_LABEL } />);

        expect(component).toMatchSnapshot();
    });

});

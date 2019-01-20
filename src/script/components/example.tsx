import * as React from "react";
import { Component } from "react";
import { FormattedMessage } from "react-intl";
import { LOCALE_LABELS } from "../../locale/labels/index";

interface ExampleProps {
    exampleTextId?: string;
}

export class Example extends Component<ExampleProps> {

    render() {
        const {
            exampleTextId = LOCALE_LABELS.EXAMPLE_LABEL
        } = this.props;

        return (
            <div>
                <FormattedMessage id={ exampleTextId } />
            </div>
        )
    }
}

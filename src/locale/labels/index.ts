import * as EXAMPLE_LABELS from "./example";

export type ExampleLabels = typeof EXAMPLE_LABELS;

export type LocaleLabels = ExampleLabels;

export const LOCALE_LABELS = {
    ...EXAMPLE_LABELS
};

import { LABELS as en } from "./en/index";

export interface Locale {
    locale: string;
    messages: any;
}

export enum SupportedLocales {
    EN = "en"
};

export const locales: Locale[] = [{
    locale: SupportedLocales.EN,
    messages: en
}];

export function getInitialLocale() {
    return locales.find((lang: Locale) => lang.locale === SupportedLocales.EN);
}

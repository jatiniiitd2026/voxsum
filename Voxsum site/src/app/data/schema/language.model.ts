export class LanguageRequest {
    language: string;

    constructor(language: string) {
        this.language = language;
    }

}

export interface LanguageSwitch {
    language: string;
}

export interface SwitchResult {
    message: string;
}

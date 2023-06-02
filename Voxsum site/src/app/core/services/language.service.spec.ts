import {TestBed} from '@angular/core/testing';

import {LanguageService} from './language.service';
import {AppTestingConstants} from "@core/constants/app-testing-constants";

describe('LanguageService', () => {
    let service: LanguageService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [AppTestingConstants.TestBedConfigurationImports],
            providers: [AppTestingConstants.TestBedConfigurationProviders]
        });
        service = TestBed.inject(LanguageService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});

import {TestBed} from '@angular/core/testing';

import {StorageService} from './storage.service';
import {AppTestingConstants} from "@core/constants/app-testing-constants";

describe('StorageService', () => {
    let service: StorageService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [AppTestingConstants.TestBedConfigurationProviders],
            imports: [AppTestingConstants.TestBedConfigurationImports]
        });
        service = TestBed.inject(StorageService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});

import { TestBed } from '@angular/core/testing';
import { EarnRedeemService } from './earn-redeem.service';
import {AppTestingConstants} from "@core/constants/app-testing-constants";

describe('EarnRedeemService', () => {
  let service: EarnRedeemService;

  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [AppTestingConstants.TestBedConfigurationImports],
        providers: [AppTestingConstants.TestBedConfigurationProviders]
    });
    service = TestBed.inject(EarnRedeemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';
import { SpinwinGuard } from './spinwin.guard';
import {AppTestingConstants} from "@core/constants/app-testing-constants";

describe('SpinwinGuard', () => {
  let guard: SpinwinGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [AppTestingConstants.TestBedConfigurationImports],
        providers: [AppTestingConstants.TestBedConfigurationProviders]
    });
    guard = TestBed.inject(SpinwinGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

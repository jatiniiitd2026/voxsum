import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinwinComponent } from './spinwin.component';
import {AppTestingConstants} from "@core/constants/app-testing-constants";

describe('SpinwinComponent', () => {
  let component: SpinwinComponent;
  let fixture: ComponentFixture<SpinwinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule(
        {
            imports: [AppTestingConstants.TestBedConfigurationImports],
            providers: [AppTestingConstants.TestBedConfigurationProviders],
            declarations: [ SpinwinComponent ]
        }
    )
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpinwinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

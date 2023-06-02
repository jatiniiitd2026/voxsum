import {ComponentFixture, TestBed} from '@angular/core/testing';
import {RegistrationComponent} from './registration.component';
import {AppTestingConstants} from "@core/constants/app-testing-constants";
import {DataService} from "@data/services/data.service";
import {LoggedService} from "@data/services/logged.service";
import {StorageService} from "@core/services/storage.service";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";
import {RECAPTCHA_SETTINGS, RecaptchaSettings} from "ng-recaptcha";
import {AppConstants} from "@core/constants/app-constants";
import {RegistrationAPIResponseModel} from "@data/schema/register.model";
import {of, throwError} from "rxjs";


describe('RegistrationComponent', () => {
    let component: RegistrationComponent;
    let fixture: ComponentFixture<RegistrationComponent>;
    let dataService: DataService;
    let loggedService: LoggedService;
    let storageService: StorageService;
    let toast: ToastrService;
    let router: Router;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                AppTestingConstants.TestBedConfigurationImports
            ],
            declarations: [RegistrationComponent],
            providers: [AppTestingConstants.TestBedConfigurationProviders,
                {
                    provide: RECAPTCHA_SETTINGS,
                    useValue: {
                        siteKey: AppConstants.recaptchaSiteKey,
                    } as RecaptchaSettings,
                }
            ]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(RegistrationComponent);
        component = fixture.componentInstance;
        dataService = TestBed.inject(DataService);
        loggedService = TestBed.inject(LoggedService);
        storageService = TestBed.inject(StorageService);
        toast = TestBed.inject(ToastrService);
        router = TestBed.inject(Router);
        fixture.detectChanges();
    });

    afterAll(() => {
        TestBed.resetTestingModule();
    });

    /** test-case for registration form */
    it('Registration form must be defined', () => {
        expect(component.registrationForm).toBeDefined();
        expect(component.registrationForm.controls).toBeDefined();
    });

    /** test-case for firstname field */
    it('[firstName field-Checks]', () => {
        let firstName = component.registrationForm.controls['firstName'];
        expect(firstName.valid).toBeFalsy();

        /** required testcase for firstname */
        firstName.setValue(' ');
        expect(firstName.errors?.required).toBeFalsy();
        expect(firstName.errors?.pattern).toBeTruthy();

        /**Correct firstname testcase */
        firstName.setValue('Tester');
        expect(firstName.errors?.required).toBeFalsy();
        expect(firstName.errors?.pattern).toBeFalsy();
    });

    /** test-case for lastname field */
    it('[lastName field-Checks]', () => {
        let lastName = component.registrationForm.controls['lastName'];
        expect(lastName.valid).toBeFalsy();

        /** required testcase for lastname */
        lastName.setValue(' ');
        expect(lastName.errors?.required).toBeFalsy();
        expect(lastName.errors?.pattern).toBeTruthy();

        /** Correct lastname testcase */
        lastName.setValue('Tester');
        expect(lastName.errors?.required).toBeFalsy();
        expect(lastName.errors?.pattern).toBeFalsy();
    });

    /** test-case for phoneno field */
    it('[phoneNo field-Checks]', () => {
        let phoneNo = component.registrationForm.controls['phoneNo'];
        expect(phoneNo.valid).toBeFalsy();

        /** Required testcase for phoneNo */
        expect(phoneNo.errors?.required).toBeTruthy();

        /** testcase for wrong phoneNo entered*/
        phoneNo.setValue('AB123456');
        expect(phoneNo.errors?.required).toBeFalsy();
        expect(phoneNo.errors?.pattern).toBeTruthy();

        /** testcase for correct phoneNo entered*/
        phoneNo.setValue('1234569857');
        expect(phoneNo.errors?.required).toBeFalsy();
        expect(phoneNo.errors?.pattern).toBeFalsy();
    });

    /** test-case for purchasefrom field */
    it('[purchaseFrom field-Checks]', () => {
        let purchaseFrom = component.registrationForm.controls['purchaseFrom'];
        expect(purchaseFrom.valid).toBeFalsy();

        /** testcase for required purchaseFrom  */
        expect(purchaseFrom.errors?.required).toBeTruthy();

        /** testcase for selected purchaseFrom */
        purchaseFrom.setValue('walmart');
        expect(purchaseFrom.errors?.required).toBeFalsy();
    });

    /** test-case for promotionfrom field */
    it('[promotionFrom field-Checks]', () => {
        let promotionFrom = component.registrationForm.controls['promotionFrom'];
        expect(promotionFrom.valid).toBeFalsy();

        /** testcase for required promotionFrom */
        expect(promotionFrom.errors?.required).toBeTruthy();

        /** testcase for selected promotion  */
        promotionFrom.setValue('others');
        expect(promotionFrom.errors?.required).toBeFalsy();
    });

    /** test-case for OnSubmit button - pass*/
    it('should return success message on form submission', () => {
        const mockSuccessResponse: RegistrationAPIResponseModel = {
            created: "true",
            firstName: "Tester",
            lastName: "Tester",
            email: "tester@gmail.com",
            phone: "tester@gmail.com",
            purchaseFrom: "walmart",
            id: 1,
            suspended: true,
            promotionFrom: "Social Media",
        };
        component.registrationForm.controls['firstName'].setValue('Tester');
        component.registrationForm.controls['lastName'].setValue('Tester');
        component.registrationForm.controls.emails.setValue({
            email: "test@test.com",
            confirmEmail: "test@test.com"
        });
        component.registrationForm.controls['phoneNo'].setValue("1234567890");
        component.registrationForm.controls['purchaseFrom'].setValue("walmart");
        component.registrationForm.controls['isAgree'].setValue(true);
        component.registrationForm.controls['recaptcha'].setValue(true);
        component.registrationForm.controls['promotionFrom'].setValue("Social Media");

        spyOn(dataService, 'registerUser').and.returnValue(of(mockSuccessResponse));
        spyOn(toast, 'success');
        spyOn(router, 'navigate');
        component.onSubmit();
        expect(router.navigate).toHaveBeenCalled();

    });

    /** test-case for OnSubmit button - fail*/
    it('should return error message on form submission', () => {
        const mockErrorResponse = {
            message: 'Failed to submit your request!'
        }
        component.registrationForm.controls.emails.setValue({
            email: "test@test.com",
            confirmEmail: "test@test.com"
        });
        component.registrationForm.controls['firstName'].setValue('Tester');
        component.registrationForm.controls['lastName'].setValue('Tester');
        component.registrationForm.controls['purchaseFrom'].setValue("walmart");
        component.registrationForm.controls['isAgree'].setValue(true);
        component.registrationForm.controls['recaptcha'].setValue(true);
        component.registrationForm.controls['phoneNo'].setValue("1234567890");
        component.registrationForm.controls['promotionFrom'].setValue("Social Media");
        spyOn(dataService, 'registerUser').and.returnValue(throwError(mockErrorResponse));
        spyOn(toast, 'error');
        component.onSubmit();
        expect(toast.error).toHaveBeenCalledWith(AppTestingConstants.errorMessage);
    });

})

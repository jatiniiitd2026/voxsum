import {ComponentFixture, TestBed} from '@angular/core/testing';
import {LoginComponent} from './login.component';
import {AppTestingConstants} from "@core/constants/app-testing-constants";

declare const AOS: any;
import {UserProfileDetails} from "@modules/login/login";
import {DataService} from "@data/services/data.service";
import {of, throwError} from "rxjs";
import {LoggedService} from "@data/services/logged.service";
import {StorageService} from "@core/services/storage.service";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";

describe('RegistrationComponent', () => {
    let component: LoginComponent;
    let fixture: ComponentFixture<LoginComponent>;
    let dataService: DataService;
    let loggedService: LoggedService;
    let storageService: StorageService;
    let toast: ToastrService;
    let router: Router;
    const mockSuccessResponse: UserProfileDetails = {
        address: 'Test Address',
        city: 'Test city',
        created: 'Test created',
        email: 'Test@gmail.com',
        firstName: 'firstname',
        id: 123,
        lastName: 'lastname',
        optIn: false,
        password: 'Tester@123',
        state: 'Uttar Pradesh',
        suspended: false,
        zipcode: 'X1Z1E1',
    };

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                AppTestingConstants.TestBedConfigurationImports,
            ],
            declarations: [LoginComponent],
            providers: [ AppTestingConstants.TestBedConfigurationProviders ]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(LoginComponent);
        component = fixture.componentInstance;
        dataService = TestBed.inject(DataService);
        loggedService = TestBed.inject(LoggedService);
        storageService = TestBed.inject(StorageService);
        toast = TestBed.inject(ToastrService);
        router = TestBed.inject(Router);
        fixture.detectChanges();
    });

    // Component Creation ===>TEST 1<====
    it('should create login component', () => {
        expect(component).toBeTruthy();
    });

    //From empty test case
    it('form invalid when empty', () => {
        expect(component.loginForm.valid).toBeFalsy();
    });

    //Form Validity testcase
    it('email field validity', () => {
        let email = component.loginForm.controls['email'];
        expect(email.valid).toBeFalsy();

        // Email field is required
        expect(email.errors?.required).toBeTruthy();

        // Set email to something
        email.setValue("test");
        expect(email.errors?.required).toBeFalsy();
        expect(email.errors?.pattern).toBeTruthy();

        // Set email to something correct
        email.setValue("test@example.com");
        expect(email.errors?.required).toBeFalsy();
        expect(email.errors?.pattern).toBeFalsy();
    });

    // onSubmit() Workflow testcase
    it('onSubmit() is success', () =>{
        component.loginForm.controls['email'].setValue('bobinsingla@yahoo.com');
        // console.log('This is login form in spec',component.loginForm.invalid)
        spyOn(dataService, 'login').and.returnValue(of(mockSuccessResponse));
        spyOn(component, "updateLoginDetails");
        component.onSubmit();
        expect(component.loginResponse)
            .toEqual(mockSuccessResponse);
    });

    // OnSubmit() api call fails testcases
    it('should return error message on form submission', () => {
        component.loginForm.controls.email.setValue('bobinsingla@yahoo.com');
        spyOn(dataService, 'login').and.returnValue(throwError(AppTestingConstants.errorMessage));
        spyOn(toast, 'error');
        component.onSubmit();
        expect(toast.error).toHaveBeenCalledWith(AppTestingConstants.errorMessage);
    });

    // updateLoginDetails() workflow testcase
    it('updateLoginDetails() is success', () => {
        const navigateSpy = spyOn(router, 'navigate');
        spyOn(storageService, 'setItemToSessionStorage');
        spyOn(loggedService, 'isLoggedInValue');
        component.updateLoginDetails();
        expect(navigateSpy).toHaveBeenCalledWith(<any>['/upload-receipt']);
    });

});

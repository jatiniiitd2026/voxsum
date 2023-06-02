import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {StorageService} from "@core/services/storage.service";
import {AppConstants} from "@core/constants/app-constants";

@Component({
    selector: 'app-site-access',
    templateUrl: './site-access.component.html',
    styleUrls: ['./site-access.component.scss']
})

export class SiteAccessComponent implements OnInit {
    hide: boolean = true;
    formInvalid: boolean = false;
    accessForm: FormGroup = this.formBuilder.group({
        userName: ['', Validators.compose([Validators.required, Validators.pattern(AppConstants.username)])],
        password: ['', Validators.compose([Validators.required, Validators.pattern(AppConstants.password)])]
    })

    constructor(
        public dialogRef: MatDialogRef<SiteAccessComponent>,
        private formBuilder: FormBuilder,
        private storageService: StorageService) {
    }

    ngOnInit(): void {
    }

    onSubmit() {
        if (this.accessForm.invalid) {
            this.formInvalid = true;
            return;
        }
        this.storageService.setItem('siteAccess', 'true');
        this.dialogRef.close();
    }

    toggle(e: Event) {
        e.preventDefault();
        this.hide = !this.hide
    }
}

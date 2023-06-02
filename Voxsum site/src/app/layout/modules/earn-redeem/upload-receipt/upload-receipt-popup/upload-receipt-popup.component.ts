import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Router} from "@angular/router";

@Component({
    selector: 'app-upload-receipt-popup',
    templateUrl: './upload-receipt-popup.component.html',
    styleUrls: ['./upload-receipt-popup.component.scss']
})
export class UploadReceiptPopupComponent implements OnInit {
    message!: string;

    constructor(public dialogRef: MatDialogRef<UploadReceiptPopupComponent>,
                @Inject(MAT_DIALOG_DATA) public data,
                private router: Router) {
    }

    ngOnInit(): void {
        this.message = this.data;
    }

    redirectToHome(){
        this.dialogRef.close();
        this.router.navigate(['/home'])
    }

}

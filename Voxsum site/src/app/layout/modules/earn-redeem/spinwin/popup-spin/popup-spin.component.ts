import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Router} from "@angular/router";

@Component({
    selector: 'app-popup-spin',
    templateUrl: './popup-spin.component.html',
    styleUrls: ['./popup-spin.component.scss']
})
export class PopupSpinComponent implements OnInit {
    message!: string;

    constructor(public dialogRef: MatDialogRef<PopupSpinComponent>,
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

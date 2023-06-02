import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UploadReceiptRoutingModule} from './upload-receipt-routing.module';
import {UploadReceiptComponent} from './upload-receipt.component';
import {CoreModule} from "@core/core.module";
import { UploadReceiptPopupComponent } from './upload-receipt-popup/upload-receipt-popup.component';
import {MaterialModule} from "@core/material/material.module";


@NgModule({
    declarations: [
        UploadReceiptComponent,
        UploadReceiptPopupComponent
    ],
    imports: [
        CommonModule,
        MaterialModule,
        UploadReceiptRoutingModule,
        CoreModule
    ]
})
export class UploadReceiptModule {
}

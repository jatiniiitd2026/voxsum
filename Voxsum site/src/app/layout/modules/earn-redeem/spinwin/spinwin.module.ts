import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinwinRoutingModule } from './spinwin-routing.module';
import { SpinwinComponent } from './spinwin.component';
import {MaterialModule} from "@core/material/material.module";
import { PopupSpinComponent } from './popup-spin/popup-spin.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";


@NgModule({
    declarations: [
        SpinwinComponent,
        PopupSpinComponent
    ],
    imports: [
        CommonModule,
        MaterialModule,
        MatProgressSpinnerModule,
        SpinwinRoutingModule,
    ]
})
export class SpinwinModule { }

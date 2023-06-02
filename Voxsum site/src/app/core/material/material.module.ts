import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatFormFieldModule} from "@angular/material/form-field";
import {ReactiveFormsModule} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import {MatSelectModule} from "@angular/material/select";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatInputModule} from "@angular/material/input";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {TextFieldModule} from "@angular/cdk/text-field";
import {MatTabsModule} from "@angular/material/tabs";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatTableModule} from "@angular/material/table";
import {MatDialogModule} from "@angular/material/dialog";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatButtonModule} from "@angular/material/button";
import {MatTooltipModule} from "@angular/material/tooltip";


@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        MatIconModule,
        MatSelectModule,
        MatInputModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
        MatCheckboxModule,
        TextFieldModule,
        MatTabsModule,
        MatPaginatorModule,
        MatTableModule,
        MatDialogModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatExpansionModule,
        MatButtonModule,
        MatTooltipModule
    ],
    exports: [
        MatFormFieldModule,
        ReactiveFormsModule,
        MatIconModule,
        MatSelectModule,
        MatInputModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
        MatCheckboxModule,
        TextFieldModule,
        MatTabsModule,
        MatPaginatorModule,
        MatTableModule,
        MatDialogModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatExpansionModule,
        MatButtonModule
    ]
})
export class MaterialModule {
}

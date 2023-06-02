import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UploadReceiptComponent} from './upload-receipt.component';

const routes: Routes = [
    {
        path: '',
        component: UploadReceiptComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UploadReceiptRoutingModule {
}

import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ContentContainerComponent} from "@layout/content-container/content-container.component";

const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: '',
        component: ContentContainerComponent,
        loadChildren: () => import('@layout/layout.module').then(m => m.LayoutModule)
    },
    {
        path: '**',
        redirectTo: '/home',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}

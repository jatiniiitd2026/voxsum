import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpinwinComponent } from './spinwin.component';

const routes: Routes = [{ path: '', component: SpinwinComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpinwinRoutingModule { }

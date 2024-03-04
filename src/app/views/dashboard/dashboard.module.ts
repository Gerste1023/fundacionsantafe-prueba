import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { MaterialModule } from 'src/app/shared/material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    SharedModule,
    MaterialModule,
    RouterModule.forChild([{ path: '', component: DashboardComponent }]),
  ],
  exports: [DashboardComponent],
})
export class DashboardModule { }

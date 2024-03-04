import { NgModule } from '@angular/core';
import { CustomerComponent } from './customer.component';
import { MaterialModule } from 'src/app/shared/material.module';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    CustomerComponent
  ],
  imports: [SharedModule, MaterialModule],
  exports: [CustomerComponent],
})
export class CustomerModule { }

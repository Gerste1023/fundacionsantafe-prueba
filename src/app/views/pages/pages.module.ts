import { NgModule } from '@angular/core';
import { MaterialModule } from 'src/app/shared/material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';

@NgModule({
  declarations: [LoginComponent, NotfoundComponent],
  imports: [SharedModule, MaterialModule],
  exports: [LoginComponent, NotfoundComponent],
})
export class PagesModule {}

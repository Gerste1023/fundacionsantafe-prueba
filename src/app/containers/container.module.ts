import { NgModule } from '@angular/core';
import { MaterialModule } from '../shared/material.module';
import { SharedModule } from '../shared/shared.module';

import { DefaultFooterComponent } from './default-layout/default-footer/default-footer.component';
import { DefaultHeaderComponent } from './default-layout/default-header/default-header.component';
import { DefaultLayoutComponent } from './default-layout/default-layout.component';
import { DefaultSidebarComponent } from './default-layout/default-sidebar/default-sidebar.component';

@NgModule({
  declarations: [
    DefaultFooterComponent,
    DefaultHeaderComponent,
    DefaultLayoutComponent,
    DefaultSidebarComponent,
  ],
  imports: [MaterialModule, SharedModule],
  exports: [
    DefaultFooterComponent,
    DefaultHeaderComponent,
    DefaultLayoutComponent,
  ],
})
export class ContainerModule { }

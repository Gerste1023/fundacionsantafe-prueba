import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { PagesModule } from './views/pages/pages.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { DatePipe } from '@angular/common';
import { MaterialModule } from './shared/material.module';
import { Interceptor } from './interceptor.http';
import { ModalProductComponent } from './views/modals/modal-product/modal-product.component';
import { ContainerModule } from './containers/container.module';


@NgModule({
  declarations: [AppComponent, ModalProductComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    ContainerModule,
    PagesModule,
    CoreModule,
    SharedModule,
    HttpClientModule,
    MaterialModule,
    Interceptor
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule { }

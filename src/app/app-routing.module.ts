import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultLayoutComponent } from './containers/default-layout/default-layout.component';
import { LoginGuard } from './guards/login.guard';
import { LoginComponent } from './views/pages/login/login.component';
import { NotfoundComponent } from './views/pages/notfound/notfound.component';
import { CustomerComponent } from './views/customer/customer.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    //canActivate: [LoginGuard],
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./views/dashboard/dashboard.module').then(
            (m) => m.DashboardModule
          ),
      },
    ],
  },
  {
    path: '',
    component: CustomerComponent,
    //canActivate: [LoginGuard],
    children: [
      {
        path: 'clientes',
        loadChildren: () =>
          import('./views/customer/customer.module').then(
            (m) => m.CustomerModule
          ),
      },
    ],
  },
  {
    path: '**',
    component: NotfoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

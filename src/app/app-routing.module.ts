import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from '../app/layouts/default/default.component';
import { AuthGuard } from '../app/guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    loadChildren: () => import('../app/pages/login/login.module').then(m => m.LoginModule)
  },
  {
    path: '',
    component: DefaultComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('../app/pages/dashboard/dashboard.module').then(m => m.DashboardModule), canActivate: [AuthGuard]
      },
      {
        path: 'crud',
        loadChildren: () => import('../app/pages/crud/crud.module').then(m => m.CrudModule),
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

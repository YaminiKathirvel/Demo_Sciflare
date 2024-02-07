import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from '../app/layouts/default/default.component';
import { FullwidthComponent } from '../app/layouts/fullwidth/fullwidth.component';
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
    children: [{
      path: 'crud',
      loadChildren: () => import('../app/pages/crud/crud.module').then(m => m.CrudModule),
    },
    {
      path: 'dashboard',
      loadChildren: () => import('../app/pages/dashboard/dashboard.module').then(m => m.DashboardModule), canActivate: [AuthGuard] 
    }
  ],
  
    
    
    
    
    
  },
  
 
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

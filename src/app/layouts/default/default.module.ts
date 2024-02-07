import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DefaultRoutingModule } from './default-routing.module';
import { DefaultComponent } from './default.component';
import { CrudComponent } from '../../pages/crud/crud.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SidebarComponent } from '../../pages/sidebar/sidebar.component';
import { navbarComponent } from '../../pages/navbar/navbar.component';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';




@NgModule({
  declarations: [
    DefaultComponent,
    CrudComponent,
    SidebarComponent,
    navbarComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DefaultRoutingModule,
    ReactiveFormsModule,
    FormsModule


  ]
})
export class DefaultModule { }

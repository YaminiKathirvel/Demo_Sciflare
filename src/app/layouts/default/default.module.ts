import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DefaultRoutingModule } from './default-routing.module';
import { DefaultComponent } from './default.component';
import { CrudComponent } from '../../pages/crud/crud.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SidebarComponent } from '../../pages/sidebar/sidebar.component';
import { navbarComponent } from '../../pages/navbar/navbar.component';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { LoaderComponent } from '../../pages/loader/loader.component';
import { SharedModule } from '../../shared/shared.module';




@NgModule({
  declarations: [
    DefaultComponent,
    CrudComponent,
    SidebarComponent,
    navbarComponent,
    DashboardComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    DefaultRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule


  ]
})
export class DefaultModule { }

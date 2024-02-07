import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FullwidthRoutingModule } from './fullwidth-routing.module';
import { FullwidthComponent } from '../fullwidth/fullwidth.component';
import { ReactiveFormsModule , FormsModule} from '@angular/forms';
import { LoginComponent } from '../../pages/login/login.component';


@NgModule({
  declarations: [
    FullwidthComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    FullwidthRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class FullwidthModule { }

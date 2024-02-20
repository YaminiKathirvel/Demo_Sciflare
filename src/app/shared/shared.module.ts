import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnlyNumericDirective } from './constants/onlynumeric.directive';
import { OnlyAlphabeticDirective } from './constants/onlyalphabetic.directive';



@NgModule({
  declarations: [
    OnlyNumericDirective,
    OnlyAlphabeticDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    OnlyNumericDirective,
    OnlyAlphabeticDirective
  ]
})
export class SharedModule { }

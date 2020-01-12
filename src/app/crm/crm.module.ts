import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './customer/customer.component';
import { LogInComponent } from './log-in/log-in.component';



@NgModule({
  declarations: [CustomerComponent, LogInComponent],
  imports: [
    CommonModule
  ]
})
export class CRMModule { }

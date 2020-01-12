import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorComponent } from './error/error.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { TopMenuComponent } from './top-menu/top-menu.component';



@NgModule({
  declarations: [ErrorComponent, SideMenuComponent, TopMenuComponent],
  imports: [
    CommonModule
  ]
})
export class UiModule { }

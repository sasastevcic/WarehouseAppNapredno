import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  imports: [
    RouterModule
  ],
  declarations: [
    NavbarComponent,
    HomeComponent,
    AboutComponent
  ],
  exports: [
    NavbarComponent
  ]
})
export class CoreModule { }

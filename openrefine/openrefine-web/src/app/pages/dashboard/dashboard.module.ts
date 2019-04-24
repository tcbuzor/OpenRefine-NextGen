import { NgModule } from '@angular/core';


import { ThemeModule } from '../../@theme/theme.module';
import { DashboardComponent } from './dashboard.component';
import { LandingComponent } from './landing/landing.component';


@NgModule({
  imports: [
    ThemeModule,
   
  ],
  declarations: [
    DashboardComponent,
    LandingComponent
  ],
})
export class DashboardModule { }

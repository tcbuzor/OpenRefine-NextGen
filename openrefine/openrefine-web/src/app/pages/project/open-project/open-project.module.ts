import { NgModule } from '@angular/core';

import { ThemeModule } from '../../../@theme/theme.module';


// components
import { OpenProjectComponent } from './open-project.component';

const COMPONENTS = [
  OpenProjectComponent,


];

const SERVICES = [
  
];

const MODULES = [
  ThemeModule,
 
];

@NgModule({
  imports: [
    ...MODULES,
  ],
  declarations: [
    ...COMPONENTS,
  ],
  providers: [
    ...SERVICES,
  ],
})
export class OpenProjectModule { }

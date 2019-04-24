import { NgModule } from '@angular/core';

import { ThemeModule } from '../../../@theme/theme.module';


// components
import { ImportProjectComponent } from './import-project.component';

const COMPONENTS = [
  ImportProjectComponent,


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
export class ImportProjectModule { }

import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { ProjectRoutingModule } from './project-routing.module';

// components
import { ProjectComponent } from './project.component';
import { ProjectFromClipboardComponent } from './project-from-clipboard/project-from-clipboard.component';
import { ProjectFromDatabaseComponent } from './project-from-database/project-from-database.component';
import { ProjectFromGDataComponent } from './project-from-gdata/project-from-gdata.component';
import { ProjectFromLocalComponent } from './project-from-local/project-from-local.component';
import { ProjectFromUrlComponent } from './project-from-url/project-from-url.component';
import { OpenProjectComponent } from './open-project/open-project.component';
import { ImportProjectComponent } from './import-project/import-project.component';


const COMPONENTS = [
    ProjectComponent,
    ProjectFromClipboardComponent,
    ProjectFromDatabaseComponent,
    ProjectFromGDataComponent,
    ProjectFromLocalComponent,
    ProjectFromUrlComponent,
    OpenProjectComponent,
    ImportProjectComponent

];

const SERVICES = [
  
];

const MODULES = [
  ThemeModule,
  ProjectRoutingModule,

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
export class ProjectModule { }

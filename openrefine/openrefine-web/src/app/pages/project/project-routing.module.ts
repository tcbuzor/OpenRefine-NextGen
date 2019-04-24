import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectComponent } from './project.component';
import { ProjectFromLocalComponent } from './project-from-local/project-from-local.component';
import { ProjectFromUrlComponent } from './project-from-url/project-from-url.component';
import { ProjectFromClipboardComponent } from './project-from-clipboard/project-from-clipboard.component';
import { ProjectFromDatabaseComponent } from './project-from-database/project-from-database.component';
import { ProjectFromGDataComponent } from './project-from-gdata/project-from-gdata.component';
import { OpenProjectComponent } from './open-project/open-project.component';
import { ImportProjectComponent } from './import-project/import-project.component';


const routes: Routes = [{
  path: '',
  component: ProjectComponent,
  children: [
    {
      path: 'project-from-local',
      component: ProjectFromLocalComponent,
    },
    {
      path: 'project-from-url',
      component: ProjectFromUrlComponent,
    },
    {
      path: 'project-from-clipboard',
      component: ProjectFromClipboardComponent,
    },
    {
      path: 'project-from-database',
      component: ProjectFromDatabaseComponent,
    },
    {
      path: 'project-from-gdata',
      component: ProjectFromGDataComponent,
    },

    {
      path: 'open-project',
      component: OpenProjectComponent,
    },
    {
      path: 'import-project',
      component: ImportProjectComponent,
    },

  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectRoutingModule {
}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SettingsComponent } from './settings.component';
import { LanguageComponent } from "./language/language.component";
import { PreferencesComponent } from "./preferences/preferences.component";


const routes: Routes = [{
  path: '',
  component: SettingsComponent,
  children: [
    {
      path: 'language',
      component: LanguageComponent,
    },
    {
      path: 'preferences',
      component: PreferencesComponent,
    },

  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingsRoutingModule {
}

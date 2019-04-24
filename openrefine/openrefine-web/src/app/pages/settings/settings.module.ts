import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { SettingsRoutingModule } from './settings-routing.module';

// components

import {LanguageComponent} from "./language/language.component";
import {PreferencesComponent} from "./preferences/preferences.component";
import {SettingsComponent} from "./settings.component";
import { Ng2SmartTableModule } from "ng2-smart-table";


const COMPONENTS = [
    SettingsComponent,
    LanguageComponent,
    PreferencesComponent

];

const SERVICES = [
  
];

const MODULES = [
  ThemeModule,
  SettingsRoutingModule,

];

@NgModule({
  imports: [
    ...MODULES,
    Ng2SmartTableModule,
  ],
  declarations: [
    ...COMPONENTS,
  ],
  providers: [
    ...SERVICES,
  ],
})
export class SettingsModule { }

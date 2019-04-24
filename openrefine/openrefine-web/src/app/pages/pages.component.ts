import { Component } from '@angular/core';

import { MENU_ITEMS } from './pages-menu';

@Component({
  selector: 'gor-pages',
  styleUrls: ['pages.component.scss'],
  template: `
    <gor-default-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </gor-default-layout>
  `,
})
export class PagesComponent {

  menu = MENU_ITEMS;
}
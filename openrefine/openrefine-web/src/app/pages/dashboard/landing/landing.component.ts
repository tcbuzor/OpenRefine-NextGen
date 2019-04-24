import { Component, OnDestroy } from '@angular/core';
import { NbThemeService, NbMediaBreakpoint, NbMediaBreakpointsService } from '@nebular/theme';
import { takeWhile } from 'rxjs/operators';
import { forkJoin } from 'rxjs';


@Component({
  selector: 'gor-landing',
  styleUrls: ['./landing.component.scss'],
  templateUrl: './landing.component.html',
})
export class LandingComponent implements OnDestroy {


  constructor() {
   
  }

  ngOnDestroy() {

  }
}

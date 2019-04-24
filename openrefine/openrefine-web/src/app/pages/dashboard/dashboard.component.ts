import {Component, OnDestroy} from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { takeWhile } from 'rxjs/operators' ;


@Component({
  selector: 'gor-dashboard',
  styleUrls: ['./dashboard.component.scss'],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnDestroy {

  constructor(private themeService: NbThemeService,
              ) {
   
  }

  ngOnDestroy() {
    
  }
}

import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from './@core/utils';

@Component({
  selector: 'gor-app-root',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit{
  title = 'openrefine-web';
  constructor(private analytics: AnalyticsService){}

  ngOnInit(): void {
    this.analytics.trackPageViews();
  }
  
}

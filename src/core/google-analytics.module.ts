import { Injectable } from '@angular/core';
import { GoogleAnalyticsOriginal } from '@ionic-native/google-analytics';
import { Events } from 'ionic-angular';

@Injectable()
export class AnalyticsModule {

  constructor(
    private events: Events,
    private googleAnalytics: GoogleAnalyticsOriginal,
  ) {
    // subscribe to the view:enter event
    this.events.subscribe('view:enter', (view: string) => {
      // do the actual tracking
      this.googleAnalytics.trackView(view);
    });
  }

}
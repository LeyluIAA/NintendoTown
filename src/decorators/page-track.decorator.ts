import { Events } from 'ionic-angular';

import { CoreModule } from '../core/core.module';

export function PageTrack(): ClassDecorator {
  return function (constructor: any) {
    const ionViewDidEnter = constructor.prototype.ionViewDidEnter;

    constructor.prototype.ionViewDidEnter = function (...args: any[]) {
      const events = CoreModule.injector.get(Events);
      events.publish('view:enter', this.constructor.name);
      ionViewDidEnter && ionViewDidEnter.apply(this, args);
    }
  }
}
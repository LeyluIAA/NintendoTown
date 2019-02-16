import { Injector } from '@angular/core';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [],
  imports: [],
  exports: [],
  providers: [],
})
export class CoreModule {
  public static injector: Injector;

  constructor(injector: Injector) {
    CoreModule.injector = injector;
  }
}
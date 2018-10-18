import { NgModule } from '@angular/core';
import { SafeHtmlPipe } from './safe-html/safe-html';
import { DisplayDatePipe } from './display-date/display-date';
@NgModule({
	declarations: [
		SafeHtmlPipe,
		DisplayDatePipe
	],
	imports: [],
	exports: [
		SafeHtmlPipe,
		DisplayDatePipe
	]
})
export class PipesModule {}

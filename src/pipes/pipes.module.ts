import { NgModule } from '@angular/core';
import { SafeHtmlPipe } from './safe-html/safe-html';
import { DisplayDatePipe } from './display-date/display-date';
import { CategoriesPipe } from './categories/categories';
@NgModule({
	declarations: [
		SafeHtmlPipe,
		DisplayDatePipe,
    	CategoriesPipe
	],
	imports: [],
	exports: [
		SafeHtmlPipe,
		DisplayDatePipe,
    	CategoriesPipe
	]
})
export class PipesModule {}

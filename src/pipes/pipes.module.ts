import { NgModule } from '@angular/core';
import { SafeHtmlPipe } from './safe-html/safe-html';
import { DisplayDatePipe } from './display-date/display-date';
import { CategoriesPipe } from './categories/categories';
import { EllipsisPipe } from './ellipsis/ellipsis';
@NgModule({
	declarations: [
		SafeHtmlPipe,
		DisplayDatePipe,
    	CategoriesPipe,
    	EllipsisPipe
	],
	imports: [],
	exports: [
		SafeHtmlPipe,
		DisplayDatePipe,
    	CategoriesPipe,
    	EllipsisPipe
	]
})
export class PipesModule {}

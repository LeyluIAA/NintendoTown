import { NgModule } from '@angular/core';
import { AuthorComponent } from './author/author';
import { MainImageComponent } from './main-image/main-image';
@NgModule({
	declarations: [
    AuthorComponent,
    MainImageComponent],
	imports: [],
	exports: [
    AuthorComponent,
    MainImageComponent]
})
export class ComponentsModule {}

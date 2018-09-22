import { NgModule } from '@angular/core';
import { MyImageComponent } from './my-image/my-image';
import { AuthorComponent } from './author/author';
@NgModule({
	declarations: [
    MyImageComponent,
    AuthorComponent],
	imports: [],
	exports: [
    MyImageComponent,
    AuthorComponent]
})
export class ComponentsModule {}

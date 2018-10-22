import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PostPage } from './post';
import { ComponentsModule } from '../../components/components.module';
import { PipesModule } from '../../pipes/pipes.module';
/*import { SafeHtmlPipe } from '../../pipes/safe-html/safe-html';
import { DisplayDatePipe } from '../../pipes/display-date/display-date';*/

@NgModule({
  declarations: [
    PostPage,
  ],
  imports: [
    IonicPageModule.forChild(PostPage),
    ComponentsModule,
    PipesModule
    /*
    SafeHtmlPipe,
    DisplayDatePipe*/
  ],
})
export class PostPageModule {}

import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PostPage } from '../pages/post/post';
import { MyImageComponent } from '../components/my-image/my-image';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PostServiceProvider } from '../providers/post-service/post-service';
import { HttpClientModule } from '@angular/common/http';

import { SafeHtmlPipe} from '../pipes/safe-html/safe-html';
import { DisplayDatePipe } from '../pipes/display-date/display-date';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PostPage,
    MyImageComponent,
    SafeHtmlPipe,
    DisplayDatePipe
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PostPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PostServiceProvider
  ]
})
export class AppModule {}

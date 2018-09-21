import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { DomSanitizer } from '@angular/platform-browser'; 

/**
 * Generated class for the PostPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-post',
  templateUrl: 'post.html',
})
export class PostPage {
  post: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.post = navParams.get('post');
  }

  ionViewDidLoad() {
    //this.post.content.renderer = DomSanitizer.byPassSecurityTrustStyle(this.post.content.renderer);  
    console.log('ionViewDidLoad PostPage');
    console.log('object post', this.post);
  }
}

import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Nav } from 'ionic-angular';
import { PostServiceProvider } from '../../providers/post-service/post-service';
import { PostPage } from '../../pages/post/post';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild(Nav) nav: Nav;
  posts: any;
  constructor(public navCtrl: NavController, public PostServiceProvider: PostServiceProvider) {
    this.PostServiceProvider.getPosts()
    .then(data => {
      this.posts = data;
    }); 
  }

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);
    this.PostServiceProvider.getPosts()
      .then(data => {
        this.posts = data;
        refresher.complete();
      });
  }
  postTapped(post) {
    this.navCtrl.push(PostPage, {
      post: post
    });
  }
}

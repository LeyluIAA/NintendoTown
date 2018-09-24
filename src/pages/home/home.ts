import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Nav } from 'ionic-angular';
import { PostServiceProvider } from '../../providers/post-service/post-service';
import { PostPage } from '../../pages/post/post';
import { MyImageComponent } from '../../components/my-image/my-image';

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

  postTapped(post) {
    this.navCtrl.push(PostPage, {
      post: post
    });
  }
}

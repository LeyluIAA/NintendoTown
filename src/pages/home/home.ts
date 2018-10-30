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
  pageNumber: 1;
  constructor(public navCtrl: NavController, public PostServiceProvider: PostServiceProvider) {
    this.getData(false); 
  }

  getData(hasToBePushed) {
    if (!this.pageNumber) {
      this.pageNumber = 1;
    }
    if (hasToBePushed) {
      this.pageNumber++;
    }

    return new Promise(resolve => {
      this.PostServiceProvider.getPosts(this.pageNumber)
        .then(data => {
          if (hasToBePushed) {
            for(let post of data) {
              this.posts.push(post);
            }
          }
          else {
            this.posts = data;
          }
          resolve(true);
        });
    });
  }

  doRefresh(refresher) {
    this.pageNumber = 1;
    this.getData(false).then(()=>{
      refresher.complete();
    });
  }

  doInfinite(infiniteScroll) {
    this.getData(true).then(()=>{
      infiniteScroll.complete();
    });    
  }

  postTapped(post) {
    this.navCtrl.push(PostPage, {
      post: post
    });
  }
}

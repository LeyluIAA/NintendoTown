import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Nav } from 'ionic-angular';
import { PostServiceProvider } from '../../providers/post-service/post-service';
import { PostPage } from '../../pages/post/post';
import { PageTrack } from '../../decorators/page-track.decorator';
@PageTrack()
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
          
          let promise = new Promise(resolve => {
            data = this.removeTests(data);
            
            resolve(data);
          })
          
          promise.then(data => {
            if (hasToBePushed) {
              for (let i = 0; i < 10; i++) {
                this.posts.push(data[i]);
                if (!data[i+1]) {
                  break;
                }
              }
            }
            else {
              this.posts = data;
            }
          })
          
          resolve(true);
        });
    });
  }

  removeTests(posts) {
    const forbiddenNumbers = [2, 8, 115, 95, 90, 20, 6];
    let postsWithoutTests = posts.filter(post => {      
      let result = true;
      post.categories.forEach(category => {        
        if (forbiddenNumbers.indexOf(category) !== -1) {
          result = false;
          return;
        }      
      });     
      return result;  
    });
    
    return postsWithoutTests;
  
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

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
  categories: [
    {
        "id": 19,
        "name": "3DS"
    },
    {
        "id": 220,
        "name": "3DS"
    },
    {
        "id": 91,
        "name": "Article"
    },
    {
        "id": 568,
        "name": "Avis public"
    },
    {
        "id": 14,
        "name": "C'est Chaud !"
    },
    {
        "id": 25,
        "name": "Communiqué de presse"
    },
    {
        "id": 22,
        "name": "Dossier"
    },
    {
        "id": 15,
        "name": "Economie"
    },
    {
        "id": 168,
        "name": "Jeux"
    },
    {
        "id": 290,
        "name": "Mobile"
    }
  ]

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

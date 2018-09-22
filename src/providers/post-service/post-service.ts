import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the PostServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PostServiceProvider {

  apiUrl = 'http://www.nintendo-town.fr/wp-json/wp/v2';

  constructor(public http: HttpClient) {
    console.log('Hello PostServiceProvider Provider');
  }

  /** Get All posts */
  getPosts() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'/posts').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  /** Get images for display posts in home */
  getMainIMG(featured_media) {
    return new Promise(resolve => {
      this.http.get(this.apiUrl + '/media/' + featured_media).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  };

  getAuthorName(authorId) {
    return new Promise(resolve => {
      this.http.get(this.apiUrl + '/users').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }
}

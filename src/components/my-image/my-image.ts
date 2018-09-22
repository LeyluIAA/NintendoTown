import { Component, Input } from '@angular/core';
import { PostServiceProvider } from '../../providers/post-service/post-service';

/**
 * Generated class for the MyImageComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'my-image',
  templateUrl: 'my-image.html'
})
export class MyImageComponent {

  @Input() medialink: number;
  imgURL: any;

  constructor(public PostServiceProvider: PostServiceProvider) {}
  
  ngOnInit() {
    let result: any = {};
    this.PostServiceProvider.getMainIMG(this.medialink)
    .then(data => {
      result = data;
      this.imgURL = result.guid.rendered;
    })
  }
}

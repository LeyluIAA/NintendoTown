import { Component, Input } from '@angular/core';
import { PostServiceProvider } from '../../providers/post-service/post-service';

@Component({
  selector: 'main-image',
  templateUrl: 'main-image.html'
})
export class MainImageComponent {

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

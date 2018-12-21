import { Component, Input } from '@angular/core';
import { PostServiceProvider } from '../../providers/post-service/post-service';

@Component({
  selector: 'main-image',
  templateUrl: 'main-image.html'
})
export class MainImageComponent {

  @Input() medialink: number;
  imgURL: any;
  mediaType: any;

  constructor(public PostServiceProvider: PostServiceProvider) {}

  ngOnInit() {
    let result: any = {};
    this.PostServiceProvider.getMainIMG(this.medialink)
    .then(data => {
      result = data;
      this.mediaType = result.media_type;
      this.imgURL = result.guid.rendered;
    })
  }
}

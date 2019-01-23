import { Component, Input } from '@angular/core';
import { PostServiceProvider } from '../../providers/post-service/post-service';

@Component({
  selector: 'author',
  templateUrl: 'author.html'
})
export class AuthorComponent {
  @Input() authorId: number;
  authorName: string;

  constructor(public PostServiceProvider: PostServiceProvider) {}

  ngOnInit() {
    this.PostServiceProvider.getAuthorName(this.authorId)
    .then(data => {
      //this.authorName = data;
    })
  }

}

import { FeedService } from './feed.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Feed Service';
  build= [];
  constructor(public feed: FeedService) {}
  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit(key= '') {
    this.feed.getPosts(key).subscribe((post) => {
      this.build = [];
      post.items.forEach(elem => {
          this.build.push(elem);
      });
      // console.log(this.build);
    });
  }
}

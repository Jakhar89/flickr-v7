import { AppComponent } from './../app.component';
import { Component, OnInit } from '@angular/core';
import { FeedService } from '../feed.service';



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  srch = {key: ''};
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


  onSubmit() {
    if (this.srch.key !== '') {
      this.ngOnInit(this.srch.key);
    }
  }
}

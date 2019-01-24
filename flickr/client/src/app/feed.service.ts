import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

@Injectable()
export class FeedService {

  constructor(public http: Http) { }
  getPosts(key= '') {
    let url;
  
    // included localhost:3000 for running/testing sole Angular 6 app
    if (key) {
      url = `/app/tasks/flickr/${key}`;
    }else {
      url = `/app/tasks/flickr`;
    }
    return this.http.get(url)
   // Call map on the response observable to get the parsed object
   .map(res => res.json());
  };
  getDogFeed(key=''){

      let url;
      // included localhost:3000 for running/testing sole Angular 6 app
      if (key) {
        url = `/app/tasks/dogs?key=${key}`;
      }else {
        url = `/app/tasks/dogs`;
      }
      return this.http.get(url)
     
     // Call map on the response observable to get the parsed object
     .map(res => res.json());
  
  }
  
}

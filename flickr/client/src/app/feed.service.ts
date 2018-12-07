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
      url = `http://localhost:3000/app/tasks/${key}`;
    }else {
      url = `http://localhost:3000/app/tasks`;
    }
    return this.http.get(url)
   // Call map on the response observable to get the parsed object
   .map(res => res.json());
  };
  getDogFeed(key=''){

      let url;
      // included localhost:3000 for running/testing sole Angular 6 app
      if (key) {
        url = `https://dog.ceo/api/breed/${key}/images/random/10`;
      }else {
        url = `https://dog.ceo/api/breeds/list/all`;
      }
      return this.http.get(url)
     
     // Call map on the response observable to get the parsed object
     .map(res => res.json());
  
  }
  
}

import { AppComponent } from './../app.component';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  srch = {key: ''};
  constructor(public app: AppComponent) {
   }

  ngOnInit() {
  }
  onSubmit() {
    if (this.srch.key !== '') {
      this.app.ngOnInit(this.srch.key);
    }
  }
}

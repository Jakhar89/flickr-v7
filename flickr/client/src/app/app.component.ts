import { FeedService } from './feed.service';
import { Component } from '@angular/core';
import {RouteModuleRoutingModule} from './route-module/route-module-routing.module'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public routerM: RouteModuleRoutingModule){}
  //reload function when clicked on same Nav item
  reload(uri){
    this.routerM.redirectTo(uri);
  }
}

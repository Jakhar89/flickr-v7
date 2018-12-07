import { FeedService } from './feed.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import {Http} from '@angular/http';
import { SearchComponent } from './search/search.component';
import { DogsCompComponent } from './dogs/dogs-comp/dogs-comp.component';
import {RouteModuleRoutingModule} from './route-module/route-module-routing.module'

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    DogsCompComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouteModuleRoutingModule
  ],
  providers: [FeedService,
 ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouteModuleRoutingModule } from './route-module-routing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouteModuleRoutingModule
  ],
  exports:[RouteModuleRoutingModule]
})
export class RouteModuleModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DogsCompComponent } from '../dogs/dogs-comp/dogs-comp.component';
import { SearchComponent } from '../search/search.component';

const routes: Routes = [
  {path:'',component: SearchComponent},
  {path:'dogs',component: DogsCompComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RouteModuleRoutingModule { }

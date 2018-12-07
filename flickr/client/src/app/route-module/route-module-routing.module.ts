import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DogsCompComponent } from '../dogs/dogs-comp/dogs-comp.component';
import { SearchComponent } from '../search/search.component';
import { Router } from '@angular/router';

const routes: Routes = [
      {path:'reload',component: SearchComponent},
      {path:'',component: SearchComponent},
      {path:'dogs',component: DogsCompComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: "reload"})],
  exports: [RouterModule]
})
export class RouteModuleRoutingModule {
  constructor(public router: Router){}
  redirectTo(uri:string){
    this.router.navigateByUrl('/reload',{skipLocationChange: true}).then(()=>
    this.router.navigate([uri]));
  }
 }

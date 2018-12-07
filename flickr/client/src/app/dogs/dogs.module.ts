import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DogsCompComponent } from './dogs-comp/dogs-comp.component';

@NgModule({
  declarations: [DogsCompComponent],
  imports: [
    CommonModule
  ],
  exports:[DogsCompComponent]
  
})
export class DogsModule { }

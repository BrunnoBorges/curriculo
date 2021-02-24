import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { CoursesRoutingModule } from './courses-routing.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    CoursesRoutingModule
  ]
})
export class CoursesModule { }

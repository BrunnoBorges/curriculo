import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperienceRoutingModule } from './experience-routing.module'
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    ExperienceRoutingModule
  ]
})
export class ExperienceModule { }

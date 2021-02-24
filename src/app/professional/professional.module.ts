import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfessionalRoutingModule } from './professional-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    ProfessionalRoutingModule,
    NgbModule
  ]
})
export class ProfessionalModule { }

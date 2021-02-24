import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ProfessionalComponent } from './professional/professional.component';
import { ExperienceComponent } from './experience/experience.component';
import { CoursesComponent } from './courses/courses.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PortfolioComponent } from './portfolio/portfolio.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ProfessionalComponent,
    ExperienceComponent,
    CoursesComponent,
    PortfolioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'professional', loadChildren: () => import('./professional/professional.module').then(m => m.ProfessionalModule)
  },
  {
    path: 'portifolio', loadChildren: () => import('./portfolio/portfolio.module').then(m => m.PortfolioModule)
  },
  {
    path: 'experience', loadChildren: () => import('./experience/experience.module').then(m => m.ExperienceModule)
  },
  {
    path: 'courses', loadChildren: () => import('./courses/courses.module').then(m => m.CoursesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
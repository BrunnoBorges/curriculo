import { Component, OnInit } from '@angular/core';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { CurriculoService } from '../services/curriculo.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  faBriefcase = faBriefcase;

  first_job: any;
  second_job: any;
  third_job: any;
  actual_job: any;


  constructor(private curriculoService: CurriculoService) { }

  ngOnInit(): void {
    this.curriculoService.getExperienceDetails().subscribe((data) => {
      console.log('xxx', data[0].actual_job)
      this.first_job = data[0].first_job;
      this.second_job = data[0].second_job;
      this.third_job = data[0].third_job;
      this.actual_job = data[0].actual_job;
    }, (error) => {
      console.log(error);
    })
  }

}

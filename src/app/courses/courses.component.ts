import { Component, OnInit } from '@angular/core';
import { faCertificate, faGraduationCap, faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { faSketch, faFigma, faHtml5, faCss3Alt, faJsSquare, faReact, faAngular, faGithub, faSass, faBootstrap, faNpm } from '@fortawesome/free-brands-svg-icons';
import { CurriculoService } from '../services/curriculo.service';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  faCertificate = faCertificate;
  faGraduationCap = faGraduationCap;
  faLaptopCode = faLaptopCode;
  faSketch = faSketch;
  faFigma = faFigma;
  faHtml5 = faHtml5 ;
  faCss3Alt = faCss3Alt;
  faJsSquare = faJsSquare;
  faReact = faReact;
  faAngular = faAngular;
  faGithub = faGithub; 
  faSass = faSass;
  faBootstrap = faBootstrap;
  faNpm = faNpm;

  formacao: any;
  cursosUx: any;
  cursosDesenv: any;
  moreCurses = [
    { 
      link: 'https://drive.google.com/file/d/1fGemgIwVNsUvrbf-vx31otoPAXoUP22D/view',
      name: 'Scrum Foundation'
    }
  ]
  graduacao = [
    {
      link: '../../assets/img/certificado-unopar-graduacao.jpg',
      name: 'Superior de Tecnologia em Análise de Desenvolvimento de Sistemas'
    }
  ];
  constructor(private curriculoService: CurriculoService) {}

  ngOnInit(): void {
    this.curriculoService.getCoursesDetails().subscribe((data) => {
      this.formacao = data[0].formacao;
      this.cursosUx = data[0].cursosUx;
      this.cursosDesenv = data[0].cursosDesenv;
    }, (error) => {
      console.log('Erro ao chamar a Service', error)
    })
  }
}

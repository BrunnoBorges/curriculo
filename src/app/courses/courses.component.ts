import { Component, OnInit } from '@angular/core';
import { faCertificate, faGraduationCap, faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { faSketch, faFigma, faHtml5, faCss3Alt, faJsSquare, faReact, faAngular, faGithub, faSass, faBootstrap, faNpm } from '@fortawesome/free-brands-svg-icons';


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

  formacao = [
    {
      link:'https://cursos.alura.com.br/user/brunno-diego/degree-ux-v234-234/certificate',
      name: 'UX Design',
    },
    {
      link:'https://cursos.alura.com.br/user/brunno-diego/career/programador-angular/certificate',
      name: 'PROGRAMADOR ANGULARJS'
    },
    {
      link:'https://cursos.alura.com.br/user/brunno-diego/career/desenvolvedor-front-end_antigo/certificate',
      name: 'DESENVOLVEDOR FRONT-END'
    },
    {
      link: 'https://cursos.alura.com.br/user/brunno-diego/course/projeto-carreira-front-end/certificate',
      name: 'FRONT-END: PROJETO DE CONCLUSÃO'
    }
  ];

  cursosUx = [
    {
      link:'https://cursos.alura.com.br/user/brunno-diego/course/ux-base/certificate',
      name: 'UX'
    },
    {
      link:'https://cursos.alura.com.br/user/brunno-diego/course/ux-melhorias-de-produto/certificate',
      name: 'UX PRODUTO'
    },
    {
      link: 'https://cursos.alura.com.br/user/brunno-diego/course/ux-research/certificate',
      name: 'UX RESEARCH'
    },
    {
      link:'https://cursos.alura.com.br/user/brunno-diego/course/ux-strategy/certificate',
      name: 'UX STRATEGY'
    },
    {
      link:'https://cursos.alura.com.br/user/brunno-diego/course/ux-usabilidade/certificate',
      name: 'UX USABILITY'
    },
    {
      link:'https://cursos.alura.com.br/user/brunno-diego/course/prototipagem-alta-fidelidade-adobe-xd/certificate',
      name: 'PROTOTIPAGEM E UX P. 1'
    },
    {
      link:'https://cursos.alura.com.br/user/brunno-diego/course/prototipagem-ux-link-com-telas-no-adobe-xd/certificate',
      name: 'PROTOTIPAGEM E UX P. 2'
    },

    {
      link:'https://cursos.alura.com.br/user/brunno-diego/course/ux-do-briefing-ao-prototipo/certificate',
      name: 'REVISÃO UX'
    },
    {
      link:'https://cursos.alura.com.br/user/brunno-diego/course/sketch/certificate',
      name: 'SKETCH'
    },
    {
      link:'https://cursos.alura.com.br/user/brunno-diego/course/teste-de-usabilidade/certificate',
      name: 'TESTE DE USABILIDADE P. 1'
    },
    {
      link:'https://cursos.alura.com.br/user/brunno-diego/course/teste-de-usabilidade-entregando-resultados/certificate',
      name: 'TESTE DE USABILIDADE P. 2'
    },
    {
      link:'https://cursos.alura.com.br/user/brunno-diego/course/usabilidade-interfaces-mobile/certificate',
      name: 'UI DESIGN PATTERNS'
    },
    {
      link:'https://cursos.alura.com.br/user/brunno-diego/course/ux-mitos-e-boas-praticas/certificate',
      name: 'UX: OS ERROS FREQUENTES'
    },
    {
      link:'https://cursos.alura.com.br/user/brunno-diego/course/web-design-responsivo/certificate',
      name: 'WEB DESIGN RESPONSIVO'
    },
    {
      link:'https://cursos.alura.com.br/user/brunno-diego/course/introducao-a-estatistica-1/certificate',
      name: 'ESTATÍSTICA I'
    },
    {
      link:'https://cursos.alura.com.br/user/brunno-diego/course/introducao-a-estatistica-2/certificate',
      name: 'ESTATÍSTICA II'
    },

    {
      link:'https://cursos.alura.com.br/user/brunno-diego/course/iconografia-1/certificate',
      name: 'ICONOGRAFIA I'
    }
  ];

  cursosDesenv = [
    {
      link:'https://cursos.alura.com.br/user/brunno-diego/course/javascript-es6-orientacao-a-objetos-parte-1/certificate',
      name: 'JAVASCRIPT'
    },
    {
      link:'https://cursos.alura.com.br/user/brunno-diego/course/javascript-programando-na-linguagem-web/certificate',
      name: 'JAVASCRIPT'
    },
    {
      link:'https://cursos.alura.com.br/user/brunno-diego/course/kubernetes/certificate',
      name: 'KUBERNETES'
    },
    {
      link:'https://cursos.alura.com.br/user/brunno-diego/course/jquery-a-biblioteca-do-mercado/certificate',
      name: 'JQUERY'
    },
    {
      link:'https://cursos.alura.com.br/user/brunno-diego/course/jquery-a-biblioteca-do-mercado-parte-2/certificate',
      name: 'JQUERY'
    },
    {
      link:'https://cursos.alura.com.br/user/brunno-diego/course/react-native-parte-1/certificate',
      name: 'REACT NATIVE PARTE 1'
    },
    {
      link:'https://cursos.alura.com.br/user/brunno-diego/course/react-native-parte-2/certificate',
      name: 'REACT NATIVE PARTE 2'
    },
    {
      link:'https://cursos.alura.com.br/user/brunno-diego/course/react/certificate',
      name: 'REACT PARTE 1'
    },
    {
      link:'https://cursos.alura.com.br/user/brunno-diego/course/react-parte-2/certificate',
      name: 'REACT PARTE 2'
    },
    {
      link:'https://cursos.alura.com.br/user/brunno-diego/course/typescript-parte1/certificate',
      name: 'TYPESCRIPT PARTE 1'
    },
    {
      link:'https://cursos.alura.com.br/user/brunno-diego/course/expressoes-regulares/certificate',
      name: 'EXPRESSÕES REGULARES'
    },
    {
      link:'https://cursos.alura.com.br/user/brunno-diego/course/posicione-elementos-com-flexbox/certificate',
      name: 'FLEXBOX'
    },
    {
      link:'https://cursos.alura.com.br/user/brunno-diego/course/introducao-html-css/certificate',
      name: 'HTML5 E CSS3 I'
    },
    {
      link:'https://cursos.alura.com.br/user/brunno-diego/course/avancando-html-css/certificate',
      name: 'HTML5 E CSS3 II'
    },
    {
      link:'https://cursos.alura.com.br/user/brunno-diego/course/sass/certificate',
      name: 'SASS E COMPASS'
    },
    {
      link:'https://cursos.alura.com.br/user/brunno-diego/course/bootstrap-criacao-single-page-responsiva/certificate',
      name: 'BOOTSTRAP'
    },
    {
      link:'https://cursos.alura.com.br/user/brunno-diego/course/angularjs-mvc/certificate',
      name: 'ANGULARJS'
    },
    {
      link:'https://cursos.alura.com.br/user/brunno-diego/course/projeto-carreira-javascript/certificate',
      name: 'JAVASCRIPT'
    },
    {
      link:'https://cursos.alura.com.br/user/brunno-diego/course/logica-programacao-javascript-html/certificate',
      name: 'LÓGICA DE PROGRAMAÇÃO I'
    }
  ];

  graduacao = [
    {
      link: '',
      name: 'Superior de Tecnologia em Análise de Desenvolvimento de Sistemas'
    }
  ];

  constructor() {}

  ngOnInit(): void {}
}

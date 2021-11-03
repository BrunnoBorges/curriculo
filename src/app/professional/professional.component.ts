import { Component, OnInit } from '@angular/core';
import { CurriculoService } from '../services/curriculo.service';

@Component({
  selector: 'app-professional',
  templateUrl: './professional.component.html',
  styleUrls: ['./professional.component.scss']
})
export class ProfessionalComponent implements OnInit {

  conhecimento_extra: any;
  frontend: any;
  framework_frontend: any;
  ferramentas_ux_ui: any;
  ux_ui_designer: any;

  constructor(private curriculoService: CurriculoService) { }

  ngOnInit(){

    this.curriculoService.getProfessionalDetails().subscribe((data) => {
      this.conhecimento_extra = data[0].conhecimentos_extras;
      this.frontend = data[0].front_end;
      this.ux_ui_designer = data[0].ux_ui_designer;
      this.ferramentas_ux_ui = data[0].ferramentas_ux_ui;
      this.framework_frontend = data[0].framework_front_end;
    }, (error) => {
      console.log('Erro ao chamar a Service', error)
    })

  }

}

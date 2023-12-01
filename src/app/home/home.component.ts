import { Component, OnInit } from '@angular/core';
import { CurriculoService } from '../services/curriculo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  namePerson: string;
  sobreNomePerson: string;
  abreviationPerson: string;
  descriptionPerson: string;
  professionPerson: string;
  professionSecundaryPerson: string;

  constructor(private curriculoService: CurriculoService) {}

  ngOnInit(): void {
    this.curriculoService.getHomeDetails().subscribe(
      (data) => {
        console.log('data', data[0]);
        const nomeCompleto = data[0]?.name;
        const partesDoNome = nomeCompleto.split(' ');

        this.namePerson = partesDoNome[0];
        this.sobreNomePerson = partesDoNome[partesDoNome.length - 1];
        this.abreviationPerson = data[0].name.slice(0, 1);
        this.descriptionPerson = data[0].description;
        this.professionPerson = data[0].profession;
        this.professionSecundaryPerson = data[0].professionSecundary;
      },
      (error) => {
        console.log('error', error);
      }
    );
  }
}

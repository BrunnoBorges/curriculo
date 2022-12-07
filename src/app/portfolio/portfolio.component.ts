import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  images: any[];

  constructor() {
    this.images = [
      '../../assets/img/cod.png',
      '../../assets/img/comediflix.png',
      '../../assets/img/spinner.png',
      '../../assets/img/stepper_progress.png',
      '../../assets/img/germinare_tec.png',
      '../../assets/img/seara-congresso.png',
      '../../assets/img/pokedex.png'
    ]
   }

  ngOnInit(): void {
  }
}

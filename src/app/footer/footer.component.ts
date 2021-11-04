import { Component, OnInit } from '@angular/core';
import { faGithub, faInstagram, faLinkedin, faWhatsapp, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { CurriculoService } from '../services/curriculo.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  faGithub = faGithub;
  faInstagram = faInstagram;
  faLinkedin = faLinkedin;
  faWhatsapp = faWhatsapp;
  faChevronUp = faChevronUp;
  faGoogle = faGoogle;

  midias: any;
  namePerson: string

  constructor(private curriculoService: CurriculoService) { }

  ngOnInit(): void {

    this.curriculoService.getMidiasSociais().subscribe((data) => {
      this.midias = data[0];
    }, (error) => {

    });

    this.curriculoService.getHomeDetails().subscribe((data) => {
      this.namePerson = data[0].name.split(' ').slice(0, 2).join(' ');;
    }, (error) => {
      console.log('error', error)
    });
  }


  onEdit(){
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

}

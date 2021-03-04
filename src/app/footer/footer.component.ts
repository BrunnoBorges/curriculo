import { Component, OnInit } from '@angular/core';
import { faGithub, faInstagram, faLinkedin, faWhatsapp, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

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

  constructor() { }

  ngOnInit(): void {
  }

  onEdit(){
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

}

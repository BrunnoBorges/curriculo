import { Component, OnInit, HostListener } from '@angular/core';
import { HeaderService } from './header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  scrolled: boolean = false;

  get checkedNews() {
    return this.headerService.checkedNews;
  }
  
  constructor(private headerService: HeaderService) { 
    this.scrolled = window.pageYOffset > 0;
  }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', ['$event'])

  onWindowScroll(e) {
    let element = document.querySelector('.navbar-container');
    if (window.pageYOffset > 592) {
      element.classList.add('navbar-inverse');
    } else {
      element.classList.remove('navbar-inverse');
    }
  }

}

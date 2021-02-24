import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  checkedNews: boolean;

  constructor() { 
    this.checkedNews = false;
  }

  checkNews(value: boolean) {
    this.checkedNews = value;
  }
}

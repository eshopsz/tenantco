import { Component, OnInit } from '@angular/core';
import { tns } from '../../assets/vendor/tiny-slider/src/tiny-slider';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html'
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    tns({
      container: '.tns-slider',
      gutter: 16,
      prevButton: '.prev-btn',
      nextButton: '.next-btn',
      loop: true,
      navPosition: 'bottom'
    });
  }

}

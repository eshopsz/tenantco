import { Component, OnInit } from '@angular/core';
import { tns } from '../../../assets/vendor/tiny-slider/src/tiny-slider';

@Component({
  selector: 'app-services-section',
  templateUrl: './services-section.component.html'
})
export class ServicesSectionComponent implements OnInit {

  authed: boolean = false

  constructor() { }

  ngOnInit(): void {
    if (localStorage.getItem('token')) {
      this.authed = true
    }
    tns({
      container: '.tns-carousel-inner',
      items: 1,
      controls: false,
      autoplay: true,
      autoplayButtonOutput: false,
      responsive: {
        0: {
          items: 1
        },
        500: {
          items: 2
        },
        768: {
          items: 3
        }
      }
    });
  }

}

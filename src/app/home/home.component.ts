import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  estates: any = []

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

}

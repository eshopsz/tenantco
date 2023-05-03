import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-latest',
  templateUrl: './latest.component.html'
})
export class LatestComponent implements OnInit {

  estates: any = []

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => this.estates = data['estates'])
    console.log(this.estates)
  }

}

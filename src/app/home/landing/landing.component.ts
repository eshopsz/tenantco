import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html'
})
export class LandingComponent implements OnInit {

  types: any = []
  provinces: any = []
  categories: any = []

  category: string = ''
  province: string = ''
  type: string = ''
  price_range: string = '1k - 3k'
  min: number = 0
  max: number = 0

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.categories = data['categories']
      this.category = this.categories[0].category
      this.provinces = data['provinces']
      this.province = this.provinces[0].province
      this.types = data['types']
      this.type = this.types[0].type
    })
  }

  typeSelect(type:string) {
    this.type = type
  }

  categorySelect(category:string) {
    this.category = category
  }

  provinceSelect(province:string) {
    this.province = province
  }

  priceSelect(range:string, min:number, max:number) {
    this.price_range = range
    this.min = min
    this.max = max
  }

  search() {
    this.router.navigate(['/catalog'], {queryParams: {
      'category': this.category,
      'province': this.province,
      'min': this.min,
      'max': this.max,
      'type': this.type
    }})
  }

}

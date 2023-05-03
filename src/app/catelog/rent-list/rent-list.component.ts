import { Component, EventEmitter, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { tns } from '../../../assets/vendor/tiny-slider/src/tiny-slider';

@Component({
  selector: 'app-rent-list',
  templateUrl: './rent-list.component.html'
})
export class RentListComponent implements OnInit {
  es: any = []
  backup: any = []
  estates: any = []
  choice: number = 1
  types: any = []
  typefilter: string = ''
  min: number = 0
  max: number = 0
  filtered: boolean = false
  province: string = ''
  provinces: any = []
  category: string = 'Rental'

  pageChange!: EventEmitter<number>;
  pageBoundsCorrection!: EventEmitter<number>;
  currentEstatesPage = 1

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.estates = data['estates'],
      this.backup = data['estates'],
      this.types = data['types'],
      this.provinces = data['provinces']
    })
  }

  ngAfterViewInit(): void {
    this.checkParams(),
    this.sort()
  }

  fromNewest(estates:any) {
    var list = []
    list = estates.sort(function (a:any, b:any) {
      return b.id-a.id
    })
    return list
  }

  fromOldest(estates:any) {
    var list = []
    list = estates.sort(function (a:any, b:any) {
      return a.id-b.id
    })
    return list
  }

  fromCheapest(estates:any) {
    var list = []
    list = estates.sort(function (a:any, b:any) {
      return a.price-b.price
    })
    return list
  }

  fromExpensive(estates:any) {
    var list = []
    list = estates.sort(function (a:any, b:any) {
      return b.price-a.price
    })
    return list
  }

  sort() {
    if (this.choice == 1) {this.estates = this.fromNewest(this.estates)}
    if (this.choice == 2) {this.estates = this.fromOldest(this.estates)}
    if (this.choice == 3) {this.estates = this.fromCheapest(this.estates)}
    if (this.choice == 4) {this.estates = this.fromExpensive(this.estates)}
  }

  typeFilter() {
    if (this.typefilter != '') {
      this.filtered = true
      this.estates = this.estates.filter((estate:any) => {return (estate.estate_type.type == this.typefilter)})
    } else {
      this.filtered = false
      this.estates = this.backup
    }
  }

  provinceFilter() {
    if (this.province != '') {
      this.filtered = true
      this.estates = this.estates.filter((estate:any) => {return (estate.province.province == this.province)})
    } else {
      this.filtered = false
      this.estates = this.backup
    }
  }


  categoryFilter() {
    if (this.category != '') {
      this.estates = this.estates.filter((estate:any) => {return (estate.category.category == this.category)})
    } else {
      this.estates = this.backup
    }
  }

  costFilter() {
    if (this.max != 0 && this.min < this.max) {
      this.filtered = true
      this.estates = this.estates.filter((estate:any) => {return (estate.price >= this.min && estate.price <= this.max)})
    } else {
      this.filtered = false
      this.estates = this.backup
    }
  }

  bedroomFilter(num:number) {
    if (num != 4) {
      this.filtered = true
      this.estates = this.estates.filter((estate:any) => {return (estate.bedroom == num)})
    } else {
      this.filtered = true
      this.estates = this.estates.filter((estate:any) => {return (estate.bedroom >= num)})
    }
  }

  bathroomFilter(num:number) {
    if (num != 4) {
      this.filtered = true
      this.estates = this.estates.filter((estate:any) => {return (estate.bathroom == num)})
    } else {
      this.filtered = true
      this.estates = this.estates.filter((estate:any) => {return (estate.bathroom >= num)})
    }
  }

  resetFilter() {
    this.filtered = false
    this.estates = this.backup
    this.router.navigate(['/catalog'], {queryParams: {category: this.category}})
    this.checkParams()
  }

  checkParams() {
    this.route.queryParams.subscribe((params:any) => {
      this.estates = this.backup
      if (params.category) {this.category=params.category, this.categoryFilter()}
      if (params.min && params.max) {this.min=params.min, this.max=params.max, this.costFilter()}
      if (params.province) {this.province=params.province, this.provinceFilter()}
      if (params.type) {this.typefilter=params.type, this.typeFilter()}
      if (params.bedrooms) {this.bedroomFilter(params.bedrooms)}
      if (params.bathrooms) {this.bathroomFilter(params.bathrooms)}
    })
  }

  qpbathroom(num:number) {
    this.router.navigate(['/catalog'], {queryParams: {'bathrooms': num}, queryParamsHandling: 'merge'})
    this.checkParams()
  }

  qpbedroom(num:number) {
    this.router.navigate(['/catalog'], {queryParams: {'bedrooms': num}, queryParamsHandling: 'merge'})
    this.checkParams()
  }

  qpprovince() {
    this.router.navigate(['/catalog'], {queryParams: {'province': this.province}, queryParamsHandling: 'merge'})
    this.checkParams()
  }

  qptype() {
    this.router.navigate(['/catalog'], {queryParams: {'type': this.typefilter}, queryParamsHandling: 'merge'})
    this.checkParams()
  }

  qpcost() {
    this.router.navigate(['/catalog'], {queryParams: {'min': this.min, 'max': this.max}, queryParamsHandling: 'merge'})
    this.checkParams()
  }

  qpcategory(cat:string) {
    this.router.navigate(['/catalog'], {queryParams: {'category': cat}, queryParamsHandling: 'merge'})
    this.checkParams()
  }

  onClick(event:any) {
    window.scroll(0,0)
  }

}

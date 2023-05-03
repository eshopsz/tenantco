import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EstateService } from 'src/app/services/estate.service';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html'
})
export class PropertiesComponent implements OnInit {

  estates: any = []
  published: any = []
  pending: any = []
  paid: any = []
  account: any = []

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private estateService: EstateService
  ) { }

  ngOnInit(): void {
    this.route.data.subscribe((data:any) => {
      this.estates=data.estates,
      this.account=data.account,
      this.paid=data.paid_estates
    })
    this.getPublished()
    this.getPending()
  }

  getPublished() {
    this.published = this.estates.filter((estate:any) => {return (estate.published == true)})
  }

  getPending() {
    this.pending = this.estates.filter((estate:any) => {return (estate.published == false)})
  }

  deletePost(id:any) {
    this.estateService.deleteEstate(id).subscribe(res => this.removePost(id), err => console.log(err))
  }

  removePost(id:number) {
    this.estates.forEach((estate:any, index:any) => {
      if (estate.id == id) {
        this.estates.splice(index, 1)
        this.getPending()
        this.getPublished()
      }
    });
  }

}

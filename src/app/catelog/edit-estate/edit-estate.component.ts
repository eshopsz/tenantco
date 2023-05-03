import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EstateService } from 'src/app/services/estate.service';

@Component({
  selector: 'app-edit-estate',
  templateUrl: './edit-estate.component.html'
})
export class EditEstateComponent implements OnInit {

  name: any
  category: any = {}
  type: any

  province: any
  city: any
  code: any
  street: any

  bedrooms: number = 1
  bathrooms: number = 1
  parking: number = 1
  extras: any = []

  description: any
  price: number = 0

  agent: any = 1

  categories: any = []
  types: any
  extrass: any = []
  provinces: any = []

  estate: any = []
  images: any = []
  img: any = []
  image: any
  submitted = false

  constructor(
    private route: ActivatedRoute,
    private estateService: EstateService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.data.subscribe((data:any) => {
      this.estate = data.estate,
      this.categories = data['categories'],
      this.types = data['types'],
      this.extras = data['extras'],
      this.provinces = data['provinces'],
      this.updateFields()
    })
  }

  updateFields() {
    this.estate.extras.forEach((extra:any) => {
      this.extrass.push(extra.id)
    });
    this.extrass = this.estate.extras
    this.province = this.estate.province.id,
    this.category = this.estate.category.id,
    this.type = this.estate.estate_type.id,
    this.name = this.estate.title,
    this.description = this.estate.description,
    this.price = this.estate.price,
    this.bedrooms = this.estate.bedroom,
    this.bathrooms = this.estate.bathroom,
    this.parking = this.estate.parking,
    this.city = this.estate.city,
    this.street = this.estate.street,
    this.code = this.estate.zip_code
    this.img = this.estate.images
  }

  onCheck(e:any, extra:any) {
    if (e.target.checked) {
      this.extrass.push(extra)
    } else {
      this.extrass.forEach((element:any, index:any) => {
        if (element == extra) {
          this.extrass.splice(index, 1)
        }
      });
    }

  }

  onUpload(e:any) {
    var uploads = e.target.files

    for (let i=0; i<uploads.length; i++) {
      if (this.images.length > 0) {
        if (!this.images.includes(uploads[i].name)) {
          this.images.push(uploads[i])
        }
      } else {
        this.images.push(uploads[i])
      }
    }
  }

  deleteImage(id:number) {
    this.estateService.deleteImage(id).subscribe(res =>
      this.img.forEach((element:any, index:any) => {
        if (element.id == id) {
          this.img.splice(index, 1)
        }
      }), err => console.log(err)
      )
  }

  submitForm() {
    this.submitted = true
    var data = {
      'extras': this.extrass,
      'province': this.province,
      'category': this.category,
      'estate_type': this.type,
      'title': this.name,
      'description': this.description,
      'price': this.price,
      'bedroom': this.bedrooms,
      'bathroom': this.bathrooms,
      'parking': this.parking,
      'city': this.city,
      'street': this.street,
      'zip_code': this.code
    }

    this.estateService.editEstate(this.estate.id, data).subscribe(res =>
      {this.images.forEach((image:any) => {
        this.estateService.postImage(image, res).subscribe(res => console.log(res), err => console.log(err)),
        this.submitted = false
      }),
        this.submitted = false,
        this.router.navigate(['account/properties'])},
      err => {console.log(err), this.submitted = false})
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EstateService } from 'src/app/services/estate.service';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'app-add-estate',
  templateUrl: './add-estate.component.html'
})
export class AddEstateComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private estateService: EstateService,
    private accountService: AccountService,
    private router: Router
  ) { }

  name: any
  category: any
  type: any
  account: any

  province: any
  city: any
  code: any
  street: any

  bedrooms: number = 1
  bathrooms: number = 1
  parking: number = 1
  extras: any = []

  description: any
  price: any

  categories: any
  types: any
  extrass: any = []
  provinces: any

  images: any = []
  image: any
  submitted = false

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.categories = data['categories'],
      this.category = this.categories[0].id
      this.types = data['types'],
      this.type = this.types[0].id
      this.extras = data['extras'],
      this.provinces = data['provinces'],
      this.province = this.provinces[0].id
    }, err => console.log(err))
    this.accountService.getAccount().subscribe(data => this.account=data)
  }

  onCheck(e:any, extra:any) {
    console.log(this.extrass)

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
      'zip_code': this.code,
      'agent': this.account.id
    }

    this.estateService.postEstate(data).subscribe(res =>
      this.images.forEach((image:any) => {
        this.estateService.postImage(image, res).subscribe(res => console.log(res), err => console.log(err)),
        this.submitted = false
        this.router.navigate(['/account/properties'])
      }),
      err => {console.log(err), this.submitted = false})
  }

}

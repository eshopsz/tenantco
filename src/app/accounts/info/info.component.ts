import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html'
})
export class InfoComponent implements OnInit {

  account: any = []
  email: string = ''
  name: string = ''
  surname: string = ''
  phone: number = 0
  submitted: boolean = false
  updated: boolean = false

  constructor(
    private route: ActivatedRoute,
    private accountService: AccountService
  ) { }

  ngOnInit(): void {
    this.route.data.subscribe((data:any) => {this.account = data.account, this.fillDetails()})
  }

  fillDetails() {
    this.name = this.account.first_name
    this.surname = this.account.last_name
    this.phone = this.account.phone
    this.email = this.account.email
  }

  submitDetails() {
    this.submitted = true
    var data = {
      "first_name": this.name,
      "last_name": this.surname,
      "phone": this.phone
    }
    this.accountService.editAccount(data).subscribe((res:any) => {this.account=res, this.submitted = false})
  }

  updatepp(e:any) {
      this.updated = true
      var img = e.target.files[0]
      this.accountService.accountImage(img).subscribe((data:any) => {this.updated = false, window.location.reload()}, err => this.updated=false)
  }
}

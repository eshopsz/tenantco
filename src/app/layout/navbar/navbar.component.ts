import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  authed = false
  account: any = []

  constructor(
    private accountService: AccountService
  ) { }

  ngOnInit(): void {
    if (localStorage.getItem('token')) {
      this.authed = true
      this.accountService.getAccount().subscribe(data => this.account=data, err => console.log(err))
    }
  }

  logout() {
    localStorage.removeItem('token')
    window.location.reload()
  }

}

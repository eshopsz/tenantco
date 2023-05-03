import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../services/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account-nav',
  templateUrl: './account-nav.component.html'
})
export class AccountNavComponent implements OnInit {

  account: any = {}

  constructor(
    private accountService: AccountService,
    private router: Router
  ) { }

  ngOnInit(): void {
    if (localStorage.getItem('token')) {
      this.accountService.getAccount().subscribe(data => this.account = data)
    } else {
      this.router.navigate(['home'])
    }
  }

  logout() {
    localStorage.removeItem('token')
    this.router.navigate(['home'])
    window.location.reload()
  }

}

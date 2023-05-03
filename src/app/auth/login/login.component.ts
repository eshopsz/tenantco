import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  email: string = ''
  password: string = ''
  submitted: boolean = false

  constructor(
    private accountService: AccountService
  ) { }

  ngOnInit(): void {
  }

  login() {
    this.submitted = true
    var data = {
      "username" : this.email,
      "password": this.password
    }
    this.accountService.login(data).subscribe((data:any) => {
      localStorage.setItem('token', data.token),
      this.submitted = false,
      window.location.reload()
    }, (err:any) => console.log(err))
  }

}

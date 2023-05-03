import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {

  name: string = ''
  surname: string = ''
  email: string = ''
  password: string = ''
  c_password: string = ''
  phone: number = 0
  submitted: boolean = false
  agree: boolean = false

  constructor(
    private accountService: AccountService
  ) { }

  ngOnInit(): void {
  }

  register() {
    this.submitted = true
    var data = {
      "first_name": this.name,
      "last_name": this.surname,
      "email": this.email,
      "phone": this.phone,
      "password": this.password
    }

    var loginData = {
      "username": this.email,
      "password": this.password
    }

    this.accountService.register(data).subscribe(res =>
      this.accountService.login(loginData).subscribe((data:any) => {
        localStorage.setItem('token', data.token),
        window.location.reload(),
        this.submitted = false
      }), err => {
        console.log(err),
        this.submitted = false})
  }

}

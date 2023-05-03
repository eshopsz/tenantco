import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html'
})
export class SecurityComponent implements OnInit {

  old_password: string = ''
  new_password: string = ''
  c_password: string = ''
  submitted: boolean = false

  constructor(
    private accountService: AccountService
  ) { }

  ngOnInit(): void {
  }

  changePass() {
    this.submitted = true
    var data = {
      "old_password": this.old_password,
      "new_password": this.new_password
    }
    this.accountService.changePassword(data).subscribe(res => {this.submitted = false, this.clearForm()})
  }

  clearForm() {
    this.old_password = ''
    this.new_password = ''
    this.c_password = ''
  }
}

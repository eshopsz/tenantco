import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

  //Base Domain
  //BASE_DOMAIN = 'https://eshopsz-back.herokuapp.com'
  BASE_DOMAIN = 'http://127.0.0.1:8000'

  //Headers
  fileHeaders() {
    return new HttpHeaders({
      Authorization: 'Token '+this.getAuthToken()
    })
  }

  Headers() {
    const token = this.getAuthToken()
    if (token) {
      return  new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Token '+token
      })
    } else {
      return  new HttpHeaders({
        'Content-Type': 'application/json',
      })
    }
  }

  //Get Auth Token
  getAuthToken() {
    var token = localStorage.getItem('token')
    return token
  }

}

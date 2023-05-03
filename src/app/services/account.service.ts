import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SharedService } from './shared.service';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(
    private sharedService: SharedService,
    private httpClient: HttpClient
  ) { }

  BaseUrl = this.sharedService.BASE_DOMAIN+'/accounts/'
  Headers = this.sharedService.Headers()
  File_Headers = this.sharedService.fileHeaders()

  register(data:any) {
    const body = JSON.stringify(data)
    return this.httpClient.post(this.BaseUrl+'register/', body, {headers: this.Headers});
  }

  login(data:any) {
    const body = JSON.stringify(data)
    return this.httpClient.post(this.BaseUrl+'auth/', body, {headers: this.Headers});
  }

  getAccount() {
    return this.httpClient.get(this.BaseUrl, {headers: this.Headers});
  }

  editAccount(data:any) {
    const body = JSON.stringify(data)
    return this.httpClient.put(this.BaseUrl, body, {headers: this.sharedService.Headers()});
  }

  changePassword(data:any) {
    const body = JSON.stringify(data)
    return this.httpClient.post(this.BaseUrl, body, {headers: this.sharedService.Headers()});
  }

  getEstates() {
    return this.httpClient.get(this.BaseUrl+'estates/', {headers: this.Headers});
  }

  getPaidEstates() {
    return this.httpClient.get(this.BaseUrl+'paid/estates/', {headers: this.Headers});
  }

  editWishlist(id:any) {
    return this.httpClient.get(this.BaseUrl+'wishlist/'+id+'/', {headers: this.Headers});
  }

  accountImage(data:any) {
    const fd = new FormData()
    fd.set('image', data)
    return this.httpClient.post(this.BaseUrl+'image/update/', fd, {headers: this.sharedService.fileHeaders()});
  }

  getAddresses() {
    return this.httpClient.get(this.BaseUrl+'address/', {headers: this.Headers});
  }

}

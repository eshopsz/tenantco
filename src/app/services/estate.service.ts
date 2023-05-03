import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SharedService } from './shared.service';

@Injectable({
  providedIn: 'root'
})
export class EstateService {

  constructor(
    private sharedService: SharedService,
    private httpClient: HttpClient
  ) { }

  BaseUrl = this.sharedService.BASE_DOMAIN+'/catelog/'
  Headers = this.sharedService.Headers()
  File_Headers = this.sharedService.fileHeaders()

  postEstate(data:any) {
    const body = JSON.stringify(data)
    return this.httpClient.post(this.BaseUrl+'create/', body, {headers: this.Headers});
  }

  editEstate(id:any, data:any) {
    const body = JSON.stringify(data)
    return this.httpClient.put(this.BaseUrl+id+'/', body, {headers: this.Headers});
  }

  deleteEstate(id:any) {
    return this.httpClient.delete(this.BaseUrl+id+'/', {headers: this.Headers});
  }

  postImage(data:any, id:any) {
    const fd = new FormData()
    console.log(data)
    fd.set('image', data)
    return this.httpClient.put(this.BaseUrl+id+'/image/', fd, {headers: this.File_Headers});
  }

  deleteImage(id:any) {
    return this.httpClient.delete(this.BaseUrl+id+'/image/', {headers: this.Headers});
  }

  fetchCategories() {
    return this.httpClient.get(this.BaseUrl+'categories/', {headers: this.sharedService.Headers()});
  }

  fetchTypes() {
    return this.httpClient.get(this.BaseUrl+'types/', {headers: this.sharedService.Headers()});
  }

  fetchProvinces() {
    return this.httpClient.get(this.BaseUrl+'provinces/', {headers: this.sharedService.Headers()});
  }

  fetchExtras() {
    return this.httpClient.get(this.BaseUrl+'extras/', {headers: this.sharedService.Headers()});
  }

  fetchEstates() {
    return this.httpClient.get(this.BaseUrl, {headers: this.sharedService.Headers()});
  }

  fetchEstate(id:any) {
    return this.httpClient.get(this.BaseUrl+id+'/', {headers: this.sharedService.Headers()});
  }

}

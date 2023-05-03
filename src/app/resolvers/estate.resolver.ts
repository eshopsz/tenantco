import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { EstateService } from '../services/estate.service';

@Injectable({
  providedIn: 'root'
})
export class EstateResolver implements Resolve<boolean> {

  constructor(
    private estateService: EstateService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    var id:any = route.paramMap.get('id')
    return this.estateService.fetchEstate(id)
  }

}

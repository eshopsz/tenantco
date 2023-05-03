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
export class ExtrasResolver implements Resolve<boolean> {

  constructor(
    private estateService: EstateService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.estateService.fetchExtras()
  }

}

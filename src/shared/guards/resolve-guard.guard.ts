import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpService } from '../services/http.service';

@Injectable({
  providedIn: 'root'
})
export class ResolveGuardGuard implements Resolve<Observable<any>> {
  constructor(private httpService: HttpService) {}

  resolve(): Observable<any> {
    return this.httpService.getYahoo();
  }
}
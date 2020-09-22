import { Injectable } from '@angular/core';
import { CanActivate, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SampleService } from '../services/sample.service';

@Injectable({
  providedIn: 'root'
})
export class CanActivateInsuranceGuard implements CanActivate {
  constructor(private sampleService: SampleService) { }
  canActivate()
    :
    Observable<boolean | UrlTree>  | boolean  {

    return this.checkIfAccessProvided();

  }

  checkIfAccessProvided() {
    if (this.sampleService.sampleNumbers === 0) {
      return true;

    }
    return false;
  }

}

import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { InsuranceComponent } from 'src/app/Insurance/insurance/insurance.component';

@Injectable({
  providedIn: 'root'
})
export class CanDeactivateInsuranceGuard implements CanDeactivate<InsuranceComponent> {
  canDeactivate(component: InsuranceComponent): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let can = component.isAllowedToNavigate;
    console.log('DeactivateGuard#canDeactivate called, can: ', can);
    if (!can) {
      alert('Deactivation blocked');
      return false;
    }

    return true;
  }
  
}

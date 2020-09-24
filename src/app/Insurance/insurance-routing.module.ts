import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarInsuranceComponent } from './car-insurance/car-insurance.component';
import { ClaimInsuranceComponent } from './claim-insurance/claim-insurance.component';
import { InsuranceComponent } from './insurance/insurance.component';
import { CanDeactivateInsuranceGuard } from 'src/shared/guards/can-deactivate-insurance.guard';
import { ResolveGuardGuard } from 'src/shared/guards/resolve-guard.guard';


export const routes: Routes = [
    { path: '', component: InsuranceComponent, 
    canDeactivate: [CanDeactivateInsuranceGuard],
 resolve: [ResolveGuardGuard]},
    { path: 'car-insurance', component: CarInsuranceComponent },
    { path: 'claim-insurance', component: ClaimInsuranceComponent }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class InsuranceRoutingModule { }

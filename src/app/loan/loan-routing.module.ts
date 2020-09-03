import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApplyLoanComponent } from './apply-loan/apply-loan.component';
import { LoanRepaymentComponent } from './loan-repayment/loan-repayment.component';
import { ProcessLoanComponent } from './process-loan/process-loan.component';


export const routes: Routes = [
  {path:'',component: ApplyLoanComponent},
  {path: 'loan-repayment', component: LoanRepaymentComponent},
  {path: 'process-loan', component: ProcessLoanComponent}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoanRoutingModule { }

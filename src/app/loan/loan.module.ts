import { NgModule } from '@angular/core';
import { ProcessLoanComponent } from './process-loan/process-loan.component';
import { LoanRepaymentComponent } from './loan-repayment/loan-repayment.component';
import { ApplyLoanComponent } from './apply-loan/apply-loan.component';
import { LoanRoutingModule } from './loan-routing.module';




@NgModule({
  declarations: [
 ProcessLoanComponent,
 LoanRepaymentComponent,
 ApplyLoanComponent
  ],
  imports: [
    LoanRoutingModule
  ],
  providers: []
})
export class LoanModule { }

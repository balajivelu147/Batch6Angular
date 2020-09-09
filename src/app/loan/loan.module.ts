import { NgModule } from '@angular/core';
import { ProcessLoanComponent } from './process-loan/process-loan.component';
import { LoanRepaymentComponent } from './loan-repayment/loan-repayment.component';
import { ApplyLoanComponent } from './apply-loan/apply-loan.component';
import { LoanRoutingModule } from './loan-routing.module';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
 ProcessLoanComponent,
 LoanRepaymentComponent,
 ApplyLoanComponent
  ],
  imports: [
    LoanRoutingModule,
    HttpClientModule
  ],
  providers: []
})
export class LoanModule { }

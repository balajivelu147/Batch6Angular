import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input'
import { MatAutocompleteModule } from '@angular/material/autocomplete'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BalajidemoComponent } from './balajidemo/balajidemo.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { ReactiveFormBuilderComponent } from './reactive-form-builder/reactive-form-builder.component';
import { LeftNavComponent } from './left-nav/left-nav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { SampleService } from 'src/shared/services/sample.service';
import { OverlayComponent } from './overlay/overlay.component';
import { ApplyLoanComponent } from './loan/apply-loan/apply-loan.component';
import { ProcessLoanComponent } from './loan/process-loan/process-loan.component';
import { LoanRepaymentComponent } from './loan/loan-repayment/loan-repayment.component';
import { CarInsuranceComponent } from './Insurance/car-insurance/car-insurance.component';
import { ClaimInsuranceComponent } from './Insurance/claim-insurance/claim-insurance.component';
import { InsuranceComponent } from './Insurance/insurance/insurance.component';
import { LoanModule } from './loan/loan.module';
import { InsuranceModule } from './Insurance/insurance.module';
import { FirstLetterPipe } from 'src/shared/pipes/first-letter.pipe';
import { HighlightDirective } from 'src/shared/directives/highlight.directive';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HeadersInterceptor } from 'src/shared/interceptor/headers.interceptor';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    AutocompleteComponent,
    BalajidemoComponent,
    ReactiveFormsComponent,
    ReactiveFormBuilderComponent,
    LeftNavComponent,
    OverlayComponent,
    FirstLetterPipe,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatAutocompleteModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    LoanModule,
    InsuranceModule

  ],
  providers: [{
    provide: HTTP_INTERCEPTORS, useClass: HeadersInterceptor, multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

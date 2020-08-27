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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    AutocompleteComponent,
    BalajidemoComponent,
    ReactiveFormsComponent,
    ReactiveFormBuilderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    FormsModule ,
    MatInputModule, 
    MatAutocompleteModule,
    BrowserAnimationsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

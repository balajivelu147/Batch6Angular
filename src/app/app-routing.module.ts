import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { ReactiveFormBuilderComponent } from './reactive-form-builder/reactive-form-builder.component';
import { LoginComponent } from './login/login.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { BalajidemoComponent } from './balajidemo/balajidemo.component';


export const routes: Routes = [
  { 
    path:'signup', component: SignupComponent
  },
  { 
    path:'reactive-forms', component: ReactiveFormsComponent
  },  { 
    path:'reactive-forms-builder', component: ReactiveFormBuilderComponent
  },  { 
    path:'login', component: LoginComponent
  },  { 
    path:'autocomplete', component: AutocompleteComponent
  },
  { 
    path:'balajidemo', component: BalajidemoComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

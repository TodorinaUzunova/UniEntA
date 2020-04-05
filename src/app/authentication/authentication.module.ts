import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';
import { PasswordsMatchDirective } from './validators/directives/passwords-match.directive';
import { AuthService } from './auth.service';



@NgModule({
  declarations: [RegisterComponent, LoginComponent, PasswordsMatchDirective],
  imports: [
    CommonModule,
    FormsModule,
    AuthRoutingModule
  ],
  providers:[AuthService],
  exports:[RegisterComponent, LoginComponent, PasswordsMatchDirective]
})
export class AuthenticationModule { }

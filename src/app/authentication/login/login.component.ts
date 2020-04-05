import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { IUser } from '../IUser';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss', '../../error-style.scss']
})
export class LoginComponent implements OnInit {


   constructor(private authService: AuthService, private router: Router) { }

  // loginHandler({ username, password }: { username: string, password: string }) {
  //   this.authService.login(username, password).subscribe((userInfo: IUser) => {
  //     localStorage.setItem("token", `${userInfo._kmd.authtoken}`);
  //     localStorage.setItem("username", `${userInfo.username}`);
  //     this.router.navigate(['/']);
  //   }, console.error)

  // }


  ngOnInit() {
  }
  handleLogin({ username, password}: { username: string,  password: string  }){
    this.authService.login({ username, password});
  }
  // public loginForm:NgForm;
  // public loginFail : boolean;
  // public username : string; 
  // constructor(private authService:AuthService, private router:Router) { }

  // ngOnInit() {
  // }

  // login () : void {
  //   this.authService.login(this.loginForm.value)
  //     .subscribe(
  //       (data:IUser)=> {
  //         this.successfulLogin(data);
  //       },
  //       err => {
  //         this.loginFail = true;
  //       }, console.error
  //     )
  // }

  // get diagnostics() : string {
  //   return JSON.stringify(this.loginForm.value);
  // }

  // successfulLogin(data:IUser) : void {
  //   this.authService.authtoken = data._kmd.authtoken;
  //   localStorage.setItem('authtoken', data['_kmd']['authtoken']);
  //   localStorage.setItem('username', data.username);
  //   this.loginFail = false;
  //   this.router.navigate(['/home']);
  // }
}

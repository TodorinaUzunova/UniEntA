import { Component, OnInit, ViewChild } from '@angular/core';
import { IUser } from '../IUser';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss', '../../error-style.scss']
})
export class RegisterComponent implements OnInit {

   constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  // registerHandler({ username, passwords: { password } }: { username: string, passwords: { password: string } }) {
  //   this.authService.register(username, password).subscribe((userInfo: IUser) => {
  //     localStorage.setItem("token", `${userInfo._kmd.authtoken}`);
  //     localStorage.setItem("username", `${userInfo.username}`);
  //     this.router.navigate(['/']);
  //   }, console.error)

  // }
  
  handleRegister({ username, passwords: { password } }: { username: string, passwords: { password: string} }){
    this.authService.register({ username, password});
  }
//  @ViewChild('registerForm', {static:false}) registerForm: NgForm;

//  public registeredUser : string;
//   public registerSuccess : boolean;
//   public registerFail : boolean;

//   constructor(private authService: AuthService, private router: Router) { }

//   ngOnInit() {
//   }

//   register() : void {
//     this.authService.register(this.registerForm.value )
//       .subscribe(
//        (data:IUser) => {
//           this.successfulRegister(data);
//         },
//         err => {
//           this.registerFail = true;
//         }
//       )
//   }

//   get diagnostics() : string {
//     return JSON.stringify(this.registerForm.value);
//   }

//   successfulRegister(data:IUser) : void {
//     this.registerSuccess = true;
//     this.registeredUser = data.username;
//   }
}

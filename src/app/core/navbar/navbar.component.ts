import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/authentication/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {


  username: string = null;

  ngOnInit() {

  }

  constructor(public authService: AuthService, private router: Router) {

  }
  get isLogged() {
    return this.authService.isLogged;
  }

  logout() {
    //if(localStorage.getItem('authtoken')){
    this.authService.logout()
    //   //.subscribe(data => {
    //     localStorage.clear();
    //     this.router.navigate(['']);
    //   });
    // } else {
    //   this.router.navigate(['/login']);
    // }
     }
  }

  


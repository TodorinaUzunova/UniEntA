import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


  const appKey = 'kid_ryGZBUj8I' // APP KEY HERE;
  const appSecret = 'c6ebdf41fde6492186403bdedea3c55c' // APP SECRET HERE;
  const registerUrl = `https://baas.kinvey.com/user/${appKey}`;
  const loginUrl = `https://baas.kinvey.com/user/${appKey}/login`;
  const logoutUrl = `https://baas.kinvey.com/user/${appKey}/_logout`

@Injectable({
  providedIn: 'root'
})
export class AuthService {
   // currentUser: {
  //   username;
  //   password;
  // } = null;
  // get isLogged() {
  //   return !!this.currentUser;
  // }
  // ;
  // constructor(private http: HttpClient) {
  //   const currentUser = localStorage.getItem('current-user');
  //   this.currentUser = currentUser ? JSON.parse(currentUser) : null;
  // }
  private isLoggedIn: boolean = localStorage.length === 0 ? false : true;

 constructor(private http:HttpClient, private router:Router){}
  
  get getUserId() {
    return localStorage.getItem('id');
  }

  get getUsername(){
    return localStorage.getItem('username');
  }
  
  get isLogged (){
    return this.isLoggedIn;
  }

  register({ username, password }){


    let url = `https://baas.kinvey.com/user/${appKey}`; 
    let data = { username, password};
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `Basic ${btoa(`${appKey}:${appSecret}`)}`
      })
    };

    return this.http.post(url, data ,httpOptions).subscribe(userInfo => {
      // localStorage.setItem('authtoken', userInfo["_kmd"]["authtoken"]);
      // localStorage.setItem('username', userInfo["username"]);
      // localStorage.setItem('id', userInfo["_id"]);

      this.isLoggedIn = true;

      this.router.navigate(['/login']);
    });
  }

  login({ username, password }){


    let url = `https://baas.kinvey.com/user/${appKey}/login`; 
    let data = { username, password };
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `Basic ${btoa(`${appKey}:${appSecret}`)}`
      })
    };

    return this.http.post(url, data, httpOptions).subscribe(userInfo => {
      localStorage.setItem('authtoken', userInfo["_kmd"]["authtoken"]);
      localStorage.setItem('username', userInfo["username"]);
      localStorage.setItem('id', userInfo["_id"]);

      this.isLoggedIn = true;

      this.router.navigate(['/event/list']);
    });
  }

  logout(){
    //let url = `https://baas.kinvey.com/user/${appKey}/_logout`; 
    // this.eventService.allEvents = [];
    // this.eventService.profileEvents = [];
    this.isLoggedIn = false;
    localStorage.clear();
    
    this.router.navigate(['']);
  }
}



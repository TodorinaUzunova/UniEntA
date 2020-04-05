import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  constructor() { }


  isVisible:boolean;

  showLoader(){
    this.isVisible=true;
  }

  
  hideLoader(){
    this.isVisible=false;
  }
}

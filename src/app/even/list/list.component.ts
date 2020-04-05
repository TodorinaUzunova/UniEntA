import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { IEvent } from '../event';
import { AuthService } from 'src/app/authentication/auth.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  isLoading=true;

  get isLogged(){
    return this.authService.isLogged;
    }
  get events(){return this.eventService.allEvents};

  // @Output() selectCause:EventEmitter<ICause>=new EventEmitter();
 
   constructor(private eventService:EventService, private authService:AuthService) { 
         
   }
 
   ngOnInit() {
     this.eventService.getAllEvents();
     this.isLoading=false;
   }
 
  //  selectEventHandler(event:IEvent){
  //   // this.selectCause.emit(cause);
  //    this.eventService.selectEvent(event);
 
  //  }

}

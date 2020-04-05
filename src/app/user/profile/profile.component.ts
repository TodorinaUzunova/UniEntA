import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/authentication/auth.service';
import { EventService } from 'src/app/even/event.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from 'src/app/even/event';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {


  myEvents:IEvent[];
  constructor(private authService:AuthService, private eventService:EventService, private activatedRoute:ActivatedRoute) { 
  
  }

  ngOnInit() {
    // if(this.activatedRoute.snapshot.params.id){
    //   this.eventService.getUserEvents(this.activatedRoute.snapshot.params.id);
    this.myEvents=this.eventService.allEvents.filter(e=>e.organizer===this.authService.getUsername);
  }
  

   get username():string{
       return this.authService.getUsername;
   }

  

}


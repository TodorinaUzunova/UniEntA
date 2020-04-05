import { Injectable } from '@angular/core';
import { IEvent } from './event';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import{tap} from 'rxjs/operators';
import { Router } from '@angular/router';
import { LoadingService } from '../loading.service';


// const appKey = 'kid_rJ_PXY02S' // APP KEY HERE;
// const appSecret = 'eb18e36a686e4488bbd362263d05cc6b' // APP SECRET HERE;
const appKey = 'kid_ryGZBUj8I' // APP KEY HERE;
const appSecret = 'c6ebdf41fde6492186403bdedea3c55c' // APP SECRET HERE;

@Injectable({
  providedIn: 'root'
})
export class EventService {



  readonly selectedEvent:IEvent;
  
  allEvents:IEvent[];
  profileEvents:IEvent[];
 

  constructor(private http:HttpClient, private router:Router, private loadingService:LoadingService) { 
      
  }

      createEvent({ name, dateTime, description, imageURL}:IEvent) {
      let url = `https://baas.kinvey.com/appdata/${appKey}/events`;
      let data = { name, dateTime, description, imageURL, peopleInterestedIn:0, organizer:localStorage.getItem('username')};
      let httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': `Kinvey ${localStorage.getItem('authtoken')}`
        })
      };
  
      return this.http.post(url, data, httpOptions);
    }
    getEvent(_id: string) {
      let url = `https://baas.kinvey.com/appdata/${appKey}/events/${_id}`;
      let httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': `Kinvey ${localStorage.getItem('authtoken')}`
        })
      };
  
      return this.http.get<IEvent>(url, httpOptions);
    }
  
    getAllEvents() {
   this.loadingService.showLoader();
      let url = `https://baas.kinvey.com/appdata/${appKey}/events/`;
      let httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': `Kinvey ${localStorage.getItem('authtoken')}`
        })
      };
  
      return this.http.get<IEvent[]>(url, httpOptions).subscribe(events => {
        this.allEvents=events;
           this.loadingService.hideLoader();
      });
    }
     
    updateEvent(id: string, { name, dateTime, description, imageURL, peopleInterestedIn, organizer }) {
      this.loadingService.showLoader();
      let url = `https://baas.kinvey.com/appdata/${appKey}/events/${id}`;
      let data = { name, dateTime, description, imageURL , peopleInterestedIn, organizer};
      let httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': `Kinvey ${localStorage.getItem('authtoken')}`
        })
      };
  
      return this.http.put<IEvent>(url, data, httpOptions).subscribe(updatedEvent => {
        this.loadingService.hideLoader();
        console.log(updatedEvent);
        this.router.navigate([`/event/details/${updatedEvent._id}`])
      });
    }
    getUserEvents(id: string) {
     this.loadingService.showLoader();
  
      let url = `https://baas.kinvey.com/appdata/${appKey}/events/?query={"_acl.creator":"${id}"}`;
      let httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': `Kinvey ${localStorage.getItem('authtoken')}`
        })
      };
      return this.http.get<IEvent[]>(url, httpOptions).subscribe(userEvents => {
        console.log(userEvents);
        this.profileEvents = userEvents;
        this.loadingService.hideLoader();
      });
    }

    deleteEvent(_id: string) {
       this.loadingService.showLoader();
      let url = `https://baas.kinvey.com/appdata/${appKey}/events/${_id}`;
      let httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': `Kinvey ${localStorage.getItem('authtoken')}`
        })
      };
  
      return this.http.delete<IEvent>(url, httpOptions);
    }
  // like(event:any){
  //      this.http.put(`http://localhost:3000/events/${this.selectedEvent._id}`, event)
  //    }
    

selectEvent(event:IEvent){
  (this as any).selectedEvent=event;
}
}

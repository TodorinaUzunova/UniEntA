import { Component, OnInit } from '@angular/core';
import { IEvent } from '../event';
import { Router, ActivatedRoute } from '@angular/router';
import { EventService } from '../event.service';
import { LoadingService } from 'src/app/loading.service';
//import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  event:IEvent;
  get selectedEvent(){return this.eventService.selectedEvent};
  isOrganizer(){
    return this.event.organizer===localStorage.getItem('username');
      //return this.event._acl["creator"] === localStorage.getItem('id');
    }

  constructor(/*private toastr:ToastrService,*/ private eventService:EventService, private router:Router, private activatedRoute:ActivatedRoute, private loadingService:LoadingService) { }

  ngOnInit() {
    if(this.activatedRoute.snapshot.params.id){
         this.eventService.getEvent(this.activatedRoute.snapshot.params.id).subscribe((eventInfo)=>{
           this.event=eventInfo;
          //this.toastr.success("Event found");
         }, /*(error)=>this.toastr.error('Something went wrong')*/);
    }
  }
  deleteEvent() {
    const id = this.activatedRoute.snapshot.params['id'];
    this.eventService.deleteEvent(id).subscribe(() => {
      this.router.navigate(['/event/list']);
      //this.toastr.success('Event deleted');  
    }, /* (error )=>this.toastr.error('Something went wrong')*/)
  }
  joinEvent() {
    const id = this.activatedRoute.snapshot.params['id'];
   let data= this.event;
   data.peopleInterestedIn=data.peopleInterestedIn+1;
    this.eventService.updateEvent(id, data);
  
  }

}

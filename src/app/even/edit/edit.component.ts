import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EventService } from '../event.service';
import { Router, ActivatedRoute } from '@angular/router';
import { IEvent } from '../event';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss', '../../error-style.scss']
})
export class EditComponent implements OnInit {


 
  datePattern="^[0-9]{2}[\/]{1}[0-9]{2}[\/]{1}[0-9]{4}$"; //^(0[1-9]|[12][0-9]|3[01])[- \/.](0[1-9]|1[012])[- \/.](19|20)\d\d$";
  imageURLPattern="https?:\/\/[^ ]*\.(?:gif|png|jpg|jpeg)";  //^(https://|http://|www\.)\S*;
  form:FormGroup;
  event:IEvent;
  get isOrganizer(){
    return this.event.organizer===localStorage.getItem('username');
  }
  
  constructor(private eventService:EventService, private router:Router, private activatedRoute:ActivatedRoute, private fb:FormBuilder) { }

  ngOnInit() {
    if(this.activatedRoute.snapshot.params.id){
      //this.loaderService.showLoader;
      this.eventService.getEvent(this.activatedRoute.snapshot.params.id).subscribe((editInfo)=>{
          this.event=editInfo;

          if (!this.isOrganizer) {
            this.router.navigate(["/event/list"])
          }
          this.form=this.fb.group({
            name:[editInfo.name, [Validators.required]],
            dateTime:[editInfo.dateTime, [Validators.required, Validators.pattern(this.datePattern)]],
            description: [editInfo.description , [Validators.required, Validators.minLength(50)]],
            imageURL: [editInfo.imageURL , [Validators.required, Validators.pattern(this.imageURLPattern)]],
            peopleInterestedIn:[editInfo.peopleInterestedIn],
            organizer:[editInfo.organizer]
          });
          //this.loaderService.hideLoader();
      });
    }
  }


  editEventHandler({name, dateTime, description, imageURL, peopleInterestedIn, organizer}:{name:string, dateTime:string, description:string, imageURL:string, peopleInterestedIn:number, organizer:string}){
        this.eventService.updateEvent(this.activatedRoute.snapshot.params.id, {name, dateTime, description, imageURL, peopleInterestedIn, organizer})
        
  }
}

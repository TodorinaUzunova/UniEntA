import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/authentication/auth.service';
import { catchError } from 'rxjs/operators';
//import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss', '../../error-style.scss']
})
export class CreateComponent implements OnInit {

  form:FormGroup
  datePattern="^[0-9]{2}[\/]{1}[0-9]{2}[\/]{1}[0-9]{4}$"; //^(0[1-9]|[12][0-9]|3[01])[- \/.](0[1-9]|1[012])[- \/.](19|20)\d\d$";
  imageURLPattern="https?:\/\/[^ ]*\.(?:gif|png|jpg|jpeg)";  //^(https://|http://|www\.)\S*;

  organizer = this.authService.getUsername;


  constructor( private eventService:EventService, private fb:FormBuilder, private router:Router,  private authService:AuthService) { 
    this.form=this.fb.group({
      name:['', Validators.required],
      dateTime:['', [Validators.required, Validators.pattern(this.datePattern)]],
      description:['', [Validators.required, Validators.minLength(50)]],
      imageURL:['', [Validators.required, Validators.pattern(this.imageURLPattern)]]
    });
  }


  ngOnInit() {
  }
  

  createEventHandler(){
    this.eventService.createEvent(this.form.value).subscribe(()=>{
      this.router.navigate(['/event/list']);
       //this.toastr.success('Event successfully created');
    });
    //console.log(this.form.value)
  
  }
}


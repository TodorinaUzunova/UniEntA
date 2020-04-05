import { Directive } from '@angular/core';
import { AbstractControl, ValidationErrors, Validator, NG_VALIDATORS } from '@angular/forms';
import { passwordMatch } from '../passwordMatch';

@Directive({
  selector: '[appPasswordsMatch][ngModelGroup]',
  providers:[
    {
      provide:NG_VALIDATORS,
      useExisting:PasswordsMatchDirective,
      multi:true
      
    }
  ]
})
export class PasswordsMatchDirective implements Validator {

  validate(control:AbstractControl): ValidationErrors {
   return passwordMatch(control);
  }
 

  constructor() { }
}

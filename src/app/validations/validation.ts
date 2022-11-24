import { AbstractControl } from "@angular/forms";

export function validatePhone(control : AbstractControl){
    if(!(control.value.toString().length == 10))
      return { 'validNum' : true };
    return null;
  }

export function validateName(control : AbstractControl) {
    if(!control.value.startsWith('a'))
      return { 'name' : true };
    return null;
  }
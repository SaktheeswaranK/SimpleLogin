import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { validatePhone } from "../validations/validation";

@Component({
  selector: 'app-buisness-page',
  templateUrl: './buisness-page.component.html',
  styleUrls: ['./buisness-page.component.scss']
})
export class BuisnessPageComponent implements OnInit {
  // [x: string]: any | string;

  buisnessForm !: FormGroup;
  validatePhone = validatePhone;
  min : "2000-01-01";

  save(){
    alert('saved successfully')
  }

  constructor(private fb : FormBuilder) { }

  get f(){return this.buisnessForm.controls;}

  ngOnInit(): void {

    this.buisnessForm = this.fb.group({
      name : ['',[Validators.required,Validators.pattern('^[a-zA-Z]+([._]?[a-z A-Z0-9]+)*$')]],
      email : ['',[Validators.required,Validators.email]],
      age : ['',Validators.required],
      buisness : ['',Validators.required],
      dob : ['',Validators.required],
      phone: ['',[Validators.required,this.validatePhone]],
      unit : ['',Validators.required],
      city : ['',Validators.required],
    })
  }

}

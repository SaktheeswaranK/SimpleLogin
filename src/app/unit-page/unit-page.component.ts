import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-unit-page',
  templateUrl: './unit-page.component.html',
  styleUrls: ['./unit-page.component.scss']
})
export class UnitPageComponent implements OnInit {

  unitForm !: FormGroup;

  sub(){
    alert('saved successfully');
  }

  get f(){ return this.unitForm.controls; }

  constructor( private fb : FormBuilder) { }

  ngOnInit(): void {
    this.unitForm = this.fb.group({
      name : ['', [Validators.required,Validators.pattern('^[a-zA-Z]+([._]?[a-z A-Z0-9]+)*$')]],
      active : ['',Validators.required],
      display : ['',Validators.required]
    })
  }

}

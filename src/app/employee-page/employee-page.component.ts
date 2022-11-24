import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-employee-page',
  templateUrl: './employee-page.component.html',
  styleUrls: ['./employee-page.component.scss']
})
export class EmployeePageComponent implements OnInit {

  empForm : FormGroup;

  get f() { return this.empForm.controls; }

  sub(){
    alert('saved successfully')
  }

  constructor(private fb : FormBuilder) {
    this.empForm = this.fb.group({
      name : ['',[Validators.required, Validators.pattern('^[a-zA-Z]+([._]?[a-z A-Z0-9]+)*$')]],
      buisness : ['',[Validators.required]],
      disp : ['',[Validators.required]]
    })
   }

  ngOnInit(): void {
    
  }

}

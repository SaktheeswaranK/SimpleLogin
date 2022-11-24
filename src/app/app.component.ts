import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Icom';
  
  loginForm !: FormGroup;
  login : boolean = false;
  auth = true;

  constructor(private fb : FormBuilder, private router : Router){  }


  ngOnInit(){
    console.log('step 1');
    this.loginForm = this.fb.group({
      userName : ['',Validators.required],
      password : ['', Validators.required]
    })
  }

  get f() { return this.loginForm.controls }

  sub(){
    if(this.loginForm.get('userName')?.value == "admin"
        && this.loginForm.get('password')?.value == "admin"){
          this.login = true;
          this.auth = false;
          this.router.navigate(['/landingPage']);
        }
        else
          alert('wrong input');
  }
}

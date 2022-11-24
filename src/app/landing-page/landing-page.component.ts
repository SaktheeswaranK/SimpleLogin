import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  

  bui(){
    
    this.router.navigate(['/buisnessPage']);
  }
  uni(){
    
    this.router.navigate(['/unitPage']);
  }
  emp(){
    
    this.router.navigate(['/employeePage']);
  }

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

}

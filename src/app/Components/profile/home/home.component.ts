import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  Name:any= localStorage.getItem('Name');
  email:any= localStorage.getItem('email');
  all_job_applied:any= localStorage.getItem('all_job_applied');
  myjob:any;
  constructor() { 

  }

  ngOnInit(): void {
this.myjob = JSON.parse(this.all_job_applied);
  }
  editProfile(){
    
  }
}

import { Component, OnInit } from '@angular/core';
import  {AuthService} from '../../Services/auth.service'
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { CictserviceService } from 'src/app/Services/cictservice.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  constructor(private myservice : CictserviceService,private _Router:Router) { }
  LoginForm = (email:any) =>{
    Swal.fire({
      title: 'Are you Sure To Login To Profile',
      text: 'You will not be able to recover this file!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, Login it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        this.myservice.loginemployee(email).subscribe((res:any)=>{
           localStorage.setItem("Name",res.data[0].Name);
           localStorage.setItem("email",res.data[0].email);
           localStorage.setItem("all_job_applied",JSON.stringify(res.data));
          // localStorage.setItem("title",res.data.employer_jobs.title);
          // localStorage.setItem("content",res.data.employer_jobs.content);
          // localStorage.setItem("status",res.data.employer_jobs.status);
           console.log(res.data);
        },(err)=>{console.log(err)})
        Swal.fire(
          'Logined!',
          'Your imaginary file has been Applied.',
          'success'
        )
        this._Router.navigate(['/profile' ])
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    })
   
  }
  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import  {AuthService} from '../../Services/auth.service'
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CictserviceService } from 'src/app/Services/cictservice.service';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  error:string ='';
  availablejobs:any;
  constructor(private myservice:CictserviceService,private _Router:Router) { }


    submitRegisterForm(
      name:any,
      email:any,
      city:any,
      bio:any,
      skills:any,
      Exper_level:any,
      Job_id:any,
      ){
      let data = {
        "email":email,
        "city":city,
        "Name":name,
        "Bio":bio,
        "Skills":skills,
        "Exper_level":Exper_level,
        "Job_id":Job_id,
      }
      Swal.fire({
        title: 'Are you sure Sure Of Add Information and Apply The Job That Selected It?',
        text: 'You will not be able to recover this file!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, Apply it!',
        cancelButtonText: 'No, keep it'
      }).then((result) => {
        if (result.value) {
          this.myservice.addinfopersonnal(data).subscribe(
            (res)=>{
              console.log(res)
            },
            (err)=>{
              console.log(err);
            },
          )
          Swal.fire(
            'Applied!',
            'Your imaginary file has been Applied.',
            'success'
          )
          this._Router.navigate(['/sign-in' ])
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
    this.myservice.getAvailableJobs().subscribe(
      (res:any)=>{
        this.availablejobs = res.data;
        console.log(res);
      },
      (err)=>{
        console.log(err);
      }
    )
  }


}

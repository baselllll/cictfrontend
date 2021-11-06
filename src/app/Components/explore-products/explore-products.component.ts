import { Component, OnInit } from '@angular/core';
import { CictserviceService } from 'src/app/Services/cictservice.service';
@Component({
  selector: 'app-explore-products',
  templateUrl: './explore-products.component.html',
  styleUrls: ['./explore-products.component.scss']
})
export class ExploreProductsComponent implements OnInit {
  availablejobs:any;
  constructor(private myservice:CictserviceService) { }

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
